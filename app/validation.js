function verifyValue(guess) {
    const number = +guess

    if (guessIsValid(number)) {
        guessElement.innerHTML += '<div>Valor Inválido</div>';
    }
    if (invalidNumber(number)){
        guessElement.innerHTML += `
        <div>Valor inválido: Fale um número entre ${smallValue} e ${bigValue}</div>
        `;
    }
    if (number === secretNumber) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${secretNumber}</h3>
            <button id="play-again" class="btn-play">Jogar novamente</button>
        `
    } else if (number > secretNumber) {
         guessElement.innerHTML += `
         <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
         `
         console.log("bigger")
    }
    if (number < secretNumber) {
        guessElement.innerHTML += `
         <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
         `
    }
}

function guessIsValid(number) {
    return Number.isNaN(number);
}

function invalidNumber(number) {
    return number > bigValue || number < smallValue;
}

document.body.addEventListener("click", (e) => {
    if (e.target.id === "play-again") {
        window.location.reload();
    }
})

onkeydown = function (evento) {
    if (evento.code === "Enter" && document.getElementById("play-again")) {
        window.location.reload();
    }
}