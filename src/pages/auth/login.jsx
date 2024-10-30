import InitialNavbar from "@/components/InitialNavbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        //Rediriciona para a página principal depois do login
        router.push("/home");
      } else {
        const data = await res.json();
        setError(data.message || "Falha no login");
      }
    } catch {
      setError("Ocorreu um erro. Tente novamente.")
    }
  };

  //className="min-h-screen"

  return (
    <div className="login">

      <InitialNavbar />

      <div class="authDiv">
        <section class="formSection">
          <h1 class="authTitle">Login</h1>
          <form class="authForm" onSubmit={handleSubmit}>

            <div class="inputDiv">
              <div class="label">
                <h3>Email <span>*</span></h3>
              </div>
              <input class="formInput"
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div class="inputDiv">
              <div class="label">
                <h3>Senha <span>*</span></h3>
              </div>
              <input class="formInput"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="error">{error}</p>}
            <button class="formBt" type="submit">Entrar</button>
          </form>

          <span class="formLink">
            Ainda não possui uma conta?
            <strong>
              <Link href="./register"> Inscreva-se</Link>
            </strong>
          </span>
        </section>

      </div>
    </div>
  );
}