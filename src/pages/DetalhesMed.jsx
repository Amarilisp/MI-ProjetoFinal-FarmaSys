import React from "react";
import Card from "react-bootstrap/Card";

const MedicamentoCard = ({ medicamento }) => {
  return (
    <Card>
      <Card.Body>
        {medicamento.nomeMed} {medicamento.lab} {medicamento.dosagem} - R$
        {medicamento.preco} {medicamento.tipoMed}
      </Card.Body>
    </Card>
  );
};

export default MedicamentoCard;
