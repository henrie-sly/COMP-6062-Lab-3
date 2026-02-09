// Find the area of a triangle
function triangleArea(base, height) {
    return (base * height) / 2;
}

console.log("Triangle Area 1:", triangleArea(3, 4).toFixed(1));
console.log("Triangle Area 2:", triangleArea(5, 7).toFixed(1));


// Find the volume of a sphere
function sphereVolume(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

console.log("Sphere Volume 1:", sphereVolume(3).toFixed(1));
console.log("Sphere Volume 2:", sphereVolume(5).toFixed(1));


// Convert distance to meters
function convertToMeters(distance, unit) {

    // Short circuit
    if (distance === 0 || unit === "m") {
        return distance;
    }

    switch (unit) {
        case "km":
            return distance * 1000;
        case "y":
            return distance * 0.9144;
        case "mi":
            return distance * 1609.34;
        default:
            return "Invalid unit";
    }
}

console.log("50 m:", convertToMeters(50, "m").toFixed(2));
console.log("100 y:", convertToMeters(100, "y").toFixed(2));
console.log("1 mi:", convertToMeters(1, "mi").toFixed(2));
console.log("1.234 km:", convertToMeters(1.234, "km").toFixed(2));


// Convert time string to seconds
function timeToSeconds(time) {

    let parts = time.split(":").map(Number);

    if (parts.length === 3) {
        // HH:MM:SS
        return parts[0] * 3600 + parts[1] * 60 + parts[2];
    } 
    else if (parts.length === 2) {
        // MM:SS
        return parts[0] * 60 + parts[1];
    } 
    else if (parts.length === 1) {
        // SS
        return parts[0];
    }
}

console.log("02:33:21 =", timeToSeconds("02:33:21"));
console.log("00:04:51 =", timeToSeconds("00:04:51"));
console.log("04:51 =", timeToSeconds("04:51"));
console.log("00:13 =", timeToSeconds("00:13"));
console.log("13 =", timeToSeconds("13"));
