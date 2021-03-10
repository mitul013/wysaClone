# wysaClone

This is a user login and registration app using Node.js, Express, Passport, Mongoose, EJS and some other packages.

### SetUp in Your Machine

For installing all dependncies which mention in package.json file 

```sh
$ npm install
```

### Run 

For development purpose

```sh
$ npm run dev
```

For production 

```sh
$ npm start
```

### Visit http://localhost:5006

Create .env file and add MONGO_URI = 'your mongodb database uri'


### About wysa clone
<<<<<<< HEAD
when you download sleep wysa app it will ask you five question about you sleeping cycle and then base upon your answers it wiil tell your sleep efficiency
=======
when you download sleep wysa app it will ask you five question about you sleeping cycle and then base upon your answers it wiil tell your sleep efficiency

## Rest API

### .get('/')
this route render to welcome page of wysa where you have two option Register and Login

### .get('/users/register')
this route render to register page where you can register your self.

### .post('/users/register')
this route send all the data which you fill in register form and server store into the database and you will redirect to the login page

### .get('/users/login')
this route render to login page where you can write your email and password and login to website

### .post('/users/login')
In backend it create JWT token and using local passport create local strategy and create serialize and deserialize methods so you can access JWT token in req object and redirect to '/questions'

### .get('/questions',ensureAuthenticated) & .post('/questions',ensureAuthenticated)
As per wysa app, you need to give all five question answers then you will get result, if you left before completing fifth question then you need to give answers again from starting.

So  I have created only one endpoint for all question , let me explain more in front end i have created one form and i that for i have created that five questions so when you 
submit that fifth question form will submited and all the answers store in user in the databse and red=nder 'users/result' and pass the result percentage to ejs file

'ensureAuthenticated' is middleware's function which check user is authenticated or not if not then automatically redirect to login page else continue

### .get('users/result')
it will show your result which passed by /qoestions route

## CORS
In the app.js file we pass middleware 'CORS' for cross origion resource sharing app.use(cors(corsOptions)) where corsOption is options for CORS in which include different origin which we want to allow out APTs. this will helpfull if our front end run on dfferent server & backend run on different.

## Pre-flight
for deleting user route i have created pre-flight request using .option('/') method

## mongoose schema
I have created two schema for the app

### questionSchema
this schema have five field . each field for answer of each questions

### userSchema
this schema has name, password, date, and questionschema which we have created for store answers so basically I have use nested schema feature of mongoose.

>>>>>>> 8e123c6076670a666c83d27cfa2d5317f51f011c
