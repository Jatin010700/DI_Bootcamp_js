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