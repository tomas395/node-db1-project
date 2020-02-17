const express = require("express");

// database access using knex
const db = require("../data/dbConfig");

const router = express.Router();

// Start of CRUD operations

router.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .then(accountData => {
      res.status(200).json(accountData);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ error: "There was a problem retrieving all of the accounts." });
    });
});

router.get("/:id", (req, res) => {
  db.select("*")
    .from("accounts")
    .where("id", req.params.id)
    .first()
    .then(account => {
      res.status(200).json(account);
    })
    .catch(err => {
      console.log(err);

      res.status(500).json({
        error: "There was a problem retrieving the account by the ID."
      });
    });
});

router.post("/", (req, res) => {
  db.insert(req.body, "id")
    .into("accounts")
    .then(accountID => {
      res.status(200).json(accountID);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: "There was a problem adding to the account."
      });
    });
});

router.put("/:id", (req, res) => {
  db("accounts")
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was a problem updating the account."
      });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db("accounts")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json({
        error: "There was a problem deleting the account."
      });
    });
});

module.exports = router;

// function getById(id) {
//     return db("posts")
//       .where({ id })
//       .first();
//   }
