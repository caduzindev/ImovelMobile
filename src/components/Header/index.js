import React from 'react'
import { styles } from './styles'
import {View,TouchableOpacity,Text} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Menu from '../../icons/menu.svg'

const Header = ()=>{
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Menu width={40} height={30} fill={'#fff'}/>
            </TouchableOpacity>
            <Text style={styles.logoName}>MyImoveisMG</Text>
        </View>
    )
}

export default Header;