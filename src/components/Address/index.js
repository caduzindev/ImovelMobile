import React from 'react'
import { View,Text,FlatList } from 'react-native'
import { styles } from './styles'

const Address = ({cep,city,neigh})=>{
    const DATA =[
        {
            name:"CEP",
            value:cep
        },
        {
            name:"Cidade",
            value:city
        },
        {
            name:"Bairro",
            value:neigh
        },
    ]
    return (
        <View style={styles.containerAddress}>
            <Text style={styles.titleAddress}>Endereço</Text>
            <FlatList
                data={DATA}
                renderItem={({item})=>(<Item key={item.name} name={item.name} value={item.value}/>)}
                keyExtractor={item=>item.name}
            />
        </View>
    )
}

const Item = ({name,value})=>(
    <View style={styles.cardAddress}>
        <Text style={styles.textAddress}>{name}</Text>
        <Text style={styles.textAddress}>{value}</Text>
    </View>
)

export default Address