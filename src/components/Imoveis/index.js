import React, { useEffect, useRef } from 'react'
import { styles } from './styles'
import {View,Text,Animated} from 'react-native'
import { useImovies } from '../../contexts/Imoveis'
import Card from '../Card'
import Pagination from '../Pagination'
import Loading from '../Loading'

const Imoveis = ()=>{
    const {imoveis,error,prevPageImovel,nextPageImovel,load} = useImovies()
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(()=>{
        if(!!error){
            fadeIn()
        }
    },[error])

    const fadeIn = ()=>{ 
        Animated.timing(fadeAnim,{
            toValue:1,
            duration:2000,
            useNativeDriver:true,
        }).start()
    }

    return (
        <>
            <View style={styles.containerCards}>
                {!load && imoveis.map((item,key)=>{
                    return (
                        <Card key={key} id={item.id} img='https://mullerimoveisrj.com.br/wp-content/uploads/2017/04/A-101.jpg' status={item.status} title={item.title} desc={item.desc} price={item.price}/>
                    )
                })}
                {error && <Animated.View style={[
                    styles.containerError,
                    {
                        opacity:fadeAnim,
                    }]}><Text style={styles.errorText}>{error}</Text></Animated.View>}
                {load && <Loading/>}
            </View>
            
            {!load ? (<Pagination prev={prevPageImovel} next={nextPageImovel}/>):(<View/>)}

        </>
    )
}
export default Imoveis;