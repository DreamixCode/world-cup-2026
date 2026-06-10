import {
  Algeria,
  Argentina,
  Australia,
  Austria,
  Belgium,
  Brasil,
  CaboVerde,
  Canada,
  Colombia,
  CotDIvoire,
  Croatia,
  Curacao,
  Ecuador,
  Egypt,
  England,
  France,
  Germany,
  Ghana,
  Haiti,
  Iran,
  Japan,
  Jordan,
  Marocco,
  Mexico,
  Netherlands,
  NewZealand,
  Norway,
  Panama,
  Paraguay,
  Portugal,
  Qatar,
  SaudiArabia,
  Scotland,
  Senegal,
  SouthAfrica,
  SouthKorea,
  Spain,
  Switzerland,
  Tunisia,
  Uruguay,
  Usa,
  Uzbekistan,
} from "./components/icons";

export const teams = [
  {
    name: "Germany",
    group: "a",
    flag: Germany,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 1,
  },
  {
    name: "Scotland",
    group: "a",
    flag: Scotland,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 2,
  },
  {
    name: "Algeria",
    group: "a",
    flag: Algeria,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 3,
  },
  {
    name: "Switzerland",
    group: "a",
    flag: Switzerland,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 4,
  },
  {
    name: "Spain",
    group: "b",
    flag: Spain,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 1,
  },
  {
    name: "Croatia",
    group: "b",
    flag: Croatia,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 2,
  },
  {
    name: "Argentina",
    group: "b",
    flag: Argentina,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 3,
  },
  {
    name: "Brasil",
    group: "b",
    flag: Brasil,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 4,
  },
  {
    name: "Australia",
    group: "c",
    flag: Australia,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 1,
  },
  {
    name: "Jordan",
    group: "c",
    flag: Jordan,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 2,
  },
  {
    name: "NewZealand",
    group: "c",
    flag: NewZealand,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 3,
  },
  {
    name: "England",
    group: "c",
    flag: England,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 4,
  },
  {
    name: "SaudiArabia",
    group: "d",
    flag: SaudiArabia,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 1,
  },
  {
    name: "Netherlands",
    group: "d",
    flag: Netherlands,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 2,
  },
  {
    name: "Austria",
    group: "d",
    flag: Austria,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 3,
  },
  {
    name: "France",
    group: "d",
    flag: France,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 4,
  },
  {
    name: "Senegal",
    group: "e",
    flag: Senegal,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 1,
  },
  {
    name: "Uruguay",
    group: "e",
    flag: Uruguay,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 2,
  },
  {
    name: "SouthAfrica",
    group: "e",
    flag: SouthAfrica,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 3,
  },
  {
    name: "Haiti",
    group: "e",
    flag: Haiti,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 4,
  },
  {
    name: "Usa",
    group: "f",
    flag: Usa,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 1,
  },
  {
    name: "Norway",
    group: "f",
    flag: Norway,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 2,
  },
  {
    name: "Portugal",
    group: "f",
    flag: Portugal,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 3,
  },
  {
    name: "CaboVerde",
    group: "f",
    flag: CaboVerde,
    matches: 0,
    wins: 0,
    draws: 0,
    loses: 0,
    points: 0,
    position: 4,
  },
];

export const groupByGroup = (teams, key) => {
  return teams?.reduce((acc, curr) => {
    (acc[curr[key]] = acc[curr[key]] || []).push(curr);
    return acc;
  }, {});
};

export const mockedBets = {
  matchId: 1489369,
  user: {
    id: "112529453352592387904",
    firstName: "Tania",
    lastName: "Kasabova",
    email: "tania.kasabova@dreamix.eu",
    picture:
      "https://lh3.googleusercontent.com/a/ACg8ocLm6z4WfWsxrvmyNGHFYGL-BRjOQ5gdeTytvn_jndIghJ9r21Y=s96-c",
  },
  bet: {
    home: 2,
    away: 1,
    symbol: "1",
  },
  points: null,
};

export const mockedMatches = [
  {
    date: "2026-06-11T19:00:00Z",
    id: 1489369,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 16,
        name: "Mexico",
        logo: "https://media.api-sports.io/football/teams/16.png",
        winner: null,
      },
      away: {
        id: 1531,
        name: "South Africa",
        logo: "https://media.api-sports.io/football/teams/1531.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-12T02:00:00Z",
    id: 1538999,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 17,
        name: "South Korea",
        logo: "https://media.api-sports.io/football/teams/17.png",
        winner: null,
      },
      away: {
        id: 770,
        name: "Czech Republic",
        logo: "https://media.api-sports.io/football/teams/770.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-12T19:00:00Z",
    id: 1539000,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 5529,
        name: "Canada",
        logo: "https://media.api-sports.io/football/teams/5529.png",
        winner: null,
      },
      away: {
        id: 1113,
        name: "Bosnia & Herzegovina",
        logo: "https://media.api-sports.io/football/teams/1113.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-13T01:00:00Z",
    id: 1489370,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 2384,
        name: "USA",
        logo: "https://media.api-sports.io/football/teams/2384.png",
        winner: null,
      },
      away: {
        id: 2380,
        name: "Paraguay",
        logo: "https://media.api-sports.io/football/teams/2380.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-13T19:00:00Z",
    id: 1489373,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1569,
        name: "Qatar",
        logo: "https://media.api-sports.io/football/teams/1569.png",
        winner: null,
      },
      away: {
        id: 15,
        name: "Switzerland",
        logo: "https://media.api-sports.io/football/teams/15.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-13T22:00:00Z",
    id: 1489371,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 6,
        name: "Brazil",
        logo: "https://media.api-sports.io/football/teams/6.png",
        winner: null,
      },
      away: {
        id: 31,
        name: "Morocco",
        logo: "https://media.api-sports.io/football/teams/31.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-14T01:00:00Z",
    id: 1489372,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 2386,
        name: "Haiti",
        logo: "https://media.api-sports.io/football/teams/2386.png",
        winner: null,
      },
      away: {
        id: 1108,
        name: "Scotland",
        logo: "https://media.api-sports.io/football/teams/1108.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-14T04:00:00Z",
    id: 1539001,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 20,
        name: "Australia",
        logo: "https://media.api-sports.io/football/teams/20.png",
        winner: null,
      },
      away: {
        id: 777,
        name: "Türkiye",
        logo: "https://media.api-sports.io/football/teams/777.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-14T17:00:00Z",
    id: 1489374,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 25,
        name: "Germany",
        logo: "https://media.api-sports.io/football/teams/25.png",
        winner: null,
      },
      away: {
        id: 5530,
        name: "Curaçao",
        logo: "https://media.api-sports.io/football/teams/5530.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-14T20:00:00Z",
    id: 1489376,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1118,
        name: "Netherlands",
        logo: "https://media.api-sports.io/football/teams/1118.png",
        winner: null,
      },
      away: {
        id: 12,
        name: "Japan",
        logo: "https://media.api-sports.io/football/teams/12.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-14T23:00:00Z",
    id: 1489375,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1501,
        name: "Ivory Coast",
        logo: "https://media.api-sports.io/football/teams/1501.png",
        winner: null,
      },
      away: {
        id: 2382,
        name: "Ecuador",
        logo: "https://media.api-sports.io/football/teams/2382.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-15T02:00:00Z",
    id: 1539002,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 5,
        name: "Sweden",
        logo: "https://media.api-sports.io/football/teams/5.png",
        winner: null,
      },
      away: {
        id: 28,
        name: "Tunisia",
        logo: "https://media.api-sports.io/football/teams/28.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-15T16:00:00Z",
    id: 1489380,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 9,
        name: "Spain",
        logo: "https://media.api-sports.io/football/teams/9.png",
        winner: null,
      },
      away: {
        id: 1533,
        name: "Cape Verde Islands",
        logo: "https://media.api-sports.io/football/teams/1533.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-15T19:00:00Z",
    id: 1489377,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1,
        name: "Belgium",
        logo: "https://media.api-sports.io/football/teams/1.png",
        winner: null,
      },
      away: {
        id: 32,
        name: "Egypt",
        logo: "https://media.api-sports.io/football/teams/32.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-15T22:00:00Z",
    id: 1489379,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 23,
        name: "Saudi Arabia",
        logo: "https://media.api-sports.io/football/teams/23.png",
        winner: null,
      },
      away: {
        id: 7,
        name: "Uruguay",
        logo: "https://media.api-sports.io/football/teams/7.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-16T01:00:00Z",
    id: 1489378,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 22,
        name: "Iran",
        logo: "https://media.api-sports.io/football/teams/22.png",
        winner: null,
      },
      away: {
        id: 4673,
        name: "New Zealand",
        logo: "https://media.api-sports.io/football/teams/4673.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-16T19:00:00Z",
    id: 1489383,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 2,
        name: "France",
        logo: "https://media.api-sports.io/football/teams/2.png",
        winner: null,
      },
      away: {
        id: 13,
        name: "Senegal",
        logo: "https://media.api-sports.io/football/teams/13.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-16T22:00:00Z",
    id: 1539016,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1567,
        name: "Iraq",
        logo: "https://media.api-sports.io/football/teams/1567.png",
        winner: null,
      },
      away: {
        id: 1090,
        name: "Norway",
        logo: "https://media.api-sports.io/football/teams/1090.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-17T01:00:00Z",
    id: 1489381,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 26,
        name: "Argentina",
        logo: "https://media.api-sports.io/football/teams/26.png",
        winner: null,
      },
      away: {
        id: 1532,
        name: "Algeria",
        logo: "https://media.api-sports.io/football/teams/1532.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-17T04:00:00Z",
    id: 1489382,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 775,
        name: "Austria",
        logo: "https://media.api-sports.io/football/teams/775.png",
        winner: null,
      },
      away: {
        id: 1548,
        name: "Jordan",
        logo: "https://media.api-sports.io/football/teams/1548.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-17T17:00:00Z",
    id: 1539003,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 27,
        name: "Portugal",
        logo: "https://media.api-sports.io/football/teams/27.png",
        winner: null,
      },
      away: {
        id: 1508,
        name: "Congo DR",
        logo: "https://media.api-sports.io/football/teams/1508.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-17T20:00:00Z",
    id: 1489384,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 10,
        name: "England",
        logo: "https://media.api-sports.io/football/teams/10.png",
        winner: null,
      },
      away: {
        id: 3,
        name: "Croatia",
        logo: "https://media.api-sports.io/football/teams/3.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-17T23:00:00Z",
    id: 1489385,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1504,
        name: "Ghana",
        logo: "https://media.api-sports.io/football/teams/1504.png",
        winner: null,
      },
      away: {
        id: 11,
        name: "Panama",
        logo: "https://media.api-sports.io/football/teams/11.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-18T02:00:00Z",
    id: 1489386,
    round: "Group Stage - 1",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1568,
        name: "Uzbekistan",
        logo: "https://media.api-sports.io/football/teams/1568.png",
        winner: null,
      },
      away: {
        id: 8,
        name: "Colombia",
        logo: "https://media.api-sports.io/football/teams/8.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-18T16:00:00Z",
    id: 1539004,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 770,
        name: "Czech Republic",
        logo: "https://media.api-sports.io/football/teams/770.png",
        winner: null,
      },
      away: {
        id: 1531,
        name: "South Africa",
        logo: "https://media.api-sports.io/football/teams/1531.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-18T19:00:00Z",
    id: 1539005,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 15,
        name: "Switzerland",
        logo: "https://media.api-sports.io/football/teams/15.png",
        winner: null,
      },
      away: {
        id: 1113,
        name: "Bosnia & Herzegovina",
        logo: "https://media.api-sports.io/football/teams/1113.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-18T22:00:00Z",
    id: 1489387,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 5529,
        name: "Canada",
        logo: "https://media.api-sports.io/football/teams/5529.png",
        winner: null,
      },
      away: {
        id: 1569,
        name: "Qatar",
        logo: "https://media.api-sports.io/football/teams/1569.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-19T01:00:00Z",
    id: 1489388,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 16,
        name: "Mexico",
        logo: "https://media.api-sports.io/football/teams/16.png",
        winner: null,
      },
      away: {
        id: 17,
        name: "South Korea",
        logo: "https://media.api-sports.io/football/teams/17.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-19T19:00:00Z",
    id: 1489391,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 2384,
        name: "USA",
        logo: "https://media.api-sports.io/football/teams/2384.png",
        winner: null,
      },
      away: {
        id: 20,
        name: "Australia",
        logo: "https://media.api-sports.io/football/teams/20.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-19T22:00:00Z",
    id: 1489390,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1108,
        name: "Scotland",
        logo: "https://media.api-sports.io/football/teams/1108.png",
        winner: null,
      },
      away: {
        id: 31,
        name: "Morocco",
        logo: "https://media.api-sports.io/football/teams/31.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-20T00:30:00Z",
    id: 1489389,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 6,
        name: "Brazil",
        logo: "https://media.api-sports.io/football/teams/6.png",
        winner: null,
      },
      away: {
        id: 2386,
        name: "Haiti",
        logo: "https://media.api-sports.io/football/teams/2386.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-20T03:00:00Z",
    id: 1539006,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 777,
        name: "Türkiye",
        logo: "https://media.api-sports.io/football/teams/777.png",
        winner: null,
      },
      away: {
        id: 2380,
        name: "Paraguay",
        logo: "https://media.api-sports.io/football/teams/2380.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-20T17:00:00Z",
    id: 1539007,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1118,
        name: "Netherlands",
        logo: "https://media.api-sports.io/football/teams/1118.png",
        winner: null,
      },
      away: {
        id: 5,
        name: "Sweden",
        logo: "https://media.api-sports.io/football/teams/5.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-20T20:00:00Z",
    id: 1489393,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 25,
        name: "Germany",
        logo: "https://media.api-sports.io/football/teams/25.png",
        winner: null,
      },
      away: {
        id: 1501,
        name: "Ivory Coast",
        logo: "https://media.api-sports.io/football/teams/1501.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-21T00:00:00Z",
    id: 1489392,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 2382,
        name: "Ecuador",
        logo: "https://media.api-sports.io/football/teams/2382.png",
        winner: null,
      },
      away: {
        id: 5530,
        name: "Curaçao",
        logo: "https://media.api-sports.io/football/teams/5530.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-21T04:00:00Z",
    id: 1489394,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 28,
        name: "Tunisia",
        logo: "https://media.api-sports.io/football/teams/28.png",
        winner: null,
      },
      away: {
        id: 12,
        name: "Japan",
        logo: "https://media.api-sports.io/football/teams/12.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-21T16:00:00Z",
    id: 1489397,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 9,
        name: "Spain",
        logo: "https://media.api-sports.io/football/teams/9.png",
        winner: null,
      },
      away: {
        id: 23,
        name: "Saudi Arabia",
        logo: "https://media.api-sports.io/football/teams/23.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-21T19:00:00Z",
    id: 1489395,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1,
        name: "Belgium",
        logo: "https://media.api-sports.io/football/teams/1.png",
        winner: null,
      },
      away: {
        id: 22,
        name: "Iran",
        logo: "https://media.api-sports.io/football/teams/22.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-21T22:00:00Z",
    id: 1489398,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 7,
        name: "Uruguay",
        logo: "https://media.api-sports.io/football/teams/7.png",
        winner: null,
      },
      away: {
        id: 1533,
        name: "Cape Verde Islands",
        logo: "https://media.api-sports.io/football/teams/1533.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-22T01:00:00Z",
    id: 1489396,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 4673,
        name: "New Zealand",
        logo: "https://media.api-sports.io/football/teams/4673.png",
        winner: null,
      },
      away: {
        id: 32,
        name: "Egypt",
        logo: "https://media.api-sports.io/football/teams/32.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-22T17:00:00Z",
    id: 1489399,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 26,
        name: "Argentina",
        logo: "https://media.api-sports.io/football/teams/26.png",
        winner: null,
      },
      away: {
        id: 775,
        name: "Austria",
        logo: "https://media.api-sports.io/football/teams/775.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-22T21:00:00Z",
    id: 1539017,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 2,
        name: "France",
        logo: "https://media.api-sports.io/football/teams/2.png",
        winner: null,
      },
      away: {
        id: 1567,
        name: "Iraq",
        logo: "https://media.api-sports.io/football/teams/1567.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-23T00:00:00Z",
    id: 1489401,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1090,
        name: "Norway",
        logo: "https://media.api-sports.io/football/teams/1090.png",
        winner: null,
      },
      away: {
        id: 13,
        name: "Senegal",
        logo: "https://media.api-sports.io/football/teams/13.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-23T03:00:00Z",
    id: 1489400,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1548,
        name: "Jordan",
        logo: "https://media.api-sports.io/football/teams/1548.png",
        winner: null,
      },
      away: {
        id: 1532,
        name: "Algeria",
        logo: "https://media.api-sports.io/football/teams/1532.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-23T17:00:00Z",
    id: 1489404,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 27,
        name: "Portugal",
        logo: "https://media.api-sports.io/football/teams/27.png",
        winner: null,
      },
      away: {
        id: 1568,
        name: "Uzbekistan",
        logo: "https://media.api-sports.io/football/teams/1568.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-23T20:00:00Z",
    id: 1489402,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 10,
        name: "England",
        logo: "https://media.api-sports.io/football/teams/10.png",
        winner: null,
      },
      away: {
        id: 1504,
        name: "Ghana",
        logo: "https://media.api-sports.io/football/teams/1504.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-23T23:00:00Z",
    id: 1489403,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 11,
        name: "Panama",
        logo: "https://media.api-sports.io/football/teams/11.png",
        winner: null,
      },
      away: {
        id: 3,
        name: "Croatia",
        logo: "https://media.api-sports.io/football/teams/3.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-24T02:00:00Z",
    id: 1539008,
    round: "Group Stage - 2",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 8,
        name: "Colombia",
        logo: "https://media.api-sports.io/football/teams/8.png",
        winner: null,
      },
      away: {
        id: 1508,
        name: "Congo DR",
        logo: "https://media.api-sports.io/football/teams/1508.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-24T19:00:00Z",
    id: 1489408,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 15,
        name: "Switzerland",
        logo: "https://media.api-sports.io/football/teams/15.png",
        winner: null,
      },
      away: {
        id: 5529,
        name: "Canada",
        logo: "https://media.api-sports.io/football/teams/5529.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-24T19:00:00Z",
    id: 1539009,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1113,
        name: "Bosnia & Herzegovina",
        logo: "https://media.api-sports.io/football/teams/1113.png",
        winner: null,
      },
      away: {
        id: 1569,
        name: "Qatar",
        logo: "https://media.api-sports.io/football/teams/1569.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-24T22:00:00Z",
    id: 1489405,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 31,
        name: "Morocco",
        logo: "https://media.api-sports.io/football/teams/31.png",
        winner: null,
      },
      away: {
        id: 2386,
        name: "Haiti",
        logo: "https://media.api-sports.io/football/teams/2386.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-24T22:00:00Z",
    id: 1489406,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1108,
        name: "Scotland",
        logo: "https://media.api-sports.io/football/teams/1108.png",
        winner: null,
      },
      away: {
        id: 6,
        name: "Brazil",
        logo: "https://media.api-sports.io/football/teams/6.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-25T01:00:00Z",
    id: 1539010,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 770,
        name: "Czech Republic",
        logo: "https://media.api-sports.io/football/teams/770.png",
        winner: null,
      },
      away: {
        id: 16,
        name: "Mexico",
        logo: "https://media.api-sports.io/football/teams/16.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-25T01:00:00Z",
    id: 1489407,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1531,
        name: "South Africa",
        logo: "https://media.api-sports.io/football/teams/1531.png",
        winner: null,
      },
      away: {
        id: 17,
        name: "South Korea",
        logo: "https://media.api-sports.io/football/teams/17.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-25T20:00:00Z",
    id: 1489410,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 2382,
        name: "Ecuador",
        logo: "https://media.api-sports.io/football/teams/2382.png",
        winner: null,
      },
      away: {
        id: 25,
        name: "Germany",
        logo: "https://media.api-sports.io/football/teams/25.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-25T20:00:00Z",
    id: 1489409,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 5530,
        name: "Curaçao",
        logo: "https://media.api-sports.io/football/teams/5530.png",
        winner: null,
      },
      away: {
        id: 1501,
        name: "Ivory Coast",
        logo: "https://media.api-sports.io/football/teams/1501.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-25T23:00:00Z",
    id: 1539011,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 12,
        name: "Japan",
        logo: "https://media.api-sports.io/football/teams/12.png",
        winner: null,
      },
      away: {
        id: 5,
        name: "Sweden",
        logo: "https://media.api-sports.io/football/teams/5.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-25T23:00:00Z",
    id: 1489412,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 28,
        name: "Tunisia",
        logo: "https://media.api-sports.io/football/teams/28.png",
        winner: null,
      },
      away: {
        id: 1118,
        name: "Netherlands",
        logo: "https://media.api-sports.io/football/teams/1118.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-26T02:00:00Z",
    id: 1539012,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 777,
        name: "Türkiye",
        logo: "https://media.api-sports.io/football/teams/777.png",
        winner: null,
      },
      away: {
        id: 2384,
        name: "USA",
        logo: "https://media.api-sports.io/football/teams/2384.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-26T02:00:00Z",
    id: 1489411,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 2380,
        name: "Paraguay",
        logo: "https://media.api-sports.io/football/teams/2380.png",
        winner: null,
      },
      away: {
        id: 20,
        name: "Australia",
        logo: "https://media.api-sports.io/football/teams/20.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-26T19:00:00Z",
    id: 1539074,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 13,
        name: "Senegal",
        logo: "https://media.api-sports.io/football/teams/13.png",
        winner: null,
      },
      away: {
        id: 1567,
        name: "Iraq",
        logo: "https://media.api-sports.io/football/teams/1567.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-26T19:00:00Z",
    id: 1489416,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1090,
        name: "Norway",
        logo: "https://media.api-sports.io/football/teams/1090.png",
        winner: null,
      },
      away: {
        id: 2,
        name: "France",
        logo: "https://media.api-sports.io/football/teams/2.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-27T00:00:00Z",
    id: 1489417,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 7,
        name: "Uruguay",
        logo: "https://media.api-sports.io/football/teams/7.png",
        winner: null,
      },
      away: {
        id: 9,
        name: "Spain",
        logo: "https://media.api-sports.io/football/teams/9.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-27T00:00:00Z",
    id: 1489413,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1533,
        name: "Cape Verde Islands",
        logo: "https://media.api-sports.io/football/teams/1533.png",
        winner: null,
      },
      away: {
        id: 23,
        name: "Saudi Arabia",
        logo: "https://media.api-sports.io/football/teams/23.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-27T03:00:00Z",
    id: 1489414,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 32,
        name: "Egypt",
        logo: "https://media.api-sports.io/football/teams/32.png",
        winner: null,
      },
      away: {
        id: 22,
        name: "Iran",
        logo: "https://media.api-sports.io/football/teams/22.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-27T03:00:00Z",
    id: 1489415,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 4673,
        name: "New Zealand",
        logo: "https://media.api-sports.io/football/teams/4673.png",
        winner: null,
      },
      away: {
        id: 1,
        name: "Belgium",
        logo: "https://media.api-sports.io/football/teams/1.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-27T21:00:00Z",
    id: 1489420,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 3,
        name: "Croatia",
        logo: "https://media.api-sports.io/football/teams/3.png",
        winner: null,
      },
      away: {
        id: 1504,
        name: "Ghana",
        logo: "https://media.api-sports.io/football/teams/1504.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-27T21:00:00Z",
    id: 1489422,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 11,
        name: "Panama",
        logo: "https://media.api-sports.io/football/teams/11.png",
        winner: null,
      },
      away: {
        id: 10,
        name: "England",
        logo: "https://media.api-sports.io/football/teams/10.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-27T23:30:00Z",
    id: 1489419,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 8,
        name: "Colombia",
        logo: "https://media.api-sports.io/football/teams/8.png",
        winner: null,
      },
      away: {
        id: 27,
        name: "Portugal",
        logo: "https://media.api-sports.io/football/teams/27.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-27T23:30:00Z",
    id: 1539013,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1508,
        name: "Congo DR",
        logo: "https://media.api-sports.io/football/teams/1508.png",
        winner: null,
      },
      away: {
        id: 1568,
        name: "Uzbekistan",
        logo: "https://media.api-sports.io/football/teams/1568.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-28T02:00:00Z",
    id: 1489418,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1532,
        name: "Algeria",
        logo: "https://media.api-sports.io/football/teams/1532.png",
        winner: null,
      },
      away: {
        id: 775,
        name: "Austria",
        logo: "https://media.api-sports.io/football/teams/775.png",
        winner: null,
      },
    },
  },
  {
    date: "2026-06-28T02:00:00Z",
    id: 1489421,
    round: "Group Stage - 3",
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1548,
        name: "Jordan",
        logo: "https://media.api-sports.io/football/teams/1548.png",
        winner: null,
      },
      away: {
        id: 26,
        name: "Argentina",
        logo: "https://media.api-sports.io/football/teams/26.png",
        winner: null,
      },
    },
  },
];

export const myBets1 = [
  {
    matchId: 1,
    user: {
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@gmail.com",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocLm6z4WfWsxrvmyNGHFYGL-BRjOQ5gdeTytvn_jndIghJ9r21Y=s96-c",
      id: "112529453352592387904",
    },
    bet: {
      home: 1,
      away: 0,
      symbol: "1",
    },
    points: 0,
  },
  {
    matchId: 2,
    user: {
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@gmail.com",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocLm6z4WfWsxrvmyNGHFYGL-BRjOQ5gdeTytvn_jndIghJ9r21Y=s96-c",
      id: "112529453352592387904",
    },
    bet: {
      home: 2,
      away: 1,
      symbol: "2",
    },
    points: 3,
  },
  {
    matchId: 3,
    user: {
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@gmail.com",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocLm6z4WfWsxrvmyNGHFYGL-BRjOQ5gdeTytvn_jndIghJ9r21Y=s96-c",
      id: "112529453352592387904",
    },
    bet: {
      home: 0,
      away: 0,
      symbol: "X",
    },
    points: 1,
  },
  {
    matchId: 4,
    user: {
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@gmail.com",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocLm6z4WfWsxrvmyNGHFYGL-BRjOQ5gdeTytvn_jndIghJ9r21Y=s96-c",
      id: "112529453352592387904",
    },
    bet: {
      home: 2,
      away: 2,
      symbol: "X",
    },
    points: 0,
  },
];

export const mockedMyBets = [
  {
    matchId: 1489369,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocLm6z4WfWsxrvmyNGHFYGL-BRjOQ5gdeTytvn_jndIghJ9r21Y=s96-c",
    },
    bet: {
      home: 2,
      away: 1,
      symbol: "1",
    },
    points: null,
  },
];

export const mockedStandings = [
  {
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocLm6z4WfWsxrvmyNGHFYGL-BRjOQ5gdeTytvn_jndIghJ9r21Y=s96-c",
    },
    totalPoints: 0,
  },
];

export const mockedTopScorers = [
  {
    id: "ts-1",
    firstName: "Kylian",
    lastName: "Mbappé",
    country: "France",
    goals: 6,
    coefficient: 4.5,
  },
  {
    id: "ts-2",
    firstName: "Erling",
    lastName: "Haaland",
    country: "Norway",
    goals: 5,
    coefficient: 5.25,
  },
  {
    id: "ts-3",
    firstName: "Harry",
    lastName: "Kane",
    country: "England",
    goals: 5,
    coefficient: 6.0,
  },
  {
    id: "ts-4",
    firstName: "Vinícius",
    lastName: "Júnior",
    country: "Brazil",
    goals: 4,
    coefficient: 7.75,
  },
  {
    id: "ts-5",
    firstName: "Jude",
    lastName: "Bellingham",
    country: "England",
    goals: 4,
    coefficient: 9.0,
  },
  {
    id: "ts-6",
    firstName: "Lautaro",
    lastName: "Martínez",
    country: "Argentina",
    goals: 4,
    coefficient: 10.5,
  },
  {
    id: "ts-7",
    firstName: "Robert",
    lastName: "Lewandowski",
    country: "Poland",
    goals: 3,
    coefficient: 12.0,
  },
  {
    id: "ts-8",
    firstName: "Mohamed",
    lastName: "Salah",
    country: "Egypt",
    goals: 3,
    coefficient: 13.25,
  },
];

export const mockedChampions = [
  { id: "ch-1", name: "France", coefficient: 6.25 },
  { id: "ch-2", name: "Brazil", coefficient: 6.75 },
  { id: "ch-3", name: "Argentina", coefficient: 7.0 },
  { id: "ch-4", name: "England", coefficient: 7.5 },
  { id: "ch-5", name: "Spain", coefficient: 8.5 },
  { id: "ch-6", name: "Germany", coefficient: 9.0 },
  { id: "ch-7", name: "Portugal", coefficient: 11.0 },
  { id: "ch-8", name: "Netherlands", coefficient: 13.0 },
];
export const bets = [
  {
    matchId: 855736,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 866681,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855736,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855735,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855736,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "108870792794406401798",
      firstName: "Tsvetomir",
      lastName: "Tsanev",
      email: "tsvetomir.tsanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2FUBxAuBowCHGuC5dYUskH7U-q3rVc06FBCPYl=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "108870792794406401798",
      firstName: "Tsvetomir",
      lastName: "Tsanev",
      email: "tsvetomir.tsanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2FUBxAuBowCHGuC5dYUskH7U-q3rVc06FBCPYl=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "108870792794406401798",
      firstName: "Tsvetomir",
      lastName: "Tsanev",
      email: "tsvetomir.tsanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2FUBxAuBowCHGuC5dYUskH7U-q3rVc06FBCPYl=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "108870792794406401798",
      firstName: "Tsvetomir",
      lastName: "Tsanev",
      email: "tsvetomir.tsanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2FUBxAuBowCHGuC5dYUskH7U-q3rVc06FBCPYl=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 5, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855735,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "102107052476999637957",
      firstName: "Deyan",
      lastName: "Bozhilov",
      email: "deyan.bozhilov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0IZWbT1eai3fWzbkWRdGKh7i4Lxitx6swmbhVO=s96-c",
    },
    bet: { home: 6, away: 9, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855735,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855736,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855735,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 866681,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855737,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 3,
  },
  {
    matchId: 871850,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855743,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 866682,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855750,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855751,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855752,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855760,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855761,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 866683,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855767,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855768,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855771,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855734,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855761,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855735,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855772,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855734,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 866681,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855734,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855735,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871852,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855751,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 871854,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 5, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855740,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855735,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855737,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855735,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855734,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855735,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855736,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "115744086384379117075",
      firstName: "Ahmed",
      lastName: "Yusuf",
      email: "ahmed.yusuf@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0DM2iqaXnM8f4jLJd4Qy1NAcI0J81ydffqyZce=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "115744086384379117075",
      firstName: "Ahmed",
      lastName: "Yusuf",
      email: "ahmed.yusuf@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0DM2iqaXnM8f4jLJd4Qy1NAcI0J81ydffqyZce=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "115744086384379117075",
      firstName: "Ahmed",
      lastName: "Yusuf",
      email: "ahmed.yusuf@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0DM2iqaXnM8f4jLJd4Qy1NAcI0J81ydffqyZce=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "115744086384379117075",
      firstName: "Ahmed",
      lastName: "Yusuf",
      email: "ahmed.yusuf@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0DM2iqaXnM8f4jLJd4Qy1NAcI0J81ydffqyZce=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 7, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 8, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855741,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "117442458710373375972",
      firstName: "Atanas",
      lastName: "Ivanov",
      email: "atanas.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1VYW9WNniaeuosU8XpuuYnqkxNoWjpY7MUPEA=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855742,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855743,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "117442458710373375972",
      firstName: "Atanas",
      lastName: "Ivanov",
      email: "atanas.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1VYW9WNniaeuosU8XpuuYnqkxNoWjpY7MUPEA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "117442458710373375972",
      firstName: "Atanas",
      lastName: "Ivanov",
      email: "atanas.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1VYW9WNniaeuosU8XpuuYnqkxNoWjpY7MUPEA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "117442458710373375972",
      firstName: "Atanas",
      lastName: "Ivanov",
      email: "atanas.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1VYW9WNniaeuosU8XpuuYnqkxNoWjpY7MUPEA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855744,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855745,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855751,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855752,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855761,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855766,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855768,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855771,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 4, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 0, away: 4, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855734,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 871850,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855751,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855752,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 0, away: 4, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855765,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855767,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855768,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855771,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3zdxf27Fz07ZlqWkVfAvB-RA1gZAJZN51_qn5F=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855735,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 866681,
    user: {
      id: "108258876948140553647",
      firstName: "Ridvan",
      lastName: "Enis",
      email: "ridvan.enis@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0y31GKmmwFD1Edo1cIzcxBafxtcYL3x2GiKVji=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855734,
    user: {
      id: "108258876948140553647",
      firstName: "Ridvan",
      lastName: "Enis",
      email: "ridvan.enis@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0y31GKmmwFD1Edo1cIzcxBafxtcYL3x2GiKVji=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855735,
    user: {
      id: "108258876948140553647",
      firstName: "Ridvan",
      lastName: "Enis",
      email: "ridvan.enis@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0y31GKmmwFD1Edo1cIzcxBafxtcYL3x2GiKVji=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "108258876948140553647",
      firstName: "Ridvan",
      lastName: "Enis",
      email: "ridvan.enis@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0y31GKmmwFD1Edo1cIzcxBafxtcYL3x2GiKVji=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "108258876948140553647",
      firstName: "Ridvan",
      lastName: "Enis",
      email: "ridvan.enis@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0y31GKmmwFD1Edo1cIzcxBafxtcYL3x2GiKVji=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "108258876948140553647",
      firstName: "Ridvan",
      lastName: "Enis",
      email: "ridvan.enis@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0y31GKmmwFD1Edo1cIzcxBafxtcYL3x2GiKVji=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855739,
    user: {
      id: "108258876948140553647",
      firstName: "Ridvan",
      lastName: "Enis",
      email: "ridvan.enis@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0y31GKmmwFD1Edo1cIzcxBafxtcYL3x2GiKVji=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855739,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "108258876948140553647",
      firstName: "Ridvan",
      lastName: "Enis",
      email: "ridvan.enis@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0y31GKmmwFD1Edo1cIzcxBafxtcYL3x2GiKVji=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 4, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855740,
    user: {
      id: "108258876948140553647",
      firstName: "Ridvan",
      lastName: "Enis",
      email: "ridvan.enis@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0y31GKmmwFD1Edo1cIzcxBafxtcYL3x2GiKVji=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "108258876948140553647",
      firstName: "Ridvan",
      lastName: "Enis",
      email: "ridvan.enis@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0y31GKmmwFD1Edo1cIzcxBafxtcYL3x2GiKVji=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "108258876948140553647",
      firstName: "Ridvan",
      lastName: "Enis",
      email: "ridvan.enis@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0y31GKmmwFD1Edo1cIzcxBafxtcYL3x2GiKVji=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855741,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855742,
    user: {
      id: "108258876948140553647",
      firstName: "Ridvan",
      lastName: "Enis",
      email: "ridvan.enis@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0y31GKmmwFD1Edo1cIzcxBafxtcYL3x2GiKVji=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871851,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855745,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "111426710719209735117",
      firstName: "Ivo",
      lastName: "Marinov",
      email: "ivo.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3FEFtjRvWf7TUoYcJsnHa5VQCIlIe4UpVPp9K7=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "111426710719209735117",
      firstName: "Ivo",
      lastName: "Marinov",
      email: "ivo.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3FEFtjRvWf7TUoYcJsnHa5VQCIlIe4UpVPp9K7=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "111426710719209735117",
      firstName: "Ivo",
      lastName: "Marinov",
      email: "ivo.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3FEFtjRvWf7TUoYcJsnHa5VQCIlIe4UpVPp9K7=s96-c",
    },
    bet: { home: 1, away: 4, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "111426710719209735117",
      firstName: "Ivo",
      lastName: "Marinov",
      email: "ivo.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3FEFtjRvWf7TUoYcJsnHa5VQCIlIe4UpVPp9K7=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 871852,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855752,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855760,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 1, away: 4, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855737,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 5, away: 2, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855739,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855740,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871851,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 5, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855745,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855746,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 2, away: 4, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855747,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "103192861020942334977",
      firstName: "Manuela",
      lastName: "Nankovska",
      email: "manuela.nankovska@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Qln1dpCNfuyLXr8Sa3aC__dWdPPTjMIFv7mJq=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855747,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "117085307567025306597",
      firstName: "Veselin",
      lastName: "Radev",
      email: "veselin.radev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1PClsDZB8pQcYHFUlZk2cEoRb6Vmrj0LCqon4H=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "117085307567025306597",
      firstName: "Veselin",
      lastName: "Radev",
      email: "veselin.radev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1PClsDZB8pQcYHFUlZk2cEoRb6Vmrj0LCqon4H=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "107950345227507936541",
      firstName: "Emel",
      lastName: "Mollova",
      email: "emel.mollova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nsuG6Y2DLl-0nHaLfFAyHJqvKOFwzV6Eus2_tMg=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "107950345227507936541",
      firstName: "Emel",
      lastName: "Mollova",
      email: "emel.mollova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nsuG6Y2DLl-0nHaLfFAyHJqvKOFwzV6Eus2_tMg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855739,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "117085307567025306597",
      firstName: "Veselin",
      lastName: "Radev",
      email: "veselin.radev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1PClsDZB8pQcYHFUlZk2cEoRb6Vmrj0LCqon4H=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "107950345227507936541",
      firstName: "Emel",
      lastName: "Mollova",
      email: "emel.mollova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nsuG6Y2DLl-0nHaLfFAyHJqvKOFwzV6Eus2_tMg=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "117085307567025306597",
      firstName: "Veselin",
      lastName: "Radev",
      email: "veselin.radev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1PClsDZB8pQcYHFUlZk2cEoRb6Vmrj0LCqon4H=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "107950345227507936541",
      firstName: "Emel",
      lastName: "Mollova",
      email: "emel.mollova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nsuG6Y2DLl-0nHaLfFAyHJqvKOFwzV6Eus2_tMg=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855743,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855735,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "107753390545803877683",
      firstName: "Stoyan",
      lastName: "Petkov",
      email: "stoyan.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2NUDGjGmgjhGH-Avo5BxvWHKM6n4lMci6mvMxN=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "107753390545803877683",
      firstName: "Stoyan",
      lastName: "Petkov",
      email: "stoyan.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2NUDGjGmgjhGH-Avo5BxvWHKM6n4lMci6mvMxN=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855735,
    user: {
      id: "107753390545803877683",
      firstName: "Stoyan",
      lastName: "Petkov",
      email: "stoyan.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2NUDGjGmgjhGH-Avo5BxvWHKM6n4lMci6mvMxN=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "107753390545803877683",
      firstName: "Stoyan",
      lastName: "Petkov",
      email: "stoyan.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2NUDGjGmgjhGH-Avo5BxvWHKM6n4lMci6mvMxN=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855734,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 4, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855746,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855749,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855751,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 4, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855764,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855772,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 5, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855735,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855739,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855743,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855741,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855743,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855750,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855752,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855760,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855761,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 1, away: 4, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866683,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855765,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855768,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855771,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "108051638034427387144",
      firstName: "Iliyan",
      lastName: "Draganov",
      email: "iliyan.draganov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu15CEYY7XP5fI_oL1jpWCiVlvIiBPk6n73w92Ei=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "105874073210399293170",
      firstName: "Kiril",
      lastName: "Iliev",
      email: "kiril.iliev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Dzv9itylnmKPy63hqiIqgXbdpgBdQJElPkhpx=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855735,
    user: {
      id: "105874073210399293170",
      firstName: "Kiril",
      lastName: "Iliev",
      email: "kiril.iliev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Dzv9itylnmKPy63hqiIqgXbdpgBdQJElPkhpx=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "105874073210399293170",
      firstName: "Kiril",
      lastName: "Iliev",
      email: "kiril.iliev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Dzv9itylnmKPy63hqiIqgXbdpgBdQJElPkhpx=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "105874073210399293170",
      firstName: "Kiril",
      lastName: "Iliev",
      email: "kiril.iliev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Dzv9itylnmKPy63hqiIqgXbdpgBdQJElPkhpx=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855734,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855734,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855735,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "114679276589852847914",
      firstName: "Asen",
      lastName: "Chalyovski",
      email: "asen.chalyovski@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0teJ_GYr6rmq3hP27ME4l3KerlL6xdtcVPeKcj=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "114679276589852847914",
      firstName: "Asen",
      lastName: "Chalyovski",
      email: "asen.chalyovski@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0teJ_GYr6rmq3hP27ME4l3KerlL6xdtcVPeKcj=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "114679276589852847914",
      firstName: "Asen",
      lastName: "Chalyovski",
      email: "asen.chalyovski@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0teJ_GYr6rmq3hP27ME4l3KerlL6xdtcVPeKcj=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "114679276589852847914",
      firstName: "Asen",
      lastName: "Chalyovski",
      email: "asen.chalyovski@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0teJ_GYr6rmq3hP27ME4l3KerlL6xdtcVPeKcj=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855737,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855751,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855752,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855753,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855761,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855762,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855767,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855768,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855771,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 866681,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855737,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855742,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871851,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855741,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855743,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855736,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855747,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 3,
  },
  {
    matchId: 871850,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855738,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855742,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855745,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855736,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855737,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855772,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 871854,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855760,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855754,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855752,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855751,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855750,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871852,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855746,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855745,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855743,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855741,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855734,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855741,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855735,
    user: {
      id: "112814218424864525145",
      firstName: "Tanyo",
      lastName: "Georgiev",
      email: "tanyo.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0798k8Q2JeGJC4wx5Sukq-XLBttVCQfZk59G1f=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855737,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855740,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855735,
    user: {
      id: "108103139629851867456",
      firstName: "Albena",
      lastName: "Kertova",
      email: "albena.kertova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JABK03P6QQ1_wFy3dTEnH0O_U5MhJwj7RmhTs=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "108103139629851867456",
      firstName: "Albena",
      lastName: "Kertova",
      email: "albena.kertova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JABK03P6QQ1_wFy3dTEnH0O_U5MhJwj7RmhTs=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "108103139629851867456",
      firstName: "Albena",
      lastName: "Kertova",
      email: "albena.kertova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JABK03P6QQ1_wFy3dTEnH0O_U5MhJwj7RmhTs=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855735,
    user: {
      id: "112735312546139644937",
      firstName: "Petar",
      lastName: "Georgiev",
      email: "petar.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1v0xrXuwNII-ouoyOB1rKbE6wAOWL-yb7Hcfrv=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "112735312546139644937",
      firstName: "Petar",
      lastName: "Georgiev",
      email: "petar.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1v0xrXuwNII-ouoyOB1rKbE6wAOWL-yb7Hcfrv=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "112735312546139644937",
      firstName: "Petar",
      lastName: "Georgiev",
      email: "petar.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1v0xrXuwNII-ouoyOB1rKbE6wAOWL-yb7Hcfrv=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855737,
    user: {
      id: "112735312546139644937",
      firstName: "Petar",
      lastName: "Georgiev",
      email: "petar.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1v0xrXuwNII-ouoyOB1rKbE6wAOWL-yb7Hcfrv=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "112735312546139644937",
      firstName: "Petar",
      lastName: "Georgiev",
      email: "petar.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1v0xrXuwNII-ouoyOB1rKbE6wAOWL-yb7Hcfrv=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "112735312546139644937",
      firstName: "Petar",
      lastName: "Georgiev",
      email: "petar.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1v0xrXuwNII-ouoyOB1rKbE6wAOWL-yb7Hcfrv=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "112735312546139644937",
      firstName: "Petar",
      lastName: "Georgiev",
      email: "petar.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1v0xrXuwNII-ouoyOB1rKbE6wAOWL-yb7Hcfrv=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "112735312546139644937",
      firstName: "Petar",
      lastName: "Georgiev",
      email: "petar.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1v0xrXuwNII-ouoyOB1rKbE6wAOWL-yb7Hcfrv=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "112735312546139644937",
      firstName: "Petar",
      lastName: "Georgiev",
      email: "petar.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1v0xrXuwNII-ouoyOB1rKbE6wAOWL-yb7Hcfrv=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "112735312546139644937",
      firstName: "Petar",
      lastName: "Georgiev",
      email: "petar.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1v0xrXuwNII-ouoyOB1rKbE6wAOWL-yb7Hcfrv=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "112735312546139644937",
      firstName: "Petar",
      lastName: "Georgiev",
      email: "petar.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1v0xrXuwNII-ouoyOB1rKbE6wAOWL-yb7Hcfrv=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "112735312546139644937",
      firstName: "Petar",
      lastName: "Georgiev",
      email: "petar.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1v0xrXuwNII-ouoyOB1rKbE6wAOWL-yb7Hcfrv=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "112735312546139644937",
      firstName: "Petar",
      lastName: "Georgiev",
      email: "petar.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1v0xrXuwNII-ouoyOB1rKbE6wAOWL-yb7Hcfrv=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "112735312546139644937",
      firstName: "Petar",
      lastName: "Georgiev",
      email: "petar.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1v0xrXuwNII-ouoyOB1rKbE6wAOWL-yb7Hcfrv=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "112735312546139644937",
      firstName: "Petar",
      lastName: "Georgiev",
      email: "petar.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1v0xrXuwNII-ouoyOB1rKbE6wAOWL-yb7Hcfrv=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855735,
    user: {
      id: "114916837815892833727",
      firstName: "Eva",
      lastName: "Kyovkarova",
      email: "eva.k@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0rU2hEhIUDNo5hWIuDEdOVK45tkb4h3Dx3k0It=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "114916837815892833727",
      firstName: "Eva",
      lastName: "Kyovkarova",
      email: "eva.k@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0rU2hEhIUDNo5hWIuDEdOVK45tkb4h3Dx3k0It=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 866681,
    user: {
      id: "114916837815892833727",
      firstName: "Eva",
      lastName: "Kyovkarova",
      email: "eva.k@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0rU2hEhIUDNo5hWIuDEdOVK45tkb4h3Dx3k0It=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855747,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855739,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855734,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 866681,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855737,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 5, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 5, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 6, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855734,
    user: {
      id: "118074861772543096757",
      firstName: "Aleksandrina",
      lastName: "Kovachka",
      email: "aleksandrina.kovachka@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ZDhWddu56UMkenpELoy_I7CBY7MbKiKZq4T3U=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855738,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866681,
    user: {
      id: "118074861772543096757",
      firstName: "Aleksandrina",
      lastName: "Kovachka",
      email: "aleksandrina.kovachka@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ZDhWddu56UMkenpELoy_I7CBY7MbKiKZq4T3U=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 5, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866681,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "111426710719209735117",
      firstName: "Ivo",
      lastName: "Marinov",
      email: "ivo.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3FEFtjRvWf7TUoYcJsnHa5VQCIlIe4UpVPp9K7=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "111426710719209735117",
      firstName: "Ivo",
      lastName: "Marinov",
      email: "ivo.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3FEFtjRvWf7TUoYcJsnHa5VQCIlIe4UpVPp9K7=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "111426710719209735117",
      firstName: "Ivo",
      lastName: "Marinov",
      email: "ivo.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3FEFtjRvWf7TUoYcJsnHa5VQCIlIe4UpVPp9K7=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "111426710719209735117",
      firstName: "Ivo",
      lastName: "Marinov",
      email: "ivo.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3FEFtjRvWf7TUoYcJsnHa5VQCIlIe4UpVPp9K7=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 5, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855740,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855738,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 5, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855739,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855737,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855738,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855741,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855740,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855739,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "109826004746990955849",
      firstName: "Kosta",
      lastName: "Georgiev",
      email: "kosta.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0TWCrumCvd_wkWMScyGXppMid3C7bX3ol3PwGi=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "109826004746990955849",
      firstName: "Kosta",
      lastName: "Georgiev",
      email: "kosta.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0TWCrumCvd_wkWMScyGXppMid3C7bX3ol3PwGi=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "109826004746990955849",
      firstName: "Kosta",
      lastName: "Georgiev",
      email: "kosta.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0TWCrumCvd_wkWMScyGXppMid3C7bX3ol3PwGi=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "109826004746990955849",
      firstName: "Kosta",
      lastName: "Georgiev",
      email: "kosta.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0TWCrumCvd_wkWMScyGXppMid3C7bX3ol3PwGi=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "108870792794406401798",
      firstName: "Tsvetomir",
      lastName: "Tsanev",
      email: "tsvetomir.tsanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2FUBxAuBowCHGuC5dYUskH7U-q3rVc06FBCPYl=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "108870792794406401798",
      firstName: "Tsvetomir",
      lastName: "Tsanev",
      email: "tsvetomir.tsanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2FUBxAuBowCHGuC5dYUskH7U-q3rVc06FBCPYl=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "108870792794406401798",
      firstName: "Tsvetomir",
      lastName: "Tsanev",
      email: "tsvetomir.tsanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2FUBxAuBowCHGuC5dYUskH7U-q3rVc06FBCPYl=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "108870792794406401798",
      firstName: "Tsvetomir",
      lastName: "Tsanev",
      email: "tsvetomir.tsanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2FUBxAuBowCHGuC5dYUskH7U-q3rVc06FBCPYl=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 871851,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855741,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855740,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855737,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 5, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 5, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855737,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855738,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855742,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871851,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855738,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 4, away: 3, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 6, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855739,
    user: {
      id: "114916837815892833727",
      firstName: "Eva",
      lastName: "Kyovkarova",
      email: "eva.k@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0rU2hEhIUDNo5hWIuDEdOVK45tkb4h3Dx3k0It=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855738,
    user: {
      id: "114916837815892833727",
      firstName: "Eva",
      lastName: "Kyovkarova",
      email: "eva.k@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0rU2hEhIUDNo5hWIuDEdOVK45tkb4h3Dx3k0It=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "114916837815892833727",
      firstName: "Eva",
      lastName: "Kyovkarova",
      email: "eva.k@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0rU2hEhIUDNo5hWIuDEdOVK45tkb4h3Dx3k0It=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855738,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855738,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855744,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855738,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855738,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855739,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871850,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855745,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855748,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855749,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855740,
    user: {
      id: "114916837815892833727",
      firstName: "Eva",
      lastName: "Kyovkarova",
      email: "eva.k@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0rU2hEhIUDNo5hWIuDEdOVK45tkb4h3Dx3k0It=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "114916837815892833727",
      firstName: "Eva",
      lastName: "Kyovkarova",
      email: "eva.k@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0rU2hEhIUDNo5hWIuDEdOVK45tkb4h3Dx3k0It=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "114916837815892833727",
      firstName: "Eva",
      lastName: "Kyovkarova",
      email: "eva.k@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0rU2hEhIUDNo5hWIuDEdOVK45tkb4h3Dx3k0It=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "114916837815892833727",
      firstName: "Eva",
      lastName: "Kyovkarova",
      email: "eva.k@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0rU2hEhIUDNo5hWIuDEdOVK45tkb4h3Dx3k0It=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855739,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871850,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855746,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 4, away: 2, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855752,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855741,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 5, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855742,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871851,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 5, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "108205492055282828662",
      firstName: "Slobodan",
      lastName: "Adji-Andov",
      email: "slobodan.adji-andov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0S7eVRuQydssLKoAqxPRIh582WV1_g63fO-8hh=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "108205492055282828662",
      firstName: "Slobodan",
      lastName: "Adji-Andov",
      email: "slobodan.adji-andov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0S7eVRuQydssLKoAqxPRIh582WV1_g63fO-8hh=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "108205492055282828662",
      firstName: "Slobodan",
      lastName: "Adji-Andov",
      email: "slobodan.adji-andov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0S7eVRuQydssLKoAqxPRIh582WV1_g63fO-8hh=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855740,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855742,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 871851,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855741,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855743,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855744,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 866682,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855749,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 4, away: 2, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855740,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855742,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855742,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871851,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855741,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855745,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855740,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 5, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855742,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855772,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855741,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855740,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 5, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855740,
    user: {
      id: "108870792794406401798",
      firstName: "Tsvetomir",
      lastName: "Tsanev",
      email: "tsvetomir.tsanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2FUBxAuBowCHGuC5dYUskH7U-q3rVc06FBCPYl=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "108870792794406401798",
      firstName: "Tsvetomir",
      lastName: "Tsanev",
      email: "tsvetomir.tsanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2FUBxAuBowCHGuC5dYUskH7U-q3rVc06FBCPYl=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "108870792794406401798",
      firstName: "Tsvetomir",
      lastName: "Tsanev",
      email: "tsvetomir.tsanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2FUBxAuBowCHGuC5dYUskH7U-q3rVc06FBCPYl=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "108870792794406401798",
      firstName: "Tsvetomir",
      lastName: "Tsanev",
      email: "tsvetomir.tsanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2FUBxAuBowCHGuC5dYUskH7U-q3rVc06FBCPYl=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855741,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855745,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855740,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855740,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855741,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855741,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "112735312546139644937",
      firstName: "Petar",
      lastName: "Georgiev",
      email: "petar.georgiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1v0xrXuwNII-ouoyOB1rKbE6wAOWL-yb7Hcfrv=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871852,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855750,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855751,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855752,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855741,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855741,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871851,
    user: {
      id: "108103139629851867456",
      firstName: "Albena",
      lastName: "Kertova",
      email: "albena.kertova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JABK03P6QQ1_wFy3dTEnH0O_U5MhJwj7RmhTs=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855742,
    user: {
      id: "108103139629851867456",
      firstName: "Albena",
      lastName: "Kertova",
      email: "albena.kertova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JABK03P6QQ1_wFy3dTEnH0O_U5MhJwj7RmhTs=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855746,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871851,
    user: {
      id: "111426710719209735117",
      firstName: "Ivo",
      lastName: "Marinov",
      email: "ivo.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3FEFtjRvWf7TUoYcJsnHa5VQCIlIe4UpVPp9K7=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "111426710719209735117",
      firstName: "Ivo",
      lastName: "Marinov",
      email: "ivo.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3FEFtjRvWf7TUoYcJsnHa5VQCIlIe4UpVPp9K7=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855742,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855742,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855746,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855743,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855745,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855745,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855743,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855744,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855743,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 5, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855746,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855745,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855743,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855747,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855750,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855759,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855760,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855765,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855768,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 0, away: 4, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855771,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "110792940449329282205",
      firstName: "Veselin",
      lastName: "Davidov",
      email: "veselin.davidov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3EzB98L1w3e5aGkeQQ7IIYBGrhUOO-1pSQLWS8=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855743,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855743,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855745,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855745,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855743,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855743,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855744,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855746,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855743,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855746,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855743,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855749,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855747,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855751,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855772,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855769,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855765,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 871854,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855746,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866683,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855762,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855761,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855754,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855753,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855752,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855751,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855750,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855746,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855745,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3nAsXFb1t5-o6hk4VpTEKYG97gIhaVkSNS-EFi=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855743,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855743,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855743,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855745,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 5, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855745,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855744,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855745,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855772,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 0, away: 6, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855765,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855764,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 871854,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855762,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855761,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855759,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871852,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855751,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855746,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855745,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855744,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855752,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 4, away: 2, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855751,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855752,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855745,
    user: {
      id: "114461774650914704110",
      firstName: "Loran",
      lastName: "Yousef",
      email: "loran.yousef@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0ng5fJ3uqh0k658AJpauWLcEQpIFcAQOSSlVWy=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "114461774650914704110",
      firstName: "Loran",
      lastName: "Yousef",
      email: "loran.yousef@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0ng5fJ3uqh0k658AJpauWLcEQpIFcAQOSSlVWy=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 4, away: 3, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855746,
    user: {
      id: "105881710216160730810",
      firstName: "Aleksandar",
      lastName: "Mitev",
      email: "aleksandar.mitev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3TTY981M-CZQviL79uqVSWyxi6CEXVKZjP_vyl=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871852,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855751,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 866682,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855751,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 866682,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855749,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855750,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855772,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855768,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855761,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855759,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855754,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855752,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "102695161753344785066",
      firstName: "Metiner",
      lastName: "Kocak",
      email: "metiner.kocak@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0NbZEKjB63-9C_3xFlbwGYYcAHiX2r6vKnj7Oc=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855748,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855749,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855749,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 4, away: 2, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855752,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855751,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855750,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871852,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "115796363835105184779",
      firstName: "Neli",
      lastName: "Petkova",
      email: "neli.petkova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2n7I2K3wPleAeraZhUIlpB6vsFGamZj0N9Mq4W=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855747,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855750,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 1,
  },
  {
    matchId: 866682,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855748,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866682,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855748,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855747,
    user: {
      id: "105881710216160730810",
      firstName: "Aleksandar",
      lastName: "Mitev",
      email: "aleksandar.mitev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3TTY981M-CZQviL79uqVSWyxi6CEXVKZjP_vyl=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "105881710216160730810",
      firstName: "Aleksandar",
      lastName: "Mitev",
      email: "aleksandar.mitev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3TTY981M-CZQviL79uqVSWyxi6CEXVKZjP_vyl=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855749,
    user: {
      id: "105881710216160730810",
      firstName: "Aleksandar",
      lastName: "Mitev",
      email: "aleksandar.mitev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3TTY981M-CZQviL79uqVSWyxi6CEXVKZjP_vyl=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 3,
  },
  {
    matchId: 871852,
    user: {
      id: "105881710216160730810",
      firstName: "Aleksandar",
      lastName: "Mitev",
      email: "aleksandar.mitev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3TTY981M-CZQviL79uqVSWyxi6CEXVKZjP_vyl=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "105881710216160730810",
      firstName: "Aleksandar",
      lastName: "Mitev",
      email: "aleksandar.mitev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3TTY981M-CZQviL79uqVSWyxi6CEXVKZjP_vyl=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "105881710216160730810",
      firstName: "Aleksandar",
      lastName: "Mitev",
      email: "aleksandar.mitev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3TTY981M-CZQviL79uqVSWyxi6CEXVKZjP_vyl=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855752,
    user: {
      id: "105881710216160730810",
      firstName: "Aleksandar",
      lastName: "Mitev",
      email: "aleksandar.mitev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3TTY981M-CZQviL79uqVSWyxi6CEXVKZjP_vyl=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 871853,
    user: {
      id: "105881710216160730810",
      firstName: "Aleksandar",
      lastName: "Mitev",
      email: "aleksandar.mitev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3TTY981M-CZQviL79uqVSWyxi6CEXVKZjP_vyl=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "105881710216160730810",
      firstName: "Aleksandar",
      lastName: "Mitev",
      email: "aleksandar.mitev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3TTY981M-CZQviL79uqVSWyxi6CEXVKZjP_vyl=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "105881710216160730810",
      firstName: "Aleksandar",
      lastName: "Mitev",
      email: "aleksandar.mitev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3TTY981M-CZQviL79uqVSWyxi6CEXVKZjP_vyl=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "105881710216160730810",
      firstName: "Aleksandar",
      lastName: "Mitev",
      email: "aleksandar.mitev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3TTY981M-CZQviL79uqVSWyxi6CEXVKZjP_vyl=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 855756,
    user: {
      id: "105881710216160730810",
      firstName: "Aleksandar",
      lastName: "Mitev",
      email: "aleksandar.mitev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3TTY981M-CZQviL79uqVSWyxi6CEXVKZjP_vyl=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "105881710216160730810",
      firstName: "Aleksandar",
      lastName: "Mitev",
      email: "aleksandar.mitev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3TTY981M-CZQviL79uqVSWyxi6CEXVKZjP_vyl=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855750,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 871853,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855749,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855750,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855752,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855753,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855759,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855761,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855765,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 0, away: 4, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855771,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_xDqonjegksnaYYF0nQHaP6YetM-ICt-USe-g=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855748,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855749,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0EO-2r7tXeSLZ90hagjGcFyIZsuMIXsaI8sl9P=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855749,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855751,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 871853,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855752,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871852,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 871853,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871852,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855750,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855752,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871852,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855750,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871852,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 871852,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855750,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855750,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855752,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 871852,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855751,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871852,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855751,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855752,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855750,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855753,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855752,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855751,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871852,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 871852,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855752,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855750,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855751,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855752,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871852,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855751,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855750,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855751,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855750,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855751,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855750,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855751,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855750,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855751,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855752,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855760,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855759,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855761,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855752,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 871853,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855753,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855752,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855752,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855765,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855767,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855753,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 871853,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871853,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855762,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855753,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855754,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855753,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855753,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855754,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855755,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855755,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866683,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855760,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855761,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855762,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866683,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855765,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855768,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 4, away: 3, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871855,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855772,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855759,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855765,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855759,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855759,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855762,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 0, away: 4, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855766,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 0, away: 4, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855762,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855759,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855760,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855761,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855756,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855759,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855756,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855757,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855757,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855758,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855760,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855762,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855763,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855757,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855758,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855759,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855760,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855765,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1_W9HmYyHT_PVkUNhPXK-fsG_pV266RkGzA37G=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 866683,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855763,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855767,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855768,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855771,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 871854,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866683,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855760,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 866683,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855762,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855760,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855763,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855765,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 0, away: 4, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855768,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855761,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855771,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 871854,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855764,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855767,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855768,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855762,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866683,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855760,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 866683,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855762,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855760,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 866683,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855768,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855771,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855760,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855762,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855760,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866683,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855760,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855762,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 866683,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855760,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855761,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855762,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 866683,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855760,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866683,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866683,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855762,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855761,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855762,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866683,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855760,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855765,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855768,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855760,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855762,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 866683,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855760,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 866683,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855760,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855762,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855760,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855762,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855761,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855762,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 866683,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855762,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 3,
  },
  {
    matchId: 866683,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855765,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855767,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 871855,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855765,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855764,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 871854,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855765,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 0, away: 4, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855768,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 871855,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855770,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855765,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 871854,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855763,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 871854,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855764,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 871854,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "102340840807230761483",
      firstName: "Ivan",
      lastName: "Vasilev",
      email: "ivan.vasilev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0xXloK4AI707m3IrBToBmwS33bL0f24CvjMQMI=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "102340840807230761483",
      firstName: "Ivan",
      lastName: "Vasilev",
      email: "ivan.vasilev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0xXloK4AI707m3IrBToBmwS33bL0f24CvjMQMI=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "102340840807230761483",
      firstName: "Ivan",
      lastName: "Vasilev",
      email: "ivan.vasilev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0xXloK4AI707m3IrBToBmwS33bL0f24CvjMQMI=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855765,
    user: {
      id: "102340840807230761483",
      firstName: "Ivan",
      lastName: "Vasilev",
      email: "ivan.vasilev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0xXloK4AI707m3IrBToBmwS33bL0f24CvjMQMI=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 1, away: 4, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855765,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855767,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855771,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 1, away: 4, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0A8urpqEEguqx9MJfLAEjXmRhW8Cur0lx31oz3=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855765,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 0, away: 4, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855765,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 1, away: 4, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855765,
    user: {
      id: "104510334240825034689",
      firstName: "Mirela",
      lastName: "Tsvetkova",
      email: "mirela.vrazhilova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2AUMuakCLxwCwfhVpkWDhL3Y-zOYAHLB8phGYv=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855763,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855765,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855765,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855767,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855764,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855765,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855763,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871854,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855764,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855765,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855772,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855768,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855767,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855767,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855768,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855767,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855767,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 4, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 871855,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855768,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855767,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 976642,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 976534,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0T9SCG1ios57CqUu5ljCoH3HnhaLDhI5gWg1Zy=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855768,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855766,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855767,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855768,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 1, away: 5, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855767,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855767,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855768,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3jQkDE3I9vyJaL7y8MYsYuthjA2yHbhC4iPGFUFA=s96-c",
    },
    bet: { home: 0, away: 4, symbol: "2" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 976534,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2wuAe5fmjrKDqpbsDcyVIresVfd-DyOUOmaROq=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855766,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855767,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 1,
  },
  {
    matchId: 871855,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 0, away: 5, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855768,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855768,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 871855,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 976642,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 976642,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 976643,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2MeN3q5QStQzu8eYrri6SSLRrz0NryqhBfWZSdcw=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "107995508612198568442",
      firstName: "Nikolay",
      lastName: "Stanev",
      email: "nikolay.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3K4HwR2UNRg9bF33ib2hM9-1MPzS_Ce2j2Pr-7=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 976533,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 976642,
    user: {
      id: "100353046529799778523",
      firstName: "Nina",
      lastName: "Petrova",
      email: "nina.petrova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu01QC-m-7DRFyrFM4lu1jRuyS5aSMIPrYI6hNIJ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855770,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855770,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855771,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855771,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3_2Yv-OYT9vEsc-C0GKLgV6MIgBM-8HfgvQ5Y0Wg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855770,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855771,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855771,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855772,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855769,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855771,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 976534,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 976643,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0qrxZVQw24QhDVcZkP4bzIkg51NU7nXxUpLGD1=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855770,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855771,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855770,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855771,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855770,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855770,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "106642358387525517364",
      firstName: "Martin",
      lastName: "Yordanov",
      email: "martin.yordanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu36QtasbLoudDtfkW3S3zgVAPGbWFAjbyJ_fDE8=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855770,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855771,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855769,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 3,
  },
  {
    matchId: 855769,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 855771,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 0, away: 4, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855770,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 1,
  },
  {
    matchId: 855769,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 976642,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 977344,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 977345,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2ros6AgOAtEue-9PQUUqihHdh-MA5qAC9bgn8F=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 976643,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 855771,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 855772,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 976533,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 976643,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 977344,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977345,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: null,
  },
  {
    matchId: 855771,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 855772,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 976534,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 0,
  },
  {
    matchId: 977345,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 977344,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977345,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3Sh2_yjaJU_39zSk-q0NjAydwQV5_HQujspSUS=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: null,
  },
  {
    matchId: 976533,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 3,
  },
  {
    matchId: 977344,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3ygZH2Kkm65h7m-7Cj2OLxL_m1bpTh-gfnc1-t=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 976533,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 976534,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 977344,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 977345,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1D_RAywtZ_4hBdcvKvzZLRTqKQ3T7MnNxrWw54=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 976533,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 977344,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977345,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 976533,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0yN6vMgyBT4j7PCVfoXAN5J1zOKI3vRY1RUXEyEw=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 976533,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 977344,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1talB1hFFwi_-CiHigOzBgMMNK2yv5FkG5udTQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 976533,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0pJKkM9n7f5bkfGwKUAp1AST9haMYJTxASQr6kCg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 976533,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1lv5IoKymivp6YNHQQAqrl_3KLjyocVO3tLsgr=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 976642,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977344,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977345,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2lENou7YBCZxY56x8KffQTXPotxyeNWh99kYUf=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 976533,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2QxqwHA7QhhlH6sqDVyL0DuqemTgRatUdIljs4=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 976642,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 976533,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 976642,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3J7yH5S8lwi3k9Ckux4hKXLYa3ot6Jk0M4GPjp=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1epVLMb1GrfNbXhuXYgboUjX0ox9cxroG5-rii=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 976642,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 976533,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "102677550684246618988",
      firstName: "Aneliya",
      lastName: "Ivanova",
      email: "aneliya.ivanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu37Yh8B5lg0uFJg-rivP_V_6pd5IsP0woYxoTMV=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 976642,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3pvoOLpIA4fsX9A3tLcECepEE8qufCBaypcQSe=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976533,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3DpijWKHU1lyuPxskLUy2OIBLLie2NmGOzEbgHVg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3hpElvJlJLeyZLzfBHx0VczIIT35s3fpd0sx8BSQ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 977706,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977345,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: null,
  },
  {
    matchId: 977705,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 976534,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1JXRibeeqoU4ZVjL-S4Y8oNCN3fkFuFyvran0L=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "111348873388511185013",
      firstName: "Georgi",
      lastName: "Nikolov",
      email: "georgi.nikolov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1DqjRcUdoCVeV_3CE2PXBA-RayhRMUI4ZpiINh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 976642,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976642,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Vke8Tw_Yw9aepTy_tsm4dVXDFDfJW7QZyNbZo=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 977344,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977345,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3bktJE4FJ05WRf0myxwjdG3RSr6Wujshw83QtJfA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 976643,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 977344,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977345,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "101116272645606607023",
      firstName: "Strahil",
      lastName: "Goranov",
      email: "strahil.goranov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1Q8S6NSmwoPx2HIjHwZITMnOs0oEoV1sTRjLkJ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977345,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "108106719727450839076",
      firstName: "Tsanislav",
      lastName: "Ivanov",
      email: "tsanislav.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu3-Tr0Y9ZqoglC_cDM50sMaTzZi4DwDZJe7nI0Q=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977705,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "115032161955309488552",
      firstName: "Tomislav",
      lastName: "Atanasov",
      email: "tomislav.atanasov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0N5xr29pjJzXh0IKf42PlFXvMHfEMlUSIo-qDr=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: null,
  },
  {
    matchId: 976643,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2Zbaq6ko011ZcEgzhwtKwfRNSyBpbtl7tnSBJQIg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2J9QVDYCtpR8mC4NOzyngE37LHDY4kUcakEYd1=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2pjOOGarRGH7iUOb_WBhbd6H0ajOhpa7P2KSjgYQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7L4IAHR2S4UQIIvZL5SxDRzTiNx7Ky9F2zX0no=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7L4IAHR2S4UQIIvZL5SxDRzTiNx7Ky9F2zX0no=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6nPkUaFMOZy27NCOn9FczRP9BQQ3-c4_OGPONFyQ=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 976534,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6nPkUaFMOZy27NCOn9FczRP9BQQ3-c4_OGPONFyQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5GLxwJpa2sG5qwpACUmz9SkW8gBc9fC4nPqeJs=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5GLxwJpa2sG5qwpACUmz9SkW8gBc9fC4nPqeJs=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7NP69lwJG62cC8fGkQjIlpmhfpbx02z9XPsxUMWg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7NP69lwJG62cC8fGkQjIlpmhfpbx02z9XPsxUMWg=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6ziZwqtSSrgVfcYHgWNP-Bm6TwjFxUVpFS4p8g=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 0,
  },
  {
    matchId: 976643,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6ziZwqtSSrgVfcYHgWNP-Bm6TwjFxUVpFS4p8g=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 977705,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977794,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2qxRYX9qGYZRjAn3atF921a7rBVOKWDg1FAafz=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 976643,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu0RhZ-1xx5KG1FGJsCWr3mEo9fX0e5sv8CKMvgh=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp68dpZs16DuRBDQT0W1f_ieylfcLpVs3D7ZKqEo=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 976534,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp68dpZs16DuRBDQT0W1f_ieylfcLpVs3D7ZKqEo=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp480ntNm4ioE57em1YAfTioMnRrbz3_TKIjnIVH=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 3,
  },
  {
    matchId: 976534,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp480ntNm4ioE57em1YAfTioMnRrbz3_TKIjnIVH=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976643,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp4IZ2jGoiR42OuvJptQiqhc9lnzu_gH-iKgk2QN=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp4IZ2jGoiR42OuvJptQiqhc9lnzu_gH-iKgk2QN=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7nt9q4y8z-Te7svrgD2CDxWL4Xs2NgnhnwV1ssSg=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 976534,
    user: {
      id: "104488338355389982143",
      firstName: "Todorin",
      lastName: "Tonev",
      email: "todorin.tonev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu2OPzuaLn5g0u_A1PmEtRlSxaDzskgpVHKpG6_W=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 976534,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7FY79bBEcAcTK1piwZXbPiUZ91Bv11c5It6Kl5=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 976534,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7cmUG2ukyG5G8G2e9lr6Hz2ehyDQEPmf5HNGuA=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: 1,
  },
  {
    matchId: 977344,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6tnj881myFgBDOh9EErMmLtsIGe_YRWLxl5CN_hQ=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6tnj881myFgBDOh9EErMmLtsIGe_YRWLxl5CN_hQ=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977345,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6tnj881myFgBDOh9EErMmLtsIGe_YRWLxl5CN_hQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6tnj881myFgBDOh9EErMmLtsIGe_YRWLxl5CN_hQ=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: null,
  },
  {
    matchId: 977794,
    user: {
      id: "110416290038538426476",
      firstName: "Hristo",
      lastName: "Tomov",
      email: "hristo.tomov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6tnj881myFgBDOh9EErMmLtsIGe_YRWLxl5CN_hQ=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977794,
    user: {
      id: "112234122112559224622",
      firstName: "Nikolay",
      lastName: "Petkov",
      email: "nikolay.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp4Zzgq0SrSS-EOotEHNxCoJ9BCrSXsnrY19UYcg=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977794,
    user: {
      id: "108491428576440219470",
      firstName: "Teodor",
      lastName: "Ognianov",
      email: "teodor.ognianov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5NEk-OUVcJyhNxVwZTTLjLKJ3lSV2Gh5ALNuBBLw=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: null,
  },
  {
    matchId: 976534,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6JS3x9sAZwoDJGCdHktA4D1TTriIVrE47QGg_N=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 1,
  },
  {
    matchId: 977705,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp480ntNm4ioE57em1YAfTioMnRrbz3_TKIjnIVH=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "117691397833908152936",
      firstName: "Veselin",
      lastName: "Todorov",
      email: "veselin.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp480ntNm4ioE57em1YAfTioMnRrbz3_TKIjnIVH=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: 1,
  },
  {
    matchId: 977344,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6WgKtkOUyaoaYcE37AziPcO1ZzkAEIFwhGriA8=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6WgKtkOUyaoaYcE37AziPcO1ZzkAEIFwhGriA8=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977345,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6WgKtkOUyaoaYcE37AziPcO1ZzkAEIFwhGriA8=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6WgKtkOUyaoaYcE37AziPcO1ZzkAEIFwhGriA8=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: null,
  },
  {
    matchId: 977794,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6WgKtkOUyaoaYcE37AziPcO1ZzkAEIFwhGriA8=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: null,
  },
  {
    matchId: 978036,
    user: {
      id: "117099609128215154028",
      firstName: "Dimitar",
      lastName: "Stanev",
      email: "dimitar.stanev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6WgKtkOUyaoaYcE37AziPcO1ZzkAEIFwhGriA8=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977705,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7L3paTTeboiPHM7vKB8tokOhMNqU4Yk_revfUw=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7L3paTTeboiPHM7vKB8tokOhMNqU4Yk_revfUw=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977794,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7L3paTTeboiPHM7vKB8tokOhMNqU4Yk_revfUw=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 978036,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7L3paTTeboiPHM7vKB8tokOhMNqU4Yk_revfUw=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp68dpZs16DuRBDQT0W1f_ieylfcLpVs3D7ZKqEo=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "115514586783748004519",
      firstName: "Aleksandra",
      lastName: "Stoyanova",
      email: "aleksandra.stoyanova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp68dpZs16DuRBDQT0W1f_ieylfcLpVs3D7ZKqEo=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977705,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7FY79bBEcAcTK1piwZXbPiUZ91Bv11c5It6Kl5=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7FY79bBEcAcTK1piwZXbPiUZ91Bv11c5It6Kl5=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977344,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7BxRwmrJWpQxIWL9w-hD0IiC6Mec7zB_Y7MksV=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "113086122627701772659",
      firstName: "Konstantin",
      lastName: "Dimitrov",
      email: "konstantin.dimitrov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7BxRwmrJWpQxIWL9w-hD0IiC6Mec7zB_Y7MksV=s96-c",
    },
    bet: { home: 4, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7z585i_wQIDTjfLR6QjHYra6reHjZJ_BUC_GNT=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7z585i_wQIDTjfLR6QjHYra6reHjZJ_BUC_GNT=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977345,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7z585i_wQIDTjfLR6QjHYra6reHjZJ_BUC_GNT=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7z585i_wQIDTjfLR6QjHYra6reHjZJ_BUC_GNT=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977794,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7z585i_wQIDTjfLR6QjHYra6reHjZJ_BUC_GNT=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 978036,
    user: {
      id: "105343335941597513478",
      firstName: "Preslav",
      lastName: "Hristov",
      email: "preslav.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7z585i_wQIDTjfLR6QjHYra6reHjZJ_BUC_GNT=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp74BS4eFi9hlJYv-hCmiGIu7wtghuz5ZrgAVX83IA=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 977705,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp74BS4eFi9hlJYv-hCmiGIu7wtghuz5ZrgAVX83IA=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp61PMPc995fZK57lcpqjQYxE53-4aVUa0jLtc0WSQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "110526096324711051693",
      firstName: "Denis",
      lastName: "Danov",
      email: "denis.danov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp61PMPc995fZK57lcpqjQYxE53-4aVUa0jLtc0WSQ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977345,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp74BS4eFi9hlJYv-hCmiGIu7wtghuz5ZrgAVX83IA=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp74BS4eFi9hlJYv-hCmiGIu7wtghuz5ZrgAVX83IA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977794,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp74BS4eFi9hlJYv-hCmiGIu7wtghuz5ZrgAVX83IA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 978036,
    user: {
      id: "109296997126378894147",
      firstName: "Angel",
      lastName: "Gruev",
      email: "a.gruev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp74BS4eFi9hlJYv-hCmiGIu7wtghuz5ZrgAVX83IA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 977705,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu25DHxDVQGo8_Rr72fUgUUv3EzMe9WG0wrHFkUA=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5N6LBXTxRUahlOyKNdqn9DWE2jFOm4tWcXqsVTEQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "101829341745053206185",
      firstName: "Gavrail",
      lastName: "Kubatev",
      email: "gavrail.kubatev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5N6LBXTxRUahlOyKNdqn9DWE2jFOm4tWcXqsVTEQ=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6nPkUaFMOZy27NCOn9FczRP9BQQ3-c4_OGPONFyQ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "109706771818360816026",
      firstName: "Stoyan",
      lastName: "Ivanov",
      email: "stoyan.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6nPkUaFMOZy27NCOn9FczRP9BQQ3-c4_OGPONFyQ=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7mvIH253mt-nnT_jqpdeKi9WsUOASBhVjRVbyc=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "112224121155960420640",
      firstName: "Lyubomir",
      lastName: "Petkov",
      email: "lyubomir.petkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7mvIH253mt-nnT_jqpdeKi9WsUOASBhVjRVbyc=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6ziZwqtSSrgVfcYHgWNP-Bm6TwjFxUVpFS4p8g=s96-c",
    },
    bet: { home: 2, away: 3, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6ziZwqtSSrgVfcYHgWNP-Bm6TwjFxUVpFS4p8g=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977705,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7cmUG2ukyG5G8G2e9lr6Hz2ehyDQEPmf5HNGuA=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977345,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7cmUG2ukyG5G8G2e9lr6Hz2ehyDQEPmf5HNGuA=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 978036,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7cmUG2ukyG5G8G2e9lr6Hz2ehyDQEPmf5HNGuA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: null,
  },
  {
    matchId: 977794,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7cmUG2ukyG5G8G2e9lr6Hz2ehyDQEPmf5HNGuA=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7cmUG2ukyG5G8G2e9lr6Hz2ehyDQEPmf5HNGuA=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7cmUG2ukyG5G8G2e9lr6Hz2ehyDQEPmf5HNGuA=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 978036,
    user: {
      id: "111038004266305898514",
      firstName: "Kristina",
      lastName: "Dureva",
      email: "kristina.dureva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp412Waw7QeGKk886fqGZkMDE-CBJC3rrkZp5aoH=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: null,
  },
  {
    matchId: 977705,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7yFuUCB7eDWlgZT5E-0gx3tSbLvlKDtPRKFd_G5g=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7yFuUCB7eDWlgZT5E-0gx3tSbLvlKDtPRKFd_G5g=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977344,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5M4OpUGUIqBPDzzQnCePDrXB6Ej2BOsh572Cgr=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5M4OpUGUIqBPDzzQnCePDrXB6Ej2BOsh572Cgr=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977345,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5M4OpUGUIqBPDzzQnCePDrXB6Ej2BOsh572Cgr=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5M4OpUGUIqBPDzzQnCePDrXB6Ej2BOsh572Cgr=s96-c",
    },
    bet: { home: 3, away: 2, symbol: "1" },
    points: null,
  },
  {
    matchId: 977794,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5M4OpUGUIqBPDzzQnCePDrXB6Ej2BOsh572Cgr=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 978036,
    user: {
      id: "108149642135217992975",
      firstName: "Nikolay",
      lastName: "Chernev",
      email: "nikolay.chernev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5M4OpUGUIqBPDzzQnCePDrXB6Ej2BOsh572Cgr=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp42faZubI9iav1WfHG9cwaqmISV0WLToY_stIkJ=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "117301916144966988673",
      firstName: "Yavor",
      lastName: "Todorov",
      email: "yavor.todorov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp42faZubI9iav1WfHG9cwaqmISV0WLToY_stIkJ=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "112717409545012068646",
      firstName: "Zafer",
      lastName: "Duzen",
      email: "zafer.duzen@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ALm5wu1H6Kc_DqnCYmzgu9HHHAOzk01y6wQ_oNY_I3Ut=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977705,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7nt9q4y8z-Te7svrgD2CDxWL4Xs2NgnhnwV1ssSg=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "104665335250063606040",
      firstName: "Stoyan",
      lastName: "Mitov",
      email: "stoyan.mitov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7nt9q4y8z-Te7svrgD2CDxWL4Xs2NgnhnwV1ssSg=s96-c",
    },
    bet: { home: 2, away: 2, symbol: "X" },
    points: 1,
  },
  {
    matchId: 977705,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5rD_5HU5JxxdKYGKlzoGkaUl1NOQfIGtoEpJv_=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977705,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7feGO59pZZA5_2QjzBs8Me34bFE7bWTdo1fiyP=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7feGO59pZZA5_2QjzBs8Me34bFE7bWTdo1fiyP=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977794,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7feGO59pZZA5_2QjzBs8Me34bFE7bWTdo1fiyP=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 978036,
    user: {
      id: "113079770175636173518",
      firstName: "Magdalena",
      lastName: "Nikolova",
      email: "magdalena.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7feGO59pZZA5_2QjzBs8Me34bFE7bWTdo1fiyP=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5NOqlMHFe3hOoWinhXZz-fBiIhB81DMpeZJiZv=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5NOqlMHFe3hOoWinhXZz-fBiIhB81DMpeZJiZv=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977345,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5NOqlMHFe3hOoWinhXZz-fBiIhB81DMpeZJiZv=s96-c",
    },
    bet: { home: 1, away: 3, symbol: "2" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5NOqlMHFe3hOoWinhXZz-fBiIhB81DMpeZJiZv=s96-c",
    },
    bet: { home: 3, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977794,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5NOqlMHFe3hOoWinhXZz-fBiIhB81DMpeZJiZv=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: null,
  },
  {
    matchId: 978036,
    user: {
      id: "108319140673323190729",
      firstName: "Denis",
      lastName: "Ivanov",
      email: "denis.ivanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5NOqlMHFe3hOoWinhXZz-fBiIhB81DMpeZJiZv=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp4IZ2jGoiR42OuvJptQiqhc9lnzu_gH-iKgk2QN=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp4IZ2jGoiR42OuvJptQiqhc9lnzu_gH-iKgk2QN=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6b-J_5JZ5qhpGX3HrRREdCjjuYbjtkTIJS_xgz=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: 3,
  },
  {
    matchId: 977705,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6b-J_5JZ5qhpGX3HrRREdCjjuYbjtkTIJS_xgz=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977345,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6b-J_5JZ5qhpGX3HrRREdCjjuYbjtkTIJS_xgz=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6b-J_5JZ5qhpGX3HrRREdCjjuYbjtkTIJS_xgz=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977794,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6b-J_5JZ5qhpGX3HrRREdCjjuYbjtkTIJS_xgz=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: null,
  },
  {
    matchId: 978036,
    user: {
      id: "102126240099724677462",
      firstName: "Dobrin",
      lastName: "Marinov",
      email: "dobrin.marinov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6b-J_5JZ5qhpGX3HrRREdCjjuYbjtkTIJS_xgz=s96-c",
    },
    bet: { home: 0, away: 0, symbol: "X" },
    points: null,
  },
  {
    matchId: 977344,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6JS3x9sAZwoDJGCdHktA4D1TTriIVrE47QGg_N=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: 0,
  },
  {
    matchId: 977705,
    user: {
      id: "106553114542236129975",
      firstName: "Teodora",
      lastName: "Yovcheva",
      email: "teodora.yovcheva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7hvMAFXVOHV0cU9WpdDkLBqDXSY20JprmTGxGi=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977705,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5yW9zNdu2hnkcLo4uI4l3Bm2d5SPVsAEZvscFS=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977345,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5yW9zNdu2hnkcLo4uI4l3Bm2d5SPVsAEZvscFS=s96-c",
    },
    bet: { home: 1, away: 5, symbol: "2" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5yW9zNdu2hnkcLo4uI4l3Bm2d5SPVsAEZvscFS=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 977794,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5yW9zNdu2hnkcLo4uI4l3Bm2d5SPVsAEZvscFS=s96-c",
    },
    bet: { home: 3, away: 3, symbol: "X" },
    points: null,
  },
  {
    matchId: 978036,
    user: {
      id: "110872251919367637446",
      firstName: "Nikolay",
      lastName: "Rusev",
      email: "nikolay.rusev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5yW9zNdu2hnkcLo4uI4l3Bm2d5SPVsAEZvscFS=s96-c",
    },
    bet: { home: 3, away: 4, symbol: "2" },
    points: null,
  },
  {
    matchId: 977705,
    user: {
      id: "101370904980422579574",
      firstName: "Dilyana",
      lastName: "Gineva",
      email: "dilyana.gineva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp4LIkI3OwvhOJIWqpCCFhkTS6d7oIH3d2IiupjC=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977705,
    user: {
      id: "101128026473439205831",
      firstName: "Mariela",
      lastName: "Levieva",
      email: "mariela.levieva@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6Tb-I9y3QG4VJwYIqcqwWIc_8LlmkwwtL52gE-=s96-c",
    },
    bet: { home: 4, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977705,
    user: {
      id: "101506150333875874419",
      firstName: "Reneta",
      lastName: "Nikolova",
      email: "reneta.nikolova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp6JS3x9sAZwoDJGCdHktA4D1TTriIVrE47QGg_N=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977705,
    user: {
      id: "106737080135459016383",
      firstName: "Yordan",
      lastName: "Hristov",
      email: "yordan.hristov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp7NP69lwJG62cC8fGkQjIlpmhfpbx02z9XPsxUMWg=s96-c",
    },
    bet: { home: 3, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977705,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp4Ry4P-xX3Qjl7aiz3KKQXByTZM7gCrdg_swXGqpQ=s96-c",
    },
    bet: { home: 2, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977345,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp4Ry4P-xX3Qjl7aiz3KKQXByTZM7gCrdg_swXGqpQ=s96-c",
    },
    bet: { home: 0, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp4Ry4P-xX3Qjl7aiz3KKQXByTZM7gCrdg_swXGqpQ=s96-c",
    },
    bet: { home: 1, away: 0, symbol: "1" },
    points: null,
  },
  {
    matchId: 977794,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp4Ry4P-xX3Qjl7aiz3KKQXByTZM7gCrdg_swXGqpQ=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: null,
  },
  {
    matchId: 978036,
    user: {
      id: "110837338918705412900",
      firstName: "Georgi",
      lastName: "Minkov",
      email: "georgi.minkov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp4Ry4P-xX3Qjl7aiz3KKQXByTZM7gCrdg_swXGqpQ=s96-c",
    },
    bet: { home: 0, away: 1, symbol: "2" },
    points: null,
  },
  {
    matchId: 977345,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5rD_5HU5JxxdKYGKlzoGkaUl1NOQfIGtoEpJv_=s96-c",
    },
    bet: { home: 0, away: 3, symbol: "2" },
    points: null,
  },
  {
    matchId: 977706,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5rD_5HU5JxxdKYGKlzoGkaUl1NOQfIGtoEpJv_=s96-c",
    },
    bet: { home: 2, away: 1, symbol: "1" },
    points: null,
  },
  {
    matchId: 977794,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5rD_5HU5JxxdKYGKlzoGkaUl1NOQfIGtoEpJv_=s96-c",
    },
    bet: { home: 1, away: 2, symbol: "2" },
    points: null,
  },
  {
    matchId: 978036,
    user: {
      id: "102864509523434130947",
      firstName: "Olga",
      lastName: "Andreeva",
      email: "olga.kambitova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5rD_5HU5JxxdKYGKlzoGkaUl1NOQfIGtoEpJv_=s96-c",
    },
    bet: { home: 1, away: 1, symbol: "X" },
    points: null,
  },
];

export const mockedMatchById = {
  date: "2026-06-11T19:00:00Z",
  id: 1489369,
  round: "Group Stage - 1",
  score: {
    goals: {
      home: null,
      away: null,
      symbol: null,
    },
    extraTime: null,
    penalty: {
      home: null,
      away: null,
      symbol: null,
    },
  },
  status: {
    elapsed: null,
    long: "Not Started",
    short: "NS",
  },
  teams: {
    home: {
      id: 16,
      name: "Mexico",
      logo: "https://media.api-sports.io/football/teams/16.png",
      winner: null,
    },
    away: {
      id: 1531,
      name: "South Africa",
      logo: "https://media.api-sports.io/football/teams/1531.png",
      winner: null,
    },
  },
};

export const mockedGroups = [
  {
    group: "Ranking of third-placed teams",
    teams: [
      {
        id: 17,
        name: "South Korea",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1569,
        name: "Qatar",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 2386,
        name: "Haiti",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 20,
        name: "Australia",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1501,
        name: "Ivory Coast",
        rank: 5,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 5,
        name: "Sweden",
        rank: 6,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 22,
        name: "Iran",
        rank: 7,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 23,
        name: "Saudi Arabia",
        rank: 8,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1567,
        name: "Iraq",
        rank: 9,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 775,
        name: "Austria",
        rank: 10,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1568,
        name: "Uzbekistan",
        rank: 11,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1504,
        name: "Ghana",
        rank: 12,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group F",
    teams: [
      {
        id: 1118,
        name: "Netherlands",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 12,
        name: "Japan",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 5,
        name: "Sweden",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 28,
        name: "Tunisia",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group E",
    teams: [
      {
        id: 25,
        name: "Germany",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 5530,
        name: "Curaçao",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1501,
        name: "Ivory Coast",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 2382,
        name: "Ecuador",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group H",
    teams: [
      {
        id: 9,
        name: "Spain",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1533,
        name: "Cape Verde Islands",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 23,
        name: "Saudi Arabia",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 7,
        name: "Uruguay",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group G",
    teams: [
      {
        id: 1,
        name: "Belgium",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 32,
        name: "Egypt",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 22,
        name: "Iran",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 4673,
        name: "New Zealand",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group B",
    teams: [
      {
        id: 5529,
        name: "Canada",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1113,
        name: "Bosnia & Herzegovina",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1569,
        name: "Qatar",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 15,
        name: "Switzerland",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group A",
    teams: [
      {
        id: 16,
        name: "Mexico",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1531,
        name: "South Africa",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 17,
        name: "South Korea",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 770,
        name: "Czech Republic",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group D",
    teams: [
      {
        id: 2384,
        name: "USA",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 2380,
        name: "Paraguay",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 20,
        name: "Australia",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 777,
        name: "Türkiye",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group C",
    teams: [
      {
        id: 6,
        name: "Brazil",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 31,
        name: "Morocco",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 2386,
        name: "Haiti",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1108,
        name: "Scotland",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group J",
    teams: [
      {
        id: 26,
        name: "Argentina",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1532,
        name: "Algeria",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 775,
        name: "Austria",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1548,
        name: "Jordan",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group I",
    teams: [
      {
        id: 2,
        name: "France",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 13,
        name: "Senegal",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1567,
        name: "Iraq",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1090,
        name: "Norway",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group L",
    teams: [
      {
        id: 10,
        name: "England",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 3,
        name: "Croatia",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1504,
        name: "Ghana",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 11,
        name: "Panama",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group K",
    teams: [
      {
        id: 27,
        name: "Portugal",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1508,
        name: "Congo DR",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1568,
        name: "Uzbekistan",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 8,
        name: "Colombia",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
];
