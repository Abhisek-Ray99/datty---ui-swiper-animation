import { StyleSheet, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const Lottie = ({
    source,
    width,
    height,
    style
}) => {
  return (
    <View style={[{
        position: 'absolute',
        width: width,
        height: height,
        zIndex: 1,
        bottom: 1,
      }, style]} > 
        <LottieView source={source}  autoPlay style={[{padding: 2}]} resizeMode='cover' /> 
      </View>
  )
}

export default Lottie

const styles = StyleSheet.create({})