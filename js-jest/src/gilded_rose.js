class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name !== "Sulfuras") {
        if (
          this.items[i].sellIn < 0 &&
          this.items[i].quality >= 0 &&
          this.items[i].name !== "Aged Brie"
        ) {
          if (this.items[i].name === "Conjured") {
            this.items[i].quality = this.items[i].quality / 4;
          } else {
            this.items[i].quality = this.items[i].quality / 2;
          }
          if (this.items[i].quality > 50) {
            this.items[i].quality = 50;
          }
        } else {
          if (
            this.items[i].sellIn < 0 &&
            this.items[i].name === "Backstage passes"
          ) {
            this.items[i].quality = 0;
          } else {
            if (this.items[i].sellIn < 6) {
              this.items[i].quality = this.items[i].quality + 3;
            }
            if (this.items[i].sellIn < 11 && !this.items[i].sellIn < 6) {
              this.items[i].quality = this.items[i].quality + 2;
            }
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
