/*
 ** Minimal Express server
 ** Import common code from the crale-common package
 */

import express from 'express';
import Commons from 'crale-commons';

const { models } = Commons;
const { User } = models;

const you = new User('ganzf', 26);
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send(`Hello ${you}`));

app.listen(port, () => console.log(`Example app listening on port ${port} for user ${you}!`));
