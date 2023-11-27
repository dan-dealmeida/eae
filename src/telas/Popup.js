
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Botao from "../Components/Botao"
import { useState } from "react"





const Popup = () =>{
    
    const [modalVisible, setModal] = useState(false)
    
    const abrir = () =>{
        setModal(true)
    }

    const apagar = () =>{
        props.navigation.navigate('Tela2')
    }

    return(
        <View>
            <Botao texto="Popup" funcao={abrir} />

            <Modal>
                <View>
                    <Text> Tem certez de apagar? </Text>
                </View>
                <View>
                    <View>
                        <TouchableOpacity onPress={apagar}>
                            <Text>Sim</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={setModal(false)}>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
            
        </View>

    )
}

const estilo = StyleSheet.create({
    tela:{
        flex: 1,

    }
})



export default Popup