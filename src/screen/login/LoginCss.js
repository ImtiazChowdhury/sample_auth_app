import { Dimensions, StyleSheet } from "react-native";
import uiColors from "../../config/uiColors";

const LoginCss = StyleSheet.create({
    wrapper: {
        justifyContent: "space-between",
        backgroundColor: uiColors.white,
        paddingHorizontal: 5
    },

    container: {
        paddingVertical: 0,
        paddingHorizontal: 5,
        minHeight: Dimensions.get("window").height

    },
    avatarContainer: {
        marginTop: 50,
        width: "100%",
        alignItems: "center"
    },
    avatar:{
        borderWidth: 2,
        borderColor: uiColors.gray300,
        borderRadius: 50,
        padding: 15,
    },
    avatarIcon:{
        fontSize: 48,
        color: uiColors.gray700
    },
    loginTextContainer: {
        alignItems: "center",
        marginTop: 20,
        marginBottom: 40
    },
    loginText:{
        fontSize: 24,
        textTransform: "uppercase",
        fontWeight: "600",
        color: uiColors.secondaryColor
    }
})

export default LoginCss;