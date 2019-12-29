'use strict';
var rn = require('random-number');

const randomNum = rn()

const hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!' + String(randomNum),
        input: event,
      },
      null,
      2
    ),
  };
}

module.exports.hello = hello

module.exports.second = async event => {
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
