import { lancarError } from '../error/lancarError.js';

export function extrairLinks(texto) {
    try 
    {
        const regexp = /\[([^\]]*)\]\((https?:\/\/[^\)]*)\)/gm;
        let arr_links = [];
        let temp;

        while ( (temp = regexp.exec(texto)) !== null ) {
            arr_links.push({ [temp[1]]: temp[2] });
        }

        return arr_links.length === 0 ? "Nenhum link foi encontrado" : arr_links;
    } 
    catch (error) 
    {
        lancarError(error);
    }
}