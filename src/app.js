import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({

   apiKey: 'AIzaSyA7y42dAielwrUOxRQWvz7-eVHety9F72Q',
   authDomain: ' auth-bffd0.firebaseapp.com',
   databaseURL: 'https://auth-bffd0.firebaseio.com',
   projectId: 'auth-bffd0',
   storageBucket: 'auth-bffd0.appspot.com',
   messagingSenderId: '745892269431'
 });
  }

  render() {
    return (
      <View>
      <Header headerText='Authentication' />
      <LoginForm />
      </View>

    );
  }
}

export default App;
