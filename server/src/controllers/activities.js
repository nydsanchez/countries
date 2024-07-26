const { Activities, Countries } = require("../db");

const dataComplete = async (req, res, next) => {
  const { name, duration, difficulty, season, countries } = req.body;
  try {
    if (
      !name ||
      !duration ||
      !difficulty ||
      !season ||
      !countries ||
      !Array.isArray(countries)
    ) {
      return res.status(400).json({ message: "Datos faltantes o invalidos" });
    }
    next();
  } catch (error) {
    console.error("Error in getActivities:", error);
    res.status(500).send(error.message);
  }
};

const getAllActivities = async (req, res) => {
  try {
    const count = await Activities.count();
    console.log(count);
    if (count > 0) {
      const activities = await Activities.findAll();
      return res.status(200).json(activities);
    } else {
      return res.status(200).json({
        success: true,
        message: "No se han registrado actividades.",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postActivity = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    const [newActivity, created] = await Activities.findOrCreate({
      where: {
        name,
      },
      defaults: {
        difficulty: Number(difficulty),
        duration: Number(duration),
        season: season.toString(),
      },
    });
    if (created) {
      for (const c of countries) {
        const country = await Countries.findByPk(c);
        if (country) {
          await country.addActivity(newActivity);
        } else {
          console.warn(`Country with id ${c.id} not found.`);
        }
      }
      return res.status(200).json({ message: "Actividad creada exitosamente" });
    } else {
      return res.status(200).json({ message: "Esa actividad ya existe" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const putActivity = async (req, res) => {
  const { id } = req.params;
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    const activityToModify = await Activities.findByPk(id);
    if (activityToModify) {
      if (activityToModify.name !== name) {
        activityToModify.name = name;
      }
      if (activityToModify.difficulty != difficulty) {
        activityToModify.difficulty = Number(difficulty);
      }
      if (activityToModify.duration != duration) {
        activityToModify.duration = Number(duration);
      }
      if (activityToModify.season != season) {
        activityToModify.season = season.toString();
      }

      await activityToModify.save();

      if (countries.length > 0) {
        await activityToModify.setCountries(country);
      }
      const modifiedActivity = await Activities.findByPk(id, {
        include: {
          model: Countries,
          through: { attributes: [] },
          attributes: ["id"],
        },
      });

      return res.status(200).json(modifiedActivity);
    } else {
      return res.status(404).json({ message: "Esta actividad no existe" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteActivity = async (req, res) => {
  const { id } = req.params;
  try {
    const activityToDelete = await Activities.findByPk(id);
    if (activityToDelete) {
      const associatedCountries = await activityToDelete.getCountries();
      for (const country of associatedCountries) {
        await activityToDelete.removeCountry(country);
      }
      await activityToDelete.destroy();
      return res.status(200).json({
        message: "La actividad ha sido borrada exitosamente.",
      });
    } else {
      return res.status(404).json({ message: "Actividad no encontrada." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllActivities,
  postActivity,
  putActivity,
  deleteActivity,
  dataComplete,
};
