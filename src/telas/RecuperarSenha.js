import { StyleSheet, Text, TextInput, View } from "react-native";
import Botao from "../Components/Botao";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth_mod } from "../Firebase/conf";

const RecuperarSenha = (props) =>{

    const [txtEmail, setEmail] = useState('')
    const [txtError, setError] = useState('')

    

    const validar = () => {
        if(txtEmail === ""){
            setError('E-mail invalido')
        }
        else{
            setError("")

            sendPasswordResetEmail(auth_mod, txtEmail)
            .then((user) =>{
                console.log("Email envia com sucesso")
            })
            .catch((error) =>{
                console.log("Email invalido")
            })
        }
        
    }

    return(
        <View style={estilo.tela}>
            <View style={estilo.cImput}>
                <Text style={estilo.Texto} >E-mail: </Text>
                <TextInput style={estilo.escrita}  value={txtEmail} onChangeText={setEmail}/>
                <Text style={estilo.erroou}>{txtError}</Text>
            </View>

            <View style={estilo.cBotao}>
                <Botao texto="Recuperar" funcao={validar}/>
            </View>

        </View>

    )
}

const estilo = StyleSheet.create({
    erroou:{
        fontSize: 20,
        color: 'red'
    },
    Texto:{
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 24,
        color: '#ffffff'
    },
    tela:{
        backgroundColor: '#372775',
        padding: 35,
        flex: 1
        
    },
    escrita:{
        backgroundColor: '#ffffff',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 24,
        color: '#3F92C5'
    },
    cImput:{
        flex: 0.5,
        justifyContent: "flex-end"

        
    },
    cBotao:{
        flex: 0.25,
        justifyContent: "center"
    }
})

export default RecuperarSenha