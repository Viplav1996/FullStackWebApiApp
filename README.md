# FullStackWebApiApp
A full satck app using NodeJS, npm package, mongoose database, and other similar tools


Client to Server and Server to client communication using API

Data Being stored in MongoDB side by side,


Process to run the file is:

Run mongod,
Run mongo
Run server.js

got to postman to create requests:
    first make post request: by typing=> http://localhost:3000/product
    then select the body, select raw, and then select JSON format to do the further task
    now data is  set to be uploaded,
    send post, and keep on formatting the title and the price and it will update the information in DB
    also the data will be permamently stored in the DB
    this could be checked by going to your local browser and implementing this command: http://localhost:3000/product
    after pressing enter, the data will appear in JSON format, staing that data is going to the server and then again coming back to us.
