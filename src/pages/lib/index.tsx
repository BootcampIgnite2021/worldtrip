import client from "./../../services/faunadb";
import faunadb from "faunadb";
import {
  ContinentsDataResponse,
  FaunaDBResponse,
} from "@/interfaces/faunadbResponse";

const q = faunadb.query;

export async function getData() {
  try {
    const response = (await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("continents"))),
        q.Lambda((x) => q.Get(x))
      )
    )) as FaunaDBResponse<ContinentsDataResponse>;

    return response;
  } catch (error) {
    console.log(error);
  }
}
