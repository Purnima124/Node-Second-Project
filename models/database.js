const knex = require('knex')({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Purnima@123",
      database: "project2",
    },
  });
  
  // Create table
  function create_table() {
    knex.schema.hasTable("users").then(function (exists) {
      if (!exists) {
        console.log({ Success: `users table created successfully.` });
        return knex.schema.createTable("users", function (t) {
          // t.increments("id").primary(); 
          t.string("id",100)
          t.string("name",100)
          t.string("logo",100)
          t.string("notes",100)
          t.string("days_to_complete",100)
          t.string("short_description",100)
          t.string("type",100)
          t.string("course_type",100)
          t.string("lang_available",100)
          
        });
      } else {
        console.log({ Sorry: `users table already exist!` });
      }
    });
  }

create_table()

function insert_data() {
  knex.schema.hasTable("users").then(function (exists) {
    if (exists) {
      console.log({ Success: `data inserted into users table.` });
      return knex("users").insert({
        id: "53",
        name: "Understanding programming through recursion",
        logo: "http://bit.do/recursion-png",
        notes: null,
        days_to_complete: "45",
        short_description: "Iss course ko hum use kar kar recursions aur programming ki depth mei jayenge.",
        type: "html",
        course_type: null,
        lang_available: [
            "en"
        ]
      
      });
    } else {
      console.log({ Sorry: `users table not found` });
    }
  });
}
insert_data()  




