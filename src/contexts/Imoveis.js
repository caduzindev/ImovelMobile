import React,{createContext,useContext,useState,useEffect} from 'react'
import axios from 'axios'
import http from '../services/http'
import { URL_SERVER } from '@env'

const ImoveisContext = createContext({})

const ImoveisProvider = ({children})=>{
    const [imoveis,setImoveis] = useState([])
    const [error,setError] = useState(false)
    const [filterResult,setFilterResult] = useState({})
    const [nextPage,setNextPage] = useState(null)
    const [prevPage,setPrevPage] = useState(null)
    const [load,setLoad] = useState(false)
    const [totalPage,setTotalPage] = useState(0)
    const [toPage,setToPage] = useState(0)
    const [currentPage,setCurrentPage] = useState(0)

    useEffect(()=>{
        function getImoveis(){
            setLoad(true)

            http.get('api')
            .then(result=>{
                setImoveis(result.data.data) 

                setNextPage(result.data.links.next)
                setPrevPage(result.data.links.prev)

                setTotalPage(result.data.meta.last_page)
                setToPage(result.data.meta.to)
                setCurrentPage(result.data.meta.current_page)

                setLoad(false)
            })
        }

        getImoveis()
    },[])

    const filterImoveis = (filter)=>{
        const result = Object.fromEntries(Object.entries(filter)
        .filter(item=>!!item[1])) 

        setFilterResult(result)

        searchImoveisFilter(URL_SERVER+'api',result)

    }
    const nextPageImovel = ()=>{
        if(nextPage != null){
            searchImoveisFilter(nextPage,filterResult)
        }
    }

    const prevPageImovel = ()=>{
        if(prevPage != null){
            searchImoveisFilter(prevPage,filterResult)
        }
    }
    const numberPageImovel = (number)=>{
        if(number){
            searchImoveisFilter(`${URL_SERVER}api/?page=${number}`,filterResult)
        }
    }
    const searchImoveisFilter= (page,filter)=>{
        setLoad(true)
        
        axios.get(`${page}`,{
            params:{...filter},
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(result=>{
            if(result.data.error){
                setError(result.data.message)
                setImoveis([])
                setNextPage(null)
                setPrevPage(null)
                setLoad(false)
                return
            }
            setError(false)
            setImoveis(result.data.data)

            setNextPage(result.data.links.next)
            setPrevPage(result.data.links.prev)

            setTotalPage(result.data.meta.last_page)
            setToPage(result.data.meta.to)
            setCurrentPage(result.data.meta.current_page)
            

            setLoad(false)
        })
    }

    return(
        <ImoveisContext.Provider value={{
            imoveis,
            setImoveis,
            filterImoveis,
            error,
            nextPageImovel,
            prevPageImovel,
            load,
            totalPage,
            toPage,
            currentPage,
            numberPageImovel,
            prevPage,
            nextPage
        }}>
            {children}
        </ImoveisContext.Provider>
    )
}

export const useImovies = ()=>{
    return {imoveis,setImoveis,filterImoveis,error,nextPageImovel,prevPageImovel,load,totalPage,toPage,currentPage,numberPageImovel,prevPage,nextPage} = useContext(ImoveisContext)
}

export default ImoveisProvider;