import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en AddCategory', () => { 

   
    test('debe cambiar el valor de la caja de texto', () => { 
        //onNewCategory recibe una funcion
        render(<AddCategory onNewCategory={()=>{}}/>);
        const input = screen.getByRole('textbox');

        //testear el evento onChange, se esta accediendo al input
        x
        //aqui se espera que al disparar el evento se cambie el value del input 
        expect(input.value).toBe('AC Milan');
        // screen.debug();
    });

    test('debe de llamar onNewCategory si tienen un valor', () => { 
        
        const inputValue = 'AC Milan';
        const onNewCategory = jest.fn(); //esto permite realizar una simulacion de la funcion
    
       
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        //dispara el onChange del input y le agrega el valor de inputValue
        fireEvent.input(input,{target:{value:inputValue}});
  
        // dispara el submit
        fireEvent.submit(form);

        //comprobando que luego del submit se limpie el valor del input
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled(); //comprobando que la funcion fue llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1); //comprobando que se ha llamado la funcion x veces
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); //comprobando que se ha llamado con el valor que queremos (el de la caja de texto en este caso)
        

    });

    test('no debe de llamar a la funcion con input vacio', () => { 
       
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');

        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        
     });
});