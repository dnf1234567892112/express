const { Router } = require("express");
const router = Router();
router.get("/", (req, res) => {
  res.render("about", {
    title: "about",
    page: "About Page",
    isAbout: true,
  });
});
module.exports = router;
