import {View, Text, TextInput, StyleSheet} from 'react-native';
import Botao from '../Components/Botao';
import React, {useState, useEffect} from 'react';
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import {db} from '../Firebase/conf';
import {useSelector} from 'react-redux';

const ModificarPesquisa = props => {
  const cardData = props.route.params;
  const documentoId = cardData.cardData.card.DocRef;

  const teste = () => {
    console.log(cardData);
  };

  const [timeData, setTimeData] = useState(cardData.cardData.card.Data);

  const [txtNome, setNome] = useState(cardData.cardData.card.Pesquisa);
  const [Imag, setImg] = useState(cardData.cardData.card.ImgUrl);
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
      const novoDocumento = {
        Pesquisa: txtNome,
        Data: timeData,
        ImgUrl: Imag,
      };

      try {
        const docRef = doc(db, uid, cardData.cardData.card.docRef);

        await setDoc(docRef, novoDocumento);

        setNome('');
        setTimeData('');
        setImg('');
        props.navigation.replace('Home');
      } catch (error) {
        console.error('Erro ao adicionar documento:', error);
      }
    }
  };

  const update = async () => {
    const docRef = doc(db, uid, documentoId);

    const novosDados = {
      Pesquisa: txtNome,
      Data: timeData,
      ImgUrl: Imag,
    };

    try {
      await updateDoc(docRef, novosDados);
      setNome('');
      setTimeData('');
      setImg('');
      props.navigation.replace('Home');
    } catch (error) {
      console.error('Erro ao modificar o documento:', error);
    }
  };

  const excluirDocumento = async () => {
    const docRef = doc(db, uid, documentoId);

    try {
      await deleteDoc(docRef);
      console.log('Documento excluído com sucesso!');
      setNome('');
      setTimeData('');
      setImg('');
      props.navigation.replace('Home');
    } catch (error) {
      console.error('Erro ao excluir o documento:', error);
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
        <Botao style={estilo.botao} texto="Modificar" funcao={update} />
      </View>

      <View>
        <Botao
          style={estilo.botao2}
          texto="Excluir"
          funcao={excluirDocumento}
        />
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
  botao2: {
    flex: 0.1,
    justifyContent: 'center',
    color: 'red',
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

export default ModificarPesquisa;
