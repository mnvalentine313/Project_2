const express = require("express");
const router = express.Router();
const Businesses = require("../models/businesses");

module.exports = router;


router.get("/", (req, res) => {
    Businesses.find({}).then(businesses => res.render ("index", { businesses }))
});

router.get("/new", (req, res) => {
    res.render("new")
})

router.get("/:id", (req, res) => {
    Businesses.findOne({ _id: req.params.id}).
    then(business => res.render("show", business))
    // then(business => res.json(business))
});

router.get("/business/:name", (req, res) => {
    Businesses.findOne({ name: req.params.name}).
    then(business => res.render("show", business))
    // then(business => res.json(business))
});

router.post("/", (req, res) => {
    Businesses.create(req.body)
    .then(business => {
        res.redirect("/")
    })
    .catch(err => console.log(err));
});

router.get("/edit/:id", (req, res) => {
    Businesses.findOne({_id: req.params.id})
    .then(business => {
        res.render("edit", business)
    })
});

router.put("/:id", (req, res) => {
    Businesses.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(business => {
        res.redirect("/")
    })
});

router.get("/edit/business/:name", (req, res) => {
    Businesses.findOne({name: req.params.name})
    .then(business => {
        res.render("edit", business)
    })
});

router.put("/business/:name", (req, res) => {
    Businesses.findOneAndUpdate({name: req.params.name}, req.body, {new: true})
    .then(business => {
        res.redirect("/")
    })
});

router.delete("/:id", (req, res) => {
    Businesses.findOneAndRemove({_id: req.params.id})
    .then(() => {
        res.redirect("/")
    })
});