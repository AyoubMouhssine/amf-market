import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./index.css";
import exempleProduct from "../images/photo4.jpg";
export default function Produit(props) {
  const { image, title, price, link } = props;

  return (
    <Card className="product-card">
      <Link to={link}>
        <Card.Img
          variant="top"
          src={image ? image : exempleProduct}
          alt={title}
          className="product-image"
        />
        {/* <Carousel /> */}
        <Card.Body className="card-body">
          <Card.Title className="product-title">{title}</Card.Title>
          <Card.Text className="product-price">{price} Dhs</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}
