import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/color.constant'

const CardIcon = ({
    icon,
    padding,
    ...others
}) => {
  return (
    <View style={[styles.container, {padding: padding, ...others}, ]}>
      {icon}
    </View>
  )
}

export default CardIcon

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary600,
        borderRadius: 50
    }
})