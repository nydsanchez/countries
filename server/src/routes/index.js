const { Router } = require("express");
const { getAllCountries, getCountryById, getCountriesByName, dataComplete } =
  requiere("../controllers/countries");
const {
  getAllActivities,
  postActivity,
  putActivity,
  deleteActivity,
} = require("../controllers/activities");

const router = Router();

router.get("/countries", getAllCountries);
router.get("/countries/:id", getCountryById);
router.get("/countries/:name", getCountriesByName);

router.get("/activities", getAllActivities);
router.post("/activities", dataComplete, postActivity);
router.put("/activities/:id", dataComplete, putActivity);
router.delete("/activities/:id", deleteActivity);

module.exports = router;
