import { StyleSheet,Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    bars:{
        width:Dimensions.get('window').width/3.5,
        height:20,
        backgroundColor:"white",
        marginRight:5,
        opacity:0.5
    }
})