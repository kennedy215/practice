function ninjaConstructor(name, cohort){
  if(!(this instanceof ninjaConstructor)){
    return new ninjaConstructor(name, cohort);
  }
  //private
  //var ninja = {}
  var belts = ["yellow", "red", "black"]
  var self = this;
  this.name = name;
  this.cohort = cohort;
  this.beltLevel = 0;
  this.levelUp = function(){
    if (this.beltLevel < 2){
      this.beltLevel += 1;
      this.belt = belts[this.beltLevel];
    }
    return this
  }
  this.belt = belts[this.beltLevel];
  return this;
}
