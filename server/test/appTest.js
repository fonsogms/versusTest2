const assert = require("chai").assert;
const index = require("../index");

describe("App", function() {
  it("app should return hello", function() {
    assert.equal(index(), "hello");
  });
});
