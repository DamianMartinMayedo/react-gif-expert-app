import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('pruebas en GifExpertApp', () => {

    const categoriaInicial = 'AC Milan';
    const otraCategoria = 'Brighton'

    test('testeando que el titulo de la pagina sea el correcto', () => {
        render(<GifExpertApp />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('GifExpertApp')

    });
    test('evaluando la adicion de categoria', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: otraCategoria } });
        fireEvent.submit(form);
        //evaluo que se añadio una nueva categoria
        expect(screen.getAllByRole("heading", { level: 3 }).length).toBeGreaterThan(1);


        // aqui evaluo que no se añadan categorias iguales a la nueva (otraCategoria)
        fireEvent.input(input, { target: { value: otraCategoria } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: otraCategoria } });
        fireEvent.submit(form);

        expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2);

    });
    test('Evaluando la no adicion de categorias iguales', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: categoriaInicial } });
        fireEvent.submit(form);

        //evaluo que no se pueda añadir una categoria igual que la inicial
        //evaluo la negacion, la afirmacion seria toBe(1)
        expect(screen.getAllByRole("heading", { level: 3 }).length).not.toBe(2);
    });
});