// import { Card } from '@mui/material';
// import React, {Component} from 'react';

import { Row } from "reactstrap";
import React, { useState } from 'react'

import Information from "./Information";


const InfoContent = () => {
    const [information, setInformation] = useState([
        {
            id:1,
            title:"Novedades",
            description: "soporte",
            img: "https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        },
        {
            id:2,
            title:"Finanzas",
            description: "Desarrollador",
            img: "https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        
        },
        {
            id:3,
            title:"Tips",
            description: "Desarrollador",
            img: "https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        
        },
        
    ]);
      return(
        <div className="row">
            {/* <Row>
                <Information/>
            </Row> */}
            {information.map(information =>{
            return (
            <Information title={information.title} img={information.img} description={information.description}/>
            );
        })}
        </div>
         );
    }
  
export default InfoContent;
/* import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

//Imagenes
import ImgNov from '../assets/img/1.jpg';


//el ejemplo del video este seria el people card
export default function InfoContent() {
    /* const informacion = [
        {
            name: "Nombre 1",
            description: "esta es la descripcion 1",
        },
        {
            name: "Nombre 2",
            description: "esta es la descripcion 2",
        }
    ]; 
    

  return (
        <Card className='contenedor' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                //image={{}}
                alt="green iguana"
                className='foto1' 
                />
                <div className='foto1'></div>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <div className="texto-ubication">
                        <h2>Tips</h2>
                    </div>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>

  );
} */



/* import React from 'react'

import '../assets/css/InfoContent.css';

export const InfContent = () => {
  return (
    <div className='contenedor-cards'>
        <div className="novedades">
            <div className="texto-ubication">
                <h2>Novedades</h2>
            </div>
            este es el card de novedades
        </div>
        <div className="finanzas">
            <div className="texto-ubication">
                <h2>Finanzas</h2>
            </div>
            este es el card de finanzas
        </div>
        <div className="tips">
            <div className="texto-ubication">
                <h2>Tips</h2>
            </div>
            este es el card de tips
        </div>
        
        
    </div>
  )
} */