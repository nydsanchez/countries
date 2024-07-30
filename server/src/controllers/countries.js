const axios = require("axios");
const { Op } = require("sequelize");
const { Countries, Activities } = require("../db");

const api = "http://localhost:5000/countries";

const dataFromApi = async (req, res) => {
  try {
    const { data } = await axios.get(api);
    const countryApi = data.map((country) => {
      const {
        cca3,
        name,
        flags,
        region,
        capital,
        subregion,
        area,
        population,
      } = country;

      return {
        id: cca3,
        name: name.common,
        flag: flags.png,
        continent: region,
        capital: Array.isArray(capital) ? capital.join(", ") : capital,
        subregion,
        area,
        population,
      };
    });

    await Countries.bulkCreate(countryApi);
    return {
      success: true,
      message: "Se han cargado exitosamente los países en la base de datos",
    };
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCountries = async (req, res) => {
  try {
    const countCountry = await Countries.count();
    if (countCountry === 0) {
      await dataFromApi();
    }

    const dataCountry = await Countries.findAll({
      include: {
        model: Activities,
        through: { attributes: [] },
        attributes: ["id", "name"],
      },
    });
    return res.status(200).json(dataCountry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCountryById = async (req, res) => {
  const { id } = req.params;
  try {
    const country = await Countries.findByPk(id, {
      include: {
        model: Activities,
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
    const countriesResult = await Countries.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: {
        model: Activities,
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
