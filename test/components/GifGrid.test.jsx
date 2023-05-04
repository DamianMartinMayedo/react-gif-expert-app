import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//con esto estamos simulando nuestro hook, estamos haciendo un mock
jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en GifGrid', () => {

    const category = 'AC Milan';

    test('debe de mostrar el loading', () => {
        //aqui comprobamos los valores iniciales de nuestro customHook
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando......'));
        expect(screen.getByText(category));
    });

    test('debe mostrar items cuando se cargan las imagenes con el useFetchGifs', () => {

        const gifs = [{
            id: 'wwwwwwqweweqwe',
            title: 'AC Milan',
            url: 'fdgfdgdfg'
        },
        {
            id: 'wbnbnvbn',
            title: 'RRR',
            url: 'cvsdsdsd'
        }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
    })
});
