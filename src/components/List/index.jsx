import React from "react";
import Card from "../Card";
import { Container } from "./styles";

export default function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <i className="fas fa-plus" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}
