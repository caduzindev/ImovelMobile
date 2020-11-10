import React, { useMemo } from 'react'
import {Animated,FlatList} from 'react-native'
import {styles} from './styles'

const Loading = ()=>{
    const animates = [
        {   
            id:1,
            aniHeight:new Animated.Value(20),
            aniPos:new Animated.Value(0)
        },
        {
            id:2,
            aniHeight:new Animated.Value(20),
            aniPos:new Animated.Value(0)
        },
        {
            id:3,
            aniHeight:new Animated.Value(20),
            aniPos:new Animated.Value(0)
        }
    ]
    useMemo(()=>{
        //Executa as Animações da barrinhas
        Animated.parallel([
            Animated.loop(Animated.sequence(animates.map(({aniHeight})=>{
                return Animated.timing(aniHeight,{
                    toValue:35,
                    duration:500,
                    delay:100,
                    useNativeDriver:false
                })
            }))),

            Animated.loop(Animated.sequence(animates.map(({aniPos})=>{
                return Animated.timing(aniPos,{
                    toValue:1,
                    duration:500,
                    delay:100,
                    useNativeDriver:false
                })
            })))

        ]).start()
    },[])
    return (
        <FlatList
            data={animates}
            renderItem={({item})=><Animated.View key={item.id} style={{...styles.bars,height:item.aniHeight,opacity:item.aniPos}}/>}
            keyExtractor={(item, index) => item.id.toString()}
            horizontal={true}
        />
    )
}

export default Loading