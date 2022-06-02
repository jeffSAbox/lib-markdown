import chalk from 'chalk';
import { pegarArquivoTexto } from './src/tratamentoTexto/pegarArquivoTexto.js';
import { extrairLinks } from './src/tratamentoTexto/extrairLinks.js';

const texto = pegarArquivoTexto("./arquivos/texto1.md");
const links = extrairLinks(texto);

console.log(chalk.yellowBright(texto));
console.log(links);