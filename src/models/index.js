'use strict';

import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import process from 'process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as pg from 'pg';

// Untuk ESM, __dirname tidak tersedia, jadi kita mendapatkannya
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// Jalur ke config.js yang baru (akan berada di src/config/config.js)
import appConfig from '../config/config.js'; 
const config = appConfig[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], { ...config, dialectModule: pg });
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, { ...config, dialectModule: pg });
}

// Membaca model secara dinamis
// Mengubah ini menjadi async karena import() adalah async
const files = fs.readdirSync(__dirname).filter(file => {
  return (
    file.indexOf('.') !== 0 &&
    file !== basename &&
    file.slice(-3) === '.js' &&
    file.indexOf('.test.js') === -1
  );
});

for (const file of files) {
  const modelModule = await import(path.join(__dirname, file));
  const model = modelModule.default(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
