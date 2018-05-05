(function(DOM,window, document) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */
  function app(){
    var $form = new DOM('[data-js="form-Vehicle"]');
    var $imgVehicle = new DOM('[data-js="img-Vehicle"]');
    var $brandVehicle = new DOM('[data-js="brand-Vehicle"]');
    var $yearVehicle = new DOM('[data-js="year-Vehicle"]');
    var $boardVehicle = new DOM('[data-js="board-Vehicle"]');
    var $colorVehicle = new DOM('[data-js="color-Vehicle"]');
    var $nameCompany = document.querySelector('[data-js="name-of-company"]')
    var $numberCompany = document.querySelector('[data-js="number-of-company"]')
    var tbody = document.querySelector('[data-js="tbody"]');
    var ajax = new XMLHttpRequest();
    var count = 0


    pushAjax()

    $form.on('submit', function(){
      event.preventDefault();
      var tr = document.createElement('tr');
      insertValues(tr);

    })

    function pushAjax(){
      ajax.open('GET', 'company.json');
      ajax.send();
      ajax.addEventListener('readystatechange', handleReadyStateChange);
    }

    function handleReadyStateChange(){
        if(ajax.readyState === 4 && ajax.status === 200){
          pushData()

        }

    }

    function pushData(){
      var response = JSON.parse(ajax.responseText)
      $nameCompany.textContent = response.name;
      $numberCompany.textContent = response.phone;
    }

    function insertValues(tr){
      var td = document.createElement('td');
      var td2 = document.createElement('td');
      var td3 = document.createElement('td');
      var td4 = document.createElement('td');
      var td5 = document.createElement('td');
      var img = document.createElement('img');
      if( $imgVehicle.value() !== ''){
        img.setAttribute("src", $imgVehicle.value());
        img.setAttribute("height", '100px');
        img.setAttribute("width", '150px');
        tr.appendChild(img);
      }
      else{
        td.textContent = 'VÍCULO SEM IMAGEM';
        tr.appendChild(td)
      }


      td2.textContent = $brandVehicle.value();
      td3.textContent = $yearVehicle.value();
      td4.textContent = $boardVehicle.value();
      td5.textContent = $colorVehicle.value();


      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      tbody.appendChild(tr);


      $imgVehicle.clear()
      $brandVehicle.clear()
      $yearVehicle.clear()
      $boardVehicle.clear()
      $colorVehicle.clear()

    }
  }
app();
})(window.DOM, window ,document);
