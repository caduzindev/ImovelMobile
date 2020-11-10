import { StyleSheet,Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        marginBottom:20,
    }, 
    content:{
        backgroundColor:'white',
        padding:10,
        height:150
    },
    status:{
        color:'#268ce6',
        fontWeight:'bold',
        fontSize:17,
    }, 
    title:{
        fontWeight:'bold',
        fontSize:17,
        letterSpacing:1,
        width:150
    },
    desc:{
        fontSize:17,
        width:150,
        marginBottom:5
    },
    price:{
        fontSize:16,
        fontWeight:'700'
    },
    imageStyle:{
        width:Dimensions.get('window').width/2.3,
        height:150
    }
})