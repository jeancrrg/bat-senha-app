export default function gerarSenhaAleatoria(): string {
    let senha: string = '';
    let caracteres: string = '!@$#123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let tamanhoSenha: number = 8;

    for (let index = 0; index < tamanhoSenha; index++) {
        senha += caracteres.charAt(
            Math.floor(Math.random() * caracteres.length)
        );
    }

    return senha;
}