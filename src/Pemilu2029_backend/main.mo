actor {
  var elec1 : Int = 0;
  var elec2 : Int = 0;

  public func vote(n : Int) : async Int {
    if (n == 1){
      elec1 += 1;
    }
    else {
      elec2 += 1;
    }
  };
  public query func get (n : Int) async Int{
    if (n == 1){
      return elec1;
    }
    else {
      return elec2;
  }
};
