import React,{createContext,useContext,useState,useEffect} from 'react'
import http from '../services/http'

const ImovelContext = createContext({})

const ImovelProvider = ({children})=>{
    const [imovel,setImovel] = useState([])
    const [loading,setLoading] = useState(true)



    const searchImovel = (id)=>{
        http.get(`api/imovel/${id}`)
        .then(result=>{
            setImovel(result.data)
            setLoading(false)
        })
    }

    return(
        <ImovelContext.Provider value={{
            imovel,
            searchImovel,
            loading
        }}>
            {children}
        </ImovelContext.Provider>
    )
}

export const useImovel = ()=>{
    return {imovel,searchImovel,loading} = useContext(ImovelContext)
}

export default ImovelProvider