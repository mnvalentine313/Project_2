const express = require("express");
const router = express.Router();
const Businesses = require("../models/businesses");

module.exports = router;

// GET all businesses
router.get("/", (req, res) => {
    Businesses.find({}).then(businesses => res.render("index", { businesses }));
});

// Make a new business
router.get("/new", (req, res) => {
    res.render("new");
});

// Get a single business by ID
router.get("/:id", (req, res) => {
    Businesses.findOne({ _id: req.params.id }).then(business =>
        res.render("show", business)
    );
    // then(business => res.json(business))
});

// Get a single business by name
router.get("/business/:name", (req, res) => {
    Businesses.findOne({ name: req.params.name }).then(business =>
        res.render("show", business)
    );
});

// Redirect
router.post("/", (req, res) => {
    Businesses.create(req.body)
        .then(business => {
            res.redirect("/");
        })
        .catch(err => console.log(err));
});

// Edit a single business by ID
router.get("/edit/:id", (req, res) => {
    Businesses.findOne({ _id: req.params.id }).then(business => {
        res.render("edit", business);
    });
});

// Update a single business by ID
router.put("/:id", (req, res) => {
    Businesses.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true
    }).then(business => {
        res.redirect("/");
    });
});

// Edit a single business by name
router.get("/edit/business/:name", (req, res) => {
    Businesses.findOne({ name: req.params.name }).then(business => {
        res.render("edit", business);
    });
});

// Redirect
router.put("/business/:name", (req, res) => {
    Businesses.findOneAndUpdate({ name: req.params.name }, req.body, {
        new: true
    }).then(business => {
        res.redirect("/");
    });
});

// Delete a single business by ID -> Accessible by the Remove button
router.delete("/:id", (req, res) => {
    Businesses.findOneAndRemove({ _id: req.params.id }).then(() => {
        res.redirect("/");
    });
});
