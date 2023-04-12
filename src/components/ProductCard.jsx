import React from "react";

export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return <li>{<img src={image} alt={title} />}</li>;
}
