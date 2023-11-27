import { StyleSheet } from "react-native"
export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#12131e',
    },
    imagem:{
        width: 290, 
        height: 44,
        marginVertical: 20
    },
    textinput: {
        height: 50,
        width: 300,
        paddingHorizontal: 10,
        margin: 5,
        backgroundColor: "#fff",
    },
    botao: {
        alignItems: 'center',
        backgroundColor: '#2d4bca',
        padding: 10,
        width: 300,
        height: 50,
        margin: 6,
        borderRadius: 15,
    },
    textoButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    texto: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'left',
        margin: 15,
        marginLeft: 35
    },
    textoLink:{
        color: 'blue',
        fontSize: 18,
    },
    fade: {
        alignItems: 'center',
        backgroundColor: '#121212',
        paddingVertical: 50,
        paddingHorizontal: 30,
        borderRadius: 15,
        opacity: 0.6,
        width: 365,
        height: 450,
    },
    background: {
        width: '100%',
        height: '100%',
        opacity: 0.2,
        position: 'absolute',
    },
})