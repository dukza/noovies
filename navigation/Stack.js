import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "black",
        borderBottomColor: "black",
        shadowColor: "black"
      },
      headerTintColor: "white",
      headerBackTitleVisible: false
    }}
  >
    {/* <Stack.Screen name="Home" component={Home} /> */}
    <Stack.Screen name="Tab" component={Tabs} />
    {/* <Stack.Screen name="Detail" component={Detail} options={{headerStyle:}}/> */}
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);