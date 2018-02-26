/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,TouchableHighlight,TextInput,Picker
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import Separator from './Separator';

export default class DisponibleBox extends Component {
  
    
  btnPress(){

  } 
  
  render() {

    let dataUnidad = [{
      value: 'Minutos',
    }, {
      value: 'Horas',
    }, {
      value: 'Días',
    }];


    let dataTiempo = [{value: '1',}, {value: '2',}, {value: '3',}];
   
    const dataSD =  this.props.data 

    return (
      
        <View style = {styles.containerSD} >

          <View style = {[styles.containerEnd,styles.marginInterno]} > 
            <Text style = {styles.fontFecha} >  {dataSD.fecha}</Text>
          </View>
          <View style = { [styles.containerCenter , styles.marginInterno] }>
            <Text style = {styles.fontTipoServicio} > {dataSD.titulo} </Text>
          </View>
          
          <Separator />
          

          <View style = { [styles.containerCenter , styles.marginInterno ]}  >
            <Text style = {styles.fontNumProceso}>{dataSD.numProceso}</Text>
          </View>

          <View style = { [styles.containerCenter , styles.marginInterno ]}  >
            <Text style = {[styles.textDespacho  ]}  >{dataSD.despacho}</Text>
          </View>

          <View style = { [styles.containerCenter , styles.marginInterno ]}  >
            <Text style = {[styles.textDespacho  ]}  >{dataSD.ciudad}</Text>
          </View>

           <View style = { [styles.containerStart, styles.marginInterno ]}  >
            <Text style = {[styles.titulo]} >Descripción</Text>
          </View>

          <Separator />

          <View style = {styles.containerStart} >
            <Text>
                {dataSD.descripcion}
            </Text>

          </View>

          <View style = { [styles.containerStart, styles.marginInterno ]}>
            <Text style = {[styles.titulo]} >Tiempo del servicio</Text>
          </View>

          <Separator />
        
          <View style = { [ styles.containerCenter,styles.containerTimer,{marginBottom:8} ] } >

            <View style ={[styles.ddlStyle]}   >
              <Dropdown label = {"Tiempo"}  data = {dataTiempo} />
            </View>
            
            <View style ={[styles.ddlStyle]}  >
              <Dropdown label = {"Unidad"}   data={dataUnidad}/>
            </View>

          </View>

          <View style = {[styles.containerCenter,{ height:30} ]}>
          
          <TouchableHighlight 
            style = { [styles.btnTomarServicio ] } 
            onPress={this.btnPress} 
            underlayColor = {'rgba(96,125,139,1)'} >
              <Text style ={ [styles.txtButton] } > TOMAR SERVICIO </Text>
          </TouchableHighlight>

          </View>   


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

  containerSD:{
    flexDirection: 'column',
    backgroundColor : '#fff',
    margin: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    
  },
  containerEnd:{
    alignItems: 'flex-end',
  },
  containerStart:{
    alignItems: 'flex-start',
  },
  fontFecha : {
    fontSize: 12,
  },
  containerCenter:{
    alignItems: 'center',
  },

  fontTipoServicio:{
    color: _colorPrimaryDark,
    fontSize:18
    
  },
  separator:{
    height:1,
    backgroundColor:"#ccc"
  },
 
  fontNumProceso:{
    fontSize: 20,
    color: _colorAccent,
  },
  marginInterno:{
    marginVertical: 4,
  },
  textDespacho :{
    textAlign:"center"
  },
  titulo:{
    color:_colorAccent
  },
  btnTomarServicio:{
    flex:1,
    flexDirection: 'row',
    backgroundColor:_colorPrimary,
    alignItems: 'center',    
    
  },
  txtButton:{
    flex:1,
    color:'#FFFFFF', 
    textAlign:'center',
  }
  ,ddlStyle:{
    flex:1,
    margin:8
  },
  containerTimer:{
    height:60,
    flexDirection :"row",
    
    justifyContent: 'center',
  }


});
