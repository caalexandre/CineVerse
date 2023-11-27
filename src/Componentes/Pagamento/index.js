import { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { estilos } from "./estilos";

export function Pagamento({ navigation }) {
    const [selecionado, setSelecionado] = useState()
    const [color1, setColor1] = useState('transparent');
    const [color2, setColor2] = useState('transparent')
    const [color3, setColor3] = useState('transparent')

    function cartao() {
        setColor1('#2f3147')
        setColor2('transparent')
        setColor3('transparent')
        setSelecionado(1)
    }

    function boleto() {
        setColor1('transparent')
        setColor2('#2f3147')
        setColor3('transparent')
        setSelecionado(2)
    }

    function pix() {
        setColor1('transparent')
        setColor2('transparent')
        setColor3('#2f3147')
        setSelecionado(3)
    }
    return (
        <View style={estilos.container}>
            <Image style={estilos.logo} source={require('../../../assets/logo2.png')} />
            <TouchableOpacity style={estilos.divVoltar} onPress={() => navigation.goBack()}>
                <Image style={estilos.voltar} source={require('../../../assets/voltar.png')} />
            </TouchableOpacity>
            <Text style={estilos.texto}>Selecione o método de pagamento:</Text>
            <TouchableOpacity style={[estilos.divMetodo, { backgroundColor: color1 }]} onPress={cartao}>
                <Image style={estilos.metodo} source={require('../../../assets/Metodos/cartao.png')} />
                <Text style={estilos.metodoTexto}>Adicionar Cartão</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[estilos.divMetodo, { backgroundColor: color2 }]} onPress={boleto}>
                <Image style={estilos.metodo} source={require('../../../assets/Metodos/boleto.png')} />
                <Text style={estilos.metodoTexto}>Boleto Bancário</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[estilos.divMetodo, { backgroundColor: color3 }]} onPress={pix}>
                <Image style={estilos.metodo} source={require('../../../assets/Metodos/pix.png')} />
                <Text style={estilos.metodoTexto}>Pagamento via PIX</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Dados', {tipo: selecionado})}>
                <Text style={estilos.textoButton}>Continuar</Text>
            </TouchableOpacity>
            <Text style={estilos.pontos}>
                <Text>.</Text>
                <Text style={{color: '#2d4bca'}}>.</Text>
                <Text>.</Text>
            </Text>
        </View>
    )
}