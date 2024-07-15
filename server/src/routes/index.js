const { Router } = require("express");

const router = Router();
const {
  getAllCountries,
  getCountryById,
  getCountriesByName,
} = require("../controllers/countries");

const {
  getAllActivities,
  postActivity,
  putActivity,
  deleteActivity,
  dataComplete,
} = require("../controllers/activities");

router.get("/countries/name", getCountriesByName);
router.get("/countries", getAllCountries);
router.get("/country/:id", getCountryById);

router.get("/activities", getAllActivities);
router.post("/activities", dataComplete, postActivity);
router.put("/activities/:id", dataComplete, putActivity);
router.delete("/activities/:id", deleteActivity);

module.exports = router;
