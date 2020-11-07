import React from 'react'
import {TouchableOpacity,View,Image,Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { styles } from './styles'

const Card = ({id,img,status,title,desc,price})=>{
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('Imovel',{imovelId:id,title:title})}>
            <Image source={{uri:img}} style={styles.imageStyle}/>
            <View style={styles.content}>
                <Text style={styles.status}>{status}</Text>
                <Text style={styles.title}>{title.substr(0,13)+'...'}</Text>
                <Text style={styles.desc}>{desc.substr(0,30)+'...'}</Text>
                <Text style={styles.price}>R$ {price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card;