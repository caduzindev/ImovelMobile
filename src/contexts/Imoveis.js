import React,{createContext,useContext,useState,useEffect} from 'react'
import axios from 'axios'
import http from '../services/http'
import { URL_SERVER } from '@env'

const ImoveisContext = createContext({})

const ImoveisProvider = ({children})=>{
    const [imoveis,setImoveis] = useState([])
    const [error,setError] = useState(false)
    const [filterResult,setFilterResult] = useState({})
    const [nextPage,setNextPage] = useState('')
    const [prevPage,setPrevPage] = useState('')
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

                setTotalPage(result.data.meta.total)
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
        searchImoveisFilter(nextPage)
    }
    const nextPageImovel = ()=>{
        if(nextPage != null){
            searchImoveisFilter(nextPage)
        }
    }

    const prevPageImovel = ()=>{
        if(prevPage != null){
            searchImoveisFilter(prevPage)
        }
    }
    const numberPageImovel = (number)=>{
        if(number){
            searchImoveisFilter(`${URL_SERVER}api/?page=${number}`)
        }
    }
    const searchImoveisFilter= (page)=>{
        setLoad(true)

        axios.get(`${page}`,{
            params:{...filterResult},
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(result=>{
            if(result.data.error){
                setError(result.data.message)
                setImoveis([])
                return
            }
            setError(false)
            setImoveis(result.data.data)

            setNextPage(result.data.links.next)
            setPrevPage(result.data.links.prev)

            setTotalPage(result.data.meta.total)
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
            numberPageImovel
        }}>
            {children}
        </ImoveisContext.Provider>
    )
}

export const useImovies = ()=>{
    return {imoveis,setImoveis,filterImoveis,error,nextPageImovel,prevPageImovel,load,totalPage,toPage,currentPage,numberPageImovel} = useContext(ImoveisContext)
}

export default ImoveisProvider;