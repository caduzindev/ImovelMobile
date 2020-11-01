import React,{createContext,useContext,useState,useEffect} from 'react'
import http from '../services/http'

const ImoveisContext = createContext({})

const ImoveisProvider = ({children})=>{
    const [imoveis,setImoveis] = useState([])
    const [error,setError] = useState(false)

    useEffect(()=>{
        async function getImoveis(){
            const result = await http.get('api')

            setImoveis(result.data)
        }

        getImoveis()
    },[])

    const filterImoveis = (filter)=>{
        const result = Object.fromEntries(Object.entries(filter)
        .filter(item=>!!item[1])) 

        searchImoveisFilter(result)
    }

    const searchImoveisFilter= (obj)=>{
        http.get(`api`,{
            params:{...obj}
        })
        .then(result=>{
            if(result.data.error){
                setError(result.data.message)
                setImoveis([])
                return
            }
            setError(false)
            setImoveis(result.data)
        })
    }

    return(
        <ImoveisContext.Provider value={{
            imoveis,
            setImoveis,
            filterImoveis,
            error
        }}>
            {children}
        </ImoveisContext.Provider>
    )
}

export const useImovies = ()=>{
    return {imoveis,setImoveis,filterImoveis,error} = useContext(ImoveisContext)
}

export default ImoveisProvider;