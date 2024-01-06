import React from 'react'
import { Image, StyleSheet } from "react-native";

function IconForLanguage ({name}) {
    let url_icon = ''

    name == 'Ruby' ? url_icon = 'https://img.icons8.com/color/48/ruby-programming-language.png' : ''
    name == 'TypeScript' ? url_icon = 'https://img.icons8.com/fluency/48/typescript--v1.png' : ''
    name == 'Python' ? url_icon = 'https://img.icons8.com/color/48/python--v1.png' : ''

    return (
        <Image style={styles.icon} source={{
            uri: url_icon,
          }} alt="icon-lenguaje"/>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
        padding: 0,
        margin: 0
    }
})

export default IconForLanguage;