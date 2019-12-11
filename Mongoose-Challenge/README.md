# [Challenge] 1209 Express Server CRUD - Mongoose
##### Link: https://coderacademyedu.github.io/resources/unit_mongoose.html

---
### Initial Setting

```javascript
$ mkdir Mongoose-Challenge
// You can't name your node project the same as the dependencies, i.e. can't name your project as 'mongoose'
$ cd Mongoose-Challenge

$ npm init -y
$ touch app.js 
//Copy code inside 'app.js': https://coderacademyedu.github.io/resources/server-with-mongoose.js

$ npm install --save express body-parser mongoose
//Based on code inside 'app.js', we need to install the above packages

$ npm install --save-dev nodemon forever
// Also need to install dev dependencies

$ touch .gitignore 
// write 'node_modules' inside '.gitignore'
```

package.json
```javascript
  "main": "app.js", //change from 'index.js' to 'app.js'

    "scripts": {
    "server": "forever -c \"nodemon --exitcrash -L\" app.js"
    }, //save our from restarting server & program crashing
```

- terminal: Need to run 'mongod' in one window before run server with 'npm run server' in another window
---

### Challenge
- Continue building out the portfolio from our lesson. Need a copy of the code?
1. Build a basic contact form to post data to our web server. GET /contact should show a contact form. Keep it ugly, we'll style later.
```
to-do
```
2. Create an /enquiries page which lists all of the enquires.
### Beast Mode
1. Create a show page for enquiries. E.g. /enquiries/:id should show a specific enquiry.
2. Add a 'delete' button to each enquiry.
3. Use CSS to improve the look of the contact form.
### Beast Mode++
1. Password protect the /enquires page.
