function solve(area, vol, input) {
  let objects = JSON.parse(input);
  let result = [];
  for (let obj of objects) {
    let areaObj = Math.abs(area.call(obj));
    let volumeObj = Math.abs(vol.call(obj));
    result.push({ area: areaObj, volume: volumeObj });
  }
  return result;
}

const input = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;

console.log(solve(area, vol, input));

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}
