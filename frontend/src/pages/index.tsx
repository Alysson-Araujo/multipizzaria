import { useContext, FormEvent, useState } from "react";
import Head from "next/head";
import styles from "@/styles/home.module.scss";
import logo from "../../public/logo.svg";
import Image from "next/image";
import { Input } from "../components/ui/Input";
import Button from "../components/ui/Button";
import Link from "next/link";
import { AuthContext } from "@/contexts/AuthContext";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    let data = {
      email,
      password
    };

    await signIn(data);
  }

  const { signIn } = useContext(AuthContext);
  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logo} alt="LOGO Sujeito Pizza" />

        <div className={styles.login}>
          <form action="post" onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
          <Link href="/signup" className={styles.text}>
            Não possui uma conta? Cadastre-se aqui
          </Link>
        </div>
      </div>
    </>
  );
}
