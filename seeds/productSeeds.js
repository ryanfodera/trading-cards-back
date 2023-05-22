const Product = require("../models/Product");

const products = [
    {
        "name": "Blastoise",
        "description": "As often as you like during your turn (before your attack), you may attach 1 Water Energy card to 1 of your Water Pokémon. (This doesn't use up your 1 Energy card attachment for the turn.) This power can't be used if Blastoise is Asleep, Confused, or Paralyzed.",
        "price": 70,
        "rating": 4,
        "featured": true,
        "imageURL": "https://images.pokemontcg.io/base1/2_hires.png"
    },
    {
        "name": "Chansey",
        "description": "A rare and elusive Pokémon that is said to bring happiness to those who manage to catch it.",
        "price": 99,
        "rating": 4,
        "featured": true,
        "imageURL": "https://images.pokemontcg.io/base1/3_hires.png"
    },
    {
        "name": "Charizard",
        "description": "Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires.",
        "price": 70,
        "rating": 3.9,
        "featured": true,
        "imageURL": "https://images.pokemontcg.io/base1/4_hires.png"
    },
    {
        "name": "Alakazam",
        "description": "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.",
        "price": 30,
        "rating": 3,
        "featured": true,
        "imageURL": "https://images.pokemontcg.io/base1/1_hires.png",
    }
];

const productSeeds = () => Product.bulkCreate(products);

module.exports = productSeeds;