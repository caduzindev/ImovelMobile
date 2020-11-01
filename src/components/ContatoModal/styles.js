import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    containerModal:{
        flex:1,
        backgroundColor:'#4682B4'
    },
    titleContato:{
        color:'white',
        fontSize:40,
        fontWeight:'bold',
        fontStyle:'italic',
        alignSelf:'center'
    },
    input:{
        backgroundColor:'white',
        height:60,
        width:Dimensions.get('window').width/1.2,
        margin:5,
        alignSelf:'center',
        fontSize:20,
        flexWrap:'wrap'
    },
    buttonContact:{
        width:Dimensions.get('window').width/1.5,
        height:50,
        alignSelf:'center',
        backgroundColor:'white',
        marginBottom:10,
        marginTop:5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    textButton:{
       fontSize:25,
       fontWeight:'bold',
    }
})