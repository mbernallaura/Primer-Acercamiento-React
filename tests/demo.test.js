describe('Prueba en <DemoComponent/>', () => { 
    test('Esta prueba no debe de fallar', ()=>{
        //! 1. Inicializacion
        const message = 'Hola Mundo';

        //! 2. Estimulo
        const message2 = message.trim();

        //! 3. Observar el comportamiento esperado
        expect(message).toBe(message2);
    });
});