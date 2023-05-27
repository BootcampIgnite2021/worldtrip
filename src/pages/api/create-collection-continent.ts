import client from "../../services/faunadb";
import faunadb from "faunadb";
import { NextApiRequest, NextApiResponse } from "next";
const q = faunadb.query;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const result = await client.query(
        q.CreateCollection({
          name: "continents",
        })
      );

      res.status(200).json({ message: "collection created", result });
    } catch (error) {
      res.status(500).json({ error: "erro" });
    }
  } else {
    res.status(405).json({ error: "method not allowed" });
  }
}
