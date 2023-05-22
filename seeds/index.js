const db = require("../config/db");
const productSeeds = require("./productSeeds");

async function main() {
    await db.sync({ force: false });
    await productSeeds();
    console.log("------ Seeded Products Data ------");
    process.exit(0);
}

main();