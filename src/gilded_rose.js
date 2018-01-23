function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function downgrade_item_quality(item, value) {
  item.quality = item.quality - value
}

function upgrade_item_quality(item, value) {
  if (item.quality < 50)
    item.quality = item.quality + value;
}

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    var current_item = items[i];
    if (current_item.name != 'Aged Brie' && current_item.name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (current_item.quality > 0) {
        if (current_item.name != 'Sulfuras, Hand of Ragnaros') {
          downgrade_item_quality(current_item, 1);
        }
      }
    } else {
      if (current_item.quality < 50) {
        current_item.quality = current_item.quality + 1
        if (current_item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (current_item.sell_in < 11) {
            upgrade_item_quality(current_item, 1);
          }
          if (current_item.sell_in < 6) {
            upgrade_item_quality(current_item, 1);
          }
        }
      }
    }
    if (current_item.name != 'Sulfuras, Hand of Ragnaros') {
      current_item.sell_in = current_item.sell_in - 1;
    }
    if (current_item.sell_in < 0) {
      if (current_item.name != 'Aged Brie') {
        if (current_item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (current_item.quality > 0) {
            if (current_item.name != 'Sulfuras, Hand of Ragnaros') {
              downgrade_item_quality(current_item, 1);
            }
          }
        } else {
          current_item.quality = current_item.quality - current_item.quality
        }
      } else {
        upgrade_item_quality(current_item, 1);
      }
    }
  }
}

module.exports.Item = Item;
module.exports.downgrade_item_quality = downgrade_item_quality;
module.exports.upgrade_item_quality = upgrade_item_quality;
module.exports.update_quality = update_quality;
