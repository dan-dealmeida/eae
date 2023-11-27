import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator()


const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#2b1d62'}, headerTintColor: '#573fba', headerTitleStyle: {color: '#ffffff', fontSize: 26} }}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="NovaConta" component={NovaConta}/>
                <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}/>
                <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} />
                <Stack.Screen name="Relatorio" component={Relatorio}/>
                <Stack.Screen name="NovaPesquisa" component={NovaPesquisa}/>
                <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa}/>
                <Stack.Screen name="Coleta" component={Coleta}/>
                <Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao}/>

                
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default App