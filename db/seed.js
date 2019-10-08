const Business = require ("../models/businesses");
const seedData = require ("./seeds.json");

Business.remove({})
.then(() => {
    return Business.collection.insert(seedData);
})
.then(() => {
    console.log("There is seed data")
    process.exit();
});