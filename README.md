## Music server

This is the web player project. Put your music to server  and listen it from different devices in your local network.

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
At first start you must run the `node server/utils/addMusicFolder.js` to create music folder (or create it by yourself in the server folder). Next make build. After that you can run the server.    

### Database
Server uses MongoDB to store the data (songs names and metadata). You need to have it on your computer for using the server.

## Front-end
Front-end built with React and TypeScript    
All data sending by API. 

### Uploading
Music files can be uploaded using uploading interface.   
Press to menu icon, choose Upload item, next press button "Choose files" and select needed files. Next you will see the list of chosen files in area above "Choose files" button, here can be removed songs by pressing "Delete" button. Press "Reset" button to reset selection. To upload files press "Upload" button.

### Songs List
All songs can be seen at the Songs list page. To open it press menu and Songs List item. Here you can delete songs (by pressing "Delete" button) or edit name (press "Edit" button, edit name and press "Save" or "Cancel").


## ToDo

- Send a certain number of songs by one request (now server sends all songs) 

## Screenshots
Interface on mobile device:  
![mobile](./screenshots/photo_2022-07-31_11-19-09.jpg)
