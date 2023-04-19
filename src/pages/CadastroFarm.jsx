import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IMaskInput } from "react-imask";

const CadastroFarm = () => {
  const [razaoSocial, setRazaoSocial] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [erroMsg, setErroMsg] = useState("");
  const [sucess, setSucess] = useState("");
  const [endereco, setEndereco] = useState();

  function validarCnpj(cnpj) {
    cnpj = cnpj.replace(/\D/g, ""); //Remove tudo o que não é dígito
    cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2"); //Coloca ponto entre o segundo e o terceiro dígitos
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3"); //Coloca ponto entre o quinto e o sexto dígitos
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2"); //Coloca uma barra entre o oitavo e o nono dígitos
    cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2"); //Coloca ;
    return cnpj;
  }

  function validarEmail(email) {
    const valEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return valEmail.test(email);
  }

  function validarCelular(celular) {
    const celularLength = celular.length.value;

    if (celularLength === 0) {
      celular.value += "(";
    } else if (celularLength === 3) {
      celular.value += ") ";
    } else if (celularLength === 10) {
      celular.value += "-";
    }
  }

  function validarCep(cep) {
    const cepLength = cep.length.value;

    if (cepLength === 5) {
      cep.value += "-";
    }
  }

  function submitCadastro(e) {
    e.preventDefault();

    var listaFarmacias = localStorage.getItem("listaFarmacias") || [];
    listaFarmacias.push({
      razaoSocial,
      cnpj,
      nomeFantasia,
      email,
      celular,
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
    });
    localStorage.setItem("listaFarmacias", JSON.stringify(listaFarmacias));

    try {
      salvar(cnpj, email, razaoSocial, celular, cep);
    } catch (error) {
      setErroMsg("Ocorreu um erro ao validar os campos: " + error.message);
      console.log(error);
    }
  }
  function buscarCep() {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setLogradouro(dados.logradouro);
        setNumero(dados.numero);
        setBairro(dados.bairro);
        setCidade(dados.cidade);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="divPai">
      <h1>Cadastrar Nova Farmácia</h1>
      <Form onSubmit={submitCadastro}>
        <div className="row">
          <Form.Group
            className="col-8 mb-3 grid"
            controlId="formBasicRazaoSocial"
          >
            <Form.Label>Razão Social</Form.Label>
            <Form.Control
              className=""
              required
              value={razaoSocial}
              onChange={(e) => setRazaoSocial(e.target.value)}
              type="text"
              placeholder="Digite a Razão Social."
            />
            {erroMsg && (
              <div className="alert alert-warning" role="alert">
                {erroMsg}
              </div>
            )}
          </Form.Group>

          <Form.Group className="col-4 mb-3 grid" controlId="formBasicCnpj">
            <Form.Label>CNPJ</Form.Label>
            <Form.Control
              className=""
              as={IMaskInput}
              mask="00.000.000/0000-00"
              required
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              type="text"
              placeholder="Digite o CNPJ."
            />
            {erroMsg && (
              <div className="alert alert-warning" role="alert">
                {erroMsg}
              </div>
            )}
          </Form.Group>
        </div>

        <div className="row">
          <Form.Group
            className="col-9 mb-3 grid"
            controlId="formBasicNomeFantasia"
          >
            <Form.Label>Nome Fantasia</Form.Label>
            <Form.Control
              className=""
              required
              value={nomeFantasia}
              onChange={(e) => setNomeFantasia(e.target.value)}
              type="text"
              placeholder="Digite o nome fantasia da empresa."
            />
            {erroMsg && (
              <div className="alert alert-warning" role="alert">
                {erroMsg}
              </div>
            )}
          </Form.Group>
        </div>

        <div className="row">
          <Form.Group className="col-4 mb-3 grid" controlId="formBasicCelular">
            <Form.Label>Telefone Celular</Form.Label>
            <Form.Control
              className=""
              as={IMaskInput}
              mask="(00) 00000-0000"
              required
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              type="text"
              placeholder="Digite o número do celular com DDD."
            />
            {erroMsg && (
              <div className="alert alert-warning" role="alert">
                {erroMsg}
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-6 grid" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              className=""
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Digite o email."
            />
            {erroMsg && (
              <div className="alert alert-warning" role="alert">
                {erroMsg}
              </div>
            )}
          </Form.Group>
        </div>

        <Form.Group className="mb-3 grid" controlId="formBasicCep">
          <Form.Label>CEP</Form.Label>
          <Form.Control
            type="text"
            value={cep}
            className=""
            required
            onChange={(e) => setCep(e.target.value)}
            placeholder="Digite o CEP."
          />
          <input type="button" onClick={buscarCep} value="Buscar Endereço" />

          {erroMsg && (
            <div className="alert alert-warning" role="alert">
              {erroMsg}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3 grid" controlId="formBasicLogradouro">
          <Form.Label>Logradouro</Form.Label>
          <Form.Control
            className=""
            required
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
            type="text"
            placeholder="Digite o logradouro."
          />
          {erroMsg && (
            <div className="alert alert-warning" role="alert">
              {erroMsg}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3 grid" controlId="formBasicNumero">
          <Form.Label>Número</Form.Label>
          <Form.Control
            className=""
            required
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            type="number"
            placeholder="Digite o número."
          />
          {erroMsg && (
            <div className="alert alert-warning" role="alert">
              {erroMsg}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3 grid" controlId="formBasicComplemento">
          <Form.Label>Complemento</Form.Label>
          <Form.Control
            className=""
            required
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            type="text"
            placeholder="Digite o complemento, se houver."
          />
          {erroMsg && (
            <div className="alert alert-warning" role="alert">
              {erroMsg}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3 grid" controlId="formBasicBairro">
          <Form.Label>Bairro</Form.Label>
          <Form.Control
            className=""
            required
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            type="text"
            placeholder="Digite o nome do bairro."
          />
          {erroMsg && (
            <div className="alert alert-warning" role="alert">
              {erroMsg}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3 grid" controlId="formBasicCidade">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            className=""
            required
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            type="text"
            placeholder="Digite o nome da Cidade."
          />
          {erroMsg && (
            <div className="alert alert-warning" role="alert">
              {erroMsg}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3 grid" controlId="formBasicUF">
          <Form.Label>UF</Form.Label>
          <Form.Control
            className=""
            required
            value={uf}
            onChange={(e) => setUf(e.target.value)}
            type="text"
            placeholder="Digite o Estado."
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

export default CadastroFarm;
