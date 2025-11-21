// ------------------ AUDIO ------------------
let q = new Audio("./assets/28.mp3")
let w = new Audio("./assets/29.mp3")
let e = new Audio("./assets/30.mp3")
let r = new Audio("./assets/31.mp3")
let t = new Audio("./assets/32.mp3")
let y = new Audio("./assets/33.mp3")
let u = new Audio("./assets/34.mp3")
let i = new Audio("./assets/35.mp3")
let o = new Audio("./assets/36.mp3")
let p = new Audio("./assets/37.mp3")

let a = new Audio("./assets/38.mp3")
let s = new Audio("./assets/39.mp3")
let d = new Audio("./assets/40.mp3")
let f = new Audio("./assets/41.mp3")
let g = new Audio("./assets/42.mp3")
let h = new Audio("./assets/43.mp3")
let j = new Audio("./assets/44.mp3")
let k = new Audio("./assets/45.mp3")
let l = new Audio("./assets/46.mp3")

let z = new Audio("./assets/47.mp3")
let x = new Audio("./assets/48.mp3")
let c = new Audio("./assets/49.mp3")
let v = new Audio("./assets/50.mp3")
let b = new Audio("./assets/51.mp3")
let n = new Audio("./assets/52.mp3")
let m = new Audio("./assets/53.mp3")

let num1 = new Audio("./assets/54.mp3")
let num2 = new Audio("./assets/55.mp3")
let num3 = new Audio("./assets/56.mp3")
let num4 = new Audio("./assets/57.mp3")
let num5 = new Audio("./assets/58.mp3")
let num6 = new Audio("./assets/59.mp3")
let num7 = new Audio("./assets/60.mp3")
let num8 = new Audio("./assets/61.mp3")
let num9 = new Audio("./assets/62.mp3")   // FIXED
let num0 = new Audio("./assets/63.mp3")

let sounds = {
    "q": q, "w": w, "e": e, "r": r, "t": t, "y": y, "u": u, "i": i, "o": o, "p": p,
    "a": a, "s": s, "d": d, "f": f, "g": g, "h": h, "j": j, "k": k, "l": l,
    "z": z, "x": x, "c": c, "v": v, "b": b, "n": n, "m": m,
    "1": num1, "2": num2, "3": num3, "4": num4, "5": num5,
    "6": num6, "7": num7, "8": num8, "9": num9, "0": num0
};

let keyMap = {
    "a": "w1",
    "s": "w2",
    "d": "w3",

    "f": "w4",
    "g": "w5",
    "h": "w6",
    "j": "w7",

    "k": "w8",
    "l": "w9",

    "z": "w10",
    "x": "w11",
    "c": "w12",
    "v": "w13",
    "b": "w14",
    "n": "w15",
    "m": "w16",

    "1": "w17",
    "2": "w18",
    "3": "w19",
    "4": "w20",
    "5": "w21",

    "q": "b1",
    "w": "b2",

    "e": "b3",
    "r": "b4",
    "t": "b5",

    "y": "b6",
    "u": "b7",

    "i": "b8",
    "o": "b9",
    "p": "b10",

    "6": "b11",
    "7": "b12",
    "8": "b13",
    "9": "b14",
    "0": "b15"
};


let piano = document.querySelector("#piano");
piano.focus();

piano.addEventListener("keydown", function(event){

    let sound = sounds[event.key];
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }

    let divId = keyMap[event.key];
    if(divId){
        let keyDiv = document.getElementById(divId);
        let span = keyDiv.querySelector(".keyText");

        // show text
        span.innerText = event.key.toUpperCase();

        keyDiv.style.background = "lightblue";

        setTimeout(()=>{
            span.innerText = "";
            keyDiv.style.background = "";
        }, 400);
    }
});
piano.addEventListener("click", function(event){

    let keyDiv;

    // 1️⃣ If clicked directly on black key
    if(event.target.classList.contains("black")){
        keyDiv = event.target;
    }
    // 2️⃣ Otherwise select white
    else {
        keyDiv = event.target.closest(".white");
    }

    if (!keyDiv) return;

    let span = keyDiv.querySelector(".keyText");

    // ⭐ FIND which letter matches this piano key
    let pressedKey = Object.keys(keyMap).find(k => keyMap[k] === keyDiv.id);

    // ⭐ SHOW LETTER (A, S, D, Q, W etc)
    if (pressedKey) {
        span.innerText = pressedKey.toUpperCase();
    }

    // ⭐ Play correct sound
    if (pressedKey && sounds[pressedKey]) {
        sounds[pressedKey].currentTime = 0;
        sounds[pressedKey].play();
    }

    // highlight
    keyDiv.style.background = "lightblue";

    setTimeout(()=>{
        span.innerText = "";
        keyDiv.style.background = "";
    }, 300);
});
