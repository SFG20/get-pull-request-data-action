#!/bin/bash


ncc build index.js --license licenses.txt
git add dist/index.js
git add dist/licences.txt
git add *
git tag -a -f -m "Release test" v1.0
git commit -m 'WIP'
git push --follow-tags
