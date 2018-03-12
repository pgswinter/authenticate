import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Route from './AuthRoute'

import Navigation from './Navigation';
import {firebaseApp} from './server/firebase'

import {Provider} from 'react-redux';
import configureStore from './redux/store'

const store = configureStore()

firebaseApp.auth().onAuthStateChanged(user=>{
	if(user){
		console.log('signed up ok', user)
	}
	else{
		console.log('signed up fail or not sign up yet')
	}
})

const App = () => (
	<Provider store={store}>
		<Navigation />
	</Provider>
	
)

export default App
