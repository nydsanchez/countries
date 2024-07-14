const { Router } = require("express");
const { getAllCountries, getCountryById, getCountriesByName } = requiere(
  "../controllers/countries"
);
const router = Router();

router.get("/countries", getAllCountries);
router.get("/countries/:id", getCountryById);
router.get("/countries/:name", getCountriesByName);

router.get("/activities");
router.post("/activities");
router.put("/activities/:id");
router.delete("/activities/:id");

module.exports = router;
