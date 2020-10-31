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
        let result = Object.fromEntries(Object.entries(filter)
        .filter(item=>!!item[1])) 

        let querystring = (function(){
            let str = [];
                for (let p in result)
                if (result .hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(result[p]));
                }
            return str.join("&");
        })()

        searchImoveisFilter(querystring)
    }

    const searchImoveisFilter= (querystring)=>{
        http.get(`api/?${querystring}`)
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