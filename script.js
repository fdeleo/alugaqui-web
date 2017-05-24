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
            data:JSON.stringify(corretor),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(){
                alert("Cadastro realizado");
                $( "#submitCorretor" ).prop('disabled', false);
                $( "#formCorretor" ).reset();

            },
            failure: function(errMsg) {alert(errMsg);}
        });

        $( "#submitCorretor" ).prop('disabled', true);

        event.preventDefault();
    });

});
