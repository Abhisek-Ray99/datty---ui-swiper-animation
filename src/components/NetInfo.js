import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { COLORS } from '../constants/color.constant';

const NetInfo = ({
    status
}) => {

  return (
    <>
        {
            status === "online" &&
            (
                <View style={styles.onlineView}>
                    <LottieView source={require('../assets/online.json')} autoPlay loop style={[{padding: 15}]} resizeMode='cover' size={250} /> 
                </View>
            )
        }
    </>
  )
}

export default NetInfo

const styles = StyleSheet.create({
    onlineView:{
        backgroundColor: COLORS.primary700,
        borderRadius: 50
    },
})