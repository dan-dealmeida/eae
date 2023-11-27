import { Image, StyleSheet, Text, View } from "react-native"

const Relatorio = () => {
    return(
        <View style={estilo.tela}>
            <Image style={estilo.grafico} source={{uri:'https://www.alura.com.br/artigos/assets/grafico-de-pizza/img-01.png'}}/>
        </View>
    )
}

const estilo = StyleSheet.create({
    tela:{
        backgroundColor: '#372775',
        flex: 1,
        padding: 25
    },
    grafico:{
        width : 350,
        height: 300,
        marginTop: 150,
        justifyContent: "center"
    }
})



export default Relatorio