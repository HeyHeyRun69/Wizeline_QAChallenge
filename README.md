# Project Description
This project is mean't to be used as a submission to the Wizeline QA Mobile Automation Offline interview

## Stack
- WebdriverIO
- Jasmine
- Typescript

## Installation
Run ```npm install```
Make sure you have ```Android Studio``` installed

## Script Execution
Use ```npm run test``` in order to execute tests located in [the specs folder](/test/specs)

Make sure to verify the [capabilities](wdio.conf.ts#L63) section

Open the emulator before local execution is performed, else the script won't execute.

## POs
All POs can be found in the [index.ts file](test/pageobjects/index.ts)
