// Constructor
function Foo(bar) {
  // always initialize all instance properties
  this.bar = bar;
  this.baz = 'baz'; // default value
}
// class methods
Foo.prototype.fooBar = function() {
  return this.bar;
};
// export the class
module.exports = Foo;