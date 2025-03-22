// luo uusi React-projekti
// npx create-react-app tehtavienhallinta
// cd tehtavienhallinta
// Asenna Axios http-pyyntöjä varten
// npm install axios

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [tehtavat, setTehtavat] = useState([]);
  const [uusiTehtava, setUusiTehtava] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/tehtavat').then((response) => {
      setTehtavat(response.data);
    });
  }, []);

  const lisaaTehtava = (event) => {
    event.preventDefault();
    const tehtavaObjekti = {
      nimi: uusiTehtava,
      suoritettu: false,
    };

    axios.post('http://localhost:3001/api/tehtavat', tehtavaObjekti).then((response) => {
      setTehtavat(tehtavat.concat(response.data));
      setUusiTehtava('');
    });
  };

  const poistaTehtava = (id) => {
    axios.delete(`http://localhost:3001/api/tehtavat/${id}`).then(() => {
      setTehtavat(tehtavat.filter((tehtava) => tehtava.id !== id));
    });
  };

  const toggleSuoritettu = (id) => {
    const tehtava = tehtavat.find((t) => t.id === id);
    const paivitettyTehtava = { ...tehtava, suoritettu: !tehtava.suoritettu };

    axios.put(`http://localhost:3001/api/tehtavat/${id}`, paivitettyTehtava).then((response) => {
      setTehtavat(tehtavat.map((t) => (t.id !== id ? t : response.data)));
    });
  };

  return (
    <div>
      <h1>Tehtävienhallinta</h1>
      <form onSubmit={lisaaTehtava}>
        <input value={uusiTehtava}

