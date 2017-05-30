$(document).ready(function() {

    $( "#formCorretor" ).submit(function( event ) {

        var corretor = {};
        corretor['email'] = $( "#email" ).val();
        corretor['senha'] = $( "#senha" ).val();
        corretor['nome'] = $( "#nome" ).val();
        corretor['sobrenome'] = $( "#sobrenome" ).val();
        corretor['celular'] = $( "#celular" ).val();
        corretor['creci'] = $( "#creci" ).val();

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/corretor",
            data: JSON.stringify(corretor),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(){
                alert("Cadastro realizado");
                $( "#submitCorretor" ).prop('disabled', false);
                $( "#formCorretor" )[0].reset();
            },
            failure: function(errMsg) {
                alert(errMsg);
                $( "#submitCorretor" ).prop('disabled', false);
            }
        });

        $( "#submitCorretor" ).prop('disabled', true);

        event.preventDefault();
    });
    
    $( "#formCliente" ).submit(function( event ) {

        var cliente = {};
        cliente['email'] = $( "#email" ).val();
        cliente['senha'] = $( "#senha" ).val();
        cliente['nome'] = $( "#nome" ).val();
        cliente['sobrenome'] = $( "#sobrenome" ).val();
        cliente['celular'] = $( "#celular" ).val();
        cliente['cpf'] = $( "#cpf" ).val();

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/cliente",
            data: JSON.stringify(cliente),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(){
                alert("Cadastro realizado");
                $( "#submitCliente" ).prop('disabled', false);
                $( "#formCliente" )[0].reset();
            },
            failure: function(errMsg) {
                alert(errMsg);
                $( "#submitCliente" ).prop('disabled', false);
            }
        });

        $( "#submitCliente" ).prop('disabled', true);

        event.preventDefault();
    });

    $( "#btn-busca-imoveis" ).click(function () {

        var busca = $( "#busca-imoveis" ).val();

        $.ajax({
            type: "GET",
            url: "http://localhost:8080/buscar-imoveis?busca=" + busca,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data){

                var $resultado = $( "#resultado-busca" );

                $resultado.empty();

                for(var i=0; i < data.length; i++) {
                    var imovel = "<li>" + JSON.stringify(data[i]) + "</li>";
                    $resultado.append(imovel)
                }
            },
            failure: function(errMsg) {
                alert(errMsg);
            }
        });
    });

});
