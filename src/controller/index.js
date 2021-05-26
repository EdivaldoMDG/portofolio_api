const Project = require("../model/project");

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    projects.length > 0 && res.status(200).json(projects);
    res.status(404).send({ errorCode: "NotFound" });
  } catch (error) {
    console.error(error);
    res.status(400).send({ errorCode: "Internal Server  Error" });
  }
};

const createNewProjectEntry = async (req, res) => {
  try {
    const { image,  project , url, } = req.body;
    const newProject = new Project({
        image,
        project,
        url,
    });
    await newProject.save();
    res.status(200).send(project);
  } catch (error) {
    console.error(error);
    res.status(400).send({ errorCode: "Internal Server Error" });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.query.id });
    project !== null && res.status(200).send(project);
    res.status(404).send({ errorCode: "NotFound" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ errorCode: "Internal Server Error" });
  }
};
module.exports = { getAllProjects, createNewProjectEntry, getProjectById };