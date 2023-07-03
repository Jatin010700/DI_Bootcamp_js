# **NOTES:**
## Google Fonts

```
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
```

#### css:
```
font-family: 'Poppins', sans-serif;
```
***
## REACT

```
npx create-react-app (filename)

cd (filename)

npm start
```

### React Router
```
npm i react-router-dom
```

#### Add Into Index.js
```
import { BrowserRouter } from "react-router-dom"; 

<BrowserRouter>
      <App />
</BrowserRouter>
```

### Redux
```
npm install --save redux react-redux
```
***


## NODE.JS

```
npm init   (install a packageJSON)

npm install --save-dev nodemon

npm start  (it will call the “start” key of the json file)

npm install express

npm install body-parser

npm install knex

npm install bcrypt

npm install pg (Install PostgreSQL)
```
***

## DATABASE

```
Create Database: CREATE DATABASE (database_name);

Show Existing Databases: \l

Switch to another database: \c (database_name)

Show Tables: \d

Show Tables in current database : \dt
```
***

## GIT Commands
#### Method 1
```
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Jatin010700/test.git
git push -u origin main
git status
git pull --allow-unrelated-histories origin main
```
#### Method 2
```
git clone (REPO link)
clone REPO in VS Code (copy_paste REPO Link)
```

#### Making changes and syncing with GitHub (MAKE_NEW_FILE)
```
git remote add origin https://github.com/Jatin010700/test.git
git branch -M main
git push -u origin main
```
***
## Deployment 
```
Create front-end REPO
Create back-end REPO

npm install ALL DEPENDENCY (npm i)

Deploy both

Create Database on RENDER

link database external

add process.env

add back-end link when fetching
```
***
## Media Queries
```
/* (320x480) iPhone (Original, 3G, 3GS) */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    /* insert styles here */
}
 
/* (320x480) Smartphone, Portrait */
@media only screen and (device-width: 320px) and (orientation: portrait) {
    /* insert styles here */
}
 
/* (320x480) Smartphone, Landscape */
@media only screen and (device-width: 480px) and (orientation: landscape) {
    /* insert styles here */
}
 
/* (480x800) Android */
@media only screen and (min-device-width: 480px) and (max-device-width: 800px) {
    /* insert styles here */
}
 
/* (640x960) iPhone 4 & 4S */
@media only screen and (min-device-width: 640px) and (max-device-width: 960px) {
    /* insert styles here */
}
 
/* (720x1280) Galaxy Nexus, WXGA */
@media only screen and (min-device-width: 720px) and (max-device-width: 1280px) {
    /* insert styles here */
}
 
/* (720x1280) Galaxy Nexus, Landscape */
@media only screen and (min-device-width: 720px) and (max-device-width: 1280px) and (orientation: landscape) {
    /* insert styles here */
}
 
/* (1024x768) iPad 1 & 2, XGA */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    /* insert styles here */
}
 
/* (768x1024) iPad 1 & 2, Portrait */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    /* insert styles here */
}
 
/* (1024x768) iPad 1 & 2, Landscape */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    /* insert styles here */
}
 
/* (2048x1536) iPad 3 */
@media only screen and (min-device-width: 1536px) and (max-device-width: 2048px) {
    /* insert styles here */
}
 
/* (1280x720) Galaxy Note 2, WXGA */
@media only screen and (min-device-width: 720px) and (max-device-width: 1280px) {
    /* insert styles here */
}
 
/* (1366x768) WXGA Display */
@media  screen and (max-width: 1366px) {
    /* insert styles here */
}
 
/* (1280x1024) SXGA Display */
@media  screen and (max-width: 1280px) {
    /* insert styles here */
}
 
/* (1440x900) WXGA+ Display */
@media  screen and (max-width: 1440px) {
    /* insert styles here */
}
 
/* (1680x1050) WSXGA+ Display */
@media  screen and (max-width: 1680px) {
    /* insert styles here */
}
 
/* (1920x1080) Full HD Display */
@media  screen and (max-width: 1920px) {
    /* insert styles here */
}
 
/* (1600x900) HD+ Display */
@media  screen and (max-width: 1600px) {
    /* insert styles here */
}
```