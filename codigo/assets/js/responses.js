let awaitingObjectiveChoice = false;

function getBotResponse(input) {
    if (awaitingObjectiveChoice) {
        awaitingObjectiveChoice = false;
        if (input == '1') {
            window.open("https://www.tuasaude.com/receitas-para-emagrecer-com-saude/", '_blank');
            return "Redirecionando para receitas para emagrecer...";
        } else if (input == '2') {
            window.open("https://vitat.com.br/receitas-para-ganhar-massa-muscular/", '_blank');
            return "Redirecionando para receitas para ganhar massa...";
        }


    }


    switch (input) {
        case '1':
            awaitingObjectiveChoice = true;
            return "Defina o seu objetivo: <br>1 - Emagrecer <br>2 - Ganhar massa";

        case '2':
            setTimeout(() => {
                window.open("https://mea-health.vercel.app/pages/localizacao_resturantes.html", "_blank");
            }, 2000); 
            return "Redirecionando para restaurantes saudáveis em BH...";
        case '3':
            setTimeout(() => {
                window.open("https://mea-health.vercel.app/pages/localizacao_academias.html", "_blank");
            }, 2000); 
            return "Redirecionando para academias em BH...";

        case '4':
            setTimeout(() => {
                window.open("https://mea-health.vercel.app/pages/dicas.html", "_blank");
            }, 2000); 
            return "Redirecionando para dicas saudáveis...";        
            case '5':
                setTimeout(() => {
                    window.open("https://mea-health.vercel.app/pages/treinos.html", "_blank");
                }, 2000); 
                return "Redirecionando para Treinos...";

        case '6':
            closeChat();    
        return "Saindo...";
        
        default:
            return "Número inválido! Por favor, insira um número entre 1 e 5. Ou 6 para sair";
    }

}
