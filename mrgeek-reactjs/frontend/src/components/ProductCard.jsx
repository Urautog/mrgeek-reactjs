import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CurrencyInput from 'react-currency-input-field';
import { formatValue } from 'react-currency-input-field';


function ProductCard({ product }) {
  return (
    <Card className="d-flex justify-content-end product-card text-center mt-3">
      <Link to={`/product/${product.id}`}>
        <img
          src={`../public/productsImages/${product.image}`}
          className="product-img mt-3"
          alt={product.name}
        ></img>
      </Link>
      <Link
        to={`/product/${product.id}`}
        className="text-decoration-none text-reset"
      >
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text style={{fontSize: '2rem', fontWeight: 'bold'}}>
          {formatValue({
                      value: product.price.toString(),
                      intlConfig: { locale: 'pt-BR', currency: 'BRL' },
                      decimalScale: '2',
                    })}
          </Card.Text>
          <Button className="w-100">Comprar</Button>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default ProductCard;
