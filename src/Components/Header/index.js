//Importacao
import React from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';

//Definicao
const Header = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.funcao}>
        <Image
          source={require('../../assets/hamburgerIcon.png')}
          style={{resizeMode: 'center'}}
        />
      </TouchableOpacity>
    </View>
  );
};
//Exportacao
export default Header;
