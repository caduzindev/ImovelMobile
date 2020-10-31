import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerTitle:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#268ce6',
        padding:10,
        borderBottomStartRadius:25,
        borderBottomEndRadius:25,
    },
    closeModal:{
        height:50,
        width:150,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    closeText:{
        color:'black',
        fontSize:22,
        fontWeight:'bold'
    },
})

export default styles