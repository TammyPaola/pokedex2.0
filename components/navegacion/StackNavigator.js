import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {InicioPantalla} from '../Pantallas/InicioPantalla';
import {DetallesPantalla} from '../Pantallas/DetallesPantalla';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={InicioPantalla}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detalles"
        component={DetallesPantalla}
        options={({route}) => ({
          title: route.params.movie.Title,
        })}
      />
    </Stack.Navigator>
  );
}
