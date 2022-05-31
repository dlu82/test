import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";


import Intro from './Pages/Intro'
import Login from './Pages/Login'
import Signin from './Pages/signin'
import Product from './Pages/Product'
import CoffeePage from './Pages/CoffeePage'
import ProductHeader from "./componets/ProductHeader/ProductHeader";

const Stack = createStackNavigator();

function MyStack()  {
    

    return(
    <CoffeePage/>
    
      // <Stack.Navigator>
      //   <Stack.Screen name="Intro" component={Intro}  options={{ title: false }}/>
      //   <Stack.Screen name="Login" component={Login}/>
      //   <Stack.Screen name="Signin" component={Signin}/>
      // </Stack.Navigator>
    )
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

  