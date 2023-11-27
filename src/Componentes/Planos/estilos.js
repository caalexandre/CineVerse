import { StyleSheet } from "react-native"
export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#12131e',
        paddingTop: 80
    },
    texto: {
        fontSize: 36,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
    },
    bottomTexto: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
    },
    logo: {
        width: 65,
        height: 50,
        position: 'absolute',
        top: 50,
        left: 10
    },
    plano: {
        width: 350,
        height: 65,
        borderRadius: 2,
    },
    divPlano: {
        marginVertical: 20,
        backgroundColor: '#fff',
        borderRadius: 2,
        padding: 4
    },
    divVoltar: {
        position: 'absolute',
        top: 70,
        right: 10
    },  
    voltar: {
        width: 30,
        height: 30,
    },
    botao: {
        alignItems: 'center',
        backgroundColor: '#2d4bca',
        padding: 10,
        width: 300,
        height: 50,
        margin: 30,
        borderRadius: 15,
    },
    textoButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    pontos: {
        color: '#fff',
        fontSize: 70,
        padding: 0,
        position: 'absolute',
        bottom: 30
    }
})