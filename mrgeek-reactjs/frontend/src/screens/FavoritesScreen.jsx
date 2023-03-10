import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import FavoriteCard from '../components/FavoriteCard';

function FavoritesScreen() {
  return (
    <div>
      <Container>
        <h1 className="text-center my-3">FAVORITOS</h1>
        <FavoriteCard />
      </Container>
      <img id="adventure-time" src="../public/img/adventure-time.svg" alt="" />
    </div>
  );
}

export default FavoritesScreen;
