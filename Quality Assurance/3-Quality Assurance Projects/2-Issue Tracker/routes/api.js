'use strict';
require('chai').expect;
const IssueModel = require('../models').Issue;
const ProjectModel = require('../models').Project;

module.exports = function(app) {
  app.route('/api/issues/:project')

    .get(function(req, res) {
      let project = req.params.project;

    })

    .post(async function(req, res) {
      let project = req.params.project;
      const {
        issue_title,
        issue_text,
        created_by,
        assigned_to,
        status_text,
      } = req.body;
      if (!issue_title || !issue_text || !created_by) {
        res.json({ error: "required field(s) missing" });
        return;
      }
      const newIssue = new IssueModel({
        issue_title: issue_title || "",
        issue_text: issue_text || "",
        created_on: new Date(),
        updated_on: new Date(),
        created_by: created_by || "",
        assigned_to: assigned_to || '',
        open: true,
        status_text: status_text || '',
      });
      const projectData = await ProjectModel.findOne({ name: project });
      if(!projectData) {
        const newProject = new ProjectModel({ name: project });
        newProject.issues.push(newIssue);
        newProject.save();
        console.log("Added new issue!");
      }
      else {
        projectData.issues.push(newIssue);
        projectData.save();
        console.log("Updated the issue!");
      }
    })

    .put(function (req, res) {
      let project = req.params.project;

    })

    .delete(function (req, res) {
      let project = req.params.project;

    });

};
