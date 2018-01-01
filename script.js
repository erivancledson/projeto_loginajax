$(function(){
    //pega o form pelo o id
	$('#form').on('submit', function(e) {
		//ao enviar o formulario ele não faz a ação padrão
		//que é enviar o formulario
		e.preventDefault();
         //envio por ajax dos dado
		var email = $('input[name=email]').val();
		var senha = $('input[name=password]').val();
         //chama o arquivo de conexão do banco de dados
		$.ajax({
			type:'POST',
			url:'login.php',
			data:{email:email, senha:senha},
			success:function(msg) {
				alert(msg);
				//coloco aqui a pagina que quando o login for feito eu quero acessar
				//window.location.href ="pagina.php"
			}
		});

	});

});