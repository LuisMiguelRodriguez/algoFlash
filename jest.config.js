// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

// default options
const jsonreporter2Options = {
  outputDir : './server/tests/',
  outputFile : 'test-results.json', 
  fullOutput : true
}

module.exports = {

  rootDir: process.cwd(),
  
  clearMocks: true,

  coverageDirectory: "coverage",

  reporters: [['jest-json-reporter2', jsonreporter2Options]],

  // "reporters": [
  //   "default",
  //   ["./node_modules/jest-html-reporters", {
  //     "pageTitle": "Test Report"
  //   }]
  // ],

  testEnvironment: "node",

  
};
