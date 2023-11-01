import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: "#0E0E0E",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  back: {
    width: "100%",
    position: "absolute",
    top: 0,
  },
  back1: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  login: {
    color: "#fff",
    fontSize: 36,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    paddingTop: 10,
  },
  logo: {
    height: "15%",
    width: "15%",
  },
  logo2: {
    height: 20,
    width: 20,
  },
  conteudo: {
    width: "100%",
    padding: 16,
    height: "50%",
    marginTop: "10%",
  },
  imput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    padding: 8,
  },
  button: {
    backgroundColor: "white",
    width: 45,
    height: 45,
    borderRadius: 5,
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  linha: {
    flexDirection: "row",
    width: "100%",
  },
  esqsenha: {
    width: "100%",
    color: "#fff",
    textAlign: "right",
  },
  btnlogin: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    width: "35%",
    alignItems: "center",
    position: "absolute",
    bottom: 60,
  },
  btn: {
    color: "#fff",
    fontSize: 20,
  },
  bot: {
    height: "30%",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default styles;
