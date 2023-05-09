import { Client } from "faunadb";

const client = new Client({
  secret: String(process.env.FAUNADB_KEY),
});

export default client;
