import { StyleSheet,Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        marginBottom:20,
    }, 
    content:{
        backgroundColor:'#DCDCDC',
        padding:5,
        height:150
    },
    status:{
        color:'orange',
        fontSize:17,
    }, 
    title:{
        fontWeight:'bold',
        fontSize:14,
        letterSpacing:1,
        width:150
    },
    desc:{
        fontSize:16,
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