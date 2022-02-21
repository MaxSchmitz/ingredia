import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [foodInput, setFoodInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ food: foodInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setFoodInput("");
  }

  return (
    <div>
      <Head>
        <title>Ingredia</title>
        <link rel="icon" href="/chef.png" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3066548685705175"
     crossorigin="anonymous"></script>
      </Head>

      <main className={styles.main}>
        <img src="/chef.png" className={styles.icon} />
        <h3>Ingredia</h3>
        <p>GPT-3 powered generic recipes</p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="food"
            placeholder="Find a Recipe"
            value={foodInput}
            onChange={(e) => setFoodInput(e.target.value)}
          />
          <input type="submit" value="Search Recipes" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
