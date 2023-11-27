import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "./src/Componentes/Login"
import { Cadastrar } from "./src/Componentes/Cadastro"
import { Planos } from "./src/Componentes/Planos"
import { Pagamento } from "./src/Componentes/Pagamento"
import { Dados } from "./src/Componentes/Dados"
import { Contas } from "./src/Componentes/Contas"
import { Main } from "./src/Componentes/Main"
import { Filme1 } from "./src/Componentes/Filme1"

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false}} />
                <Stack.Screen name='Cadastro' component={Cadastrar} options={{ headerShown: false}} />
                <Stack.Screen name='Planos' component={Planos} options={{ headerShown: false}} />
                <Stack.Screen name='Pagamento' component={Pagamento} options={{ headerShown: false}} />
                <Stack.Screen name='Dados' component={Dados} options={{ headerShown: false}} />
                <Stack.Screen name='Contas' component={Contas} options={{ headerShown: false}} />
                <Stack.Screen name='Main' component={Main} options={{ headerShown: false}} />
                <Stack.Screen name='Filme1' component={Filme1} options={{ headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}