function removeCharFrom(string) {
    return string.replace(/D/gi, "");
}

  console.log(removeCharFrom("ElddzeroD WebDD DSchool")); // Elzero Web School

function removeCharFrom(string) {
    return string
        .split("")
        .filter(function (char) {
            return char !== "d" && char !== "D";
        })
        .join("");
}

console.log(removeCharFrom("ElddzeroD WebDD DSchool")); // Elzero Web School