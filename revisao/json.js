    const superHeroes = {
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2016,
        "secretBase": "Super tower",
        "active": true,
        "members": [
            {
                "name": "Molecule Man",
                "age": 29,
                "secretIdentity": "Dan Jukes",
                "powers": [
                    "Radiation resistance",
                    "Turning tiny",
                    "Radiation blast"
                ]
            },
            {
                "name": "Madame Uppercut",
                "age": 39,
                "secretIdentity": "Jane Wilson",
                "powers": [
                    "Million tonne punch",
                    "Damage resistance",
                    "Superhuman reflexes"
                ]
            },
            {
                "name": "Eternal Flame",
                "age": 1000000,
                "secretIdentity": "Unknown",
                "powers": [
                    "Immortality",
                    "Heat Immunity",
                    "Inferno",
                    "Teleportation",
                    "Interdimensional travel"
                ]
            }
        ]
    }

// console.log(superHeroes.homeTown)
// console.log(superHeroes["active"])
// console.log(superHeroes.members[2].powers[0])

// JSON COMO MATRIZ
const heroes = [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
  ]
  
console.log(heroes[0].powers[2])

heroes.forEach(item => console.log(item.name))