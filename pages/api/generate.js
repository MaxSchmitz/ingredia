import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-oN6yPXuW4yBvBoZdBi3wbITE",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  // Given a prompt, the model will return one or more predicted completions, and can also return the probabilities of alternative tokens at each position.
  // https://beta.openai.com/docs/api-reference/completions
  const completion = await openai.createCompletion({
    model: "text-davinci-001", 
    prompt: generatePrompt(req.body.food),
    temperature: 0.34,
    max_tokens: 250,
    user: req.body.user,
  });
  console.log("completion.data.choices[0].text")
  console.log(completion.data.choices[0].text)
  console.log("req.body.user");
  console.log(req.body.user);

  // contentFilter checks completion.data.choices[0].text
  // The filter aims to detect generated text that could be sensitive or unsafe coming from the API
  // https://beta.openai.com/docs/engines/content-filter
  const contentFilter = await openai.createCompletion({
    model:"content-filter-alpha",
    prompt: wrapPrompt(completion.data.choices[0].text),
    temperature: 0.0,
    max_tokens: 1,
    top_p: 0,
    logprobs: 10,
    user: req.body.user,
  });
  // console.log('contentFilter.data.choices[0].text:')
  // console.log(contentFilter.data.choices[0].text);
  // console.log('res:')
  (contentFilter.data.choices[0].text == 2) ? res.status(200).json({ result: "No results" }) : res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(food) {
  const capitalizedRecipe =
    food[0].toUpperCase() + food.slice(1, 30).toLowerCase();
  return `Writes a generic recipe.

   ${capitalizedRecipe} recipe:`;
}

function wrapPrompt(prompt) {
  return `<|endoftext|>${prompt}\n--\nLabel:`
}
