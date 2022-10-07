#!/bin/bash


ncc build index.js --license licenses.txt
git add dist/index.js
git add dist/licences.txt
git add *
git commit -m 'WIP'
git tag -a -f -m "Release test" v1.0
git push --follow-tags
