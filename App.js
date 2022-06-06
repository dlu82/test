import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Intro from './Pages/Intro';
import Login from './Pages/Login';
import Signin from './Pages/signin';
import Product from './Pages/Product';
import CoffeePage from './Pages/CoffeePage';
import OneProduct from './Pages/OneProduct';
import Cart from './Pages/Cart';
import HomePage from './Pages/HomePage';
import ItemPage from './Pages/ItemPage';

const Stack = createStackNavigator();

function MyStack() {
  return (
    // <ItemPage/>
    <Stack.Navigator>
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen
        name="CoffeePage"
        component={CoffeePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OneProduct"
        component={OneProduct}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name= "HomePage"
        component={HomePage}
        options= {{headerShown: false}}
        />
      <Stack.Screen
      name="ItemPage"
      component={ItemPage}
      options= {{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
