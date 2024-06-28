import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import { CaretLeft, DotsThree } from "phosphor-react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import React, { useState, useEffect } from "react";
import { SwipeButton } from "../components/swipeButton";




export default function Index() {

//SwipeButton
  const [toggleState, setToggleState] = useState(false);
  const handleToggle = (value:boolean) => setToggleState(value);

 //Timing 
  const WaitTime = 120
  const [timeLeft, setTimeLeft] = useState(WaitTime);
  const [fill, setFill] = useState(100);

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        setFill((prevFill) => prevFill - (100 / WaitTime));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timeLeft]);
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  function TimeView() {
  
    return <Text style={{fontSize:50, textAlign:'center',color:'white', paddingVertical:'37.5%'}}>{formatTime(timeLeft)}</Text>
  
  }
//Return Screen
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <View style={{
            borderRadius: 20
            }}>
           <CaretLeft size={40} weight='bold' color='white' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{
            borderRadius: 20}}>
            <DotsThree size={40} weight='bold' color='white'/>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>ExerciseName</Text>
      <View style={{position:'absolut', height:'65%', justifyContent:'center', alignItems:'center'}}>
      <AnimatedCircularProgress
      size={300}
      width={10}
      backgroundWidth={2.5}
      rotation={0}
      duration={timeLeft}
      prefill={100}
      fill={fill}
      tintColor="purple"
      backgroundColor="purple"
      lineCap='round'
      >
        {TimeView}
      </AnimatedCircularProgress>
      </View>
      <View style={{justifyContent:'center', alignItems:'center',}}>
        <Text style={{color:'white'}}>Hi</Text>
        <SwipeButton onToggle={handleToggle}/>
      </View>
      <View style={{marginTop:80}}/>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    display:'flex'
  },
  headerContainer: {
//    marginTop: 25,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
//    backgroundColor: 'red',
    height: '10%',
    alignItems: 'flex-end'
  },
  headerBackButton:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText:{
    fontSize: 20, 
    width: "100%",
    color: "white",
    textAlign: 'center',
    lineHeight: 35,
    paddingBottom:10,
    paddingHorizontal:'15%'
  },
  titleHeader: {
    fontWeight: "bold",
    color: "purple"
  },
  paragraphText: {
    fontWeight: "bold",
    color: "white"
  }
})