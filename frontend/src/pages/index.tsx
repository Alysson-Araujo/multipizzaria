import { useContext, FormEvent} from "react";
import Head from "next/head";
import styles from "@/styles/home.module.scss";
import logo from "../../public/logo.svg";
import Image from "next/image";
import { Input } from "../components/ui/Input";
import Button from "../components/ui/Button";
import Link from "next/link";
import { AuthContext } from "@/contexts/AuthContext";

export default function Home() {

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    let data= {
      email: "teste",
      password: "teste" 
    }

    await signIn(data);
  }

  const {signIn} = useContext(AuthContext);
  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logo} alt="LOGO Sujeito Pizza" />

        <div className={styles.login}>
          <form action="post" onSubmit={handleLogin}>
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Digite sua senha" type="password" />
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
