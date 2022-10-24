// const express = require('express')
import express from 'express';
const router = express.Router();
// const newsController = require('../app/controllers/NewsController.js')
import siteController from '../app/controllers/SiteController.js';

router.get('/search', siteController.search);
// cai / phai nam cuoi cung
router.get('/', siteController.index);

export default router;
