import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Landing from './src/pages/Landing'

import { AppLoading } from 'expo';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  /* o native tem demora ao carregar as fontes, portanto ele tem esse 
     esquema para que ele mostre o loading até completar o carregamento 
     das fontes */
  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Landing />
        <StatusBar style="light" />
      </>
    );
  }
}
