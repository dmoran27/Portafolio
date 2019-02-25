$(document).ready(function(){

		//cambiar texto de inicio
	function changeText1() {
		var a=["Responsable", "Adicta al Cafe","Full Stack","Creativa", "Nerd", "Amante de los libros","Freelancer","Fan del chocolate", "Web Developer", "Venezolana"];
		var texto1= $(".descripcion h2 span #c1").text();
		var texto2= $(".descripcion h2 span #c2").text();
		var texto3= $(".descripcion h2 span #c3").text();
		var num1 = Math.round(Math.random() * ((a.length+1) - 0) + 0);
		var num2 = Math.round(Math.random() * ((a.length+1) - 0) + 0);
		var num3 = Math.round(Math.random() * ((a.length+1) - 0) + 0);
		for(var i in a){
    		if(a[i]==texto1 && a[i]!=a.length && num1!=num2 &&num2!=num3 &&num1!=num3){
    			$(".descripcion h2 span #c1").text(a[num1]);	
    			$(".descripcion h2 span #c2").text(a[num3]);	
    			$(".descripcion h2 span #c3").text(a[num2]);	
    		}else if(a[i]==texto1 && a[i]==a.length && num!=a.length  ){
    			$(".descripcion h2 span #c1").text(a[num1]);
    			$(".descripcion h2 span #c2").text(a[num3]);	
    			$(".descripcion h2 span #c3").text(a[num2]);	
    		}
    	}

    }
    setInterval(changeText1, 2000);


    	//animacion del Header
	if( $(window).width()>800){
		$('Header .informacion').css({
			opacity: 0,
			marginTop: 0
		});
		$('Header .informacion').animate({
			opacity: 1,
			marginTop: '-52px'
		},1500);

	}

	//efecto modal
	 $('.contenedor-imagen').on('click', function(){
	    $('#modal').modal;
	    var ruta_imagen = ($(this).find('img').attr('src'));
	    $("#imagen-modal").attr('src', ruta_imagen );
	   });
	  
	  $('#modal').on('click', function(){
	    $('#modal').modal('hide');
	 });  
  
  		//menu deplegable
	  $("#btnMenu").on('click', function(){
	  	$("#menunav").toggleClass("d-none");
	  	$("#menunav").toggleClass("ml-5");
	  	$("#menunav").toggleClass("bg-dark");
	  	$(".menu").toggleClass("bg-dark");
	  	$("#logo2").toggleClass("d-none");

	  }); 
   

	  	//Visibilidad del menu de navegacion
	$(window).scroll(function(event) {
  		var scrollTop = $(window).scrollTop();
	  	if( scrollTop >= 700){
	 		$('.menu').removeClass("d-none");
	   		$('.menu').addClass("d-flex justify-content-betwen fixed-top");
	    }else{
	   		$('.menu').removeClass(" d-flex justify-content-betwen fixed-top");
	   		$('.menu').addClass("d-none");
	    }  

	});


	//desplazamiento de los botones del menu de navegacion

	var inicio = $('#Inicio').offset().top,
		acercaDe = $('#AcercaDe').offset().top,
		herramientas = $('#Herramientas').offset().top,
		trabajos = $('#Trabajos').offset().top,
		diseños = $('#Disenos').offset().top,
		contacto = $('#Contacto').offset().top,
		top1 = $('#Top1').offset().top;
		
	$('#button1').on('click', function(){
		$('html, body').animate({
			scrollTop: top1			
		}, 700);
		
	});
	$('#btnInicio').on('click', function(){
		$('html, body').animate({
			scrollTop: inicio
		}, 500);
	});

	$('#btnInicio2').on('click', function(){
		$('html, body').animate({
			scrollTop: inicio
		}, 500);
	});
	$('#btnAcercaDe').on('click', function(){
		$('html, body').animate({
			scrollTop: acercaDe -168
		}, 500);
	});
	$('#btnHerramientas').on('click', function(){
		$('html, body').animate({
			scrollTop: herramientas -170
		}, 500);
	});
	$('#btnTrabajos').on('click', function(){
		$('html, body').animate({
			scrollTop: trabajos -170
		}, 500);
	});
	$('#btnDiseños').on('click', function(){
		$('html, body').animate({
			scrollTop: diseños -170
		}, 500);
	});
	$('#btnContacto').on('click', function(){
		$('html, body').animate({
			scrollTop: contacto -170
		}, 500);
	});
	

});

