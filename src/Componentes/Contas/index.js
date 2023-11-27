import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { estilos } from "./estilos";

export function Contas({ navigation }) {
    const handleNavigation = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={estilos.container}>
            <Image style={estilos.logo} source={require('../../../assets/logo.png')} />
            <Text style={estilos.texto}>Selecione seu perfil:</Text>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={estilos.divConta} onPress={() => handleNavigation('Main')}>
                    <Image style={estilos.conta} source={require('../../../assets/Contas/1.png')} />
                    <Text style={estilos.nomeConta}>Ítalo Buxin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.divConta} onPress={() => handleNavigation('Main')}>
                    <Image style={estilos.conta} source={require('../../../assets/Contas/2.png')} />
                    <Text style={estilos.nomeConta}>Higor Paixão</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.divConta} onPress={() => handleNavigation('Main')}>
                    <Image style={estilos.conta} source={require('../../../assets/Contas/3.png')} />
                    <Text style={estilos.nomeConta}>El Pichula</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.divConta}>
                    <Image style={estilos.conta} source={require('../../../assets/adicionar.png')} />
                    <Text style={estilos.nomeConta}>Adicionar</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={estilos.divSair} onPress={() => navigation.replace('Login')}>
                <Text style={estilos.sair}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}
