import { StyleSheet,Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    containerAddress:{
        backgroundColor:"white",
        width:Dimensions.get('window').width,
        alignItems:'center',
        padding:10
    },
    titleAddress:{
        fontSize:40,
        fontWeight:'bold',
        color:'white',
        fontStyle:'italic',
        width:Dimensions.get('window').width,
        backgroundColor:'#4682B4',
        textAlign:'center'
    },
    cardAddress:{
        backgroundColor:'white',
        width:Dimensions.get('window').width,
        flexDirection:'column',
        alignItems:'center',
        borderBottomColor:'#4682B4',
        borderBottomWidth:2,
        borderRadius:8,
        paddingBottom:5,
        paddingTop:5,
    },
    textAddress:{
        color:'#4682B4',
        fontSize:25,
        fontWeight:'bold',
    }
})