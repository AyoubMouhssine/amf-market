import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./index.css";
import Carousel from "../Carousel";
export default function Produit(props) {
  const { images, title, price, link } = props;

  return (
    <Card className="product-card">
      <Link to={link}>
        <div className=".product-image">
          <Carousel
            images={images}
            withIndicator={false}
            height={"200px"}
            time={5000}
          />
        </div>
        <Card.Body className="card-body">
          <Card.Title className="product-title">{title}</Card.Title>
          <Card.Text className="product-price">{price} Dhs</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}
