var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}


function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// primeira mensagem
function firstBotMessage() {
    let firstMessage = `
        Olá! Escolha uma opção:
        <ul>
            <li>1- Receita saúdavel.</li>
            <li>2- Restaurantes</li>
            <li>3- Academia</li>
            <li>4- Treinos</li>
            <li>5- Sair do chat</li>
        </ul>
    `;

    document.getElementById("botStarterMessage").innerHTML = '<p class="botText">' + firstMessage + '</p>';


    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// envio de texto através de cliques no botão
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

// Apertar enter pra enviar
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

function closeChat() {
    // Encontrar todos os botões "collapsible" e retraí-los
    var coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        var content = coll[i].nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        coll[i].classList.remove("active");  // Remove a classe "active"
    }

    // Limpar o chat
    document.getElementById("chatbox").innerHTML = "";

    location.reload();
}


