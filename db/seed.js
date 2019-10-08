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

// https://www.oshunswimschool.com/uploads/4/6/6/6/46667031/published/a25f88b931ad4604785676db8f873504-oshun-goddess-goddess-art.jpg?1527720182