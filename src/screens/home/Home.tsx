import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Logo } from '../../components/logo/Logo';
import { styles } from './HomeStyles';
import Botao from '../../components/botao/Botao';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo/>
            </View>            
            <View style={styles.inputContainer}>
                <Text style={styles.texto}> Gere sua senha segura: </Text>
                <Botao></Botao>
            </View>
            <StatusBar style="light" />
        </View>
    );
}