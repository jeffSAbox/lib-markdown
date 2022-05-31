import chalk from 'chalk';
import fs from 'fs';
import { lancarError } from '../error/lancarError.js';

export function pegarArquivoTexto(caminhoArquivo) {
    fs.readFile(caminhoArquivo, 'utf-8', (erro, texto) => {
        if( erro )
        {
            lancarError(erro);
        }
        
        console.log(chalk.blueBright(texto));
    });
}