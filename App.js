import { StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native'
import React, {useState} from 'react'
import Swiper from 'react-native-deck-swiper'
import ImmersiveMode from 'react-native-immersive-mode';
import { BlurView } from "@react-native-community/blur";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { matchimg, crossimg, rightimg } from './src/constants/image.constant';
import {data} from './src/data/index'
import { windowHeight, windowWidth } from './src/utils/dimension'
import { CardIcon, Details, Interest, Lottie, NetInfo } from './src/components';
import { COLORS } from './src/constants/color.constant';

const App = () => {
  ImmersiveMode.setBarTranslucent(true);
  StatusBar.setBarStyle("light-content");
  if (Platform.OS === "android") {
    StatusBar.setBackgroundColor(COLORS.primary100);
    StatusBar.setTranslucent(true);
  }

  const [right, setRight] = useState(false)
  const [left, setLeft] = useState(false)
  const [match, setMatch] = useState(false)

  return (
    <View style={{
      position: 'absolute',
      backgroundColor: COLORS.primary200,
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    }}>
      {
        match && (<Lottie source={matchimg} width={windowWidth} height={windowHeight} style={{justifyContent: 'center'}} />)
      }
      {
        !match && left && (<Lottie source={crossimg} width={windowWidth} height={60} />)
      }
      {
        !match && right && (<Lottie source={rightimg} width={windowWidth} height={60} />)
      }
      <Image source={require('./src/assets/neon1.jpg')} style={{
        position: 'absolute',
        width: '100%'
      }} />
      <BlurView
        style={styles.absolute}
        blurType="dark"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <View style={{
        flexDirection: 'row',
        position: 'absolute',
        width: windowWidth,
        height: windowHeight/12,
        alignItems: 'center',
        justifyContent: 'space-between',
        top: 40,
      }}>
        <View style={{
          backgroundColor: COLORS.primary300,
          padding: 10,
          borderRadius: 15,
          marginLeft: 10,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8
        }}>
          <Ionicons name="map-outline" size={24} color={COLORS.primary400} />
          <Text style={{ color: COLORS.primary400, fontWeight: '600'}}>Gurgaon, Haryana</Text>
        </View>
        <View style={{
          backgroundColor: COLORS.primary300,
          padding: 10,
          borderRadius: 15,
          marginRight: 10
        }}>
          <Ionicons name="settings-outline" size={24} color={COLORS.primary400} />
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Swiper
            cards={data}
            renderCard={(card) => {
                return (
                    <View style={styles.card}>
                        <View style={styles.imageview}>
                          <View style={styles.statusview}>
                            <NetInfo status={card.status} />
                          </View>
                          <Image source={card.url} style={styles.img} />
                        </View>
                        <View style={styles.aboutview}>
                          <View>
                            <Text style={styles.title}>{card.name}, {card.age}</Text>
                          </View>
                          <View style={{paddingBottom: 15, gap: 4}}>
                            <Details  
                              icon={<MaterialIcons name="gender-male" size={14} color={COLORS.light100} />}
                              title={card.gender}
                            />
                            <Details  
                              icon={<Ionicons name="location-outline" size={14} color={COLORS.light100} />}
                              title={card.location}
                            />
                          </View>
                          <View style={{
                            width: '70%',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                          }}>
                          {
                            card?.interests?.map((item,index)=>(
                              <Interest name={item} key={index} />
                            ))
                          }
                          </View>
                          <View>
                            <Text style={styles.biostyle}>{card.bio}</Text>
                          </View>
                          <View style={styles.iconview}>
                            <CardIcon  
                              padding={22}
                              icon={<Ionicons name="close" size={30} color={COLORS.light100} />}
                            />
                            <CardIcon 
                              padding={17}
                              margin={10}
                              icon={<Ionicons name="chatbubble-ellipses" size={20} color={COLORS.light100} />}
                            />
                            <CardIcon 
                              padding={17}
                              margin={10}
                              icon={<Ionicons name="bookmark" size={20} color={COLORS.light100} />}
                            />
                            <CardIcon 
                              padding={22} 
                              icon={<Ionicons name="heart-outline" size={30} color={COLORS.light100} />}
                            />
                          </View>
                        </View>
                    </View>
                )
            }}
            cardIndex={0}
            horizontalSwipe={true}
            disableTopSwipe
            disableBottomSwipe
            infinite
            animateCardOpacity={true}
            animateOverlayLabelsOpacity={true}
            stackSize={6}
            onSwipedRight={(data)=> {
              if(data == 4){
                setMatch(true)
                setTimeout(()=>{
                  setMatch(false)
                },3000)
              }
              setRight(true)
              setTimeout(()=>{
                setRight(false)
              },1500)
            }}
            onSwipedLeft={(data)=> {
              if(data == 4){
                setMatch(true)
                setTimeout(()=>{
                  setMatch(false)
                },2000)
              }
              setLeft(true)
              setTimeout(()=>{
                setLeft(false)
              },1500)
            }}
          >
            
          </Swiper>
        </View>
    </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    top: 50,
    width: '100%',
    height: '100%',
    borderRadius: 15,
    justifyContent: "center",
    backgroundColor: COLORS.primary500,
    padding: 4,
    alignItems: 'center',
  },
  iconview:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14
  },
  imageview:{
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  aboutview:{
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  img:{
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  title:{
    color: COLORS.light200,
    paddingVertical: 10,
    fontSize: 24
  },
  biostyle:{
    color: COLORS.light100,
    fontSize: 14,
    paddingVertical: 10
  },
  statusview:{
    position: 'absolute',
    zIndex: 1,
    right: 0, 
    marginHorizontal: 6,
    marginVertical: 10
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});