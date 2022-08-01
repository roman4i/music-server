# Music server

This is the web player project. Put your music to server (to music folder) and listen it from different devices in your local network.

## Content

 1. [Scripts](#scripts)
 2. [Server](#server)
 3. [Front-end](#front-end)
 4. [ToDo](#todo)
 5. [Screenshots](#screenshots)

 ## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run local-server`

Runs the local server.   
Open  http://localhost:3001 to work with app.   

## Server
Server built on Node JS. As web server used Express.
For convenience added CORS (using server in development mode with different addresses).
Files processing made by fs library.

### First start
At first start you must run the `node server/utils/addMusicFolder.js` to create music folder (or create it by yourself in the server folder), next add your music to this folder. After that you can run the server.    
Will be created music-list.txt with songs list. Here you can change song name.

## Front-end
Front-end built with React and TypeScript    
Songs list is getting by API from server, certain song is taken by API for single song (by id in songs list).
Duration is getting from instance of audio player (HTML 5 audio player). Player controlling going through HTML 5 audio player API (getting element by id and calling needed metods)

## ToDo

- Remake song data getting metod. Be better to make data on back-end (getting by html5 audio need too much requests)
- Fix displaying of big number of songs. Thewe are two ways for that:    
    1. Display fixed number of songs and fix songs box size (must be adaptive with scrolling)
    2. Add scrolling for songs box with adaptive height (render speed be lower)

## Screenshots
Interface on mobile device:  
![mobile](./screenshots/photo_2022-07-31_11-19-09.jpg)
