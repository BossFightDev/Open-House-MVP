const express = require('express');
const server = express();
const mongoose = require('mongoose');
const request = require('request-promise')
const fs = require('fs');

const options = {
  method: 'GET',
  uri: 'https://risingstack.com'
}