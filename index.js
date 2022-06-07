import chalk from 'chalk';
import { pegarArquivoTexto } from './src/tratamentoTexto/pegarArquivoTexto.js';
import { extrairLinks } from './src/tratamentoTexto/extrairLinks.js';

async function fn_exec()
{
    const processos = process.argv;
    const texto = await pegarArquivoTexto(processos[2]);    
    const links = await extrairLinks(texto, processos[3]);

    console.log(
        chalk.yellowBright(texto), 
        links
    );    
}
fn_exec();
