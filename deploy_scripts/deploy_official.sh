#!/bin/bash

# Custom deployment script for official http://canopy.link deployment.
# This script is specific to the canopy.link server and is not meant for
# general use.

# Wipes ~/www/canopy.link and related directories.
# Then copies the source files from ~/clones directory to appropriate location
# under ~/www directory.
#
# Deployment Process:
#
# 1) Sync the ~/clones/ directories to the commits you want deployed. (Typical,
# sync each repo to "origin stable").
#
# 2) Run this script: "./deploy_official.sh"
#

# Copy project webpage
rm -rf ~/www/canopy.link
mkdir ~/www/canopy.link
cp -r ~/clones/canopy-project/www/* ~/www/canopy.link

# Copy Web application, configuration & JS client
rm -rf ~/www/app.canopy.link
mkdir ~/www/app.canopy.link
cp -r ~/clones/canopy-app/* ~/www/app.canopy.link
cp -r ~/clones/canopy-js-client/canopy_client.js ~/www/app.canopy.link
cp -r ~/conf/canoweb.conf.js ~/www/app.canopy.link

