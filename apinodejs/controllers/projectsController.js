'use strict';
var mongoose = require('mongoose');
var project = mongoose.model('Projects');

exports.getAllProjects = (req, res) => {
  project.find({}, (err, pro) => { if(err) res.send(err); res.json(pro);});
};

exports.getProjectsPage = (req, res) => {
  console.log(req);
  project.find({},(err, pro) => { if(err) res.send(err); res.json(pro);}).skip(req.body.projectsPerPage * req.body.page).limit(Number(req.body.projectsPerPage));
};

exports.getProjectsCount = (req, res) => {
  project.count({}, (err, c) => { res.json({count: c}); });
};

exports.addProject = (req, res) => {
  var newProject = new project(req.body);
  newProject.save((err, pro) => { if(err) res.send(err); res.json(pro);});
};

exports.getProject = (req, res) => {
  project.findById(req.params.projectId, (err, pro) => {  if(err) res.send(err); res.json(pro); });
};

exports.updateProject = (req, res) => {
  project.findOneAndUpdate({_id: req.params.projectId}, req.body, {new: true}, (err, pro) => {  if(err) res.send(err); res.json(pro); });
};

exports.deleteProject = (req, res) => {
  project.remove({_id: req.params.projectId}, (err, pro) => {  if(err) res.send(err); res.json({msg: "Project deleted."}); });
};
