import { Dimensions, StyleSheet } from "react-native";
import uiColors from "../../config/uiColors";

const UploadImageCss = StyleSheet.create({
   
    assetCard: {
        margin: 2,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: uiColors.gray1100,
        width: Dimensions.get("window").width / 3 - 10,
        overflow: "hidden",
    },
    asset: {
        width: "100%",
        objectFit: "cover",
        aspectRatio: 0.7
    },
    checkBox: {
        position: "absolute",
        right: 4,
        top: 4,
        zIndex: 10,
        width: 25,
        height: 25,
        borderRadius: 20,
        backgroundColor: uiColors.primaryColor,
        alignItems: "center",
        justifyContent: "center"
    },
    checkMark: {
        fontSize: 18,
        color: uiColors.white
    }
   

})

export default UploadImageCss;