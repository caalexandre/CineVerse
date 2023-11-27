import { View, TouchableOpacity, Text, Image, ScrollView, FlatList } from "react-native";
import { estilos } from "./estilos";

export function Filme1({ navigation }) {

    return (
        <View style={estilos.container}>
            <Image style={estilos.logo} source={require('../../../assets/logo.png')} />
            <TouchableOpacity style={estilos.divVoltar} onPress={() => navigation.goBack()}>
                <Image style={estilos.voltar} source={require('../../../assets/voltar.png')} />
            </TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image style={estilos.img} source={require('../../../assets/Filmes/cartaz.png')} />
                <Image style={estilos.play} source={require('../../../assets/playbutton.png')} />
            </View>
            <Text style={estilos.texto}>Até o Ultimo Homem</Text>
            <Image style={estilos.estrelas} source={require('../../../assets/5estrelas.png')}/>
            <Text style={estilos.sinopse}>Sinopse</Text>
            <Text style={estilos.textoSinopse}>Até o Último Homem é um filme de guerra e drama biográfico de 2016 foi dirigido por Mel Gibson e escrito por Andrew Knight e Robert Schenkkan baseado no documentário The Conscientious Objector de 2004. O filme é ambientado na Segunda Guerra Mundial e foca nas experiências de Desmond Doss, um médico de combate</Text>        
        </View >
    )
} 