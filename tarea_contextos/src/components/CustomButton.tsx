import { StyleSheet, Text, TouchableOpacity } from "react-native";

//Definicion de propiedades para Button
interface CustomButtonProps{
    title: string;
    onClick: () => void;
    variant?: "primary" | "secondary";
}

export default function CustomButton({
    title,
    onClick,
    variant = "primary"
}: CustomButtonProps){
    const styles = getStyles(variant);

    return(
    <TouchableOpacity
    onPress={onClick}
    style={styles.container}
    >
        <Text
            style={styles.text}>
            {title}
        </Text>
    </TouchableOpacity>

    );
}


const getStyles = (variant:'primary' | 'secondary') =>
    StyleSheet.create({
    container: {
        paddingVertical: 15,
        alignItems: 'center',
        width: "80%",
        backgroundColor: 
            variant === "primary" ? "#35ffb8": "#ffa4a4",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#f3f4f6",
    },
    text: {
        color: "black",
        fontSize: 15,
        fontWeight: "500"
    }
});