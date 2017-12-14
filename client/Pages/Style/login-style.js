import { StyleSheet } from 'react-native';
export const landscape = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#454545"
  },
  logo: {
    width: "33.3333%",
    height: '16%',
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  loginContainer: {
    width: "33.3333%",
    height: "45%",
    justifyContent: 'space-around'
  },
  inputTitle: {
    fontFamily: "Montserrat-Regular", 
    color: 'white', 
    fontSize:14 
  },
  inputContainer: {
    width: "100%",
    height: 45,
  },
  input: {
    marginTop: 2,
    height: 50,
    width: '100%',
    backgroundColor: "white",
    borderRadius: 2
},
  button: {
    width: "100%",
    height: 50,
    borderRadius: 2,
    marginBottom: 10,
    marginTop: 15,
    backgroundColor: '#25AAFB',
    alignItems: 'center',
    justifyContent: 'center',
},
buttonText: {
  color: "#fff",
  textAlign: "center",
  fontFamily: "Montserrat-Bold",
  fontSize: 18
},
  text: { 
    fontFamily: "Montserrat-Regular", 
    color: 'white', 
    fontSize:14,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export const portrait = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#454545"
  },
  logo: {
    width: "50%",
    height: '10%',
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  loginContainer: {
    width: "50%",
    height: "35%",
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  inputTitle: {
    fontFamily: "Montserrat-Regular", 
    color: 'white', 
    fontSize:10 
  },
  inputContainer: {
    width: "100%",
    height: 35,
  },
  input: {
    marginTop: 2,
    height: 35,
    width: '100%',
    backgroundColor: "white",
    borderRadius: 2
  },
  button: {
    width: "100%",
    height: 35,
    borderRadius: 2,
    backgroundColor: '#25AAFB',
    alignItems: 'center',
    justifyContent: 'center',
},
buttonText: {
  color: "#fff",
  textAlign: "center",
  fontFamily: "Montserrat-Bold",
  fontSize: 14
},
  text: {
    fontFamily: "Montserrat-Regular", 
    color: 'white', 
    fontSize:10,
    alignSelf: 'center',
    marginTop: 15,
  },
});