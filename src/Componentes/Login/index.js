import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput, HelperText, Snackbar } from 'react-native-paper';
import { logar } from "../../servicos/requisicoesFirebase";
import { estilos } from "./estilos";

export function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [secureMode, setSecureMode] = useState(true);
    const [statusError, setStatusError] = useState('')
    const [mensagemError, setMensagemError] = useState('')
    const [statusSnakbar, setStatusSnakbar] = useState(false)
    const [mensagemSnakbar, setMensagemSnakbar] = useState(false)

    async function fazerLogin() {
        if (email == '') {
            setMensagemError('E-mail não pode ficar vazio!')
            setStatusError('email')
        } else if (senha == '') {
            setMensagemError('Senha não pode ser em branco')
            setStatusError('senha')
        } else {
            setMensagemError('')
            setStatusError('')
            const resultado = await logar(email, senha)
            if (resultado == 'sucesso') {
                navigation.navigate('Planos', { email: email })
                setEmail('')
                setSenha('')
            } else
                setStatusSnakbar(true)
            setMensagemSnakbar("E-mail ou senha inválida")
            console.log(resultado)
        }
    }
    return (
        <View style={estilos.container}>
            <Image source={require('../../../assets/background.png')} style={estilos.background} />
            <View style={estilos.fade}>
            </View>
                <View style={{ opacity: 1, position: 'absolute' }}>
                    <Image style={estilos.imagem} source={require('../../../assets/logo.png')} />
                    <TextInput
                        label="E-mail"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        error={statusError == 'email'}
                        style={estilos.textinput} />
                    {statusError == 'email' ? <HelperText type="error" visible={statusError == 'email'}>
                        {mensagemError}
                    </HelperText> : null}
                    <TextInput
                        label="Senha"
                        value={senha}
                        onChangeText={setSenha}
                        error={statusError == 'senha'}
                        secureTextEntry={secureMode}
                        right={
                            <TextInput.Icon
                                icon={secureMode ? 'eye-off' : 'eye'}
                                onPress={() => setSecureMode(!secureMode)}
                            />
                        }
                        style={estilos.textinput} />
                    {statusError == 'senha' ? <HelperText type="error" visible={statusError == 'senha'}>
                        {mensagemError}
                    </HelperText> : null}
                    <Text style={estilos.texto}>Não tem conta?
                        <Text style={estilos.textoLink} onPress={() => navigation.navigate('Cadastro')}> Cadastre-se!</Text>
                    </Text>
                    <TouchableOpacity style={estilos.botao} onPress={() => fazerLogin()}>
                        <Text style={estilos.textoButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            <Snackbar visible={statusSnakbar} onDismiss={() => setStatusSnakbar(false)} duration={2000}
                action={{
                    label: 'OK',
                    onPress: () => {
                        setStatusSnakbar(false)
                    },
                }}>
                {mensagemSnakbar}
            </Snackbar>
        </View>
    )
}