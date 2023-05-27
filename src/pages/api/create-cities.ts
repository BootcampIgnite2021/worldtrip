import client from "../../services/faunadb";
import faunadb from "faunadb";
import { NextApiRequest, NextApiResponse } from "next";
const q = faunadb.query;

let urlAfrica = "https://worldtrip-ignite.netlify.app/images/africa";
let urlAsia = "https://worldtrip-ignite.netlify.app/images/asia";
let urlEurope = "https://worldtrip-ignite.netlify.app/images/europe";
let urlNorthAmerica =
  "https://worldtrip-ignite.netlify.app/images/north-america";
let urlOceania = "https://worldtrip-ignite.netlify.app/images/oceania";
let urlSouthAmerica =
  "https://worldtrip-ignite.netlify.app/images/south-america";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cities = [
    // América do Norte
    {
      name: "Acapulco",
      continent: "América do Norte",
      imageUrl: `${urlNorthAmerica}/acapulco.png`,
      country: "México",
      code: "mex",
    },
    {
      name: "Cancun",
      continent: "América do Norte",
      imageUrl: `${urlNorthAmerica}/cancun.png`,
      country: "México",
      code: "mex",
    },
    {
      name: "Las Vegas",
      continent: "América do Norte",
      imageUrl: `${urlNorthAmerica}/las-vegas.png`,
      country: "Estados Unidos",
      code: "us",
    },
    {
      name: "Miami",
      continent: "América do Norte",
      imageUrl: `${urlNorthAmerica}/miami.png`,
      country: "Estados Unidos",
      code: "us",
    },
    {
      name: "Vancouver",
      continent: "América do Norte",
      imageUrl: `${urlNorthAmerica}/vancuver.png`,
      country: "Canadá",
      code: "can",
    },
    // América do Sul
    {
      name: "Cusco",
      continent: "América do Sul",
      imageUrl: `${urlSouthAmerica}/cusco.png`,
      country: "Peru",
      code: "per",
    },
    {
      name: "Lima",
      continent: "América do Sul",
      imageUrl: `${urlSouthAmerica}/lima.png`,
      country: "Peru",
      code: "per",
    },
    {
      name: "Quito",
      continent: "América do Sul",
      imageUrl: `${urlSouthAmerica}/quito.png`,
      country: "Equador",
      code: "ec",
    },
    {
      name: "Rio de Janeiro",
      continent: "América do Sul",
      imageUrl: `${urlSouthAmerica}/rio-janeiro.png`,
      country: "Brasil",
      code: "br",
    },
    {
      name: "Santiago",
      continent: "América do Sul",
      imageUrl: `${urlSouthAmerica}/santiago.png`,
      country: "Chile",
      code: "cl",
    },
    // Ásia
    {
      name: "Bangkok",
      continent: "Ásia",
      imageUrl: `${urlAsia}/bangkok.png`,
      country: "Tailândia",
      code: "th",
    },
    {
      name: "Hanoi",
      continent: "Ásia",
      imageUrl: `${urlAsia}/hanoi.png`,
      country: "Vietnã",
      code: "vn",
    },
    {
      name: "Pequin",
      continent: "Ásia",
      imageUrl: `${urlAsia}/pequim.png`,
      country: "China",
      code: "cn",
    },
    {
      name: "Seul",
      continent: "Ásia",
      imageUrl: `${urlAsia}/seul.png`,
      country: "Coreia do Sul",
      code: "kr",
    },
    {
      name: "Xangai",
      continent: "Ásia",
      imageUrl: `${urlAsia}/xangai.png`,
      country: "China",
      code: "cn",
    },
    // Europa
    {
      name: "Amsterdã",
      continent: "Europa",
      imageUrl: `${urlEurope}/amsterda.png`,
      country: "Holanda",
      code: "nl",
    },
    {
      name: "Londres",
      continent: "Europa",
      imageUrl: `${urlEurope}/londres.png`,
      country: "Reino Unido",
      code: "gb",
    },
    {
      name: "Paris",
      continent: "Europa",
      imageUrl: `${urlEurope}/paris.png`,
      country: "França",
      code: "fr",
    },
    {
      name: "Praga",
      continent: "Europa",
      imageUrl: `${urlEurope}/praga.png`,
      country: "República Checa",
      code: "cz",
    },
    {
      name: "Roma",
      continent: "Europa",
      imageUrl: `${urlEurope}/roma.png`,
      country: "Itália",
      code: "it",
    },
    // Oceania
    {
      name: "Canberra",
      continent: "Oceania",
      imageUrl: `${urlOceania}/canberra.png`,
      country: "Austrália",
      code: "au",
    },
    {
      name: "Melbourne",
      continent: "Oceania",
      imageUrl: `${urlOceania}/melbourne.png`,
      country: "Austrália",
      code: "au",
    },
    {
      name: "Perth",
      continent: "Oceania",
      imageUrl: `${urlOceania}/perth.png`,
      country: "Austrália",
      code: "au",
    },
    {
      name: "Rotorua",
      continent: "Oceania",
      imageUrl: `${urlOceania}/rotorua.png`,
      country: "Nova Zelândia",
      code: "nz",
    },
    {
      name: "Sydney",
      continent: "Oceania",
      imageUrl: `${urlOceania}/sydney.png`,
      country: "Austrália",
      code: "au",
    },
    //África
    {
      name: "Alexandria",
      continent: "África",
      imageUrl: `${urlAfrica}/alexandria.png`,
      country: "Egito",
      code: "eg",
    },
    {
      name: "Cairo",
      continent: "África",
      imageUrl: `${urlAfrica}/cairo.png`,
      country: "Egito",
      code: "eg",
    },
    {
      name: "Durban",
      continent: "África",
      imageUrl: `${urlAfrica}/durban.png`,
      country: "África do Sul",
      code: "za",
    },
    {
      name: "Fez",
      continent: "África",
      imageUrl: `${urlAfrica}/fez.png`,
      country: "Marrocos",
      code: "ma",
    },
    {
      name: "Lagos",
      continent: "África",
      imageUrl: `${urlAfrica}/lagos.png`,
      country: "Nigéria",
      code: "ng",
    },
  ];

  try {
    if (req.method === "POST") {
      const result = await Promise.all(
        cities.map((city) =>
          client.query(
            q.Create(q.Collection("cities"), {
              data: city,
            })
          )
        )
      );
      res.status(200).json({ message: "collection created", result });
    } else {
      res.status(405).json({ error: "method not allowed" });
    }
  } catch (error) {
    res.status(500).json({ error: "erro" });
  }
}
