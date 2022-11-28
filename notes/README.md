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

- <img src="image%20notes/2%20App%20component.png" width="700">

7.  How and where to read api config<br>

- [apiKey ](https://www.themoviedb.org/) = "1fb720b97cc13e580c2c35e1138f90f8";
- apiBaseUrl = "http://api.themoviedb.org/3";
- [nowPlayingUrl ](https://developers.themoviedb.org/3/movies/get-now-playing) = `${apiBaseUrl}/most_popular?api_key=${apiKey}`;
- [imageBaseUrl](https://developers.themoviedb.org/3/configuration/get-api-configuration) = "http://image.tmdb.org/t/p/w300";
  <br>
  <br>

# Adding the request module

3. How to use [request module ](https://www.npmjs.com/package/request) ?
   <br>
   <br>

4. request.get takes 2 args:

- 1. it takes the URL to http "get"
- 2. the callback to run when the http response is back. 3 args:

  - 1. error (if any)
  - 2. http response
  - 3.  json/data the server sent back

            request.get( nowPlayingUrl, ( error, response, movieData ) => {}

        <br>
        <br>

5.  How to convert received http string message into JSON schema by [JSON.parse()](https://www.w3schools.com/js/js_json_parse.asp)

```
  const parsedData = JSON.parse(movieData);
```

    <br>
    <br>

# Putting data into template

6. How to read json schema object on browser-localhost to accessing object and use it like Rob did, instead on terminal

- video 39, time 09:00

```
  const parsedData = JSON.parse(movieData);
  // send the json to browser for
  res.json(parsedData)
```

  <br>
  <br>

7. How to make autimatically availabe the imageBaseUrl in all path in router

- we do it by using router.use() middleware, and then we add it to res.locals

```
  // Make available this imageBaseUrl to all paths
  router.use((req, res, next) => {
    // add imageBaseUrl to res.local so it will available in all path
    res.locals.imageBaseUrl = imageBaseUrl;
    next();
  });

```

- [My Space](https://myspace.com/discover/featured)
- [Wikipedia](https://en.wikipedia.org/wiki/Express.js)
  <br>

  <img src="image%20notes/6%20my%20space.png" width="700">
  <br>
  <br>

# Notice

- Include head means, go and fetch this partial, it'll be just like taking this copying and pasting it right here in place of include head ejs -like Rob done it while explaining (video no 37, time-8:15)
