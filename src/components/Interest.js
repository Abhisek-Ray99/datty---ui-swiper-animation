import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/color.constant'

const Interest = ({
    name
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

export default Interest

const styles = StyleSheet.create({
    container:{
        paddingVertical: 4,
        paddingHorizontal: 16,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: COLORS.secondary100
    },
    text:{
        color: COLORS.secondary100,
        fontWeight: '700'
    }
})