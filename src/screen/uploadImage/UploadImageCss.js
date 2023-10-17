import { Dimensions, StyleSheet } from "react-native";
import uiColors from "../../config/uiColors";

const UploadImageCss = StyleSheet.create({
    wrapper: {
        justifyContent: "space-between",
        backgroundColor: uiColors.white,
        paddingHorizontal: 5
    },

    container: {
        paddingVertical: 0,
        paddingHorizontal: 5,
        paddingBottom: 20
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 10,
        paddingTop: 5,
        marginBottom: 10
    },
    albumName: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        padding: 10
    },
    albumNameText: {
        fontSize: 20,
        fontWeight: "600"
    },
    albumArrow: {
        fontSize: 16
    },
    nextButton: {
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 20
    },
    nextButtonActive: {
        backgroundColor: uiColors.secondaryColor
    },
    nextButtonDisabled: {
        backgroundColor: "#333c",
    },
    nextButtonText: {
        color: uiColors.white
    },
    assetGrid: {
    },
    
    emptyList: {
        height: Dimensions.get("window").height - 100,
        justifyContent: "center",
        alignItems: "center"
    },
    emptyListText: {
        textAlign: "center",
        marginTop: 10,
        marginBottom: 20,
        fontSize: 16,
        color: uiColors.gray1100
    }

})

export default UploadImageCss;