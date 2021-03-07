import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Orcamento from './pages/Orcamento'

const Stack  = createStackNavigator();


export default function Routes(){

    const screenOptionStyle = {
        headerStyle: {
            backgroundColor: '#050c3d'
        },
        headerTintColor: '#00a1fc',
        headerBackTitle: 'voltar'
    }

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle} >
                <Stack.Screen name="Orcamento" component={Orcamento} options={{
                    headerTitle: "Orçamento"
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

