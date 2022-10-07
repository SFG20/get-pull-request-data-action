#!/bin/bash


# git add dist/*
git add *
# git tag -a -m "Release test" v1.2
git commit -m 'wip'
git push --follow-tags
