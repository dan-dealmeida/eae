import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AgradecimentoParticipacao = ({ navigation }) => {
  // Função para navegar para a tela de Coleta após 3 segundos
  const navigateToColeta = () => {
    navigation.navigate('Coleta'); 
  };

  // Use useEffect para iniciar o temporizador quando a tela for exibida
  useEffect(() => {
    const timer = setTimeout(() => {
      navigateToColeta();
    }, 3000); // 3 segundos

    // Limpe o temporizador quando a tela for desmontada para evitar vazamentos de memória
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.thankYouText}>Obrigado por participar!</Text>
      <Text style={styles.messageText}>
        Aguardamos você no próximo ano!
      </Text>
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
  thankYouText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'AveriaLibre-Bold',
    marginBottom: 20,
  },
  messageText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    marginBottom: 20,
  },
});

export default AgradecimentoParticipacao;
