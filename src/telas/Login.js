import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth_mod } from '../Firebase/conf';
import { useDispatch} from "react-redux"
import { reducerSetId } from '../../redux/uidSlice';
import { configureLayoutAnimations } from 'react-native-reanimated/lib/typescript/reanimated2/core';


const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const dispatch  = useDispatch()

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
    return isValid;
  };

  const handleLogin = () => {
    if (validateEmail()) {
      signInWithEmailAndPassword(auth_mod, email, password)
        .then((user) => {
          dispatch(reducerSetId({
            uid: auth_mod.currentUser.uid
          }))
          props.navigation.navigate('TelaTeste')
        })
        .catch((error) =>{
          console.log(error)
        })
    }
  };

  const handleForgotPassword = () => {
    props.navigation.navigate('RecuperarSenha')
  };

  const handleCreateAccount = () => {
    props.navigation.navigate('NovaConta')
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Satisfying.you</Text>
        <Icon name="mood" size={60} color="white" />
      </View>
      <View style={styles.txtInput}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={[styles.input, !isEmailValid && styles.inputError]}
        />
        {!isEmailValid && (
          <Text style={styles.errorText}>Por favor, insira um email válido.</Text>
        )}
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Entrar"
            onPress={handleLogin}
            color="#37BD6D"
          />
        </View>
        <View style={styles.buttonContainer2}>
          <Button
            title="Criar conta"
            onPress={handleCreateAccount}
            color="#419ED7"
          />
        </View>
        <View style={styles.buttonContainer2}>
          <Button
            title="Esqueci a senha"
            onPress={handleForgotPassword}
            color="#B5C7D1"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#372775',
  },
  headerContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    marginRight: 10, 
    fontFamily: 'AveriaLibre-Bold',
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#3F92C5',
    backgroundColor: 'white',
    fontFamily: 'AveriaLibre-Regular',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: '#FD7979',
    marginBottom: 10,
  },
  buttonContainer: {
    marginBottom: 25,
  },
  buttonContainer2: {
    marginBottom: 10,
  },
});

export default LoginScreen;
