import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  function validarEmail(email) {
    const valEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return valEmail.test(email);
  }
  function validarSenha(senha) {
    const valSenha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return valSenha.test(senha);
  }

  function validLog(e) {
    e.preventDefault();

    if (!validarEmail(email)) {
      setErroEmail("Campo email é obrigatório!");
      return;
    }
    setErroEmail("");

    if (validarSenha.trim() === '') {
    setErroSenha('Campo senha é obrigatório');
      return;
    
    }
    setErroSenha("");
    console.log(senha, "e", email);
  }

  return (
    <Form onSubmit={validLog} className="container">
      <Form.Group className="mb-3 grid" controlId="formBasicEmailLogin">
        <Form.Label>e-mail</Form.Label>
        <Form.Control
          className="w"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Digite seu email"
        />
        {erroEmail && (
          <div className="alert alert-warning" role="alert">
            {erroEmail}
          </div>
        )}
      </Form.Group>

      <Form.Group className="mb-3 grid" controlId="formBasicPassword">
        <Form.Label>senha</Form.Label>
        <Form.Control
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          placeholder="Digite sua senha"
        />
        {erroSenha && (
          <div className="alert alert-warning" role="alert">
            {erroSenha}
          </div>
        )}
      </Form.Group>
      <Button type="submit">enviar</Button>
    </Form>
  );
};

export default Login;
