/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';


import ListDisponibles  from './ListDisponibles';

export default class App extends Component {
  
  render() {

    const dataSD = {
      fecha: '26/02/2018',
      titulo:'Documento para actuacion externa',
      numProceso:'11001 03 27 001 2017 20000 11  ',
      despacho:'DESPACHO 000 TRIBUNAL ADMINISTRATIVO DE CUNDINAMARCA - SECCION TERCERA',
      ciudad:'Chia',
      descripcion :'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
    };

    const arr =  Array(3).fill(dataSD) 

    return (
      <View style={styles.container}>    
        
        <ListDisponibles data = {arr} />

      </View>
    );
  }
}

// Color variable

const _colorPrimary = "#009688"
const _colorPrimaryDark = "#00796b"
const _colorAccent = "#607d8b"
const _textColorPrimary = "#ffffff"


const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#ccc',
  }

});
