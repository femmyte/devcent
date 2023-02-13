#!/bin/bash

echo "Enter commit message:"
read commitMessage

echo "Enter list of modified files:"
read fileList

git add .
git commit -m "$commitMessage" -m "$fileList"
git push
