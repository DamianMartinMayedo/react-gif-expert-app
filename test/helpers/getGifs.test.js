import { getGifs } from "../../src/helpers/getGifs"

describe('prueba en el helper getGifs', () => { 
    
    test('debe retornar un arreglo de gifs', async() => { 
        const gifs = await getGifs('AC Milan');
        // console.log(gifs);
        //evaluamos que al menos tenga un elemento el arreglo de gifs
        expect(gifs.length).toBeGreaterThan(0);

        //evaluamos que se reciban los datos en el formato que queremos
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
     })
})