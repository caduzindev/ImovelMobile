import React from 'react'
import { View,TouchableOpacity,Text } from 'react-native'
import Info from '../../icons/info.svg'
import styles from './styles'

const HeaderModal = ({callback})=>(
    <View style={styles.containerTitle}>
        <Info width={50} height={50}/>
        <TouchableOpacity style={styles.closeModal} onPress={()=>callback(false)}>
            <Text style={styles.closeText}>Cancelar</Text>
        </TouchableOpacity>
    </View>
)

export default HeaderModal