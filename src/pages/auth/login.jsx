// auth/login.jsx
import InitialNavbar from "@/components/HomeNavbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";
import formStyle from "@/styles/form.module.css";

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
        const data = await res.json();
        sessionStorage.setItem('token', data.token);
        //Rediriciona para a página principal depois do login
        router.push("/initial");
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
    <div className={formStyle.login}>

      <InitialNavbar />

      <div className={formStyle.authDiv}>
        <section className={formStyle.formSection}>
          <h1 className={formStyle.authTitle}>Login</h1>
          <form className={formStyle.authForm} onSubmit={handleSubmit}>

            <div className={formStyle.inputDiv}>
              <div className={formStyle.label}>
                <h3>Email <span>*</span></h3>
              </div>
              <input className={formStyle.formInput}
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={formStyle.inputDiv}>
              <div className={formStyle.label}>
                <h3>Senha <span>*</span></h3>
              </div>
              <input className={formStyle.formInput}
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className={formStyle.error}>{error}</p>}
            <button className={formStyle.formBt} type="submit">Entrar</button>
          </form>

          <span className={formStyle.formLink}>
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