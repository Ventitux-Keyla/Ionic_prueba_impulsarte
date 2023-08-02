import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Estilos
import './Information.css'

const Information = (props) => {
    
  return (
    <div className='col-lg-4'>
      <div className='text-center card-box'>
        <div className='member-card pt-2 pb-2'>
          <div className="contenedor-card">
            <Card>
              <CardActionArea>
                <div className="card-one">
                  <Typography gutterBottom variant="h5" component="div">
                      <div className="texto-ubication">
                          <h2>{props.title}</h2>
                      </div>
                  </Typography>
                  <CardMedia
                    component="img"
                    height="350"
                    image={props.img} 
                    alt="green iguana"
                    className='foto1' 
                    />
                  <div className='foto1'></div>
                  <CardContent>
                  
                  <Typography variant="body2" color="text.secondary">
                  {props.description}
                  </Typography>
                  </CardContent>
                </div>
                  
              </CardActionArea>
            </Card>
          </div>
          
        </div>
      
      </div>
        
          
    </div>
  )
}

export default Information