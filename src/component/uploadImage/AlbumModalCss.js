import { Dimensions, StyleSheet } from "react-native";
import uiColors from "../../config/uiColors";

const albumModalCss = StyleSheet.create({
    wrapper: {
        justifyContent: "space-between",
        backgroundColor: uiColors.white,
        paddingHorizontal: 5,
        // flex: 1
    },

    container: {
        zIndex: 30,
        backgroundColor: uiColors.white,
        height: "100%",
        paddingVertical: 0,
        paddingHorizontal: 5,
        paddingBottom: 20,
        minHeight: Dimensions.get("window").height
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 10,
        paddingTop: 5
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
    closeButton: {
        marginTop: 5
    },
    closeIcon: {
        fontSize: 24
    },
    albumItem: {
        borderRadius: 5,
        borderColor: uiColors.gray700,
        borderWidth: 1,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5
    },
    albumInfo: {
        paddingLeft: 10,
    },
    albumItemName: {
        fontSize: 18,
        fontWeight: "600",
    },
    albumItemCount: {
        marginTop: 5,
    },
    albumCoverPhoto: {
        borderWidth: 1,
        borderColor: uiColors.gray1100,
        overflow: "hidden",
        borderRadius: 5,
    },
    albumCover: {
        height: 50,
        width: 50,
        objectFit: "cover",

    }

})

export default albumModalCss