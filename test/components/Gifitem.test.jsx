import { render,screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('pruebas en Gifitem', () => { 
    const title = 'AC Milan';
    const url = 'https://loco.com/'
    test('snapshot', () => { 
        const {container}=render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    
    });
    test('debe mostrar url y alt indicado', () => { 
        render(<GifItem title={title} url={url}/>);
        // expect(screen.getByRole('img').src).toBe(url);
        const{src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

     });

     test('existe el titulo?', () => { 
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
     })
});