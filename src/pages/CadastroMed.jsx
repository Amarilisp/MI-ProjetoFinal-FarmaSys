import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IMaskInput } from "react-imask";

const CadastroMed = () => {
  const [cadMed, setCadMed] = useState("");
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

    var listaMed = localStorage.getItem("listaMedicamentos") || [];
    listaMedicamentos.push({
      cadMed,
      lab,
      dosagem,
      descricao,
      preco,
      tipoMed,
    });
    localStorage.setItem(
      "listaMedicamentos",
      JSON.stringify(listaMedicamentos)
    );
  }
  return (
    <div>
      <div className="divPai"> </div>
      <h1>Cadastro de Novos Medicamento</h1>

      <Form onSubmit={submitCadMed}>
        <Form.Group className="mb-3 grid" controlId="formBasicMedicamento">
          <Form.Label>Nome do Medicamento</Form.Label>
          <Form.Control
            className=""
            required
            value={cadMed}
            onChange={(e) => setCadMed(e.target.value)}
            type="text"
            placeholder="Nome do medicamento."
          />
          {erroMsg && (
            <div className="alert alert-warning" role="alert">
              {erroMsg}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3 grid" controlId="formBasicLab">
          <Form.Label>Laboratório</Form.Label>
          <Form.Control
            className=""
            required
            value={lab}
            onChange={(e) => setLab(e.target.value)}
            type="text"
            placeholder="Nome do laboratório."
          />
          {erroMsg && (
            <div className="alert alert-warning" role="alert">
              {erroMsg}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3 grid" controlId="formBasicdosagem">
          <Form.Label>Dosagem</Form.Label>
          <Form.Control
            className=""
            required
            value={dosagem}
            onChange={(e) => setDosagem(e.target.value)}
            type="text"
            placeholder="Dosagem do medicamento."
          />
          {erroMsg && (
            <div className="alert alert-warning" role="alert">
              {erroMsg}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3 grid" controlId="formBasicDescricao">
          <Form.Label>Descrição do medicamento</Form.Label>
          <Form.Control
            className=""
            required
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            type="textarea"
            placeholder="Descrição do medicamento."
          />
          {erroMsg && (
            <div className="alert alert-warning" role="alert">
              {erroMsg}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3 grid" controlId="formBasicPreco">
          <Form.Label>Preço unitário do medicamento</Form.Label>
          <Form.Control
            className=""
            type="number"
            required
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            placeholder="Preço do medicamento."
          />

          {erroMsg && (
            <div className="alert alert-warning" role="alert">
              {erroMsg}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3 grid" controlId="formBasicTipoMed">
          <Form.Label>Medicamento controlado?</Form.Label>
          <Form.Select aria-label="Selecione uma opção.">
            <option value=""> Selecione uma opção. </option>
            <option value="sim"> Sim </option>
            <option value="não"> Não </option>
          </Form.Select>
          <Form.Control
            className=""
            required
            value={tipoMed}
            onChange={(e) => setTipoMed(e.target.value)}
            type="select"
            placeholder=""
          />
          {erroMsg && (
            <div className="alert alert-warning" role="alert">
              {erroMsg}
            </div>
          )}
        </Form.Group>
        <Button type="submit"> Cadastrar </Button>
      </Form>
    </div>
  );
};

export default CadastroMed;
