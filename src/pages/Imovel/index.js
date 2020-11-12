import React,{useEffect, useState} from 'react'
import { styles } from './styles'
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { URL_STORAGE_IMG } from '@env'
import {useRoute,useNavigation} from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel'
import {useImovel} from '../../contexts/Imovel'
import DetailsModal from '../../components/DetailsModal'
import ContatoModal from '../../components/ContatoModal'
import Contact from '../../icons/contact.svg'

const Imovel = ()=>{
    const {imovel,searchImovel,loading} = useImovel()
    const [modalVerMais,setModalVerMais] = useState(false)
    const [modalContato,setModalContato] = useState(false)
    const route = useRoute()
    const navigation = useNavigation()

    useEffect(()=>{
        navigation.setOptions({headerRight:()=>(
            <TouchableOpacity style={{marginRight:10}} onPress={()=>setModalContato(true)}>
                <Contact width={40} height={40} fill={'#ffffff'} />
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

                        <TouchableOpacity style={styles.verMais} onPress={()=>setModalContato(true)}>
                            <Text style={styles.textVerMais}>Contato</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerContent}>
                        <Text style={styles.contentDesc}>{imovel.desc}</Text>
                    </View>
                </ScrollView>
            </View>

            <DetailsModal 
                callback={setModalVerMais}
                visible={modalVerMais}
            />

            <ContatoModal 
                callback={setModalContato}
                visible={modalContato}
            />
            
        </View>
    )
}

export default Imovel