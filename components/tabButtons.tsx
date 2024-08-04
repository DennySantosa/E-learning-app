import { LayoutChangeEvent, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export type TabButtonType = {
    title: string;
}

type TabButtonsProps = {
    buttons: TabButtonType[];
    selectedTab: number;
    setSelectedTab: (index: number) => void;
}

const TabButtons = ({ buttons, selectedTab, setSelectedTab }: TabButtonsProps) => {
    const [dimensions, setDimensions] = useState({ height: 20, width: 100 });
    const buttonWidth = dimensions.width / buttons.length;
    const tabPositionX = useSharedValue(0);

    const onTabbarLayout = (e: LayoutChangeEvent) => {
        setDimensions({
            height: e.nativeEvent.layout.height,
            width: e.nativeEvent.layout.width,
        });
    }

    const handlePress = (index: number) => {
        setSelectedTab(index);
    }

    const onTabPress = (index: number) => {
        tabPositionX.value = withTiming(buttonWidth * index, {}, () => {
            runOnJS(handlePress)(index);
        });
    }

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: tabPositionX.value }]
    }));

    return (
        <View accessibilityRole="tablist" style={{ backgroundColor: '#5477fb', borderRadius: 20, justifyContent: 'center', marginHorizontal: 5, marginTop: 15 }}>
            <Animated.View style={[animatedStyle, { position: 'absolute', backgroundColor: '#fff', borderRadius: 15, marginHorizontal: 5, height: dimensions.height - 10, width: buttonWidth - 10 }]}/>
            <View onLayout={onTabbarLayout} style={{ flexDirection: 'row' }}>
                {buttons.map((button, index) => {
                    const color = selectedTab === index ? '#5477fb' : '#fff';
                    return (
                        <Pressable
                            key={index}
                            style={{ flex: 1, paddingVertical: 20 }}
                            onPress={() => { onTabPress(index) }}
                            accessibilityRole="tab"
                            accessibilityState={{ selected: selectedTab === index ? true : false }}
                        >
                            <Text style={{ color: color, alignSelf: 'center', fontWeight: '600' }}>{button.title}</Text>
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
}

export default TabButtons;
