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

    var listaFarmacias =
      JSON.parse(localStorage.getItem("listaFarmacias")) || [];
    listaFarmacias.push({
      razaoSocial,
      cnpj,
      nomeFantasia,
      email,
      celular,
      cep,
      logradouro,
      numero,
      bairro,
      cidade,
      uf,
    });
    localStorage.setItem("listaFarmacias", JSON.stringify(listaFarmacias));
  }
  function buscarCep() {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);

        setLogradouro(dados.logradouro);
        setBairro(dados.bairro);
        setCidade(dados.localidade);
        setUf(dados.uf);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="h-100 container d-flex align-items-center justify-content-center">
      <div className="bg-light border p-2 card align-items-center divPai">
        <h3 className="">Cadastro de Nova Farmácia</h3>
        <Form onSubmit={submitCadastro}>
          <div className="row">
            <Form.Group
              className="col-8 mb-3 grid"
              controlId="formBasicRazaoSocial"
            >
              <Form.Control
                className=""
                required
                value={razaoSocial}
                onChange={(e) => setRazaoSocial(e.target.value)}
                type="text"
                placeholder="Razão Social."
              />
              {erroMsg && (
                <div className="alert alert-warning" role="alert">
                  {erroMsg}
                </div>
              )}
            </Form.Group>

            <Form.Group className="col-4 mb-3 grid" controlId="formBasicCnpj">
              <Form.Control
                className=""
                as={IMaskInput}
                mask="00.000.000/0000-00"
                required
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                type="text"
                placeholder="CNPJ."
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
              className="col-12 mb-3 grid"
              controlId="formBasicNomeFantasia"
            >
              <Form.Control
                className=""
                required
                value={nomeFantasia}
                onChange={(e) => setNomeFantasia(e.target.value)}
                type="text"
                placeholder="Nome Fantasia."
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
              className="col-4 mb-3 grid"
              controlId="formBasicCelular"
            >
              <Form.Control
                className=""
                as={IMaskInput}
                mask="(00) 00000-0000"
                required
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
                type="text"
                placeholder="Celular."
              />
              {erroMsg && (
                <div className="alert alert-warning" role="alert">
                  {erroMsg}
                </div>
              )}
            </Form.Group>
            <Form.Group className="col-4 mb-6 grid" controlId="formBasicEmail">
              <Form.Control
                className=""
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="E-mail."
              />
              {erroMsg && (
                <div className="alert alert-warning" role="alert">
                  {erroMsg}
                </div>
              )}
            </Form.Group>

            <Form.Group
              className="gap-5 col-4 mb-3 d-flex grid"
              controlId="formBasicCep"
            >
              <Form.Control
                type="text"
                value={cep}
                className=""
                required
                onChange={(e) => setCep(e.target.value)}
                placeholder="CEP."
                onBlur={buscarCep}
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
              className="col-6 mb-3 grid"
              controlId="formBasicLogradouro"
            >
              <Form.Control
                className=""
                required
                value={logradouro}
                onChange={(e) => setLogradouro(e.target.value)}
                type="text"
                placeholder="Logradouro."
              />
              {erroMsg && (
                <div className="alert alert-warning" role="alert">
                  {erroMsg}
                </div>
              )}
            </Form.Group>

            <Form.Group className="col-3 mb-3 grid" controlId="formBasicNumero">
              <Form.Control
                className=""
                required
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                type="number"
                placeholder="Número."
              />
              {erroMsg && (
                <div className="alert alert-warning" role="alert">
                  {erroMsg}
                </div>
              )}
            </Form.Group>

            <Form.Group
              className="col-3 mb-auto grid"
              controlId="formBasicComplemento"
            >
              <Form.Control
                className=""
                required
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
                type="text"
                placeholder="Complemento."
              />
            </Form.Group>
          </div>

          <div className="row">
            <Form.Group className="col-3 mb-3 grid" controlId="formBasicBairro">
              <Form.Control
                className=""
                required
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                type="text"
                placeholder="Bairro."
              />
              {erroMsg && (
                <div className="alert alert-warning" role="alert">
                  {erroMsg}
                </div>
              )}
            </Form.Group>

            <Form.Group className="col-6 mb-3 grid" controlId="formBasicCidade">
              <Form.Control
                className=""
                required
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                type="text"
                placeholder="Cidade."
              />
              {erroMsg && (
                <div className="alert alert-warning" role="alert">
                  {erroMsg}
                </div>
              )}
            </Form.Group>

            <Form.Group className="col-3 mb-3 grid" controlId="formBasicUF">
              <Form.Control
                className=""
                required
                value={uf}
                onChange={(e) => setUf(e.target.value)}
                type="text"
                placeholder="UF."
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

export default CadastroFarm;
