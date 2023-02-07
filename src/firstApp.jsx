import PropTypes from 'prop-types';

const newMessage = [1,2,3,4,5,6,7,8,9];
const objeto = {
    message: 'Hola Mundo',
    title: 'Laura',
}

const Saludo = () =>{
    return `Hola ${objeto.title}`;
}

export const FirstApp = ({title, subTitle, name}) =>{
    //!Simpre hay que regresar al menos un Nodo Padre y adentro puede llevar varios elementos
    //!Si no se quiere regresar un div para enviar varios elementos se puede usar <> </>
    //!Para fragentar el codigo"

    //!Se puede devolver Funciones que NO SEAN ASYNCRONAS

    return (
        <> 
            <h1 data-testid= 'test-title'> { title } </h1>
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
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


//!Se utlizan los propTypes para hacer validaciones en las variables
//!Se debe instalar para que funcione (npm install prop-types)
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}


//!Se puede crear nuevos proptypes por medio de default
FirstApp.defaultProps = {
    //title: 'No hay Titulo',
    subTitle: 'No hay subtitulo',
    name: 'Laura'
}