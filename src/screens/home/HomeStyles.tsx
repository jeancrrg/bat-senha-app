import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333333',
		alignItems: 'center',
		justifyContent: 'center',
	},
    logoContainer: {
        flexDirection: 'column',
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 60,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#4D4D4D'
    },
    texto: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    inputContainer: {
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center'
    }
});