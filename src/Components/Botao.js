import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Botao = (props) => {

    const texto = props.texto

    

    return(
        <TouchableOpacity style={estilo.fundo} onPress={props.funcao}>
            <Text style={estilo.texto}>{texto}</Text>
        </TouchableOpacity>
    )

}

const estilo = StyleSheet.create({
    fundo:{
        backgroundColor: '#37BD6D',
    },
    texto:{
        fontSize: 24,
        height: 38,
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'AveriaLibre-Regular'
    }

})

export default Botao
