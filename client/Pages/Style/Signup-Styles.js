import { StyleSheet } from 'react-native';

export const landscape = StyleSheet.create({
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
    backgroundColor: '#007AFF',
    borderRadius: 4,
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
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
    width: "75%",
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
    alignItems: 'center', width: '45%',
    borderRadius: 5, margin: 1,
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
    backgroundColor: '#007AFF',
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
    alignItems: 'center', width: '45%',
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
