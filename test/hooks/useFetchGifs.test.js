import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"



describe('pruebas en el customHook useFetchGifs', () => {
    test('debe regresar el estado inicial', () => { 
        //esta es la forma de accder al custom hook, a su estado inicial
        const{result} = renderHook(()=>useFetchGifs('AC Milan'));
        // console.log(result);
        const{images,isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe retornar un arreglo de imagenes e isloading en false', async() => { 
        const{result} = renderHook(()=>useFetchGifs('AC Milan'));
        //aqui indicamos que esperamos a que se cumpla este expect
         await waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0)
         );

         const{images,isLoading} = result.current;
         //debe retornar mas de 0 items y cargando volverse falso
         expect(images.length).toBeGreaterThan(0);
         expect(isLoading).toBeFalsy();
    })
})