import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './base_components/nav_bar/NavBar';
import { Container,Row } from 'react-bootstrap';
import { BrowseBeers } from './browse_beers/BrowseBeers';
import { Route, Routes } from 'react-router-dom';
import { FavoriteBeers } from './favorite_beers/FavoriteBeers';


export default function App() {

  useEffect(() => {
    document.title = `Beers place`;
  });

  return (
          <>
            <NavBar/>
              <div className="App background_image">
                    <Container>
                      <Row>
                        <Routes>
                          <Route path="/" element={<BrowseBeers/>} />
                          <Route path="/browse_beers" element={<BrowseBeers/>} />
                          <Route path="/favorite" element={<FavoriteBeers/>} />      
                        </Routes>
                      </Row>
                    </Container>
              </div> 
          </>
         );
}

