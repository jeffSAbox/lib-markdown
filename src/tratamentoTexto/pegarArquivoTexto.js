import chalk from 'chalk';
import fs from 'fs';
import { lancarError } from '../error/lancarError.js';

export function pegarArquivoTexto(caminhoArquivo) 
{
    fs.promises
        .readFile(caminhoArquivo, 'utf-8')
            .then( (texto) => console.log(chalk.blueBright(texto)) )
            .catch( (erro) => lancarError(erro) );
}