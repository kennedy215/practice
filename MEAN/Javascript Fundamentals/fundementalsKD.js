var person = {
  name : "Ken",
  distance_traveled : 0,
  say_name : function(){
    console.log(person.name);
  },
  say_something : function(phrase){
    console.log(`${person.name} says: ${phrase}`);
  },
  walk : function(){
    console.log(`${person.name} is walking!`);
    person.distance_traveled += 3;
    return person;
  },
  run : function(){
    console.log(`${person.name} is running!`);
    person.distance_traveled += 10;
    return person;
  },
  crawl : function(){
    console.log(`${person.name} is crawling!`);
    person.distance_traveled += 1;
    return person;
  },
}

person.walk().crawl(); // why can I do this?
// but not this:
// person.chewgum().walk();


// var person {
//   name : "Ken",
//   distance_traveled : 0,
//   say_name : function(){
//     console.log(person.name);
//   },
//   say_something : function(phrase){
//     console.log('${person.name} says: ${phrase}');
//   },
//   walk : function(){
//     console.log('${person.name} is walking!');
//     person.distance_traveled += 3;
//   },
//   run : function(){
//     console.log('${person.name} is running!');
//   },
//   crawl : function(){
//     console.log('${person.name} is crawling!)';
//     person.distance_traveled += 1;
//   }
// }
//
// person.say_something("I love javascript")
