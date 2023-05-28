import client from "./faunadb";
import faunadb from "faunadb";
import {
  ContinentsAndCitiesDataResponse,
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

export async function getDataCities(continent: string) {
  try {
    const response = (await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index("cities_continent_by_id"), continent)),
        q.Lambda("x", q.Get(q.Var("x")))
      )
    )) as FaunaDBResponse<ContinentsAndCitiesDataResponse>;

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getDataContinentsDescriptionCities(continent: string) {
  try {
    const response = (await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index("continents_by_id"), continent)),
        q.Lambda("x", q.Get(q.Var("x")))
      )
    )) as FaunaDBResponse<ContinentsDataResponse>;

    return response;
  } catch (error) {
    console.log(error);
  }
}
