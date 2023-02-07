import { render } from "@testing-library/react";
import { FirstApp } from "../src/firstApp";

describe('Pruebas en <firstApp/>', () => {

    // test('Debe de compaginar con mi componente', () => {
    //     const title = 'Hola soy Goku';
    //     const {container} = render(<FirstApp title={ title }/>)

    //     //! toMatchSnapshot() = Hace una captura del componente y lo guarda enn un archivo que lo crea
    //     expect(container).toMatchSnapshot();
    // });

    test('Debe mostar el titulo en un H1', () => {
        const title = 'Hola soy Goku';
        //! container = maneja lo del dom, por ende se puede manejar con JavaScript
        const { container, getByText, getByTestId } = render(<FirstApp title={ title }/>)

        //! getByText(title) = Busca en el render un texto que contenga "Hola soy Goku"
        //! toBeTruthy() = que se encuentre lo que se coloca anteriormente
        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);
        expect(getByTestId('test-title').innerHTML).toBe(title);
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola soy Goku';
        const subtitle = 'Soy un subtitulo';
        const { getAllByText } = render(
            <FirstApp 
                title= { title }
                subTitle= { subtitle }
            />
        );

        //! getAllByText() = evalua mas de 1 elemento que contenga lo que se le pide y nos manda un arreglo
        //! con lo que se encontro
        expect(getAllByText(subtitle).length).toBe(2);
    })
});