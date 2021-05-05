#!/usr/bin/bash

rm release -rf

cp -r ./build ./release
cd release
sed -i -- 's/console\.log/println/g' ./*.js
sed -i -- 's/createCanvas/\/\/\ createCanvas/g' ./*.js
sed -ri -- 's/[^\.]push/pushMatrix/g' ./*.js
sed -ri -- 's/[^\.]pop/popMatrix/g' ./*.js
sed -ri -- 's/print[^l]\s*?/println\(/g' ./*.js
sed -ri -- 's/new\s*?Array\s*?\(\)/new\ Array\(0\)/g' ./*.js
sed -i -- 's/createVector/new\ PVector/g' ./*.js
sed -i -- 's/function\sdraw/\nsetup\(\);\nfunction\ draw/g' ./*.js