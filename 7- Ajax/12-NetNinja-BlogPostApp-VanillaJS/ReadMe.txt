The reason I put the database and the source files
in separate directories is the following:
Initially, I had the "data" directory under the "src"
directory. Then I ran json-server and also started
the VSCode live server with the HTML file.
I observed the following: Each time I post a new item
to json-server, it updates the database file (db.json),
which triggers a re-load of index.html because VSCode live
server sees a change in data/db.json!
In order to prevent this, I had to move data/db.json
to a separate directory that is NOT a sub-directory of src.