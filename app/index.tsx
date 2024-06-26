import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import { CaretLeft, DotsThree } from "phosphor-react-native";
import HeaderBackButton from "@/assets/images/headerBackButton.png"

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <View style={{
//            backgroundColor:'gray',  
            borderRadius: 20
            }}>
            <CaretLeft size={40} weight='bold' color='white' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{
//            backgroundColor:'gray', 
            borderRadius: 20}}>
            <DotsThree size={40} weight='bold' color='white'/>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>ExerciseName</Text>
      <View style={{height:'75%', backgroundColor:'purple', borderRadius: 20000}}/>
      <View style={{paddingTop: 10, flexDirection:'row', justifyContent:'center', }}>
            <Button title="Start" color={'purple'}/>
            <View style={{padding:5}}/>
            <Button title="Next" color={'purple'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
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
    paddingBottom:10
  },
  titleHeader: {
    fontWeight: "bold",
    color: "purple"
  },
  paragraphText: {
    fontWeight: "bold",
    color: "white"
  }

})