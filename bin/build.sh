#!/bin/bash

# Make a copy of the src files for use on the github pages
echo "   Copying src to /dist..."
rm -rf dist
mkdir -p dist
cp src/outlines.js dist/
cp src/Unistroke.js dist/
echo "   Done."
