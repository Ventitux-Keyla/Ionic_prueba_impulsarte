import React from 'react'
import { Carrusel } from '../components/ComponentsMainView/Carrusel';

import '../assets/css/MainView.css';
import InfoContent from '../components/ComponentsMainView/CardInformation/InfoContent';

export const MainView = () => {
  return (
    <div className='contenedor container'>
        <div className="container-lg">
        <Carrusel /> 
        </div>
        <br />
        <div>
          <InfoContent/>
        </div>


        
    </div>
  )
}
