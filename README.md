# Mern-crud-assignment-task
MERN CRUD Application assignemnt task  


This is a todo CRUD (Create, Read, Edit, Delete) application built using the MERN stack (Mongo DB, Express.js, React.js and Node.js). This is a single page application. All existing todos are displayed on the home page. From there you can either create a new todo, edit an existing todo, or delete an exiting todo and there is a search field by which you can search specific data. All data are stored in a MongoDB database connected through Mongoose. There is also validation put in place to stop users from submitting or editing a todo without filling in all the required fields and without matching the requirement of the fields. 

How to use this application >

After opening this app you will redirect to login page if you don't have account you can create just switching to signup page by clicking on signup tag // Authentication system is fully secured with jwt.

After loging with your valid credential you will redirect to home page where you can see the lsit of data and top of there is add button by clicking it you can add a new todo/data and left side there is a search filter which will help you to search data by name and postion.

in the every data field/table there is two icon/button Edit and Delete by clicking on the edit icon you can edit a existing data and by clicking on delete icon you can delete data.



This is application is divied into two major part based on technologies 
1. Frontend Part
2. Backendend Part

1. Frontend Part

Frontend is created in react.js with the help of bootsrtap.This is a single page application in this projects i used some npm packages like react tostify and react-router-dom and there many components like navbar, home and more are listed.
1. Navbar Component
2. Home Component
   > AddForm Component
   > EditForm Components
   > MiddleComponent
3. Authentication Component
   > LoginForm Component
   > SignupForm Components

All components are integrated with backend api and working properly

2. backend Part

Backend is build with the help of Node.js , Express.js and MongoDb and using many npm packages like cors , dotenv , express-validator for validation and eror handling ,jsonwebtoken for security.
In the backend there sevelers model ,controllers and api and one middleware to perform crud operation and auhtentication. all are listed below.

1. Api / routes 
   1. '/createuser' POST api to craete a todo / data.
   2. '/getusers'  GET api to get all todo / data.
   3. '/getuser/:id' GET api to get specific todo / data.
   4. '/updateuser/:id' PATCH api to edit a todo / data.
   5. '/deleteuser/:id'  DELETE api to delete a todo / data.
   6. '/createaccount'  POST api to craete a user.
   7. '/login' this is a to login a user.

2. Controller.
   1. 'userDataController' for '/createuser '
   2. 'getDataController' for '/getusers'
   3. 'updateUserData' for '/getuser/:id' , '/updateuser/:id'  , 
   4. 'deleteUserData' for '/deleteuser/:id' 
   5. 'signupController' for '/createaccount' 
   6. 'loginController' for '/login'

3. Model 
   1. authSchema 
   userDataSchema.

4. Middlewares
   1.  jwtMiddleWare