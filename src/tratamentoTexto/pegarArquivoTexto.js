import fs from 'fs';
import { lancarError } from '../error/lancarError.js';

export function pegarArquivoTexto(caminhoArquivo) 
{
    try 
    {
        return fs.readFileSync(caminhoArquivo, 'utf-8');        
    } 
    catch (error)
    {
        lancarError(error);
    }
}