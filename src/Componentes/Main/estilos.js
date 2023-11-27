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
        fontSize: 24,
        color: '#fff',
        marginBottom: 15,
        position: 'absolute',
        left: 20,
        top: 150
    },

    logo: {
        width: 200,
        height: 31,
        position: 'absolute',
        top: 90,
        left: 20
    },
    divSair: {
        position: 'absolute',
        top: 95,
        right: 20,
    },
    sair: {
        fontSize: 24,
        color: '#c20404',
    },
    cartaz: {
        width: 300,
        height: 150,
        borderRadius: 10,

    },
    filme: {
        width: 125,
        height: 170,
        margin: 10
    },
    estande: {
        marginTop: 110,
        marginBottom: -15,
    },

    scrollview: {
        padding: 0,
        marginTop: 50,
        marginBottom: -80,
    },
})