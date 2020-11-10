import React, { useEffect, useState } from 'react'
import { View,TouchableOpacity,Text } from 'react-native'
import { styles } from './styles'
import Seta from '../../icons/seta-esquerda.svg'
import { useImovies } from '../../contexts/Imoveis'

const Pagination = ({prev,next})=>{
    const {totalPage,currentPage,numberPageImovel} = useImovies()
    const [pages,setPage] = useState([])

    useEffect(()=>{
        let array = []
        for(let page=0;page<totalPage;page++){
            array.push(
                <TouchableOpacity 
                    key={page} 
                    onPress={()=>numberPageImovel(page+1)}
                    style={{...styles.cardPaginate,backgroundColor:currentPage===page+1?'#268ce6':'white',transform:[{scale:currentPage===page+1?1.1:1}]}}
                    >
                        <Text style={{...styles.buttonTextPagination,       color:currentPage===page+1?'white':'black'}}>
                            {page+1}
                        </Text>
                </TouchableOpacity>
            )
        }
        setPage(array)
    },[currentPage,totalPage])


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>prev()} style={styles.buttonPaginate}>
                <Seta style={{
                    fill:'white',
                    width:'80%',
                    height:'80%',
                }}/>
            </TouchableOpacity>

            <View style={styles.containerButtons}>
                {pages}
            </View>

            <TouchableOpacity onPress={()=>next()} style={styles.buttonPaginate}>
                <Seta style={{
                    fill:'white',
                    width:'80%',
                    height:'80%',
                    transform:[{rotate:'180deg'}]
                }}/>
            </TouchableOpacity>

        </View>
    )
}

export default Pagination