import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ColetaScreen = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.coletaText}>O que você achou do Carnaval 2024?</Text>

      <View style={styles.reaction}>
        <Icon name="mood" size={60} color="#25BC22" />
        <Text style={styles.messageText}>
          Exelente
        </Text>
      </View>

      <View style={styles.reaction}>
        <Icon name="sentiment-satisfied" size={60} color="#37BD6D" />
        <Text style={styles.messageText}>
          Bom
        </Text>
      </View>

      <View style={styles.reaction}> 
        <Icon name="sentiment-neutral" size={60} color="#FFC632" />
        <Text style={styles.messageText}>
          Neutro
        </Text>
      </View>

      <View style={styles.reaction}>
        <Icon name="sentiment-very-dissatisfied" size={60} color="#FF360A" />
        <Text style={styles.messageText}>
          Ruim
        </Text>
      </View>

      <View style={styles.reaction}>
        <Icon name="mood-bad" size={60} color="#D71616" />
        <Text style={styles.messageText}>
          Péssimo
        </Text>
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
  coletaText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'AveriaLibre-Bold', // Fonte personalizada
    marginBottom: 80,
    margin: 10,
    textAlign: 'center',
  },
  messageText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular', // Fonte personalizada
    marginBottom: 20,
  },
  reaction: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ColetaScreen;
