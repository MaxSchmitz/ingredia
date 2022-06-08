import { useUser } from '../lib/hooks'
import { useState } from "react";
import styles from "./index.module.css";

const Recipe = () => {
  const user = useUser({ redirectTo: '/login' })
  const [foodInput, setFoodInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ food: foodInput, user: user.email }),
    });
    const data = await response.json();
    setResult(data.result);
    setFoodInput("");
  }

  return (
    <>
      {user && (
        <>
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
        </>
      )}


    </>
  )
}

export default Recipe
