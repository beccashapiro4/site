# fish
 hey.

To Update On Cpanel:

1. Make a local change
2. in Terminal navigate to local repo and run 'npm run build'
3. Navigate to the local repo in Finder and find the 'build' folder. Copy and paste pretty much everything from there into the main folder, replacing all duplicates with their updated versions -- notable files to include here are: precacheMUMBOJUMONUMBERSTUFF.js, index.html, all the chunks, asset-manifest.json, serviceworker.js. Afterwards, delete empty build folder. --- NOTE: remember to delete the old 'assets' folder before replacing.
4. Push & Merge to GitHub master
5. Login to Bluehost
6. Navigate to ADVANCED on the right panel --> this segues to Cpanel
7. Scroll down to Git deploy --> select the appropriate repo, Pull & Deploy

To Run Locally: 'npm run start' (this will launch site on localhost)

To Stop Local Server: Control + C in Terminal


