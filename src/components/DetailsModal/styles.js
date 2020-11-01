import { StyleSheet,Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    containerModal:{
        flex:1,
        backgroundColor:'#4682B4'
    },
    circle:{
        alignSelf:'center',
        marginTop:30
    },
    viewDetails:{
        backgroundColor:'white',
        flex:1,
        borderColor:'#268ce6',
        borderWidth:5
    },
    titleDetail:{
        textAlign:'center',
        width:Dimensions.get('window').width,
        backgroundColor:'#268ce6',
        color:'white',
        fontSize:40,
        fontStyle:'italic',

    },
    textDetail:{
        color:'black',
        fontSize:23,
        padding:5
    }
})