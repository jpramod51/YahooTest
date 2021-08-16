import { Config, Capabilities, browser } from "protractor";
//for html report
import * as reporter from "cucumber-html-reporter"

export let config:Config ={
directConnect:true,
framework:'custom',
frameworkPath:require.resolve("protractor-cucumber-framework"),

capabilities:{
    browserName: 'chrome'
 // browserName:'firefox'
},

//jasmineNodeOpts: {defaultTimeoutInterval: 10000},
specs: ['../Features/Test.feature'],

cucumberOpts: {
   require:'Features/Step_Definations/StepDef.js',
    //format: 'json:./cucumberreports.json',
    
},
};