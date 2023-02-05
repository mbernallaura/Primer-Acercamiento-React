import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })

    test('getHeroeById debe retornar undefined si no existe el id', () => {
        const id = 100;
        const heroe = getHeroeById(id);
        
        //! toBeFalsy() = evalua null, undefined, false
        expect(heroe).toBeFalsy()
    })

    test('getHeroesByOwner debe retornar heroes de DC', () => {
        const owner = 'DC'
        const heroesDc = getHeroesByOwner(owner);

        expect(heroesDc.length).toBe(3);
        expect(heroesDc).toStrictEqual(
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        );

        expect(heroesDc).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    })

    test('getHeroesByOwner debe retornar heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner);

        expect(heroesMarvel.length).toBe(2);
    })
})