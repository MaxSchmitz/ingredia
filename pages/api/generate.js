import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-davinci-001", {
    prompt: generatePrompt(req.body.food),
    temperature: 0.34,
    max_tokens: 1547,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(food) {
  const capitalizedAnimal =
    food[0].toUpperCase() + food.slice(1, 30).toLowerCase();
  return `Writes a generic recipe.

   ${capitalizedAnimal} recipe:`;
}
