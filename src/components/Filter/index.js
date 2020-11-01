import React, { useState,useEffect } from 'react'
import { styles } from './styles'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView
} from 'react-native'
import Select from '../Select'
import {useImovies} from '../../contexts/Imoveis'
import axios from 'axios'

const Filter = ()=>{
    const {filterImoveis} = useImovies()
    const [citys,setCity] = useState([])

    const [filter,setFilter] = useState({
        status:'',
        type:'',
        dorms:0,
        city:'',
        neigh:'',
        price:0
    })

    const onChanged = (value,name)=>{
        setFilter(state=>({
             ...state,
             [name]:value
         }))
    }

    useEffect(()=>{
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/MG/municipios')
        .then(result=>{
            setCity(result.data)
        })
    },[])

    return (
        <>
            <Text style={styles.title}>Imoveis</Text>
            <View style={styles.container}>
                <Select 
                    callback={onChanged}
                    styles={styles}
                    items={[
                        {label:"Aluga",value:"aluga"},
                        {label:"Venda",value:"venda"}
                    ]}
                    placeholder={{
                        label:"Qual Status?",
                        value:null
                    }}
                    name="status"
                />
                <Select 
                    callback={onChanged}
                    styles={styles}
                    items={[
                        {label:"Alvenaria",value:"Alvenaria"},
                        {label:"Condominio",value:"Condominio"},
                    ]}
                    placeholder={{
                        label:"Tipo do Imovel",
                        value:null
                    }}
                    name="type"
                />
                <Select 
                    callback={onChanged}
                    styles={styles}
                    items={[
                        { label: '1', value: 1 },
                        { label: '2', value: 2 },
                        { label: '3', value: 3 },
                        { label: '4', value: 4 },
                        { label: '5', value: 5 },
                        { label: '6', value: 6 },
                        { label: '7', value: 7 },
                        { label: '8', value: 8 },
                    ]}
                    placeholder={{
                        label:"Domitorios",
                        value:null
                    }}
                    name="dorms"
                />
                <Select 
                    callback={onChanged}
                    styles={styles}
                    items={!!citys && citys.map(city=>({
                        label:city.nome,
                        value:city.nome
                    }))}
                    placeholder={{
                        label:"Cidade",
                        value:null
                    }}
                    name="city"
                />
                <KeyboardAvoidingView>
                    <TextInput 
                        placeholder="Bairro" 
                        style={styles.inputAndroid}
                        placeholderTextColor="black"
                        onChangeText={(value)=>onChanged(value,'neigh')}
                    />
                </KeyboardAvoidingView>
                <Select 
                    callback={onChanged}
                    styles={styles}
                    items={[
                        { label: 'Até R$500', value: 500 }
                    ]}
                    placeholder={{
                        label:"Preço",
                        value:null
                    }}
                    name='price'
                />
                <TouchableOpacity style={styles.filter} onPress={()=>filterImoveis(filter)}>
                    <Text style={styles.buttonText}>Filtrar</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Filter;