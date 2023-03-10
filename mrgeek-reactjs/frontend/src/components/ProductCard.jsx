import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProductCard(props) {
  const { product } = props;

  return (
    <Card className="text-center mt-3">
      <Link to={`/product/${product.id}`}>
        <img
          src={`../public/productsImages/${product.image}`}
          className="card-img-top mt-3"
          alt={product.name}
        ></img>
      </Link>
      <Link to={`/product/${product.id}`} className="text-decoration-none text-reset">
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>R${product.price}</Card.Text>
          <Button className="w-100">Comprar</Button>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default ProductCard;
