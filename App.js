import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
