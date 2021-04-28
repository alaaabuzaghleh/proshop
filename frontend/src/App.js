import React from 'react'
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from "./componenets/Header"
import Footer from "./componenets/Footer" 
import HomeScreen from './screens/HomeScreen'
import ProdustScreen from "./screens/ProductScreen";
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

const  App = () => {
  return (
    <Router>
      <Header/>
        <main className='py-3'>
          <Container>
            <Route path='/' component={HomeScreen} exact/>
            <Route path='/product/:id' component={ProdustScreen}/>
            <Route path='/cart/:id?' component={CartScreen}/>
            <Route path='/login' component={LoginScreen}/>
            <Route path='/register' component={RegisterScreen}/>
          </Container>
        </main>
      <Footer/> 
    </Router>
  );
}

export default App;
