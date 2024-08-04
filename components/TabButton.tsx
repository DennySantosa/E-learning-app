import { StyleSheet, Text, View } from 'react-native'
import React , { useState } from 'react'


export type TabButtonType = {
    title: string;
}
type TabButtonsProps = {
    buttons:TabButtonType[],
    selectedTab:number,
    setSelectedTab:(index:number) => void 
}
export default function TabButton({buttons,selectedTab,setSelectedTab}:TabButtonsProps) {
    const [dimensions, setDimensions] = useState({height:20,width:100})

    const buttonWidth = dimensions.width / buttons.length;

  return (
    <View>
      <Text>TabButton</Text>
    </View>
  )
}

const styles = StyleSheet.create({})