import React from 'react';

class MyComponent extends React.Component {

    render() {
        let receta = {
            nombre: 'Pizza',
            ingredientes: 'blah'
        };

        return(
            <div>
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h2>{'Ingredientes: ' + receta.ingredientes}</h2>
            </div>
        );

    }
}

export default MyComponent;