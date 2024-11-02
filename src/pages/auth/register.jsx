"use client";

import InitialNavbar from "@/components/HomeNavbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import formStyle from "@/styles/form.module.css";

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
        <div className={formStyle.register}>
            <InitialNavbar />
            <div className={formStyle.authDiv}>
                <section className={formStyle.formSection}>
                    <h2 className={formStyle.authTitle}>Registre-se</h2>
                    <form className={formStyle.authForm} onSubmit={handleSubmit}>

                        <div className={formStyle.inputDiv}>
                            <div className={formStyle.label}>
                                <h3>Nome <span>*</span></h3>
                            </div>
                        </div>
                        <input className={formStyle.formInput}
                            type="text"
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <div className={formStyle.inputDiv}>
                            <div className={formStyle.label}>
                                <h3>Email <span>*</span></h3>
                            </div>
                        </div>
                        <input className={formStyle.formInput}
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <div className={formStyle.inputDiv}>
                            <div className={formStyle.label}>
                                <h3>Senha <span>*</span></h3>
                            </div>
                        </div>
                        <input className={formStyle.formInput}
                            type="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        {error && <p className={formStyle.error}>{error}</p>}
                        <button className={formStyle.formBt} type="submit">Registrar</button>
                    </form>
                    <span className={formStyle.formLink}>
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