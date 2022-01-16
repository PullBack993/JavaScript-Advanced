function HeroInventory(input) {
  let result = [];
  while (input.length) {
    let hero = input.shift();
    let [name, level, itemsHero] = hero.split(" / ");
    level = Number(level);
    const items = itemsHero ? itemsHero.split(", ") : [];

    result.push({ name, level, items });
  }

  return JSON.stringify(result);
}

console.log(
  HeroInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
