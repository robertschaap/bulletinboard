# Bulletin Board
A simple bulletin board where you can leave a message and which is populated dynamically from a database with pagination.

##### Technologies
HTML5 | CSS3 | JavasScript | Node.js | Express     
Pug | PostgreSQL | Sequelize

### Scope
##### What was designed to do
+ Be a simple bulletin board
+ Allow a user to post a message with title and pick an avatar
+ Test loading of comments through a 'more comments' button and using offset/limit parameters in Postgres

##### What it wasn't designed to do
- Manage sessions or users
- Upload a picture of your own

### Installation Notes
If you are looking to install this locally, please feel free to clone or download the repository. Modules are all included in the package.json but please note that you will need to have PostgreSQL installed locally as well. If you wish to use a different databse, the Sequelize dialect is specified in database.js on line 4. The sync portion from line 39 onwards in the same file is setup to force creation of the table and dummy values each time the app.js from the root folder is run.
