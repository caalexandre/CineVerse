import { View, TouchableOpacity, Text, Image, ScrollView, TextInput } from "react-native";
import { estilos } from "./estilos";

export function Main({ navigation }) {

    return (
        <View style={estilos.container}>
            <Image style={estilos.logo} source={require('../../../assets/logo.png')} />
            <TouchableOpacity style={estilos.divSair} onPress={() => navigation.replace('Login')}>
                <Text style={estilos.sair}>Sair</Text>
            </TouchableOpacity>
            <Text style={estilos.texto}>Filme em cartaz</Text>
            <View style={estilos.estande}>
                <TouchableOpacity onPress={() => navigation.navigate('Filme1')}>
                    <Image style={estilos.cartaz} source={require('../../../assets/Filmes/cartaz.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={estilos.scrollview}>
                <TouchableOpacity>
                    <Image style={estilos.filme} source={require('../../../assets/Filmes/1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={estilos.filme} source={require('../../../assets/Filmes/2.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={estilos.filme} source={require('../../../assets/Filmes/3.jpg')} />
                </TouchableOpacity>
            </ScrollView>
            <ScrollView horizontal={true}>
                <TouchableOpacity>
                    <Image style={estilos.filme} source={require('../../../assets/Filmes/4.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={estilos.filme} source={require('../../../assets/Filmes/5.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={estilos.filme} source={require('../../../assets/Filmes/6.jpg')} />
                </TouchableOpacity>
            </ScrollView>
        </View >
    )
} 