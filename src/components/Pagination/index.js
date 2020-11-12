import React, { useEffect, useState } from 'react'
import { View,TouchableOpacity,Text } from 'react-native'
import { styles } from './styles'
import Seta from '../../icons/seta-esquerda.svg'
import { useImovies } from '../../contexts/Imoveis'

const Pagination = ({prev,next})=>{
    const {totalPage,currentPage,numberPageImovel,prevPage,nextPage} = useImovies()
    const [pages,setPage] = useState([])
    const [visible,setVisible] = useState(true)

    useEffect(()=>{
        if(prevPage==null && nextPage==null){
            setVisible(false)
        }else{
            let array = []
            for(let page=0;page<totalPage;page++){
                array.push(
                    <TouchableOpacity 
                        key={page} 
                        onPress={()=>numberPageImovel(page+1)}
                        style={{...styles.cardPaginate,backgroundColor:currentPage===page+1?'white':'#268ce6',transform:[{scale:currentPage===page+1?1.1:1}]}}
                        >
                            <Text style={{...styles.buttonTextPagination,       color:currentPage===page+1?'black':'white'}}>
                                {page+1}
                            </Text>
                    </TouchableOpacity>
                )
            }
            setPage(array)

            setVisible(true)
        }
    },[currentPage,totalPage])

    return (
        <>
            {visible && <View style={styles.container}>
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

            </View>}
        </>
    )
}

export default Pagination