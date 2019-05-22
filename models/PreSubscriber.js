const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const preSubscriber = new mongoose.Schema({
  email: { type: String, unique: true }
}, { timestamps: true });

const PreSubcriber = mongoose.model('PreSubcriber', preSubscriber);

module.exports = PreSubcriber;