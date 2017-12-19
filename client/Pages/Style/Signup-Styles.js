import { StyleSheet } from 'react-native';

export const landscape = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    marginTop: '2%',
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
    marginTop: '5%',
  },
  welcomeText: {
    fontSize: 42,
    marginBottom: '-5%',
  },
  signinText: {
    fontSize: 18,
  },
})

export const portrait = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    marginTop: '2%',
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
  welcomeText: {
    fontSize: 42,
    marginBottom: '-5%',
  },
  signinText: {
    fontSize: 18,
  },
})
