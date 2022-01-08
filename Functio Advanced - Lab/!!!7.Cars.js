function solve(arr) {
  const data = {};

  const methods = {
    create([model, ...rest]) {
      !rest.length
        ? (data[model] = {})
        : (data[model] = Object.create(data[rest[1]]));
    },

    set([model, key, value]) {
      data[model][key] = value;
    },

    print([name]) {
      const result = [];

      for (let key in data[name]) {
        result.push(`${key}:${data[name][key]}`);
      }

      console.log(result.join(","));
    },
  };

  arr.forEach((e) => {
    const [command, ...valu] = e.split(" ");

    methods[command](values);
  });
}
solve([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
