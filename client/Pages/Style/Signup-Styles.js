import { StyleSheet } from 'react-native';

export const landscape = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: 'row'
  },
  logoContainer: {
    backgroundColor: "#454545",
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#25AAFB",
    borderRadius: 4,
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
    borderWidth: 3,
    borderColor: 'red',
  },
  input: {
    width: '100%',
    height: '7.5%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 10,
    marginBottom: '1.5%',
  },
  inputContainer: {
    height: "100%",
    width: "80%",
    alignSelf: 'center'
  },
  titleContainer: {
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  headerText: {
    color: '#424242',
    fontSize: 60,
    marginBottom: '-2%'
  },
  subHeaderText: {
    color: '#bababa',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  launchContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  launchButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    alignItems: 'center', width: '34%', height: '17%',
    borderRadius: 5, margin: 1,
    justifyContent: 'center',

  },
  launchText: {
    color: 'yellowgreen',
    fontSize: 30,
  },
  cancelText: {
    color: 'red',
    fontSize: 22,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '10%',
  },
  pinInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    width: '15%',
    fontSize: 20,
    textAlign: 'center',
    margin: '0.5%',
  },
})

export const portrait = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    marginTop: '2%',
    flex: 1,
  },
  button: {
    backgroundColor: "#25AAFB",
    borderRadius: 4,
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
  input: {
    width: '100%',
    height: '7.5%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 10,
    marginBottom: '1.5%',
  },
  inputContainer: {
    width: "90%",
  },
  titleContainer: {
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  headerText: {
    color: '#424242',
    fontSize: 42,
    marginBottom: '-5%',
  },
  subHeaderText: {
    color: '#bababa',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  launchContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  launchButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    alignItems: 'center', width: '45%', height: '10%', justifyContent: 'center',
    borderRadius: 5, margin: 1
  },
  launchText: {
    color: 'yellowgreen',
    fontSize: 22,
  },
  cancelText: {
    color: 'red',
    fontSize: 22,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '10%',
  },
  pinInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    width: '15%',
    fontSize: 20,
    textAlign: 'center',
    margin: '0.5%',
  },
})
