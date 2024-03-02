import { Header } from "@/components/Header";
import Head from "next/head";
import styles from "./styles.module.scss";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { setupAPIClient } from "@/services/api";
import { canSSRAuth } from "@/utils/canSSRAuth";

export default function Category() {
  const [name, setName] = useState('')

  async function handleRegister(event: FormEvent){
    event.preventDefault()

    if(name === ""){
      toast.warning("Digite uma categoria")
      return;
    }

    const apiClient = setupAPIClient();
    await apiClient.post("/category", {
      name: name
    })

    toast.success("Categoria cadastrada com sucesso!")
    setName("")
    
  }

  return (
    <>
      <Head>
        <title>Nova categoria - Diogo Pizzaria</title>
      </Head>
      <div>
        <Header />

        <main className={styles.container}>
          <h1>Cadastrar categorias</h1>

          <form className={styles.form} onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Digite o nome da categoria"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button className={styles.buttonAdd} type="submit">
              cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
}


export const getServerSideProps = canSSRAuth(async (ctx) => {

  return {
    props:{}
  }
  
})