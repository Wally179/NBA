import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/login";

const { Navigator, Screen } = createNativeStackNavigator();

export default function () {
  return (
    <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
