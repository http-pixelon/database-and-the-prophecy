finding a way to create a compact database for one of my encrypted login systems

document.addEventListener('DOMContentLoaded', function() {
    const formularioDadosPXN = document.getElementById('formularioDadosPXN');
    const listaDadosPXN = document.getElementById('listaDadosPXN');

    formularioDadosPXN.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nomePXN = document.getElementById('nomePXN').value;
        const emailPXN = document.getElementById('emailPXN').value;

        const dadosPXN = {
            nomePXN: nomePXN,
            emailPXN: emailPXN
        };

        let listaDadosStoragePXN = JSON.parse(localStorage.getItem('listaDadosPXN')) || [];
        listaDadosStoragePXN.push(dadosPXN);
        localStorage.setItem('listaDadosPXN', JSON.stringify(listaDadosStoragePXN));

        //uma forma de limpar os campos do imputs
        formularioDadosPXN.reset();

        exibirDadosPXN();
    });

    function exibirDadosPXN() {
        const listaDadosStoragePXN = JSON.parse(localStorage.getItem('listaDadosPXN')) || [];
        listaDadosPXN.innerHTML = '';

        listaDadosStoragePXN.forEach(function(dadosPXN) {
            const liPXN = document.createElement('li');
            liPXN.textContent = `Nome: ${dadosPXN.nomePXN}, Email: ${dadosPXN.emailPXN}`;
            listaDadosPXN.appendChild(liPXN);
        });
    }

    exibirDadosPXN(); exibirDadosPXN(); exibirDadosPXN(); exibirDadosPXN(); exibirDadosPXN(); exibirDadosPXN(); exibirDadosPXN();
});

