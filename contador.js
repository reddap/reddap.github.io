var target_date = new Date("march 6, 2022").getTime();
var hora, dias, horas, minutos, segundos;
var regressiva = document.getElementById("regressiva");
setInterval(function () {
var current_date = new Date().getTime();
var segundos_f = (target_date - current_date) / 1000;
dias = parseInt(segundos_f / 86400);
segundos_f = segundos_f % 86400;
horas = parseInt(segundos_f / 3600);
segundos_f = segundos_f % 3600;
minutos = parseInt(segundos_f / 60);
segundos = parseInt(segundos_f % 60);
march6 = dias*24+horas, minutos, segundos;
}, 1000);
		
  document.body.innerHTML=march6
