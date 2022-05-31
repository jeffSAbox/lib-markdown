import chalk from 'chalk';
import fs from 'fs';

export function pegarArquivoTexto(caminhoArquivo) {
    fs.readFile(caminhoArquivo, 'utf-8', (_, texto) => {
        console.log(chalk.blueBright(texto));
    });
}