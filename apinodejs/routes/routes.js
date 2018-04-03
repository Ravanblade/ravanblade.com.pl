'use strict';
module.exports = (app) => {
  var projects = require('../controllers/projectsController');
  var users = require('../controllers/usersController');
  var verify = require('../controllers/verifyController');

  app.route('/register')
    .post(users.registerUser);

  app.route('/login')
    .post(users.loginUser);

  app.route('/logout')
    .post(verify, users.logoutUser);

  app.route('/logged')
    .get(users.isUserLogged);

  app.route('/projects/pagination')
    .get(projects.getProjectsCount)
    .post(projects.getProjectsPage);

  app.route('/projects')
    .get(projects.getAllProjects)
    .post(projects.addProject);

  app.route('/projects/:projectId')
    .get(projects.getProject)
    .put(verify, projects.updateProject)
    .delete(verify, projects.deleteProject);

};
