import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#268ce6',
    },
    containerContent:{
        padding:5,
        marginTop:10,
    },
    containerModal:{
        flex:1,
        backgroundColor:'#4682B4'
    },
    verMais:{
        width:150,
        height:50,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }, 
    textVerMais:{
        color:'black',
        fontWeight:'bold',
        fontSize:20

    },
    contentDesc:{
        color:'white',
        fontSize:17,
        width:'100%'
    },
    title:{
        color:'white',
        fontSize:40,
        fontWeight:'bold',
        padding:8,
    },
    containerInfo:{
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:5,
        margin:5
    },
    textInfo:{
        color:'white',
        fontWeight:'800',
        fontSize:25
    },
    containerDetails:{
        flex:1,
        backgroundColor:'#4682B4',
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        padding:15
    },
    textDetails:{
        fontSize:50,
        width:'100%',
        borderBottomColor:'white',
        borderBottomWidth:1,
        color:'white',
        padding:3,
    },
    circle:{
        alignSelf:'center',
        marginTop:30
    },
    numberDorms:{
        color:'white',
        fontSize:50
    }
})