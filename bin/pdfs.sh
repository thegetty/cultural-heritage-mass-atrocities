#!/bin/bash

# This script produces individual PDFs of each page,
# based on a list of pages that is generated by the
# layouts/data/pdf-generation template in Hugo.
#
# Add `pdf_dowload: false` to the page YAML of any page that
# should not be included.
#
# IMPORTANT: `quire preview` must be running for this script to work.
# And `pdf: true` must be set in config.yml

previewURL=http://localhost:1313/
outputDirectory=static/downloads/pages/
baseName=CunoWeiss_CHMA

# FIRST DO A SPECIAL SET OF TRANSLATED TOCs

TRANSLATIONS=(
contents-ar
contents-zh
contents-en
contents-fr
contents-ru
contents-es
)

for page in "${TRANSLATIONS[@]}"
do

url=$previewURL$page"/"
file=$outputDirectory$baseName"_"$page".pdf"

prince $url --style=bin/pdfs/overrides.css --no-warn-css -o $file

done

# NEXT CREATE ALL THE INDIVIDUAL PAGES PDFs

declare -a PAGES

IFS=$'\r\n' GLOBIGNORE='*' command eval 'PAGES=($(curl http://localhost:1313/pdf-generation.txt))'

for page in "${PAGES[@]}"
do

url=$previewURL$page"/"
file=$outputDirectory$baseName"_"${page//\//-}".pdf"

prince $url --style=bin/pdfs/overrides.css --no-warn-css -o $file

done




