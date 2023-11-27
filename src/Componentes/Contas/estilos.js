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
    nomeConta: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        margin: 10
    },
    logo: {
        width: 200,
        height: 31,
        position: 'absolute',
        top: 90,
    },
    conta: {
        width: 140,
        height: 140,
        borderRadius: 2,
    },
    divConta: {
        marginVertical: 5,
        borderRadius: 5,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    divSair: {
        position: 'absolute',
        top: 55,
        right: 20,
    },  
    sair: {
        fontSize: 24,
        color: '#c20404',
    },
    
    
    
})