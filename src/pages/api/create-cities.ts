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

export async function createCityCollection() {
  await client.query(
    q.CreateCollection({
      name: "cities",
    })
  );
}

export async function createCityDocuments() {
  const cities = [
    // América do Norte
    {
      name: "Acapulco",
      continent: "América do Norte",
      imageUrl: `${urlNorthAmerica}/acapulco.png`,
    },
    {
      name: "Cancun",
      continent: "América do Norte",
      imageUrl: `${urlNorthAmerica}/cancun.png`,
    },
    {
      name: "Las Vegas",
      continent: "América do Norte",
      imageUrl: `${urlNorthAmerica}/las-vegas.png`,
    },
    {
      name: "Miami",
      continent: "América do Norte",
      imageUrl: `${urlNorthAmerica}/miami.png`,
    },
    {
      name: "Vancouver",
      continent: "América do Norte",
      imageUrl: `${urlNorthAmerica}/vancuver.png`,
    },
    // América do Sul
    {
      name: "Cusco",
      continent: "América do Sul",
      imageUrl: `${urlSouthAmerica}/cusco.png`,
    },
    {
      name: "Lima",
      continent: "América do Sul",
      imageUrl: `${urlSouthAmerica}/lima.png`,
    },
    {
      name: "Quito",
      continent: "América do Sul",
      imageUrl: `${urlSouthAmerica}/quito.png`,
    },
    {
      name: "Rio de Janeiro",
      continent: "América do Sul",
      imageUrl: `${urlSouthAmerica}/rio-janeiro.png`,
    },
    {
      name: "Santiago",
      continent: "América do Sul",
      imageUrl: `${urlSouthAmerica}/santiago.png`,
    },
    // Ásia
    {
      name: "Bangkok",
      continent: "Ásia",
      imageUrl: `${urlAsia}/bangkok.png`,
    },
    {
      name: "Hanoi",
      continent: "Ásia",
      imageUrl: `${urlAsia}/hanoi.png`,
    },
    {
      name: "Pequin",
      continent: "Ásia",
      imageUrl: `${urlAsia}/pequim.png`,
    },
    {
      name: "Seul",
      continent: "Ásia",
      imageUrl: `${urlAsia}/seul.png`,
    },
    {
      name: "Xangai",
      continent: "Ásia",
      imageUrl: `${urlAsia}/xangai.png`,
    },
    // Europa
    {
      name: "Amsterdã",
      continent: "Europa",
      imageUrl: `${urlEurope}/amsterda.png`,
    },
    {
      name: "Londres",
      continent: "Europa",
      imageUrl: `${urlEurope}/londres.png`,
    },
    {
      name: "Paris",
      continent: "Europa",
      imageUrl: `${urlEurope}/paris.png`,
    },
    {
      name: "Praga",
      continent: "Europa",
      imageUrl: `${urlEurope}/praga.png`,
    },
    {
      name: "Roma",
      continent: "Europa",
      imageUrl: `${urlEurope}/roma.png`,
    },
    // Oceania
    {
      name: "Canberra",
      continent: "Oceania",
      imageUrl: `${urlOceania}/canberra.png`,
    },
    {
      name: "Melbourne",
      continent: "Oceania",
      imageUrl: `${urlOceania}/melbourne.png`,
    },
    {
      name: "Perth",
      continent: "Oceania",
      imageUrl: `${urlOceania}/perth.png`,
    },
    {
      name: "Rotorua",
      continent: "Oceania",
      imageUrl: `${urlOceania}/rotorua.png`,
    },
    {
      name: "Sydney",
      continent: "Oceania",
      imageUrl: `${urlOceania}/sydney.png`,
    },
    //África
    {
      name: "Alexandria",
      continent: "África",
      imageUrl: `${urlAfrica}/alexandria.png`,
    },
    {
      name: "Cairo",
      continent: "África",
      imageUrl: `${urlAfrica}/cairo.png`,
    },
    {
      name: "Durban",
      continent: "África",
      imageUrl: `${urlAfrica}/durban.png`,
    },
    {
      name: "Fez",
      continent: "África",
      imageUrl: `${urlAfrica}/fez.png`,
    },
    {
      name: "Lagos",
      continent: "África",
      imageUrl: `${urlAfrica}/lagos.png`,
    },
  ];

  await Promise.all(
    cities.map((city) =>
      client.query(
        q.Create(q.Collection("cities"), {
          data: city,
        })
      )
    )
  );
}

// createCityCollection().then(createCityDocuments);
