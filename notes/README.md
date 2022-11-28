> PARADIGM: "Open Book Exam" aka Reference module-docs mentality

How to use [request module ](https://www.npmjs.com/package/request) ?
<br>
<br>

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

# Project organization

1. How to organize the front-end

- create following folder inside src folder
- <img src="image%20notes/1%20organization.png" width="700">

2. inside Home-folder create Profile.js, Profile.css

- type rfc inside Profile.js to generate boilerplate

```
  rfc
```

# Adding social media icon

1. open index.html in public-folder and add bootstrap cdn

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

2. How to add social icon like

- <img src="image%20notes/3%20social%20icon.png" width="700">

```
import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            {/***** SOCIAL MEDIA ICON CONTAINER-colz *****/}
            <div className="colz-icon">
              <a href="https://web.facebook.com/?_rdc=1&_rdr">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://www.instagram.com/instructor_ehizeex/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://twitter.com/Ehiedu_baba">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

```

- <img src="image%20notes/4%20after%20adding%20code.png" width="700">

3. import Profile.js component and add the component

```
import "./App.css";
import "./PortfolioContainer/Home/Profile";
import Profile from "./PortfolioContainer/Home/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;

```

# Type effect, short desc, buttons

1.

- <img src="gif/1%20type%20effect.gif" width="700">
- <img src="gif/2%20result.gif" width="700">
