function objectFactory(library, orders) {
  const result = [];
  for (let i = 0; i < orders.length; i++) {
    
    const obj = orders[i].template;

    orders[i].parts.forEach((part) => {
      obj[part] = library[part];
    });
    console.log(obj);
    result.push(obj);
  }

  return result;
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};
const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];
const products = objectFactory(library, orders);
console.log(products);
