funtion sandi (){
  var users = {
   'Students': [
       {first_name:  'Michael', last_name : 'Jordan'},
       {first_name : 'John', last_name : 'Rosales'},
       {first_name : 'Mark', last_name : 'Guillen'},
       {first_name : 'KB', last_name : 'Tonel'}
    ],
   'Instructors': [
       {first_name : 'Michael', last_name : 'Choi'},
       {first_name : 'Martin', last_name : 'Puryear'}
    ]
   }
   // Print number of student
   // Print Number of Instructors
   // Print Number of letters in the name " string "



for(var i = 0; i<Students.length; i++){
    console.log((i+1)+" - "+users.Students[i].first_name+" "+users.Students[i].last_name+)" - "+(users.Students[i].first_name.length+users.Students[i].last_name.length));
    // console.log((students[i].first_name) + " " + (students[i].last_name));
    }
  //  for(var i = 0; i<students.length; i++){
  //   console.log(students[i]["first_name"] + " " + students[i]["last_name"]);
  //   // console.log((students[i].first_name) + " " + (students[i].last_name));
  //   }
}


sandi ();
