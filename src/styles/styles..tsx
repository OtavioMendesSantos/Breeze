import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        /* backgroundColor: '#ffa210' */
    },
    header: {
        width: '100%',
        backgroundColor: '#000',
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        position: 'absolute',
        left: 10
    },
    conteudo: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,
    },
    text: {
        fontSize: 24,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#ffa210',
        padding: 10,
        marginTop: 10,
        fontSize: 20,
        borderRadius: 5,
    }
})