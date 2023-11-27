import {View, Text, TextInput, StyleSheet} from 'react-native';
import {useState} from 'react';
import Botao from '../Components/Botao';
import {db} from '../Firebase/conf';
import {doc, setDoc, getDocs, collection} from 'firebase/firestore';

//importação para usar o redux
import {useSelector} from 'react-redux';

const TelaTeste = props => {
  const [txtEmail, setEmail] = useState('');
  const [txtola, setola] = useState('');

  const uid = useSelector(state => state.id.uid); // variavel que recebe o valor da store
  // agora tu tem o uid para usar no app

  const teste = async () => {
    console.log('bahgui');
    const querySnapshot = await getDocs(collection(db, uid));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  const mostraEmail = () => {
    setola('Ola Viado');
  };

  return (
    <View>
      <View>
        <Text style={estilo.texto}>Email {uid} </Text>
        <TextInput
          style={estilo.fundo}
          value={txtEmail}
          onChangeText={setEmail}
        />

        <Text>{txtEmail}</Text>
        <Text>{txtola}</Text>

        <Botao texto="Email" funcao={teste} />
      </View>

      <View />
    </View>
  );
};

const estilo = StyleSheet.create({
  fundo: {
    backgroundColor: '#37BD6D',
  },
  texto: {
    color: 'blue',
    fontSize: 26,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default TelaTeste;
