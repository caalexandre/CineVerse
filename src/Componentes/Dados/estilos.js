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
        fontWeight: 'bold',
    },
    textoDados: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    textoDados2: {
        fontSize: 24,
        color: '#fff',
    },
    logo: {
        width: 65,
        height: 50,
        position: 'absolute',
        top: 50,
        left: 10
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
    dados: {
        width: 75,
        height: 75,
        borderRadius: 2,
        marginHorizontal: 20
    },
    divDados: {
        marginLeft: -25,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,

    },
    botao: {
        alignItems: 'center',
        backgroundColor: '#2d4bca',
        padding: 10,
        width: 300,
        height: 50,
        marginTop: 100,
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