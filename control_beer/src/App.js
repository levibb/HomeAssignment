import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './base_components/nav_bar/NavBar';
import { Container,Row } from 'react-bootstrap';
import { BrowseBeers } from './browse_beers/BrowseBeers';
import { Route, Routes } from 'react-router-dom';
import { FavoriteBeers } from './favorite_beers/FavoriteBeers';
import { useSelector } from 'react-redux';
import { Error } from './base_components/error/Error';


export default function App() {

  const error = useSelector((state) => state.error);

  useEffect(() => {
    document.title = `Beers place`;
  });

  return (
          <>
            <NavBar/>
              <div className="App background_image">

                    {error.value !== 200 ? 
                      <Error/>
                      :
                      <Container>
                        <Row>
                          <Routes>
                            <Route path="/" element={<BrowseBeers/>} />
                            <Route path="/browse_beers" element={<BrowseBeers/>} />
                            <Route path="/favorite" element={<FavoriteBeers/>} />      
                          </Routes>
                        </Row>
                      </Container>
                    }
              </div> 
          </>
         );
}

