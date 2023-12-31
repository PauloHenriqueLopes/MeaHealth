const LOGIN_URL = "login.html";
var db_usuarios = {};
var usuarioCorrente = {};

function generateUUID() {
    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;
        if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

const dadosIniciais = {
    usuarios: [
        { "id": 1, "login": "admin", "senha": "123", "nome": "Administrador do Sistema", "email": "admin@abc.com" },
        { "id": 2, "login": "user", "senha": "123", "nome": "Usuario Comum", "email": "user@abc.com" },
    ]
};;

var ultimoId = dadosIniciais.usuarios.length;

function getNextId() {
    let ultimoId = 0;
    const usuariosJSON = localStorage.getItem('db_usuarios');

    if (usuariosJSON) {
        const db_usuarios = JSON.parse(usuariosJSON);
        const usuarios = db_usuarios.usuarios;

        if (usuarios.length > 0) {
            ultimoId = Math.max(...usuarios.map(user => user.id));
        }
    }

    return ultimoId + 1;
}

function initLoginApp() {
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
    }

    var usuariosJSON = localStorage.getItem('db_usuarios');

    if (!usuariosJSON) {
        alert('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');
        db_usuarios = dadosIniciais;
        localStorage.setItem('db_usuarios', JSON.stringify(dadosIniciais));
    } else {
        db_usuarios = JSON.parse(usuariosJSON);
    }
};

function loginUser(login, senha) {
    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];
        if (login == usuario.login && senha == usuario.senha) {
            usuarioCorrente.id = usuario.id;
            usuarioCorrente.login = usuario.login;
            usuarioCorrente.email = usuario.email;
            usuarioCorrente.nome = usuario.nome;
            sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
            return true;
        }
    }
    return false;
}

function logoutUser() {
    usuarioCorrente = {};
    sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
    window.location = LOGIN_URL;
}

function addUser(nome, login, senha, email) {
    const usuarioExistente = db_usuarios.usuarios.find(user => user.login === login);

    if (usuarioExistente) {
        alert('Login já existe. Por favor, escolha outro login.');
        return;
    }

    let newId = getNextId();
    let usuario = { "id": newId, "login": login, "senha": senha, "nome": nome, "email": email };

    db_usuarios.usuarios.push(usuario);
    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));

    console.log('Banco de dados de usuários atualizado:', db_usuarios);
}
function setUserPass() {}

initLoginApp();

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`Chave: ${key}, Valor: ${value}`);
}
