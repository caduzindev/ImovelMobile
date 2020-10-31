import React,{createContext,useContext,useState,useEffect, useCallback} from 'react'
import http from '../services/http'

const ImovelContext = createContext({})

const ImovelProvider = ({children})=>{
    const [imovel,setImovel] = useState([])
    const [ImovelId,setImovelId] = useState('')

    useEffect(()=>{
        if(!!ImovelId){
            http.get(`api/imovel/${ImovelId}`)
            .then(result=>setImovel(result.data))
        }
        console.log('Imovel effect')
    },[imovelId])

    return(
        <ImovelContext.Provider value={
            imovel,
            setImovelId
        }>
            {children}
        </ImovelContext.Provider>
    )
}

export const useImovel = ()=>{
    return {imovel,setImovel,setImovelId} = useContext(ImovelContext)
}

export default ImovelProvider