import React from 'react'
import { View,Text,FlatList } from 'react-native'
import styles from './styles'

const Address = ({cep,city,neigh})=>{
    const DATA =[
        {
            name:"cep",
            value:cep
        },
        {
            name:"city",
            value:city
        },
        {
            name:"neigh",
            value:neigh
        },
    ]
    return (
        <View style={styles.containerAddress}>
            <Text style={styles.titleAddress}>Endereço</Text>
            <FlatList
                data={DATA}
                renderItem={({item})=>(<Item name={item.name} value={item.value}/>)}
                keyExtractor={item=>item.name}
            />
        </View>
    )
}

const Item = ({name,value})=>(
    <Text style={{color:'black'}}>{name}</Text>
)

export default Address