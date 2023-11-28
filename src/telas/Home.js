import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../Components/Header/index';
import Card from '../Components/Card/index';
import {collection, query, where, getDocs} from 'firebase/firestore';
import {db} from '../Firebase/conf';
import {useSelector} from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeith = Dimensions.get('window').height;

const Home = props => {
  const [txtPesquisa, setPesquisa] = useState('Insira o termo de busca...');
  const [userCards, setUserCards] = useState([]);
  const uid = useSelector(state => state.id.uid);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userCollectionRef = collection(db, uid);
        const querySnapshot = await getDocs(userCollectionRef);

        const cardsData = [];
        querySnapshot.forEach(doc => {
          console.log('opa');
          console.log(doc.data());
          const card = doc.data();
          cardsData.push(card);
        });

        setUserCards(cardsData);
      } catch (error) {
        console.error('Erro ao buscar os cards:', error);
      }
    };

    fetchData();
  }, []);

  const irNovaPesquisa = () => {
    props.navigation.navigate('NovaPesquisa');
  };

  const irDetalhesDoCard = card => {
    props.navigation.navigate('AcoesPesquisa', {
      card,
    });
  };

  return (
    <View style={estilos.view}>
      <View style={estilos.header}>
        <Header />
      </View>

      <View style={estilos.pesquisa}>
        <TextInput
          value={txtPesquisa}
          onChangeText={setPesquisa}
          style={{backgroundColor: 'white'}}
        />
      </View>

      <View style={{height: windowHeith * 0.7, overflow: 'hidden'}}>
        <ScrollView>
          {userCards.map((card, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => irDetalhesDoCard(card)}>
              <Card
                key={index}
                texto={card.Pesquisa}
                data={card.Data}
                docRef={card.DocRef}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={estilos.viewBotao}>
        <TouchableOpacity style={estilos.botao} onPress={irNovaPesquisa}>
          <Text style={estilos.botaoText}>Nova Pesquisa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: windowHeith,
  },
  header: {
    backgroundColor: '#2B1D62',
    top: 0,
    height: windowHeith * 0.05,
    padding: 5,
  },
  pesquisa: {
    padding: 0.1,
    marginLeft: windowWidth * 0.1,
    marginRight: windowWidth * 0.1,
  },
  viewBotao: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#37BD6D',
    alignItems: 'center',
  },
  botaoText: {
    fontSize: 28,
    color: '#FFFFFF',
    fontFamily: 'Averia Libre',
  },
});
export default Home;
