import React from 'react'
import { Modal,View,ScrollView,Dimensions,Text } from 'react-native'
import MapView from 'react-native-maps'
import Svg,{ Circle,Text as Texto,Rect } from 'react-native-svg'
import HeaderModal from '../HeaderModal'
import Address from '../Address'
import { styles } from './styles'
import { useImovel } from '../../contexts/Imovel'

const DetailsModal = ({callback,visible})=> {
    const {imovel} = useImovel()
    return (
        <Modal animationType='slide' onRequestClose={()=>{
            callback(false)
        }} transparent={false} visible={visible}>
            <View style={styles.containerModal}>
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
                    
                    <Address
                        cep={imovel.address.cep}
                        city={imovel.address.city}
                        neigh={imovel.address.neigh}
                    />


                    <Svg height="200" width="300" style={styles.circle}>
                        <Circle cx="100" cy="100" r="100" x="50" fill="white" />
                        <Texto
                            fill="#4682B4"
                            stroke="#4682B4"
                            fontSize="100"
                            fontWeight="bold"
                            x="150"
                            y="150"
                            textAnchor="middle" 
                        >
                            {imovel.dorms}
                        </Texto>
                        <Rect 
                            x="0"
                            y="0"
                            width="150"
                            height="50"
                            fill="white"
                        >
                            
                        </Rect>
                        <Texto
                            fill="#4682B4"
                            stroke="#4682B4"
                            fontSize="22"
                            fontWeight="bold"
                            x="100"
                            y="30"
                            textAnchor="middle" 
                        >
                            Numero de Quartos
                        </Texto>
                    </Svg>

                    <View style={styles.viewDetails}>
                        <Text style={styles.titleDetail}>Destalhes</Text>
                        <Text style={styles.textDetail}>{imovel.details}</Text>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}

export default DetailsModal