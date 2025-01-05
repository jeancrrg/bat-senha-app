import { TextInput } from "react-native";
import { styles } from "./InputStyles";

interface InputProps {
    senha: string;
}

export default function Input(props: InputProps) {
    return (
        <TextInput style={styles.input} placeholder="senha" value={props.senha}/>
    );
}