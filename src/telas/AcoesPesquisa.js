import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AcoesPesquisaScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            props.navigation.navigate('ModificarPesquisa')
          }}
        >
          <Icon name="edit-note" size={60} color="white" />
          <Text style={styles.cardText}>Modificar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            props.navigation.navigate('Coleta')
          }}
        >
          <Icon name="checklist-rtl" size={60} color="white" />
          <Text style={styles.cardText}>Coletar Dados</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            props.navigation.navigate('Relatorio')
          }}
        >
          <Icon name="donut-large" size={60} color="white" />
          <Text style={styles.cardText}>Relatório</Text>
        </TouchableOpacity>
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
  cardContainer: {
    marginBottom: 20, 
  },
  card: {
    width: 300,
    height: 150,
    backgroundColor: '#312464', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    color: 'white', 
    fontFamily: 'AveriaLibre-Bold', 
  },
});

export default AcoesPesquisaScreen;
