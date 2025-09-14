const idea_controller = require("../controllers/idea.controllers");

/**
 * Route for 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 */

module.exports = (app) => {
  console.log("Routes are being set up");
  app.get('/ideaApp/api/v1/ideas', (req, res) => {
    res.send("Route is working!");
  });
};