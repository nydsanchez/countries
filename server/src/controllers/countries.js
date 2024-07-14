const axios = require("axios");
const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const api = "http://localhost:5000/countries";

const dataFromApi = async (req, res) => {
  try {
    const { data } = await axios.get(api);
    const countryApi = data.map((country) => {
      const {
        cca3,
        name,
        flags,
        continents,
        capital,
        subregion,
        area,
        population,
      } = country;

      return {
        id: cca3,
        name,
        flag: flags.png,
        continent: continents,
        capital: capital.toString(),
        subregion,
        area,
        population,
      };
    });

    await Country.bulkCreate(countryApi);
    return res.status(200).json({
      message: "Se han cargado exitosamente los países en la base de datos",
    });
  } catch (error) {
    console.error("Error en getCountriesApi:", error);
    return res.status(500).json({
      message: "Error al cargar los países en la base de datos.",
      error: error.message,
    });
  }
};

const getAllCountries = async (req, res) => {
  try {
    const countCountry = await Country.count();
    if (countCountry.length === 0) {
      dataFromApi();
    } else {
      const dataCountry = await Country.findAll({
        include: {
          model: Activity,
          through: { attibutes: [] },
          attibutes: ["id", "name"],
        },
      });
      return res.status(200).json(dataCountry);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCountryById = async (req, res) => {
  const { id } = req.params;
  try {
    const country = await Country.findByPk(id, {
      include: {
        model: Activity,
        through: { attibutes: [] },
        attibutes: ["name"],
      },
    });
    country
      ? res.status(200).json(country)
      : res.status(404).json({ message: "País no encontrado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCountriesByName = async (req, res) => {
  const { name } = req.query;
  try {
    const countriesResult = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}`,
        },
      },
      include: {
        model: Activity,
        through: { attibutes: [] },
        attibutes: ["id", "name"],
      },
    });
    countriesResult
      ? res.status(200).json(countriesResult)
      : res.status(404).json({ message: "No hay países con esos datos" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getAllCountries, getCountryById, getCountriesByName };
