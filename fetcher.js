const URL = process.argv[2];
const PATH = process.argv[3];
const fs = require("fs");
const request = require('request');

request(URL, (error, response, body) => {
  // console.log(response.headers);
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log(); // Print the HTML for the Google homepage.
  fs.writeFile(PATH, body, (error) => {
    let fileSize = getFilesizeInBytes(PATH);
    if (!error) {
      console.log(`Downloaded and saved ${fileSize} bytes to ${PATH}`);
    }
  });
});

const getFilesizeInBytes = function(filename) {
  let stats = fs.statSync(filename);
  let fileSizeInBytes = stats.size;
  return fileSizeInBytes;
};