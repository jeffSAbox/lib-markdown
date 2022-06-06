import fs from 'fs';
import { lancarError } from '../error/lancarError.js';

export async function pegarArquivoTexto(caminhoArquivo) 
{
    try 
    {
        return await fs.promises.readFile(caminhoArquivo, 'utf-8');        
    } 
    catch (error)
    {
        lancarError(error);
    }
}