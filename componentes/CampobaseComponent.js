import React, { Component } from 'react';
import Constants from 'expo-constants';
import Calendario from './CalendarioComponent';
import DetalleExcursion from './DetalleExcursionComponent';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function CalendarioNavegador() {
  return (
    <Stack.Navigator    //aqui se configura la barra de arriba
      initialRouteName="Calendario"
      screenOptions={{
        headerMode: 'float',
        headerTintColor: '#fff',    //color de la flecha de back - blanco
        headerStyle: { backgroundColor: '#015afc' },    //color del fondo de la barra - azul
        headerTitleStyle: { color: '#fff' },    //color del titulo - blasnco
      }}
    >
      <Stack.Screen //cada una de las pestañas
        name="Calendario"
        component={Calendario}
        options={{
          title: 'Calendario Gaztaroa',
        }}
      />
      <Stack.Screen
        name="DetalleExcursion"
        component={DetalleExcursion}
        options={{
          title: 'Detalle Excursión',
        }}
      />
    </Stack.Navigator>
  );
}

class Campobase extends Component {

  render() {

    return (
      <NavigationContainer>
        <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
          <CalendarioNavegador />
        </View>
      </NavigationContainer>   
    );
}
}

export default Campobase;