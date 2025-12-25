const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];


export default function golfScore(par, strokes) {
    let score = "";
    let status = 0;
    if (strokes === 1) {
        status = names.indexOf("Hole-in-one!")
        score = names[status];
    }
    else if (strokes <= (par - 2) ) {
        status = names.indexOf("Eagle")
        score = names[status];
    }
    else if (strokes === (par - 1) ) {
        status = names.indexOf("Birdie")
        score = names[status];
    }
    else if (strokes === par) {
        status = names.indexOf("Par")
        score = names[status];
    }
    else if (strokes === (par + 1) ) {
        status = names.indexOf("Bogey")
        score = names[status];
    }
    else if (strokes === (par + 2) ) {
        status = names.indexOf("Double Bogey")
        score = names[status];
    }
    else {
        status = names.indexOf("Go Home!")
        score = names[status];
    }

    return score;
}
