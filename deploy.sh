#!/usr/bin/env sh

set -e

vuepress build .

cd .vuepress/dist

git init
git add -A 
git commit -m 'deploy'

# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f https://github.com/luohu1/docs.git master:gh-pages

cd -
