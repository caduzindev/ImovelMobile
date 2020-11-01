import React,{createContext,useContext,useState} from 'react'
import { Alert } from 'react-native'
import http from '../services/http'

const ImovelContext = createContext({})

const ImovelProvider = ({children})=>{
    const [imovel,setImovel] = useState([])
    const [contactInfo,setContactInfo] = useState({
        name:'',
        email:'',
        message:''
    })
    const [loading,setLoading] = useState(true)

    const searchImovel = (id)=>{
        http.get(`api/imovel/${id}`)
        .then(result=>{
            setImovel(result.data)
            setLoading(false)
        })
    }

    const submitMessage = ()=>{
        if(contactInfo.name && contactInfo.email && contactInfo.message){
            console.log(contactInfo)
            setContactInfo({})
            return
        }
        Alert.alert('Por Favor Preencha todos os campos')
    }

    return(
        <ImovelContext.Provider value={{
            imovel,
            searchImovel,
            loading,
            contactInfo,
            setContactInfo,
            submitMessage
        }}>
            {children}
        </ImovelContext.Provider>
    )
}

export const useImovel = ()=>{
    return {
        imovel,
        searchImovel,
        loading,
        contactInfo,
        setContactInfo,
        submitMessage
    } = useContext(ImovelContext)
} 

export default ImovelProvider