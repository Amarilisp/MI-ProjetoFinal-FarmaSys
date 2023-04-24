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

    if (validarSenha()) {
      setErroSenha("Campo senha é obrigatório");
      return;
    }
    setErroSenha("");
    console.log(senha, "e", email);

    window.location.ref = "/lista-farmacia";
  }

  return (
    <div className="mt-5 align-items-center w-100 h-100 d-flex justify-content-center">
      <div>
        <div className="p-5 gap-2 align-items-center flex-column d-flex justify-content-center container d-flex p-2 bg-light border">
          <Form
            onSubmit={validLog}
            className="gap-2 align-items-center flex-column d-flex justify-content-center container"
          >
            <h4>Login</h4>
            <Form.Group controlId="formBasicEmailLogin">
              <Form.Control
                className=""
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

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                type="password"
                minLength="8"
                // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                placeholder="Senha"
              />
              {erroSenha && (
                <div className="alert alert-warning" role="alert">
                  {erroSenha}
                </div>
              )}
            </Form.Group>

            <Button type="submit">enviar</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
