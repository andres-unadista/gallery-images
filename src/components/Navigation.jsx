import React from 'react';
import { Link } from 'react-router-dom';
import Dog from './Dog';
import Cat from './Cat';
import Panda from './Panda';
import Fox from './Fox';
import Cotton from './CottonTopTamarin';
import Parrot from './Parrot';
import Rabbit from './Rabbit';
import Squirrel from './Squirrel';
import Tiger from './Tiger';
import Wolf from './Wolf';

const Navigation = () => {
  return (
    <div className="container">
      <Link to="/dog">
        <figure>
          <Dog></Dog>
          <figcaption>Foto de perro</figcaption>
        </figure>
      </Link>
      <Link to="/cat">
        <figure>
          <Cat></Cat>
          <figcaption>Foto de gato</figcaption>
        </figure>
      </Link>
      <Link to="/cotton">
        <figure>
          <Cotton></Cotton>
          <figcaption>Foto de tití</figcaption>
        </figure>
      </Link>
      <Link to="/fox">
        <figure>
          <Fox></Fox>
          <figcaption>Foto de zorro</figcaption>
        </figure>
      </Link>
      <Link to="/panda">
        <figure>
          <Panda></Panda>
          <figcaption>Foto de panda</figcaption>
        </figure>
      </Link>
      <Link to="/parrot">
        <figure>
          <Parrot></Parrot>
          <figcaption>Foto de loro</figcaption>
        </figure>
      </Link>
      <Link to="/rabbit">
        <figure>
          <Rabbit></Rabbit>
          <figcaption>Foto de conejo</figcaption>
        </figure>
      </Link>
      <Link to="/squirrel">
        <figure>
          <Squirrel></Squirrel>
          <figcaption>Foto de ardilla</figcaption>
        </figure>
      </Link>
      <Link to="/tiger">
        <figure>
          <Tiger></Tiger>
          <figcaption>Foto de tigre</figcaption>
        </figure>
      </Link>
      <Link to="/wolf">
        <figure>
          <Wolf></Wolf>
          <figcaption>Foto de lobo</figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default Navigation;
