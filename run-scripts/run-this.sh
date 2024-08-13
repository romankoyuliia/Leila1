#!/bin/bash
npx cucumber-js "src/test/features/**/*.feature" --config cucumber.json --require "src/test/features/**/_steps/**/*.ts" --tags '@runThis'