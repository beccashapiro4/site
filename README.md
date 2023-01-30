# fish
 hey.

To Update On Cpanel:

1. Make a local change
2. in Terminal navigate to local repo and run 'npm build' followed by 'npm run start' (this will launch site on localhost)
3. (optionally) stop local server by pressing Control + C in Terminal
4. Navigate to the local repo in Finder and find the 'build' folder. Copy and paste pretty much everything from there into the main folder, replacing all duplicates with their updated versions -- notable files to include here are: precacheMUMBOJUMONUMBERSTUFF.js, index.html, all the chunks, asset-manifest.json
5. Push & Merge to GitHub master
6. Login to Bluehost
7. Navigate to ADVANCED on the right panel --> this segues to Cpanel
8. Scroll down to Git deploy --> select the appropriate repo, Pull & Deploy
