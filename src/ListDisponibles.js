/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ListView
} from 'react-native';

import DisponibleBox  from './DisponiblesBox';

export default class ListDisponibles extends Component {
    
    // Construir datasource  
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds
        };
      }

      // Metodo que se ejecuta despues de renderear la vista 
    componentDidMount(){

        this.updateDataSource (this,this.props.data)
    }

    // actualizar state datasource 
    updateDataSource(contex,data) {  
        contex.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
        });
        
    }

  render() {
    return(
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <DisponibleBox  data = {rowData} />}
      />
    );
/*
    return (
        <FlatList data={this.props.data}
        renderItem={({item}) => <DisponibleBox  data = {item} />}
      />
    ); */
  }
}


const styles = StyleSheet.create({
 
    

});
