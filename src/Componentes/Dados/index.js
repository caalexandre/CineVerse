import { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { estilos } from "./estilos";

export function Dados({ navigation }) {
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
            <Text style={estilos.texto}>Verifique os dados</Text>
            <View style={estilos.divDados}>
                <Image style={estilos.dados} source={require('../../../assets/Metodos/cartao.png')} />
                <View>
                    <Text style={[estilos.textoDados, { fontWeight: 'bold' }]}>N° do Cartão de Crédito:</Text>
                    <Text style={estilos.textoDados}>4002 8922 2741 0000</Text>
                </View>
            </View>
            <View>
                <Text style={estilos.textoDados2}><Text style={{ fontWeight: 'bold' }}>Plano selecionado: </Text>CineElite</Text>
                <Text style={estilos.textoDados2}><Text style={{ fontWeight: 'bold' }}>Tipo do plano: </Text>Mensal</Text>
                <Text style={estilos.textoDados2}><Text style={{ fontWeight: 'bold' }}>Valor total: </Text>R$15,59</Text>
            </View>
            <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Contas')}>
                <Text style={estilos.textoButton}>Finalizar</Text>
            </TouchableOpacity>
            <Text style={estilos.pontos}>
                <Text>.</Text>
                <Text>.</Text>
                <Text style={{ color: '#2d4bca' }}>.</Text>
            </Text>
        </View >
    )
}