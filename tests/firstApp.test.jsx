import { render } from "@testing-library/react";
import { FirstApp } from "../src/firstApp";

describe('Pruebas en <firstApp/>', () => {
    test('Debe de compaginar con mi componente', () => {
        const title = 'Hola soy Goku';
        render(<FirstApp title={ title }/>)
    });
});