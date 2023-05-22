import client from "../../services/faunadb";
import faunadb from "faunadb";
const q = faunadb.query;

let urlAfrica = "https://worldtrip-ignite.netlify.app/images/africa";
let urlAsia = "https://worldtrip-ignite.netlify.app/images/asia";
let urlEurope = "https://worldtrip-ignite.netlify.app/images/europe";
let urlNorthAmerica =
  "https://worldtrip-ignite.netlify.app/images/north-america";
let urlOceania = "https://worldtrip-ignite.netlify.app/images/oceania";
let urlSouthAmerica =
  "https://worldtrip-ignite.netlify.app/images/south-america";

export async function createContinentCollection() {
  await client.query(
    q.CreateCollection({
      name: "continents",
    })
  );
}

export async function createContinentDocuments() {
  const continents = [
    {
      imageUrl: `${urlNorthAmerica}/north-america.png`,
      continent: "América do Norte",
      description: "Banhada ao norte pelo Oceano glacial Ártico",
    },
    {
      imageUrl: `${urlSouthAmerica}/south-america.png`,
      continent: "América do Sul",
      description: "É um subcontinente pertencente à América",
    },
    {
      imageUrl: `${urlAsia}/asia.png`,
      continent: "Ásia",
      description: "É o maior continente em área terrestre do mundo",
    },
    {
      imageUrl: `${urlEurope}/continent-europe.png`,
      continent: "Europa",
      description: "É o segundo menor continente do mundo e possui 50 países",
    },
    {
      imageUrl: `${urlOceania}/oceania.png`,
      continent: "Oceania",
      description: "É o menor continente da Terra",
    },
    {
      imageUrl: `${urlAfrica}/africa.png`,
      continent: "África",
      description: "É o terceiro continente mais extenso",
    },
  ];

  await Promise.all(
    continents.map((continent) =>
      client.query(
        q.Create(q.Collection("continents"), {
          data: continent,
        })
      )
    )
  );
}

// createContinentCollection().then(createContinentDocuments);
