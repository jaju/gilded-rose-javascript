var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var gilded_rose = require('../src/gilded_rose');
var Item = gilded_rose.Item;
var update_quality = gilded_rose.update_quality;

describe("Gilded Rose", function() {

  describe("Item", function() {
    it("should devalue an item's quality by given value", function() {
      var item = new Item("Some item", 10, 10);
      gilded_rose.downgrade_item_quality(item, 1);
      expect(item.quality).to.equal(9);
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
