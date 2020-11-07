import React,{ useRef } from 'react'
import { Modal, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity, Text} from 'react-native'
import HeaderModal from '../HeaderModal'
import MapView,{ Marker } from 'react-native-maps'
import Address from '../Address'
import { useImovel } from '../../contexts/Imovel'
import { styles } from './styles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const ContatoModal = ({callback,visible})=>{
    const {imovel,contactInfo,setContactInfo,submitMessage} = useImovel()
    const mapRef = useRef()

    const onChangeInput = (value,name)=>{
        setContactInfo(state=>({
            ...state,
            [name]:value
        }))
    }

    return (
        <Modal animationType='slide' onRequestClose={()=>{
            callback(false)
            setContactInfo({})
            }} visible={visible} transparent={false}>
            <KeyboardAvoidingView style={styles.containerModal} behavior={Platform.OS == 'ios'?'padding':'height'}>
                <HeaderModal callback={callback}/>
                <ScrollView>
                    <MapView 
                        style={{height:300,width:Dimensions.get('window').width}}
                        zoomControlEnabled={true}
                        ref={mapRef}
                        onMapReady={()=>{
                            setTimeout(()=>{
                                mapRef.current.fitToCoordinates([{
                                    latitude:parseFloat(imovel.address.lat),
                                    longitude:parseFloat(imovel.address.long)
                                }],{
                                    edgePadding:{top:0,left:0,right:0,bottom:0},
                                    animated:true
                                })
                            },2000)
                        }}
                    >
                        <Marker
                            title={imovel.title}
                            key={imovel.id}
                            description={imovel.description}
                            coordinate={{
                                latitude:parseFloat(imovel.address.lat),
                                longitude:parseFloat(imovel.address.long)
                            }}
                            pinColor="#4682B4"
                        />
                    </MapView>
                    <Text style={styles.titleContato}>Contato</Text>
                    
                    <TextInput 
                        placeholder="Nome"
                        onChangeText={text=>onChangeInput(text,'name')}
                        value={contactInfo.name}
                        style={styles.input}
                    />
                
                    <TextInput 
                        placeholder="E-mail"
                        onChangeText={text=>onChangeInput(text,'email')}
                        value={contactInfo.email}
                        style={styles.input}
                    />

                    <TextInput 
                        placeholder="Mensagem"
                        onChangeText={text=>onChangeInput(text,'message')}
                        value={contactInfo.message}
                        style={{...styles.input,height:100}}
                        multiline
                    />

                    <TouchableOpacity style={styles.buttonContact} onPress={()=>submitMessage(imovel.id)}>
                        <Text style={styles.textButton}>Enviar</Text>
                    </TouchableOpacity>
 
                    <Address
                        cep={imovel.address.cep}
                        city={imovel.address.city}
                        neigh={imovel.address.neigh}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    )
}

export default ContatoModal