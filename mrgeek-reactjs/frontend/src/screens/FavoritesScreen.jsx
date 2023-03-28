import React from 'react';
import Container from 'react-bootstrap/Container';
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
