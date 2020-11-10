import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    containerCards:{
        padding:15,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        backgroundColor:"#4682B4"
    },
    containerError:{
        flex:1,
        backgroundColor:'silver',
        padding:9,
        alignItems:'center',
        borderBottomStartRadius:5,
        borderBottomEndRadius:5
    },
    errorText:{
        fontWeight:'bold',
        fontSize:16
    }
})