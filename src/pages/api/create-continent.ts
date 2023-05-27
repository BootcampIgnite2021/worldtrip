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
  const continents = [
    {
      imageUrl: `${urlNorthAmerica}/north-america.png`,
      continent: "América do Norte",
      description: "Banhada ao norte pelo Oceano glacial Ártico",
      descriptionFull:
        "A América do Norte é uma das três subdivisões do continente americano. Historicamente, esse território foi colonizado por povos europeus, como ingleses, franceses e espanhóis, com destaque para as colônias de povoamento. A América do Norte possui vasta diversidade em termos de clima e vegetação e ainda conta com diferentes formas de relevo. Os três países desse continente, Canadá, Estados Unidos e México, são populosos e relativamente povoados. Eles apresentam diferenças substanciais em termos econômicos e sociais. Mesmo assim, são considerados polos de poder importantes em diversas áreas da geopolítica mundial.",
      country: 23,
      language: 3,
      cidades: 27,
    },
    {
      imageUrl: `${urlSouthAmerica}/south-america.png`,
      continent: "América do Sul",
      description: "É um subcontinente pertencente à América",
      descriptionFull:
        "A América do Sul é banhada pelos Oceanos Atlântico e Pacífico. Os países voltados para o Oceano Atlântico são Brasil, Uruguai, Argentina, Venezuela, Guiana, Suriname e Guiana Francesa. Por sua vez, os países banhados pelo Oceano Pacífico são Chile, Peru, Equador e Colômbia. Bolívia e Paraguai são os únicos países que não possuem saída para o mar.",
      country: 12,
      language: 3,
      cidades: 27,
    },
    {
      imageUrl: `${urlAsia}/asia.png`,
      continent: "Ásia",
      description: "É o maior continente em área terrestre do mundo",
      descriptionFull:
        "Os países da Ásia são as nações que constituem o continente asiático, localizado a leste do continente europeu e a nordeste do continente africano. Juntos, esses países compreendem uma área de mais de 43 milhões de km2, formando, portanto, o continente mais extenso. Nesses países, há mais de quatro bilhões de habitantes, fazendo do continente asiático o mais populoso.",
      country: 49,
      language: 3,
      cidades: 27,
    },
    {
      imageUrl: `${urlEurope}/continent-europe.png`,
      continent: "Europa",
      description: "É o segundo menor continente do mundo e possui 50 países",
      descriptionFull:
        "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
      country: 50,
      language: 60,
      cidades: 27,
    },
    {
      imageUrl: `${urlOceania}/oceania.png`,
      continent: "Oceania",
      description: "É o menor continente da Terra",
      descriptionFull:
        "Os países da Oceania são as nações que fazem parte da Oceania, um dos cinco continentes do mundo e também o menor deles, com aproximadamente 8,9 milhões de km2. Esses países são também conhecidos como o “Novíssimo Mundo” por terem sido descobertos após a conquista do Novo Mundo (América) pelos europeus. A Oceania é constituída por 14 Estados soberanos e não possui nenhuma fronteira terrestre entre seus países.",
      country: 14,
      language: 1200,
      cidades: 27,
    },
    {
      imageUrl: `${urlAfrica}/africa.png`,
      continent: "África",
      description: "É o terceiro continente mais extenso",
      descriptionFull:
        "O continente africano é formado por 54 países, distribuídos em cinco regiões (África Setentrional, África Meridional, África Central, África Ocidental e África Oriental). Além dos países, o continente também abrange territórios não reconhecidos, como a Somalilândia e a República Árabe Saharaui Democrática. Os povos que habitam esses países hoje ultrapassam a marca de um bilhão de habitantes, distribuídos em uma área de aproximadamente 30 milhões de km2.",
      country: 54,
      language: 2000,
      cidades: 27,
    },
  ];
  try {
    if (req.method === "POST") {
      const result = await Promise.all(
        continents.map((continent) =>
          client.query(
            q.Create(q.Collection("continents"), {
              data: continent,
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
