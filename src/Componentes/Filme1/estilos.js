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
        fontSize: 22,
        color: '#fff',
        margin: 10,
        textAlign: 'center',
    },

    logo: {
        width: 200,
        height: 31,
        position: 'absolute',
        top: 60,
    },
    divVoltar: {
        position: 'absolute',
        top: 95,
        right: 20
    },  
    voltar: {
        width: 30,
        height: 30,
    },
    img: {
        width: 350,
        height: 180,
        borderRadius: 5,
    },
    play: {
        width: 50,
        height: 50,
        position: 'absolute',
    },
    estrelas: {
        marginTop: 30,
        width: 120,
        height: 20,
        right: 130
    },
    sinopse: {
        fontSize: 24,
        color: '#2d4bca',
        margin: 10,
        fontWeight: 'bold',
        right: 150,
        marginTop: 30,
    },
    semelhantes: {
        fontSize: 22,
        color: '#2d4bca',
        margin: 10,
        fontWeight: 'bold',
        right: 95,
        marginTop: 30,
    },
    textoSinopse: {
        fontSize: 18,
        color: '#fff'
    }
})