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
        fontSize: 32,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
    },
    metodoTexto: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10
    },
    logo: {
        width: 65,
        height: 50,
        position: 'absolute',
        top: 50,
        left: 10
    },
    metodo: {
        width: 75,
        height: 75,
        borderRadius: 2,
    },
    divMetodo: {
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
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