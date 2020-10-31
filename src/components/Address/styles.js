import { StyleSheet,Dimensions } from 'react-native'

const styles = StyleSheet.create({
    containerAddress:{
        backgroundColor:"white",
        width:Dimensions.get('window').width,
        alignItems:'center',
    },
    titleAddress:{
        fontSize:35,
        fontWeight:'bold'
    }
})

export default styles