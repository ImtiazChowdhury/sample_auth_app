import { StyleSheet } from "react-native";
import uiColors from "../../config/uiColors";

const formInputCss = StyleSheet.create({
    container:{
        marginVertical: 10
    }, 
    label: {
        fontSize: 18,
        color: uiColors.secondaryColor
    },
    textInput: {
        borderWidth: 1,
        borderColor: uiColors.primaryColor,
        borderRadius: 5,
        height: 48,
        marginTop: 5,
        fontSize: 18,
        paddingHorizontal: 5,
    },
    error:{
        flexDirection: "row",
        gap: 3,
        flexWrap: "wrap",
        alignItems: "center",
        marginTop: 5
    },
    errorIcon:{
        fontSize: 14,
        color: uiColors.danger
    },
    errorText:{
        fontSize: 14,
        color: uiColors.danger
    },

    submitButton:{
        width: 200,
        backgroundColor: uiColors.secondaryColor,
        marginLeft: "auto",
        marginRight: "auto",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
        gap: 10,
        marginTop: 20
    },
    submitIcon: {
        color: uiColors.white,
        fontSize: 18,
    },
    submitText:{
        color: uiColors.white,
        fontSize: 18,
    }
})

export default formInputCss