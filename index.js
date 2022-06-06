import chalk from 'chalk';
import { pegarArquivoTexto } from './src/tratamentoTexto/pegarArquivoTexto.js';
import { extrairLinks } from './src/tratamentoTexto/extrairLinks.js';

const processos = process.argv;
const texto = pegarArquivoTexto(processos[2]);
const links = extrairLinks(texto);

console.log(chalk.yellowBright(texto));
console.log(links);