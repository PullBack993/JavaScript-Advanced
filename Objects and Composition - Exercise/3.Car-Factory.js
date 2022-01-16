function solve(input) {
  function getEngine(power) {
    const allowEngines = [
      { power: 90, volume: 1800 },
      { power: 120, volume: 2400 },
      { power: 200, volume: 3500 },
    ];
    return allowEngines.find((engine) => engine.power >= power);
  }

  function getCarriege(color, carriege) {
    return {
      type: carriege,
      color: color,
    };
  }

  function getWheelsSize(wheelsize) {
    let wheel = wheelsize % 2 === 0 ? wheelsize - 1 : wheelsize;
    return Array(4).fill(wheel, 0, 4);
  }

  return {
    model: input.model,
    engine: getEngine(input.power),
    carriage: getCarriege(input.color, input.carriage),
    wheels: getWheelsSize(input.wheelsize),
  };
}

console.log(
  solve({
    model: "VW Golf II",
    power: 150,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
