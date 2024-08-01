let con = false
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let youEnd = false

while(con==false) {
     con = confirm("igrat?")
}

let word =""

while(word == null || word.length !=5 ) {
    word = prompt("Ведіть слово:")
    if (chekcWord(word)) {
        let warn = alert('Ведіть число без цифр')
        word = null
    }
    console.log(word)
}


function check() {
    if (youEnd == true) {
        return null
    }
    let trueCount = 0
    let letter = document.getElementById('inpContent').value
    let chek = checkLetter(letter)
    let getLetter = false
    let warning = document.getElementById("out")
    for (let i of word) {
        if( i === letter && chek) {
            getLetter = true
            let ind = word.indexOf(i) +1
            let out = document.getElementById(String(ind)+"letter")
            out.textContent = i 
            word = word.replace(letter, "0")
            warning.textContent = ""
            trueCount = trueCount+1

        }
    }
    document.getElementById('inpContent').value=''
    switch (getLetter) {
    case false:
        document.getElementById("valueContAtt").textContent = document.getElementById("valueContAtt").textContent -1
        if (document.getElementById("valueContAtt").textContent == 0) {
            youEnd = true
            warning.textContent = "You Lose!"
        }
        break
    case true:
        if (trueCount >=5) {
            youEnd = true
            warning.textContent = "You Win!"
        }
        }

    }


function checkLetter(l) {
    if (+l in nums) {
        let warning = document.getElementById("out")
        warning.textContent = "Ведіть Букву"
        return false
    }
    return true
}

function chekcWord(w) {
    for (let i of w) {
        console.log(i)
        if (+i in nums) {
            return true
        }
    }
    return false
}