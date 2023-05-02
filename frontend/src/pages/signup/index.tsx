import Head from "next/head";
import styles from "@/styles/home.module.scss";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import { Input } from "../../components/ui/Input";
import Button from "../../components/ui/Button";

import Link from "next/link";

export default function Signup() {
  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu cadastro</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logo} alt="LOGO Sujeito Pizza" />

        <div className={styles.login}>
          <h1>Criando sua Conta</h1>
          <form action="post">
            <Input placeholder="Digite seu nome" type="text" />
            <Input placeholder="Digite seu email" type="password" />
            <Input placeholder="Digite sua senha" type="password" />
            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
          <Link href="/" className={styles.text}>
            Não possui uma conta? Cadastre-se aqui
          </Link>
        </div>
      </div>
    </>
  );
}
