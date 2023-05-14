const express = require('express');
const { create, read, removeTodo } = require('../controller');
const router = express.Router();

router.get('/todo/create', create);
router.get('/todos', read);
router.get('/todo/:id', removeTodo);

module.exports = router;
