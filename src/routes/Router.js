import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Compare } from '../pages/Compare';
import { MainPage } from '../pages/MainPage';
import { PokemonPage } from '../pages/PokemonPage';



export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/pokemon/:id" element={<PokemonPage />}/>
          <Route path="/compare" element={<Compare />} />
        </Routes>
    </BrowserRouter>
  );
}
