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
npm install react-router
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
git init (Create an empty Git REPO or reinitialize an existing one)
git remote add origin (REPO link)
git remote -v
git branch -M main
git status
git pull --allow-unrelated-histories origin main
```
#### Method 2
```
git clone (REPO link)
```

#### Making changes and syncing with GitHub (MAKE_NEW_FILE)
```
git add .
git commit -m "add file FILENAME"
git push -u origin main
```