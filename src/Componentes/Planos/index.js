import { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { estilos } from "./estilos";

export function Planos({ navigation }) {
    const [color1, setColor1] = useState('#12131e')
    const [color2, setColor2] = useState('#12131e')
    const [color3, setColor3] = useState('#12131e')

    function elite() {
        setColor1('#fff')
        setColor2('#12131e')
        setColor3('#12131e')
    }

    function gold() {
        setColor1('#12131e')
        setColor2('#fff')
        setColor3('#12131e')
    }

    function verse() {
        setColor1('#12131e')
        setColor2('#12131e')
        setColor3('#fff')
    }

    return (
        <View style={estilos.container}>
            <Image style={estilos.logo} source={require('../../../assets/logo2.png')} />
            <TouchableOpacity style={estilos.divVoltar} onPress={() => navigation.navigate('Login')}>
                <Image style={estilos.voltar} source={require('../../../assets/voltar.png')} />
            </TouchableOpacity>
            <Text style={estilos.texto}>Bem vindo ao{'\n'}<Text style={{ color: '#2562D3' }}>CineVerse</Text></Text>
            <Text style={estilos.bottomTexto}>Antes de prosseguir você precisa escolher {'\n'}  um plano de assinatura:</Text>
            <TouchableOpacity style={[estilos.divPlano, { backgroundColor: color1 }]} onPress={elite}>
                <Image style={estilos.plano} source={require('../../../assets/Planos/CineElite.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={[estilos.divPlano, { backgroundColor: color2 }]} onPress={gold}>
                <Image style={estilos.plano} source={require('../../../assets/Planos/CineGold.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={[estilos.divPlano, { backgroundColor: color3 }]} onPress={verse}>
                <Image style={estilos.plano} source={require('../../../assets/Planos/CineVerse.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Pagamento')}>
                <Text style={estilos.textoButton}>Continuar</Text>
            </TouchableOpacity>
            <Text style={estilos.pontos}>
                <Text style={{ color: '#2d4bca' }}>.</Text>
                <Text>.</Text>
                <Text>.</Text>
            </Text>
        </View>
    )
}