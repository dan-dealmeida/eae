import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

const Card = props => {
  const texto = props.texto;
  const data = props.data;
  const imagemUrl = props.imagemUrl;
  const DocRef = props.docRef;

  return (
    <View style={estilo.view}>
      <Image source={require('../../assets/Vector.png')} />
      <Text style={estilo.cardTitle}> {texto} </Text>
      <Text style={estilo.cardDate}>{data}</Text>
    </View>
  );
};

const estilo = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    alignItems: 'center',
    padding: 40,
    borderRadius: 10,
  },
  cardTitle: {
    fontFamily: 'Averia Libre',
    color: '#3F92C5',
    fontSize: 36,
  },
  cardDate: {
    fontFamily: 'Averia Libre',
    fontSize: 16,
  },
});

export default Card;
