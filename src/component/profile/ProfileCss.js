import { Dimensions, StyleSheet } from "react-native";
import uiColors from "../../config/uiColors";

const ProfileCss = StyleSheet.create({

    profileRow: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    avatarContainer: {
        marginTop: 10,
        alignItems: "center"
    },
    avatar: {
        borderWidth: 2,
        borderColor: uiColors.gray300,
        borderRadius: 50,
        padding: 15,
        marginRight: 20,
    },
    avatarIcon: {
        fontSize: 48,
        color: uiColors.gray1100,
    },
    infoContainer: {
        marginTop: 10,
        gap: 5
    },
    username: {
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "600",
        color: uiColors.secondaryColor,
    },
    infoRow: {
        flexDirection: "row",
        gap: 5,
    },
    info: {
        fontSize: 16,
        fontWeight: "400",
        color: uiColors.baseTextColor,
        textAlign: "center",
    },
    infoIcon: {
        fontSize: 16,
        color: uiColors.baseTextColor
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        borderBottomWidth: 1,
        borderColor: uiColors.gray300,
        paddingBottom: 20,
        marginBottom: 20
    },
    button: {
        borderWidth: 1,
        borderColor: uiColors.gray1100,
        borderRadius: 5,
        flexDirection: "row",
        padding: 8,
        alignItems: "center",
        gap: 5,
        width: 150,
        justifyContent: "center"
    },
    buttonIcon: {
        fontSize: 16,
        color: uiColors.secondaryColor,
    },
    buttonText: {
        fontSize: 16,
        color: uiColors.secondaryColor,
    },


    imageCard: {
        width: Dimensions.get("window").width / 3 - 4,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: uiColors.gray1100,
        margin: 2,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        aspectRatio: 1,
        objectFit: "cover"
    }


})

export default ProfileCss;