var express = require("express");
var router = express.Router();
const projectController = require("../controller");

// Project routes
router.get("/project/all", projectController.getAllProjects);
router.get("/project?:id", projectController.getProjectById);
router.post("/project", projectController.createNewProjectEntry);

module.exports = router;