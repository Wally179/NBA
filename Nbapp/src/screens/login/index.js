import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView style={styles.fundo}>
      <Image
        source={require("../../../img/Rectangle1.png")}
        style={styles.back}
      />
      <Image
        source={require("../../../img/Rectangle2.png")}
        style={styles.back}
      />
      <Image
        source={require("../../../img/Rectangle3.png")}
        style={styles.back1}
      />
      <Image source={require("../../../img/Icone.png")} style={styles.logo} />
      <View style={styles.conteudo}>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.login}>Email</Text>
        <TextInput />
        <Text style={styles.login}>Senha</Text>
        <TextInput />
        <Text style={styles.login}>Esqueceu a senha</Text>
      </View>
    </SafeAreaView>
  );
}
