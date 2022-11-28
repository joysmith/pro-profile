> PARADIGM: "Open Book Exam" aka Reference module-docs mentality

# Project setup

1. Go to desktop and create a project folder
2. open project folder with vs-code editor
3. open terminal and create react app for front end

```
  npx create-react-app client
  cd my-app
  npm start

```

4. go to index.html and edit the following tags

```
<meta

      content="My personal portfolio which features some of my github projects as well as my resume and technical skills."
    />

<title>Joy smith peter</title>

```

5. doing the clean up process inside src folder

- App.test.js, logo.svg, setupTest.js remove these files

- open App.js component inside src folder and remove this line

```
  import logo from './logo.svg';
```

- also remove opening and closing header-tags
- make the App component look like this
- <img src="image%20notes/2%20App%20component.png" width="700">

6. How to organize the front-end

- create following folder inside src folder
- <img src="image%20notes/1%20organization.png" width="700">

7. inside Home-folder create Profile.js, Profile.css

- type rfc inside Profile.js to generate boilerplate

```
  rfc
```

8. open index.html in public-folder and add bootstrap cdn

```
    <link
    rel="stylesheet"
    type="text/css"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  />

  <link
    rel="stylesheet"
    type="text/css"
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <link
    href="//db.onlinewebfonts.com/c/157c6cc36dd65b1b2adc9e7f3329c761?family=Amazon+Ember"
    rel="stylesheet"
    type="text/css"
  />

```

9.  How to use [request module ](https://www.npmjs.com/package/request) ?
    <br>
    <br>
