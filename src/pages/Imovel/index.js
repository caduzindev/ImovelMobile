import React,{useEffect, useState} from 'react'
import { styles } from './styles'
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    ActivityIndicator
} from 'react-native'
import {useRoute,useNavigation} from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel'
import MapView from 'react-native-maps'
import Svg,{ Circle,Text as Texto,Rect } from 'react-native-svg'
import HeaderModal from '../../components/HeaderModal'
import Address from '../../components/Address'
import {useImovel} from '../../contexts/Imovel'

const Imovel = ()=>{
    const {imovel,setImovelId} = useImovel()
    const [modalVerMais,setModalVerMais] = useState(false)
    const route = useRoute()
    const navigation = useNavigation()

    useEffect(()=>{
        navigation.setOptions({headerRight:()=>(
            <TouchableOpacity>
                <Text>Contato</Text>
            </TouchableOpacity>
        )})
        setImovelId(route.params.imovelId)
    },[]) 

    const renderItem = (item)=>{
        const path = "https://mullerimoveisrj.com.br/wp-content/uploads/2017/04/A-101.jpg"
        return <Image style={{ width: '100%', height: 300}} source={{uri:path}}/>
        
    }
    {!!imovel && (
        <ActivityIndicator size="large" color="blue"/>
    )}

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{route.params.title}</Text>
        
            <Carousel
                data={[1,2,3]}
                renderItem={renderItem}
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
                <Text style={styles.textInfo}>Alvenaria</Text>
                <Text style={styles.textInfo}>R$ 2500,00</Text>
            </View>

            <View style={styles.containerDetails}>
                <Text style={styles.textDetails}>ALUGA</Text>
                <ScrollView>
                    <View style={styles.containerContent}>
                        <Text style={styles.contentDesc}>mnajdhasjhdhadhabgasvdisahdvashbsvdgasdhsagdasvdhgasgdjasgdkhagukgudsgudsgufgdsagdgsdgfasdfsagdsafdgfasghdfgasdh</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'space-around',alignItems:'center',flexDirection:'row',marginTop:10}}>
                        <TouchableOpacity style={styles.verMais} onPress={()=>setModalVerMais(true)}>
                            <Text style={styles.textVerMais}>Ver Mais</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.verMais}>
                            <Text style={styles.textVerMais}>Contato</Text>
                        </TouchableOpacity>
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
                            style={{height:500,width:Dimensions.get('window').width}}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        />

                        <Address
                            cep="48788-5896"
                            city="Governador Valadares"
                            neigh="Jardim do Trevo"
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
                                7
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
                    </ScrollView>

                </View>
            </Modal>
        </View>
    )
}

export default Imovel