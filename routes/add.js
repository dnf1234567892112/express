const fs = require("fs");
const path = require("path");

const { Router } = require("express");
const router = Router();
const Course = require("../models/course");
router.get("/", (req, res) => {
  res.render("add", {
    title: "Добавить новые курси ",
    page: "Добавить новые курси",
    isAdd: true,
  });
});

router.post("/", (req, res) => {
  const course = new Course(req.body.title, req.body.price, req.body.img);
  course.save();

  res.redirect("courses");
});

module.exports = router;
