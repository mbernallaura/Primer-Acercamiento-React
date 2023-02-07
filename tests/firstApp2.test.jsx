import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/firstApp";

describe('Pruebas en <firstApp/>', () => {
    const title = 'Hola soy Goku';
    const subtitle = 'Soy un subtitulo';

    test('Debe de hacer match con el snapshot', () => {
        const {container} = render(<FirstApp title={ title }/>)

        //! toMatchSnapshot() = Hace una captura del componente y lo guarda enn un archivo que lo crea
        expect(container).toMatchSnapshot();
    });

    test('Debe mostar el mensaje "Hola soy Goku"', () => {
        render(<FirstApp title={ title }/>);
        expect(screen.getByText(title)).toBeTruthy();
        //screen.debug();
    });

    test('Debe de mostrar el titulo en un H1', () => {
        render(<FirstApp title={ title }/>);

        //! getByRole() = busca cuaquier etiqueta
        expect(screen.getByRole('heading', { level: 1}).innerHTML).toContain(title);
    })

    test('Debe de enviar el subtitulo por props', () => {
        render(
            <FirstApp 
                title= { title }
                subTitle= { subtitle }
            />
        );
        expect(screen.getAllByText(subtitle).length).toBe(2);
    })
});