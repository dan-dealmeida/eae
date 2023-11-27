import { StyleSheet, Text, TextInput, View } from "react-native"
import Botao from "../Components/Botao"
import { useState } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth_mod } from '../Firebase/conf';
import { useDispatch} from "react-redux"
import { reducerSetId } from '../../redux/uidSlice';


const NovaConta = (props) =>{

    const [txtEmail, setEmail] = useState('')
    const [txtSenha, setSenha] = useState('')
    const [txtSenha2, setSenha2] = useState('')
    const [txtAlerta, setAlerta] = useState('')

    const dispatch  = useDispatch()

    const validar = () => {

        if(txtSenha != txtSenha2){
            setAlerta("Senhas estão diferentes")
        
        }
        else if(txtEmail === "" ){
            setAlerta("Email Invalido")
        }
        else{
            setAlerta('')
            createUserWithEmailAndPassword(auth_mod, txtEmail, txtSenha)
                .then((user) => {
                    dispatch(reducerSetId({
                        uid: auth_mod.currentUser.uid
                      }))
                    props.navigation.navigate('TelaTeste')
                })
                .catch((error) => {
                    console.log(error)
                }) 
        }
    }
    
    return(
        <View style={estilo.tela}>
            <View style={estilo.parte1}>
                <View>
                    <Text style={estilo.Texto}>E-mail</Text>
                    <TextInput style={estilo.escrita} value={txtEmail} onChangeText={setEmail}/>
                </View>

                <View >
                    <Text style={estilo.Texto}>Senha</Text>
                    <TextInput style={estilo.escrita} secureTextEntry={true} value={txtSenha} onChangeText={setSenha}/>
                </View>

                <View>
                    <Text style={estilo.Texto}>Repetir Senha</Text>
                    <TextInput style={estilo.escrita} secureTextEntry={true} value={txtSenha2} onChangeText={setSenha2} />
                    <Text style={estilo.errou}>{txtAlerta}</Text>
                </View>
            </View>

            <View style={estilo.botao}>
                <Botao texto="CADASTRAR" funcao={validar}/>
            </View>

        </View>
    )
}


const estilo = StyleSheet.create({
    tela:{
        backgroundColor: '#372775',
        padding: 35,
        flex: 1
    },
    parte1:{
        flex: 0.75,
        justifyContent: "center",
        gap: 10
    },
    Texto:{
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 24,
        color: '#ffffff'
    },
    escrita:{
        backgroundColor: '#ffffff',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 24,
        color: '#3F92C5'

    },
    errou:{
        fontSize: 20,
        color: 'red'
    },
    botao:{
        flex: 0.25,
    }
})


export default NovaConta