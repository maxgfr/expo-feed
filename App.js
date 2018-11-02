import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Container, Content, Icon } from 'native-base'
import CardComponent from './components/CardComponent'

export default class App extends React.Component {

  render() {
    return(
      <Container style={styles.container}>
         <Content>
             <CardComponent thumbnail={require("./assets/me.jpeg")} id_youtube="bgluUp8VbaA" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="dsq HEIN"/>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
