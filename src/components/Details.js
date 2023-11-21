import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/color.constant'

const Details = ({
    icon,
    title
}) => {
  return (
    <View style={styles.container}>
      {icon}  
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    text:{
        fontSize: 14,
        color: COLORS.light100,

    }
})