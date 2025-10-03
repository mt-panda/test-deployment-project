import { jokes } from "../data/index.js"

export const getJokes = (req, res) => {
  const UpdatedJokes = jokes
  res.status(200).json(UpdatedJokes)
  return;
}

