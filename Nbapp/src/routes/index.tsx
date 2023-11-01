import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./stack/";

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
