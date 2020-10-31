import React from 'react'
import {ScrollView,Image,Dimensions,SafeAreaView} from 'react-native'
import Header from '../../components/Header'
import Carousel from 'react-native-snap-carousel'
import Filter from '../../components/Filter'
import Imoveis from '../../components/Imoveis'

const Home = ()=>{

    const DATA = [
        {
            image:require("../../images/imovel1.jpg")
        },
        {
            image:require("../../images/imovel2.jpg")
        },
        {
            image:require("../../images/imovel3.jpg")
        }
    ]
    const renderItem = (item)=>{
        const path = item.item.image
        return <Image style={{width:'100%'}} source={path}/>
        
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <Header/>
                <Carousel
                    data={DATA}
                    renderItem={renderItem}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width}
                    autoplay={true}
                    enableMomentum={false}
                    autoplayDelay={1000}
                    lockScrollWhileSnapping={true}
                    loop={true}
                />
                <Filter/>
                <Imoveis/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;