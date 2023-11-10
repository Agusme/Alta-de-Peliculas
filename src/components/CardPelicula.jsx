import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardPelicula = ({pelicula, deletePelicula}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{pelicula.nombre} </Card.Title>
        <Card.Text>
        Descripcion: {pelicula.descripcion} 
        </Card.Text>
        <Card.Text>
        Categoria:{pelicula.categoria}
        </Card.Text>
        <Button  className='btn btn-danger' onClick={()=>deletePelicula()}>Borrar</Button>
      </Card.Body>
    </Card> 
        </div>
    );
};

export default CardPelicula;