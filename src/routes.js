import React from 'react'
import { Dimensions } from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'

import Home from './pages/Home' 
import Sobre from './pages/Sobre'
import Imovel from './pages/Imovel'

import SobreIcon from './icons/sobre.svg'
import HomeIcon from './icons/home.svg'

const Stack = createStackNavigator()

const HomeStack = ()=>(
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen 
            name="Imovel" 
            component={Imovel}
            options={{
                headerShown:true,
                title:null,
                headerStyle:{
                    backgroundColor:'#268ce6',
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontSize:20,
                }
            }}
        ></Stack.Screen>
    </Stack.Navigator>
)

const Drawer = createDrawerNavigator()

const RootRouter = ()=>{
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                drawerStyle={{
                    backgroundColor: 'white',
                    width: Dimensions.get('window').width/2,
                }}
                drawerType="back"
                drawerContentOptions={{
                    activeBackgroundColor:'#4682B4',
                    activeTintColor:'white',
                    labelStyle:{
                        fontWeight:'bold',
                        letterSpacing:1,
                        fontStyle:'italic',
                        fontSize:18,
                    }
                }}
            >
                <Drawer.Screen name="home" component={HomeStack} options={{
                    drawerIcon:({focused})=>{
                        let color = 'black'
                        if(focused){
                            color='white'
                        }
                        return <HomeIcon width={30} height={30} fill={color}/>
                    }
                }}></Drawer.Screen>
                <Drawer.Screen name="sobre" component={Sobre} options={{
                    drawerIcon:({focused})=>{
                        let color = 'black'
                        if(focused){
                            color='white'
                        }
                        return <SobreIcon width={30} height={30} fill={color}/>
                    }
                }}></Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default RootRouter;