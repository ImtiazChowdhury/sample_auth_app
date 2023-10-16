import React from 'react'
import styles from "./formInputCss"
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/AntDesign"

function SubmitButton({onPress, text, innerRef, ...otherPros}) {
    return (
        <TouchableOpacity style={styles.submitButton} onPress={onPress} {...otherPros} ref={innerRef}>
            <Icon name="login" size={18} style={styles.submitIcon}/>
            <Text style={styles.submitText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default SubmitButton