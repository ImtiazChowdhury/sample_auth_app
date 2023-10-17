import { StyleSheet, Dimensions } from "react-native";
import uiColors from "../../config/uiColors";

const spinnerCss = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        backgroundColor: "#fff3",
        paddingBottom: 100,
        
    },
    gifBox: {
        backgroundColor: "#fff7",
        padding: 25,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#0001"
    },
    gif: {
        width: 70,
        height: 70,
    }
})

export default spinnerCss