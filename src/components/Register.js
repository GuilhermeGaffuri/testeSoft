import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    alert(`Registrado com sucesso! Email: ${email}`);
    navigate("/");
  };

  return (
    <body>
      <header>
        <h2>Tela de Cadastro</h2>
      </header>
      <section>
      <label>Nome</label>
        <input
          type="nome"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={() => handleRegister()}>Cadastrar</button>
        <Link to="/">Já tem uma conta? Faça login</Link>
      </section>
    </body>
  );
};

export default Register;
