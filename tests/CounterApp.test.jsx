import { render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas de <CounterApp/>', () =>{
    const value = 100;

    test('Debe de hacer match con el snapshot', () => {
        render(<CounterApp value = {value}/>);
        expect(screen).toMatchSnapshot();
    })

    test('Debe mostrar el valor inicial de 100', () => {
        render(<CounterApp value = {value}/>);
        expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');
    })
})