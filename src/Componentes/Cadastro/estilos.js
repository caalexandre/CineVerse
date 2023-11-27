import { StyleSheet } from "react-native"
export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#12131e'
    },
    input: {
        height: 50,
        width: 300,
        paddingHorizontal: 10,
        margin: 5,
        backgroundColor: "#fff",
        borderRadius: 10,
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
    texto: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'left',
        marginBottom: 15,
        marginTop: -7,
    },
    textoLink:{
        color: 'blue',
        fontSize: 18,
    },
    textoButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    imagem: {
        width: 300,
        height: 42,
    },
    logo: {
        width: 65,
        height: 50,
        position: 'absolute',
        top: 50,
        left: 10
    },  
    fade: {
        alignItems: 'center',
        backgroundColor: '#121212',
        paddingVertical: 50,
        paddingHorizontal: 30,
        borderRadius: 15,
    }
})