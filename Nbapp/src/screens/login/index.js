import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";
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
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.imput} />
        <Text style={styles.text}>Senha</Text>
        <TextInput style={styles.imput} />
        <TouchableOpacity
          onPress={() => console.log("Botão senha pressionado")}
        >
          <Text style={styles.esqsenha}>Esqueceu a senha</Text>
        </TouchableOpacity>
        <View style={styles.linha}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Botão 1 pressionado")}
          >
            <Image
              source={require("../../../img/google-icon.png")}
              style={styles.logo2}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Botão 2 pressionado")}
          >
            <FontAwesome name="facebook-square" size={25} color="#395185" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Botão 3 pressionado")}
          >
            <FontAwesome name="apple" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bot}>
        <TouchableOpacity
          onPress={() => console.log("Botão login pressionado")}
          style={styles.btnlogin}
        >
          <Text style={styles.btn}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
