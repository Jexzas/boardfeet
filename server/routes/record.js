const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
// This section will help you get a list of all the records.
recordRoutes.route("/woods").get(async function (req, response) {
  let db_connect = dbo.getDb();

  try {
    var records = await db_connect
      .collection("Species")
      .find({})
      .toArray();
    response.json(records);
  } catch (e) {
    console.log("An error occurred pulling the records. " + e);
  }

});

recordRoutes.route("/custom-woods").get(async function (req, response) {
    let db_connect = dbo.getDb();
  
    try {
      var records = await db_connect
        .collection("UserWoods")
        .find({})
        .toArray();
      response.json(records);
    } catch (e) {
      console.log("An error occurred pulling the records. " + e);
    }
  
  });

recordRoutes.route("/lengths").get(async function (req, response) {
  let db_connect = dbo.getDb();

  try {
    var records = await db_connect
      .collection("Lengths") 
      .find({})
      .toArray();
    response.json(records);
  } catch (e) {
    console.log("An error occurred pulling the records. " + e);
  }

});

recordRoutes.route("/thicknesses").get(async function (req, response) {
    let db_connect = dbo.getDb();
  
    try {
      var records = await db_connect
        .collection("Thicknesses")
        .find({})
        .toArray();
      response.json(records);
    } catch (e) {
      console.log("An error occurred pulling the records. " + e);
    }
  
  });

recordRoutes.route("/widths").get(async function (req, response) {
let db_connect = dbo.getDb();

try {
    var records = await db_connect
    .collection("Widths")
    .find({})
    .toArray();
    response.json(records);
} catch (e) {
    console.log("An error occurred pulling the records. " + e);
}

});

 
module.exports = recordRoutes;