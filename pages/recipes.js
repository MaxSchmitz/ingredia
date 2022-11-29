import { useUser } from '../lib/hooks'
import { useState } from "react";
import Banner from '../components/banner';
import styles from "./index.module.css";

const Recipe = () => {
  const user = useUser({ redirectTo: '/login' })
  const [foodInput, setFoodInput] = useState("");
  const [lastFood, setLastFood] = useState("");
  const [result, setResult] = useState();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function capitalizeEveryWord(string) {
    return string.split(' ').map(word => capitalizeFirstLetter(word)).join(' ');
  }

  async function onSubmit(event) {
    event.preventDefault();
    const lastFood = setLastFood(foodInput);
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
          <form onSubmit={onSubmit} className="space-x-4">
            <input
              type="text"
              name="food"
              placeholder="Holy Guacamole"
              value={foodInput}
              onChange={(e) => setFoodInput(e.target.value)}
            />
            <div className="whitespace-nowrap inline-flex items-center justify-center my-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              <button type="submit">Generate Recipe
              </button>
            </div>

          </form>

        </>
      )}
      {lastFood && result ? (
          <div className="w-full max-w-prose container mx-auto xs:min-w-full p-4 mb-16 mt-8 shadow-2xl">
            <h1 className="text-3xl">{capitalizeEveryWord(lastFood)} Recipe</h1>
            <div className="text-left whitespace-pre-wrap">{result}</div>
            <p className="text-center mt-6">
              Share this recipe with your friends
            </p>
          </div>
      ): (
        <h1 className="text-3xl animate-bounce my-2.5">{capitalizeEveryWord(lastFood)}</h1>
      )}


    </>
  )
}

export default Recipe
