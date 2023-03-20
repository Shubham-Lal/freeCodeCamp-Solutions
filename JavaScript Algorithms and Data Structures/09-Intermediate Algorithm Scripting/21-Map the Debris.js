// Map the Debris

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];

    const getOrbPeriod = function (obj) {
        const c = Math.pow(earthRadius + obj.avgAlt, 3);  // a^3
        const b = Math.sqrt(c / GM); // √(a^3^/μ)
        const orbPeriod = Math.round(a * b); // 2π√(a^3^/μ)

        return { name: obj.name, orbitalPeriod: orbPeriod };
    };

    for (let elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }

    return newArr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));