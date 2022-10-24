// const express = require('express')
import express from 'express';
const router = express.Router();
// const newsController = require('../app/controllers/NewsController.js')
import newsController from '../app/controllers/NewsController.js';

router.get('/:slug', newsController.show);
// cai / phai nam cuoi cung
router.get('/', newsController.index);

export default router;
