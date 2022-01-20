#!/bin/bash

previewURL=http://localhost:1313/
outputDirectory=static/downloads/pages/
baseName=cultural-heritage-mass-atrocities

TRANSLATIONS=(
contents-ar
contents-zh
contents-fr
contents-ru
contents-es
)

for page in "${TRANSLATIONS[@]}"
do

url=$previewURL$page"/"
file=$outputDirectory$baseName"--"$page".pdf"

prince $url --style=bin/pdfs/overrides.css --no-warn-css -o $file

done
