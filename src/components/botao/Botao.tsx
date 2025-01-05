import { Pressable, Text } from "react-native";
import { styles } from "./BotaoStyles";
import React, { useState } from "react";
import Input from "../input/Input";
import gerarSenhaAleatoria from "../../services/geradorSenhaService";
import * as Clipboard from "expo-clipboard";

export default function Botao() {

    const [senha, setSenha] = useState('');

    function gerarSenha(): void {
        setSenha(gerarSenhaAleatoria());
    }

    function copiarSenha(): void {
        Clipboard.setStringAsync(senha);
    }

    return (
        <>
            <Input senha={senha}/>

            <Pressable style={styles.botao} onPress={gerarSenha}>
                <Text style={styles.textoBotao}> 🦇 Gerar </Text>
            </Pressable>

            <Pressable style={styles.botao} onPress={copiarSenha}>
                <Text style={styles.textoBotao}> 🦇 Copiar </Text>
            </Pressable>
        </>
    );
}