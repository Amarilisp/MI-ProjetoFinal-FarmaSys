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
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="">
      <Row className="border mt-5 m-5">
        <Table>
          <thead>
            <tr>
              <th>Nome Fantasia</th>
              <th>Cidade</th>
              <th>UF</th>
            </tr>
          </thead>
          <tbody>
            {listaFarm.map((farmacia) => {
              return (
                <tr>
                  <td>{farmacia.nomeFantasia}</td>
                  <td>{farmacia.cidade}</td>
                  <td>{farmacia.uf}</td>
                  <td>
                    <Button onClick={() => exibirTabela(farmacia)}>
                      Dados da Farmácia
                    </Button>
                    {tabelaFarmacia == farmacia.cnpj && (
                      <Modal
                        show={showModal}
                        onHide={() => setTabelaFarmacia({})}
                      >
                        <Modal.Header>Titulo</Modal.Header>
                        <Modal.Body>
                          <ListGroup>
                            <ListGroupItem>
                              Razão Social: {farmacia.razaoSocial}
                            </ListGroupItem>

                            <ListGroupItem>
                              Farmácia: {farmacia.cnpj}
                            </ListGroupItem>

                            <ListGroupItem>
                              Nome Fantasia: {farmacia.nomeFantasia}
                            </ListGroupItem>

                            <ListGroupItem>
                              Celular: {farmacia.celular}
                            </ListGroupItem>

                            <ListGroupItem>
                              Logradouro: {farmacia.logradouro}
                            </ListGroupItem>

                            <ListGroupItem>
                              Número: {farmacia.numero}
                            </ListGroupItem>

                            <ListGroupItem>
                              Complemento: {farmacia.complemento}
                            </ListGroupItem>

                            <ListGroupItem>
                              Bairro: {farmacia.bairro}
                            </ListGroupItem>

                            <ListGroupItem>
                              Cidade: {farmacia.cidade}
                            </ListGroupItem>

                            <ListGroupItem> UF: {farmacia.uf} </ListGroupItem>
                          </ListGroup>
                        </Modal.Body>
                      </Modal>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

export default ListaFarm;
