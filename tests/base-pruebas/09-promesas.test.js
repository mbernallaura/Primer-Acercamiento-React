import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
        const id =1;
        getHeroeByIdAsync(id)
            .then(heroe =>{
                expect(heroe).toEqual({
                    id:1,
                    name:'Batman',
                    owner: 'DC'
                })
                done();
            });
    });

    test('getHeroeByIdAsync debe mandar un error si Heroe no existe', (done) => {
        const id =100;
        getHeroeByIdAsync(id)
            .then(heroe =>{
                expect(heroe).toBeFalsy();
                done(); 
            })
            .catch(error =>{
                expect( error ).toBe(`No se pudo encontrar el héroe ${id}`)
                done();
            })
    })
})