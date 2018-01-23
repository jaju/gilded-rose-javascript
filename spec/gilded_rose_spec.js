var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var gilded_rose = require('../src/gilded_rose');
var Item = gilded_rose.Item;
var items = gilded_rose.items;
var update_quality = gilded_rose.update_quality;

describe("Gilded Rose Characterization (Pindown) tests", function(){
  it("Start with 6 items initially", function(){
    assert(items.length,6);
  });
  it("After 1 day, Vest quality goes down by 1", function(){
    var vest = items[0];
    assert.equal(vest.name, "+5 Dexterity Vest");
    assert.equal(vest.quality, 20);
    gilded_rose.update_quality();
    assert.equal(vest.quality, 19);
    gilded_rose.update_quality();
    assert.equal(vest.quality, 18);
  });
});

describe("Gilded Rose", function() {

  describe("Item", function() {
    it("should devalue an item's quality by given value", function() {
      var item = new Item("Some item", 10, 10);
      gilded_rose.downgrade_item_quality(item, 1);
      expect(item.quality).to.equal(9);
    });
    
    it("should NOT devalue an item's quality when quality is 0", function() {
      var item = new Item("Some item", 10, 0);
      gilded_rose.downgrade_item_quality(item, 1);
      expect(item.quality).to.equal(0);
    });
    
    it("should increase an item's quality by given value", function() {
      var item = new Item("Some item", 10, 10);
      gilded_rose.upgrade_item_quality(item, 10);
      expect(item.quality).to.equal(20);
    });
  
    it("should NOT increase an item's quality if quality is over 50", function() {
      var item = new Item("Some item", 10, 50);
      gilded_rose.upgrade_item_quality(item, 10);
      expect(item.quality).to.equal(50);
    });
  
  });
  
});
