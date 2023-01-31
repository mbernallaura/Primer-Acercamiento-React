const newMessage = [1,2,3,4,5,6,7,8,9];
const objeto = {
    message: 'Hola Mundo',
    title: 'Laura',
}

const Saludo = () =>{
    return `Hola ${objeto.title}`;
}

export const FirstApp = () =>{
    //!Simpre hay que regresar al menos un Nodo Padre y adentro puede llevar varios elementos
    //!Si no se quiere regresar un div para enviar varios elementos se puede usar <> </>
    //!Para fragentar el codigo"

    //!Se puede devolver Funciones que NO SEAN ASYNCRONAS
    return (
        <> 
            <h1>{ newMessage }</h1>
            <p>{ Saludo() }</p>
            {/* <code>{ JSON.stringify( objeto ) }</code> */}
            <div>
                <ul>
                    <li>Nombre</li>
                    <li>Apellido</li>
                </ul>
            </div>
        </>
    )
}