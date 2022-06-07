import fetch from 'node-fetch';
import { lancarError } from '../error/lancarError.js';

async function verificarStatus(arrLinks)
{
    try 
    {
        const arrLinksStatus = await Promise.all(arrLinks.map(async Link => {
            const res = await fetch(Link);
            return res.status;
        }));
        return arrLinksStatus;    
    } 
    catch (error)
    {
        lancarError(error);
    }
}

export async function validarLinks(arrLinks) 
{
    const arrLinks_valores = converterValoresArray(arrLinks);
    return await verificarStatus(arrLinks_valores);
}

function converterValoresArray(arr) 
{
    return arr.map(objLink => Object.values(objLink).join());
}