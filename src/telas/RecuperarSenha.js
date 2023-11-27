import {StyleSheet, Text, TextInput, View} from 'react-native';
import Botao from '../Components/Botao';
import {useState} from 'react';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';
import {auth_mod} from '../Firebase/conf';
import {fetchSignInMethodsForEmail} from 'firebase/auth';

const RecuperarSenha = props => {
  const [txtEmail, setEmail] = useState('');
  const [txtError, setError] = useState('');
  const [txtFoi, setFoi] = useState('');

  const validar = () => {
    if (txtEmail === '') {
      setError('E-mail inválido');
    } else {
      setError('');

      const auth = getAuth();

      fetchSignInMethodsForEmail(auth, txtEmail)
        .then(methods => {
          if (methods && methods.length > 0) {
            sendPasswordResetEmail(auth, txtEmail)
              .then(() => {
                console.log('E-mail enviado com sucesso');
                setFoi('E-mail Enviado com Sucesso');
              })
              .catch(error => {
                console.error('Erro ao enviar e-mail de redefinição:', error);
                setError('Erro ao enviar e-mail de redefinição');
                setFoi('');
              });
          } else {
            setError('E-mail não cadastrado');
            setFoi('');
          }
        })
        .catch(error => {
          console.error('Erro ao verificar e-mail:', error);
          setError('Erro ao verificar o e-mail');
          setFoi('');
        });
    }
  };

  return (
    <View style={estilo.tela}>
      <View style={estilo.cImput}>
        <Text style={estilo.Texto}>E-mail: </Text>
        <TextInput
          style={estilo.escrita}
          value={txtEmail}
          onChangeText={setEmail}
        />
        <Text style={estilo.erroou}>{txtError}</Text>
        <Text style={estilo.foi}>{txtFoi}</Text>
      </View>

      <View style={estilo.cBotao}>
        <Botao texto="Recuperar" funcao={validar} />
      </View>
    </View>
  );
};

const estilo = StyleSheet.create({
  erroou: {
    fontSize: 20,
    color: 'red',
  },
  foi: {
    fontSize: 20,
    color: 'green',
  },
  Texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
    color: '#ffffff',
  },
  tela: {
    backgroundColor: '#372775',
    padding: 35,
    flex: 1,
  },
  escrita: {
    backgroundColor: '#ffffff',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
    color: '#3F92C5',
  },
  cImput: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  cBotao: {
    flex: 0.25,
    justifyContent: 'center',
  },
});

export default RecuperarSenha;
