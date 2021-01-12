
function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "http://viacep.com.br/ws/"+ cep +"/json/";
    console.log(url);
    $.ajax({
        url:url,
        type: "GET",
        success: function(response){
            //$("#logradouro").html(response.logradouro); - Outra forma de se fazer estilo AJAX.
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
        }
    })
}





