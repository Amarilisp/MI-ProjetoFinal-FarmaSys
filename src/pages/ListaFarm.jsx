import React from "react";
import { useState } from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Modal,
  Row,
  Table,
} from "react-bootstrap";

const ListaFarm = () => {
  const [tabelaFarmacia, setTabelaFarmacia] = useState(null);
  const listaFarm = JSON.parse(localStorage.getItem("listaFarmacias")) || [];

  const exibirTabela = (item) => setTabelaFarmacia(item);
  return (
    <Row className="">
      {Object.keys(listaFarm).map((item) => {
        const farmacia = listaFarm[item];
        return (
          <Table key={item} style={{ width: "" }}>
            <Table.Title>{farmacia.razaoSocial}</Table.Title>
            <Table.Text>{farmacia.cnpj}</Table.Text>
            <Button onClick={() => exibirTabela(item)}>
              {" "}
              Dados da Farmácia
            </Button>
            {tabelaFarmacia === item && (
              <Modal show={true} onHide={() => setTabelaFarmacia(null)}>
                <Modal.Header>
                  <Modal.Body>
                    <ListGroup>
                      <ListGroupItem>
                        Nome da Farmácia: {farmacia.razaoSocial}
                      </ListGroupItem>

                      <ListGroupItem>Farmácia: {farmacia.cnpj}</ListGroupItem>

                      <ListGroupItem>
                        Farmácia: {farmacia.nomeFantasia}
                      </ListGroupItem>

                      <ListGroupItem>
                        Farmácia: {farmacia.celular}
                      </ListGroupItem>

                      <ListGroupItem>
                        Farmácia: {farmacia.logradouro}
                      </ListGroupItem>

                      <ListGroupItem>Farmácia: {farmacia.numero}</ListGroupItem>

                      <ListGroupItem>
                        Farmácia: {farmacia.complemento}
                      </ListGroupItem>

                      <ListGroupItem>Farmácia: {farmacia.bairro}</ListGroupItem>

                      <ListGroupItem>Farmácia: {farmacia.cidade}</ListGroupItem>

                      <ListGroupItem>Farmácia: {farmacia.uf}</ListGroupItem>
                    </ListGroup>
                  </Modal.Body>
                </Modal.Header>
              </Modal>
            )}
          </Table>
        );
      })}
      ;
    </Row>
  );
};

export default ListaFarm;
