import React,{useEffect, useState} from 'react'
import { styles } from './styles'
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal
} from 'react-native'
import { URL_STORAGE_IMG } from '@env'
import {useRoute,useNavigation} from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel'
import MapView from 'react-native-maps'
import Svg,{ Circle,Text as Texto,Rect } from 'react-native-svg'
import HeaderModal from '../../components/HeaderModal'
import Address from '../../components/Address'
import {useImovel} from '../../contexts/Imovel'

const Imovel = ()=>{
    const {imovel,searchImovel,loading} = useImovel()
    const [modalVerMais,setModalVerMais] = useState(false)
    const route = useRoute()
    const navigation = useNavigation()

    useEffect(()=>{
        navigation.setOptions({headerRight:()=>(
            <TouchableOpacity>
                <Text>Contato</Text>
            </TouchableOpacity>
        )})
        searchImovel(route.params.imovelId)
    },[]) 

    const renderImg = ({item})=>{
        const path = `${URL_STORAGE_IMG}/${item.url}`
        return <Image style={{ width: '100%', height: 300}} source={{uri:path}}/>
        
    }
   
    if(loading){
        return <Text>Carregando</Text>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{route.params.title}</Text>
        
            <Carousel
                data={imovel.images}
                renderItem={renderImg}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={300+20*2}
                loop={true}
                autoplay={true}
                enableMomentum={false}
                autoplayDelay={2000}
                lockScrollWhileSnapping={true}
                slideStyle={{height:0}}
            />
            <View style={styles.containerInfo}>
                <Text style={styles.textInfo}>{imovel.type}</Text>
                <Text style={styles.textInfo}>R$ {imovel.price}</Text>
            </View>

            <View style={styles.containerDetails}>
                <Text style={styles.textStatus}>{imovel.status}</Text>
                <ScrollView>
                    <View style={{flex:1,justifyContent:'space-around',alignItems:'center',flexDirection:'row',marginTop:10}}>
                        <TouchableOpacity style={styles.verMais} onPress={()=>setModalVerMais(true)}>
                            <Text style={styles.textVerMais}>Ver Mais</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.verMais}>
                            <Text style={styles.textVerMais}>Contato</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerContent}>
                        <Text style={styles.contentDesc}>{imovel.desc}</Text>
                    </View>
                </ScrollView>
            </View>
 
            <Modal animationType='slide' onRequestClose={()=>{
                setModalVerMais(false)
            }} transparent={false} visible={modalVerMais}>
                <View style={styles.containerModal}>
                    <HeaderModal callback={setModalVerMais}/>
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
        </View>
    )
}

export default Imovel