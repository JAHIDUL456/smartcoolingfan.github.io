


    function jakir(){
        var good=prompt('enter : ');
    
    
        var a=document.querySelector('a[href="https://api.thingspeak.com/update?api_key=J20TQB5MT5IDIP8E&field1=0"]');
    var jaki="https://api.thingspeak.com/update?api_key=J20TQB5MT5IDIP8E&field1="+good;
        if(a){
            a.setAttribute('href',jaki);
        }
    
    };
    
    
    
    
    