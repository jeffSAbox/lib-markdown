import { lancarError } from '../error/lancarError.js';
import { validarLinks } from './validarLinks.js';

export async function extrairLinks(texto, opcao = "") 
{
    try 
    {
        const regexp = /\[([^\]]*)\]\((https?:\/\/[^\)]*)\)/gm;
        let arr_links = [];
        let temp;

        while ( (temp = regexp.exec(texto)) !== null ) {
            arr_links.push({ [temp[1]]: temp[2] });
        }

        if( arr_links.length === 0 )
        {
            return "Nenhum link foi encontrado";
        }
        else if( opcao == "validar" )
        {
            const statusResultado = await validarLinks(arr_links);
            const arr_links_status = arr_links.map((objeto, indice) => {
                return {
                    ...objeto,
                    status: statusResultado[indice]
                }
            });
            arr_links = arr_links_status;
        }
        
        return arr_links;

    } 
    catch (error) 
    {
        lancarError(error);
    }
}