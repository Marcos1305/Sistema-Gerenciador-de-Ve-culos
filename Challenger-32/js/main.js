(function(){
    'use strict';
    getCompanyInfo()
    getFormInputs()
    // window.onload(getValues())
    function getCompanyInfo(){
        var $nameCompany = document.querySelector('[data-js="nameCompany"]');
        var $numberCompany = document.querySelector('[data-js="numberCompany"]');
        var ajax = new XMLHttpRequest();
        ajax.open('GET', 'data/company.json');
        ajax.send();
        ajax.onreadystatechange = function(){
            if(ajax.readyState === 4){
               var data = JSON.parse(ajax.responseText);
               $nameCompany.textContent = data.name;
               $numberCompany.textContent = data.phone
            }
        }
    }

    function getFormInputs(){
        var $form = document.querySelector('[data-js="form-Vehicle"]');
        var $img = document.querySelector('[data-js="img-Vehicle"]');
        var $brand = document.querySelector('[data-js="brand-Vehicle"]');
        var $year = document.querySelector('[data-js="year-Vehicle"]');
        var $board = document.querySelector('[data-js="board-Vehicle"]');
        var $color = document.querySelector('[data-js="color-Vehicle"]');
        $form.addEventListener('submit', (function(){
            sendValues(event,$img, $brand, $year, $board, $color)
        }).bind(this), false);
    }
    
    function sendValues(event,$img, $brand, $year, $board, $color){
        event.preventDefault()
        var img = $img.value;
        var brand = $brand.value;
        var year = $year.value;
        var board = $board.value;
        var color = $color.value
        var $msgfeedback = document.querySelector('[data-js="msgFeedback"]')
        var ajax = new XMLHttpRequest();
        ajax.open('POST', 'http://localhost:3000/car')
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        ajax.send("image="+img+"&brandModel="+brand+"&year="+year+"&plate="+board+"&color="+color)
        ajax.onreadystatechange = function(){
                if(ajax.readyState === 4){
                    $msgfeedback.textContent = 'Dados enviados com sucesso!'
                    
                }
            }
        getValues()
    }

    function getValues(){
        var ajax = new XMLHttpRequest();
        ajax.open('GET', 'http://localhost:3000/car');
        ajax.send()
        ajax.onreadystatechange = function(){
            if(ajax.readyState === 4  && ajax.status === 200){
                var cars = JSON.parse(ajax.responseText)
                insertValuesPage(cars)

            }
        }
    }
    function insertValuesPage(cars){
        var $tbody = document.querySelector('thead')
        cars.forEach(function(obj){
            var tr = document.createElement('tr');
            var img = document.createElement('img')
            var td2 = document.createElement('td')
            var td3 = document.createElement('td')
            var td4 = document.createElement('td')
            var td5 = document.createElement('td')
            var tdbutton = document.createElement('td')
            var buttonRemove = document.createElement('button');
            buttonRemove.classList.add('btn', "btn-danger");
            buttonRemove.textContent = "Remover"
            buttonRemove.addEventListener('click' ,(function(){
                removeTableRow(buttonRemove)
            }).bind(this))
            img.setAttribute('src', obj.image)
            td2.textContent = obj.brandModel;
            td3.textContent = obj.year;
            td4.textContent = obj.plate;
            td5.textContent = obj.color;
            tdbutton.appendChild(buttonRemove)
            tr.appendChild(img);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(tdbutton)
            $tbody.appendChild(tr)
        })
        $form.addEventListener('submit', function(){
            alert('test')
        }, false);
        
    }


    function removeTableRow(buttonRemove){
       var row =  buttonRemove.parentNode.parentNode;
        row.parentNode.removeChild(row)
    }


    
})()