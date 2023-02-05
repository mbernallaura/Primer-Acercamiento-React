import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe de retornar un objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        //!Para comparar objetos, se debe utilizar toStrictEqual o toEqual
        //Cada uno de los objetos apuntan en un espacio en memoria diferente
        expect(testUser).toStrictEqual(user);
    });

    test('getUsuarioActivo debe retornar un objeto', () => { 
        const name = 'Laura'
        const user = getUsuarioActivo(name);

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    })
});