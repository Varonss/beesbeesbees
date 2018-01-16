var RetiredForagerBee = function() {
    ForagerBee.call(this);
    this.age = 40;
    this.job = "gamble";
    this.canFly = false;
    this.color = "grey"
    this.treasureChest = [];
  };
  ForagerBee.prototype.eat = function (){};
  ForagerBee.prototype.forage = function(treasure){
    returns "I am too old, let me play cards instead";
  };
  ForagerBee.prototype.gamble = function(){
    this.treasureChest.push();
