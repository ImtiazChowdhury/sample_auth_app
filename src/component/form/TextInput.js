import React from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from "./formInputCss"
import uiColors from '../../config/uiColors'
import Icon from "react-native-vector-icons/AntDesign"

function CustomTextInput({ onChangeText,
    value,
    label,
    secureTextEntry,
    error,
    onSubmitEditing,
    innerRef,
    returnKeyType,
    returnKeyLabel,
    ...otherProps
}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                onChangeText={onChangeText}
                style={styles.textInput}
                value={value}
                {...otherProps}
                cursorColor={uiColors.primaryColor}
                secureTextEntry={secureTextEntry}
                onSubmitEditing={onSubmitEditing}
                ref={innerRef}
                returnKeyType={returnKeyType}
                returnKeyLabel={returnKeyLabel}
            />
            {error && <View style={styles.error}>
                <Icon name="exclamationcircleo" styles={styles.errorIcon} />
                <Text style={styles.errorText}>{error}</Text>
            </View>}

        </View>
    )
}

export default CustomTextInput