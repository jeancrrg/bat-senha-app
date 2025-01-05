import React from 'react';
import { Image, Text } from 'react-native';
import { styles } from './LogoStyles';

export function Logo() {
    return (
        <>
            <Text style={styles.titulo}> Bat-Senha </Text>
            <Image source={require('../../../assets/images/icone-batman.png')} style={{ resizeMode: 'contain', height: 250}}/>
        </>
    );
}