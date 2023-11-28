import {View, Text, TextInput, StyleSheet} from 'react-native';
import Botao from '../Components/Botao';
import React, {useState} from 'react';
import {doc, setDoc, collection} from 'firebase/firestore';
import {db} from '../Firebase/conf';
import {useSelector} from 'react-redux';

const NovaPesquisa = props => {
  const [timeData, setTimeData] = useState(new Date());

  const [txtNome, setNome] = useState('');
  const [Imag, setImg] = useState('');
  const [alertaNome, setalertaNome] = useState('');
  const [alertaData, setalertaData] = useState('');
  const [alertaImg, setAlertaImg] = useState('');
  const uid = useSelector(state => state.id.uid);

  const validar = async () => {
    if (txtNome === '') {
      setalertaNome('Preencha o nome da pesquisa');
    } else if (timeData === '') {
      setalertaNome('');
      setalertaData('Preencha a data');
    } else if (Imag === '') {
      setalertaNome('');
      setalertaData('');
      setAlertaImg('Colocar a imagem');
    } else {
      try {
        const colecao = collection(db, uid);
        const novoDocRef = doc(colecao);

        const novoDocumento = {
          Pesquisa: txtNome,
          Data: timeData,
          ImgUrl: Imag,
          DocRef: novoDocRef.id,
        };

        await setDoc(novoDocRef, novoDocumento);

        setNome('');
        setTimeData('');
        setImg('');
        props.navigation.replace('Home');
      } catch (error) {
        console.error('Erro ao adicionar documento:', error);
      }
    }
  };

  return (
    <View style={estilo.tela}>
      <View style={estilo.parte1}>
        <View>
          <Text style={estilo.Texto}>Nome</Text>
          <TextInput
            style={estilo.escrita}
            value={txtNome}
            onChangeText={setNome}
          />
          <Text style={estilo.errou}>{alertaNome}</Text>
        </View>

        <View>
          <Text style={estilo.Texto}>Data</Text>

          <TextInput
            style={estilo.escrita}
            placeholder="Data"
            value={timeData}
            onChangeText={setTimeData}
          />
          <Text style={estilo.errou}>{alertaData}</Text>
        </View>

        <View>
          <Text style={estilo.Texto}>Imagem</Text>
          <TextInput
            style={estilo.escrita}
            placeholder="Câmera/Galeria de imagens"
            value={Imag}
            onChangeText={setImg}
          />
          <Text style={estilo.errou}>{alertaImg}</Text>
        </View>
      </View>

      <View style={estilo.vacuo} />

      <View>
        <Botao style={estilo.botao} texto="Cadastrar" funcao={validar} />
      </View>
    </View>
  );
};

const estilo = StyleSheet.create({
  tela: {
    backgroundColor: '#372775',
    padding: 35,
    flex: 1,
  },
  parte1: {
    flex: 0.75,
    justifyContent: 'center',
    gap: 5,
  },
  Texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
    color: '#ffffff',
  },
  escrita: {
    backgroundColor: '#ffffff',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
    color: '#3F92C5',
  },
  errou: {
    fontSize: 20,
    color: 'red',
  },
  botao: {
    flex: 0.1,
    justifyContent: 'center',
  },
  imagemPreview: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  vacuo: {
    flex: 0.15,
  },
});

export default NovaPesquisa;
