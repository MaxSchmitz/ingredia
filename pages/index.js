import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [foodInput, setFoodInput] = useState("");
  const [result, setResult] = useState();
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ food: foodInput, user: user }),
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
      </Head>

      <main className={styles.main}>
        <img src="/chef.png" className={styles.icon} />
        <h3>Ingredia</h3>
        <p>GPT-3 powered generic recipes</p>
        {isLoggedIn
        ? <form onSubmit={onSubmit}>
            <input
              type="text"
              name="food"
              placeholder="Find a Recipe"
              value={foodInput}
              onChange={(e) => setFoodInput(e.target.value)}
            />
            <input type="submit" value="Search Recipes" />
          </form>
        : <form>
            <input
              type="text"
              name="user"
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              />
            <input type="submit" value="Enter Email" onClick={setIsLoggedIn} />
          </form>
        }

        <div className={styles.result}>{result}</div>
        
      </main>
    </div>
  );
}
