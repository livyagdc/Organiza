"use client";

import InitialNavbar from "@/components/InitialNavbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password })
            });

            if (res.ok) {
                router.push("/auth/login");
            } else {
                const data = await res.json();
                setError(data.message || "Falha ao registrar");
            }
        } catch (error) {
            setError("Um erro ocorreu. Por favor tente de novo.")
        }
    };

    return (
        <div className="register">
            <InitialNavbar />
            <div class="authDiv">
                <section class="formSection">
                    <h2 class="authTitle">Registre-se</h2>
                    <form class="authForm" onSubmit={handleSubmit}>

                        <div class="inputDiv">
                            <div class="label">
                                <h3>Nome <span>*</span></h3>
                            </div>
                        </div>
                        <input class="formInput"
                            type="text"
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <div class="inputDiv">
                            <div class="label">
                                <h3>Email <span>*</span></h3>
                            </div>
                        </div>
                        <input class="formInput"
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <div class="inputDiv">
                            <div class="label">
                                <h3>Senha <span>*</span></h3>
                            </div>
                        </div>
                        <input class="formInput"
                            type="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        {error && <p className="error">{error}</p>}
                        <button class="formBt" type="submit">Registrar</button>
                    </form>
                    <span class="formLink">
                        Já possui uma conta?
                        <strong>
                            <Link href="./login"> Entrar</Link>
                        </strong>
                    </span>
                </section>
            </div>
        </div>
    );
}