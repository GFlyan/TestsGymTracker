import { StyleSheet, View, Text } from "react-native";
import { GestureHandlerRootView ,GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export const SwipeButton = ({onToggle}) => {

    const xTranslation = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => ({transform: [{translateX: xTranslation.value}]}));
    const panGesture = Gesture.Pan()
    .onUpdate((translate) => {xTranslation.value = translate.translationX})
    .onEnd(() => {if(xTranslation<135){}else{}});


    return ( 

        
        <GestureHandlerRootView style={{flex:1}}>
            <View style={styles.swipeConst}>
                <GestureDetector gesture={panGesture}>
                    <Animated.View style={[styles.swipableButton, animatedStyles]}></Animated.View>
                </GestureDetector>
            </View>
        </GestureHandlerRootView>
        

    );
}

const styles = StyleSheet.create({
    swipeConst:{
        height: 100,
        width: 350,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#171718',
        borderRadius: 100
    },
    swipableButton:{
        backgroundColor:'purple',
        height: 90,
        width:90,
        borderRadius:100,
        left:5,
        position:'absolute'

    }
})