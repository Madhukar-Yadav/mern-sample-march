# MongoDB Setup

> visit www.mongodb.com/dowload-center
> Download the setup file.
> Install it in the desired location.
> Now create 2 folders in that path with names "data" & "logs".
> Within the folder "data", create another folder named "db".
> Run CmdPrompt as admin.
> Choose the path where mongodb setup was installed.
> For example, the path should be something like this:
  "C:\XXX\MongoDB\"
> Now move inside bin folder "C:\XXX\MongoDB\bin"
> Here run this command
  "mongod --directoryperdb --dbpath C:\XXX\MongoDB\data\db --logpath C:\XXX\MongoDB\logs\mongo.log --logappend --install"
> Now run "net start MongoDB".
> run "mongo" within the bin directory, to run the scripts in mongo shell.
> if you need to clearscreen, run cls
> run "show dbs" tp display list of dbs.
> To create a new db with name MyUsers, run "use MyUsers"
> To know which db ur currently in run "db"
> To create a user and give him readWrite and Admin access to the db, run
    db.createUser({
      user:'xxx',
      pwd:'yyy',
      roles:[ "readWrite", "dbAdmin" ]
    });
> Collections are similar to Tables in RDS, so create a collection,
    db.createCollection('users')
> To see the list of collections in the db created,
    show collections
> 

### Redux Version
This version does not include Redux
[Click Here For Redux Version](https://github.com/bradtraversy/react_redux_express_starter) 

## Quick Start

``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## App Info

### Author
 
Brad Traversy
[Traversy Media](http://www.traversymedia.com)

### Version

1.0.0

### License

This project is licensed under the MIT License
