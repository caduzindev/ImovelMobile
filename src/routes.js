import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'

import Home from './pages/Home' 
import Sobre from './pages/Sobre'
import Imovel from './pages/Imovel'

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
            <Drawer.Navigator>
                <Drawer.Screen name="home" component={HomeStack}></Drawer.Screen>
                <Drawer.Screen name="sobre" component={Sobre}></Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default RootRouter;