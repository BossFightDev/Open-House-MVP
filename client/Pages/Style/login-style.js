import { StyleSheet } from "react-native";
export const landscape = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#454545"
  },
  logo: {
    width: "33.3333%",
    height: "16%",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  loginContainer: {
    width: "33.3333%",
    height: "45%",
    justifyContent: "space-around"
  },
  inputTitle: {
    color: "white",
    fontSize: 14
  },
  inputContainer: {
    width: "100%",
    height: '20%',
    marginBottom: '17%',
  },
  input: {
    padding: "5%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 2,
    marginBottom: '1.5%',
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    width: "100%",
    height: '25%',
    borderRadius: 2,
    backgroundColor: "#25AAFB",
    alignItems: "center",
    justifyContent: "center",
    marginTop: '1%',
    padding: '11.5%',
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18
  },
  text: {
    color: "white",
    fontSize: 14,
    alignSelf: "center",
    marginTop: 20
  }
});

export const portrait = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#454545"
  },
  logo: {
    width: "50%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center"
  },
  loginContainer: {
    width: "50%",
    height: "40%",
    justifyContent: "space-around",
    alignContent: "center",
  },
  inputTitle: {
    color: "white",
    fontSize: 10
  },
  inputContainer: {
    width: "100%",
    height: '20%',
    marginBottom: '17%',
  },
  input: {
    padding: "5%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 2,
    marginBottom: '1.5%',
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    width: "100%",
    height: '25%',
    borderRadius: 2,
    backgroundColor: "#25AAFB",
    alignItems: "center",
    justifyContent: "center",
    marginTop: '1%',
    padding: '11.5%',
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14
  },
  text: {
    color: "white",
    fontSize: 10,
    alignSelf: "center",
    marginTop: '5%',
  }
});
