const express = require("express");
const router = express.Router();
const connection = require("../db");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM careers", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  connection.query("SELECT * FROM careers WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Career not found" });
    }
    res.json(results[0]);
  });
});

router.post("/", (req, res) => {
  const { title, description } = req.body;
  connection.query("INSERT INTO careers (title, description) VALUES (?, ?)", [title, description], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(201).json({ id: results.insertId, title, description });
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  connection.query("UPDATE careers SET title = ?, description = ? WHERE id = ?", [title, description, id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ message: "Career updated successfully" });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  connection.query("DELETE FROM careers WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ message: "Career deleted successfully" });
  });
});

module.exports = router;