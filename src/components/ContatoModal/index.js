import React from 'react'
import { Modal, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity, Text} from 'react-native'
import HeaderModal from '../HeaderModal'
import MapView from 'react-native-maps'
import Address from '../Address'
import { useImovel } from '../../contexts/Imovel'
import { styles } from './styles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const ContatoModal = ({callback,visible})=>{
    const {imovel,contactInfo,setContactInfo,submitMessage} = useImovel()

    const onChangeInput = (value,name)=>{
        setContactInfo(state=>({
            ...state,
            [name]:value
        }))
    }

    return (
        <Modal animationType='slide' onRequestClose={()=>callback(false)} visible={visible} transparent={false}>
            <KeyboardAvoidingView style={styles.containerModal} behavior={Platform.OS == 'ios'?'padding':'height'}>
                <HeaderModal callback={callback}/>
                <ScrollView>
                    <MapView 
                        style={{height:300,width:Dimensions.get('window').width}}
                        region={{
                            latitude: -20.079886,
                            longitude: -44.895811,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
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

                    <TouchableOpacity style={styles.buttonContact} onPress={()=>submitMessage()}>
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