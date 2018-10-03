function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function random_String() {
    var char_list = "azertyuiopqsdfghjklmwxcvbn123456789&é\"'(-è_çà)=,;:!?./§ù%$£*µ^"
    var length = char_list.length
    var returner = ""
    for (let index = 0; index < parseInt(document.getElementById("Size_Password").value); index++) {
        returner += char_list[getRandomInt(length)]
    }
    return returner
}

async function start() {
    password_box = document.getElementById("password_box")
    password_box.value = ""
    box = document.getElementById("check_box")
    while(true) {
        if (box.checked) {
            password_box.value = random_String()
        }
        await sleep(90)
    }
}