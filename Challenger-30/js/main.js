require(['validate'], function(validate){
    const $validate = validate;
    function app(){
            return {
                    init: function init(){
                        
                        this.getValues();
                        this.getCompanyinfo();
                        
                    },
                    getCompanyinfo: function(name, number){
                        var $nameCompany = document.querySelector('[data-js="name-of-company"]');
                        var $phonerofCompany = document.querySelector('[data-js="number-of-company"]')
                        var ajax =  new XMLHttpRequest();
                        ajax.open('GET', '../data/company.json');
                        ajax.send();
                        ajax.addEventListener('readystatechange', function(e){
                            if(ajax.readyState === 4 && ajax.status === 200){
                                var data = JSON.parse(this.responseText);
                                $nameCompany.textContent = data.name;
                                $phonerofCompany.textContent = data.phone;
                            }   
                        })
                        
                    },    
                    getValues: function getValues(createTableData){
                        var $tbody = document.querySelector('tbody')
                        var $form = document.querySelector('[data-js="form-Vehicle"]')
                        var $img  = document.querySelector('[data-js="img-Vehicle"]')
                        var inputs = [
                        document.querySelector('[data-js="brand-Vehicle"]'),
                        document.querySelector('[data-js="year-Vehicle"]'),
                        document.querySelector('[data-js="board-Vehicle"]'),
                        document.querySelector('[data-js="color-Vehicle"]')]
                        index = 0;
                        $form.addEventListener('submit', (function(e){
                            console.log(this)
                            this.createTableData(inputs, $tbody, $img, index)
                        }).bind(this))
                        
                        
                        

                    },
                    createTableData : function createTableData(inputs, $tbody, $img, index, ){
                        event.preventDefault();
                        var tr = document.createElement('tr');
                        var img = document.createElement('img')
                        img.setAttribute('src', $img.value)
                        var tdimg = document.createElement('td')
                        tdimg.appendChild(img);
                        tr.appendChild(tdimg)
                        
                        inputs.forEach(function(input){
                            var td = document.createElement('td');
                            td.textContent = input.value;
                            tr.appendChild(td)
                        })
                        this.createButton(tr, index, $tbody)
                        $tbody.appendChild(tr)
                        
                    },
                    createButton :  function(tr, index , $tbody){
                        var $removeButton = document.createElement('button');

                        $removeButton.textContent = 'Remover';

                        $removeButton.classList.add('btn', 'btn-danger')
                        
                        $removeButton.addEventListener('click', (function(e){
                            this.removeButton($removeButton)
                        }).bind(this));

                        var tdRemove = document.createElement('td');
                        tdRemove.appendChild($removeButton);
                        tr.appendChild(tdRemove)
                    },
                    removeButton : function($removeButton){
                        var row = $removeButton.parentNode.parentNode;
                        row.parentNode.removeChild(row)
                    },
                    
            
                }
        } 
            
            

app().init();
})