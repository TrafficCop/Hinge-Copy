import { View, Text, Image, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Themes } from "../../assets/Themes"
import Icons from "../../assets/Icons"

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Body = (props) => {
    return (
        <View style={styles.parent}>
            <View elevation={8} style={[Themes.light.shadows, styles.container]}>
                <ImageBackground source={props.person.image} style={styles.image} imageStyle={styles.imageStyle}>
                    <Text style={[styles.text, {fontSize: 32}]}>{props.person.name}</Text>
                    <Text style={styles.text}>{props.person.caption}</Text>
                </ImageBackground>
            </View>
            <View elevation={8} style={[Themes.light.shadows, styles.container, {paddingVertical: 25, paddingHorizontal: 15, marginTop: 15, borderRadius: 20}]}>
                <Text style={styles.subtitle}>My hottest take</Text>
                <View style={{flexDirection: 'row', justifyContent:'flex-start'}}>
                    <Image source={Icons.player.light} style={[styles.icons, {aspectRatio: 1}]} />
                    <Image source={Icons.audioWave.light} style={[styles.icons, {aspectRatio: 4}]} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: 'wrap',
        overflow: 'visible',
    },
    container: {
        width: windowWidth * 0.9,
        borderRadius: 8,
        flexDirection: 'column',
        backgroundColor: 'white', // This is needed to make the shadow work
    },
    image: {
        height: undefined, // Sometimes react doesn't calculate height - set as undefined to force it to recalculate in aspect ratio
        aspectRatio: 1 / 1.1, // width / height
        justifyContent: "space-between",
    },
    imageStyle: {
        borderRadius: 8,
    },
    text: {
        padding: 12,
        color: "white",
        fontFamily: "Sydney",
        fontSize: 18,
    },
    subtitle : {
        color: "black",
        fontSize: 24,
        fontFamily: "Sydney",
        marginBottom: 15,
    },
    icons: {
        marginRight: 3,
        height: windowHeight * 0.08,
        width: undefined,
        resizeMode: 'contain',
    }
})

export default Body;