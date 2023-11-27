import { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { TextInput, HelperText, Snackbar } from 'react-native-paper';
import { cadastrar } from "../../servicos/requisicoesFirebase";
import { estilos } from "./estilos";

export function Cadastrar({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')
    const [statusError, setStatusError] = useState('')
    const [mensagemError, setMensagemError] = useState('')
    const [statusSnakbar, setStatusSnakbar] = useState(false)
    const [mensagemSnakbar, setMensagemSnakbar] = useState(false)

    function limpaCampos() {
        setEmail('')
        setSenha('')
        setConfirmaSenha('')
        navigation.navigate('Login')
    }
    async function realizarCadastro() {
        if (email == '') {
            setMensagemError('E-mail não pode ficar vazio!')
            setStatusError('email')
        } else if (senha == '') {
            setMensagemError('Senha não pode ser em branco')
            setStatusError('senha')
        } else if (confirmaSenha == '') {
            setMensagemError('Confirmação de Senha não pode ser vazio')
            setStatusError('confirmaSenha')
        } else if (senha != confirmaSenha) {
            setMensagemError('Senhas não conferem')
            setStatusError('senhaNaoConfere')
        }
        else {
            const resultado = await cadastrar(email, senha)
            setStatusSnakbar(true)
            if (resultado == 'sucesso') {
                setMensagemSnakbar("E-mail cadastrado com sucesso!")
                setTimeout(limpaCampos, 3000)
            }
            else {
                setMensagemSnakbar(resultado)
            }
            setMensagemError('')
            setStatusError('')
        }
    }
    return (
        <View style={estilos.container}>
            <Image style={estilos.imagem} source={require('../../../assets/criar-conta.png')} />
            <Image style={estilos.logo} source={require('../../../assets/logo2.png')} />
            
            <View style={estilos.fade}>
                <TextInput
                    label="E-mail"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    mode="outlined"
                    error={statusError == 'email'}
                    style={estilos.input} />
                {statusError == 'email' ? <HelperText type="error" visible={statusError == 'email'}>
                    {mensagemError}
                </HelperText> : null}
                <TextInput
                    label="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    mode="outlined"
                    error={statusError == 'senha'}
                    secureTextEntry
                    style={estilos.input} />
                {statusError == 'senha' ? <HelperText type="error" visible={statusError == 'senha'}>
                    {mensagemError}
                </HelperText> : null}
                <TextInput
                    label="Confirmar Senha"
                    value={confirmaSenha}
                    onChangeText={setConfirmaSenha}
                    mode="outlined"
                    error={statusError == 'confirmaSenha'}
                    secureTextEntry
                    style={estilos.input} />
                {statusError == 'confirmaSenha' ? <HelperText type="error" visible={statusError == 'confirmaSenha'}>
                    {mensagemError}
                </HelperText> : null}
                <HelperText type="error" visible={statusError == 'senhaNaoConfere'}>
                    {mensagemError}
                </HelperText>
                <Text style={estilos.texto}>Já possui conta?
                    <Text style={estilos.textoLink} onPress={() => navigation.navigate('Login')}> Faça login!</Text>
                </Text>
                <TouchableOpacity
                    style={estilos.botao} onPress={() => realizarCadastro()}>
                    <Text style={estilos.textoButton}>Cadastrar</Text>
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