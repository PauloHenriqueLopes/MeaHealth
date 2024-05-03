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
            setTimeout(() => {
                window.location.href = "https://mea-health.vercel.app/pages/receitas_personalizadas.html";
            }, 2000); 
            return "Redirecionando para receitas saudáveis...";
        case '2':
            setTimeout(() => {
                window.location.href = "https://mea-health.vercel.app/pages/localizacao_resturantes.html";
            }, 2000); 
            return "Redirecionando para restaurantes saudáveis em BH...";
        case '3':
            setTimeout(() => {
                window.location.href = "https://mea-health.vercel.app/pages/localizacao_academias.html";
            }, 2000); 
            return "Redirecionando para academias em BH...";        
        case '4':
            setTimeout(() => {
                window.location.href = "https://mea-health.vercel.app/pages/treinos.html";
            }, 2000); 
            return "Redirecionando para Treinos...";
        case '5':
            closeChat();    
            return "Saindo...";
        default:
            return "Número inválido! Por favor, insira um número entre 1 e 4. Ou 5 para sair";
    }

}
