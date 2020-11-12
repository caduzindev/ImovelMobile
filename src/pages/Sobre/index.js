import React, { useState,useEffect } from 'react'
import { View,Text,ScrollView } from 'react-native';
import Header from '../../components/Header'
import http from '../../services/http'
import Loading from '../../components/Loading'
import { styles } from './styles'

const Sobre = ()=>{
    const [sobre,setSobre] = useState({})
    const [load,setLoad] = useState(false)

    useEffect(()=>{
        setLoad(true)

        async function getSobre(){
            const data = await http.get('api/sobre')
            setSobre(data.data)
            setLoad(false)
        }
        getSobre()
    },[])
    
    return (
        <>
            <Header/>
            {load ? <Loading/>:<ScrollView contentContainerStyle={styles.containerSobre}>
                <Text style={styles.textTitle}>{sobre.title}</Text>

                <ScrollView style={{flex:1,flexDirection:'column'}}>
                    
                        <CardSobre color={'#4682B4'} title="missão" text={sobre.mission}/>

                        <CardSobre color={'#4682B4'} title="Valores" text={sobre.values}/>

                        <CardSobre color={'#4682B4'} title="Visão" text={sobre.eyesight}/>

                        <CardSobre color={'#4682B4'} title="Historia" text={sobre.story}/>
                </ScrollView>

            </ScrollView>}
        </>
    )
}
const CardSobre = ({color,title,text})=>{
    return (
        <View style={{...styles.cardSobre,backgroundColor:color}}>
            <Text style={styles.textTitleCard}>{title}</Text>

            <View style={styles.containerText}>
                <Text style={styles.textCard}>{text}</Text>
            </View>

        </View>
    )
}
export default Sobre;