import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CadastroMed = () => {
  const [nomeMed, setCadMed] = useState("");
  const [lab, setLab] = useState("");
  const [dosagem, setDosagem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [tipoMed, setTipoMed] = useState("");
  const [erroMsg, setErroMsg] = useState("");

  function validarCadMed() {
    return;
  }
  function submitCadMed(e) {
    e.preventDefault();

    /*
    var listaMed = JSON.parse(
      localStorage.getItem("listaMedicamentos") || "[]"
    );
    */

    var listaMed = JSON.parse(localStorage.getItem("listaMedicamentos")) || [];
    listaMed.push({
      nomeMed,
      lab,
      dosagem,
      descricao,
      preco,
      tipoMed,
    });
    localStorage.setItem("listaMedicamentos", JSON.stringify(listaMed));
  }
  return (
    <div className="mt-5 h-100 container d-flex align-items-center justify-content-center">
      <div className="bg-light border p-2 card align-items-center divPai">
        <h3 className=" align-items-center">Cadastro de Novos Medicamentos</h3>

        <Form onSubmit={submitCadMed}>
          <div className="row">
            <Form.Group
              className="col-4 mb-3 grid"
              controlId="formBasicMedicamento"
            >
              <Form.Control
                className=""
                required
                value={nomeMed}
                onChange={(e) => setCadMed(e.target.value)}
                type="text"
                placeholder="Medicamento"
              />
              {erroMsg && (
                <div className="alert alert-warning" role="alert">
                  {erroMsg}
                </div>
              )}
            </Form.Group>
            <Form.Group className="col-4 mb-3 grid" controlId="formBasicLab">
              <Form.Control
                className=""
                required
                value={lab}
                onChange={(e) => setLab(e.target.value)}
                type="text"
                placeholder="Laboratório"
              />
              {erroMsg && (
                <div className="alert alert-warning" role="alert">
                  {erroMsg}
                </div>
              )}
            </Form.Group>

            <Form.Group
              className="col-4 mb-3 grid"
              controlId="formBasicdosagem"
            >
              <Form.Control
                className=""
                required
                value={dosagem}
                onChange={(e) => setDosagem(e.target.value)}
                type="text"
                placeholder="Dosagem"
              />
              {erroMsg && (
                <div className="alert alert-warning" role="alert">
                  {erroMsg}
                </div>
              )}
            </Form.Group>
          </div>
          <div>
            <div className="row">
              <Form.Group className="mb-3 grid" controlId="formBasicPreco">
                <Form.Control
                  className=""
                  type="number"
                  required
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                  placeholder="Preço."
                />

                {erroMsg && (
                  <div className="alert alert-warning" role="alert">
                    {erroMsg}
                  </div>
                )}
              </Form.Group>

              <Form.Group className="mb-3 grid" controlId="formBasicTipoMed">
                <Form.Select
                  aria-label="Medicamento controlado?"
                  as="select"
                  required
                  value={tipoMed}
                  onChange={(e) => setTipoMed(e.target.value)}
                >
                  <option value="x"> Medicamento controlado? </option>
                  <option value="sim"> Sim </option>
                  <option value="não"> Não </option>
                </Form.Select>
                {erroMsg && (
                  <div className="alert alert-warning" role="alert">
                    {erroMsg}
                  </div>
                )}
              </Form.Group>
            </div>

            <Form.Group className="mb-3 grid" controlId="formBasicDescricao">
              <Form.Control
                className=""
                rows={5}
                required
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                as="textarea"
                placeholder="Descrição"
              />
              {erroMsg && (
                <div className="alert alert-warning" role="alert">
                  {erroMsg}
                </div>
              )}
            </Form.Group>
          </div>
          <Button type="submit"> Cadastrar </Button>
        </Form>
      </div>
    </div>
  );
};

export default CadastroMed;
