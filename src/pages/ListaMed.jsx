import { useState } from "react";
import { Button, Card, ListGroup, ListGroupItem, Modal } from "react-bootstrap";

const ListaMed = () => {
  const [medicamentoSelecionado, setMedicamentoSelecionado] = useState(null);
  const listaMedicamentos = // sugestão de context api
    JSON.parse(localStorage.getItem("listaMedicamentos")) || [];

  const exibirModal = (item) => setMedicamentoSelecionado(item);

  return (
    <div className="bg-secondary d-flex">
      {Object.keys(listaMedicamentos).map((item) => {
        const medicamento = listaMedicamentos[item];

        return (
          <Card key={item} style={{ width: "250px" }}>
            <Card.Img
              style={{
                width: "200px",
                margin: "auto",
              }}
              src="src\assets\medicamento1.png"
            />
            <Card.Title>{medicamento.nomeMed}</Card.Title>
            <Card.Text>{medicamento.lab}</Card.Text>
            <Button onClick={() => exibirModal(item)}>Mais informações</Button>
            {medicamentoSelecionado === item && (
              <Modal show={true} onHide={() => setMedicamentoSelecionado(null)}>
                <Modal.Header closeButton>
                  <Modal.Title>Informações</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ListGroup>
                    <ListGroupItem>
                      Medicamento: {medicamento.nomeMed}
                    </ListGroupItem>

                    <ListGroupItem>
                      Laboratório: {medicamento.lab}
                    </ListGroupItem>

                    <ListGroupItem>
                      Dosagem: {medicamento.dosagem}
                    </ListGroupItem>

                    <ListGroupItem>
                      Tipo de Medicamento: {medicamento.tipoMed}
                    </ListGroupItem>

                    <ListGroupItem>
                      Preço: {listaMedicamentos[item].preco}
                    </ListGroupItem>

                    <ListGroupItem>
                      Descrição: {medicamento.descricao}
                    </ListGroupItem>
                  </ListGroup>
                </Modal.Body>
              </Modal>
            )}
          </Card>
        );
      })}
    </div>
  );
};

export default ListaMed;
