define('validate', function(){
    return {
        valideUrl : function(url){
            var regexUrl = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
            return url.match(regexUrl)
        },
        valideInputs:  function(){
            return this.length === 0;
        }

    }})