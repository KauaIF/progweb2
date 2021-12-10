tudo = document.body
titulo = tudo.querySelectorAll('h1');
for(x=2;titulo.length<1;x++){
	titulo = document.querySelectorAll('h'+String(x));
}titulo = titulo[0]
if(titulo.style.fontSize==''){
	titulo.style.fontSize='25px'
}
titulo.append(' ',criaButton('-'))
titulo.append(' ',criaButton('+'))
function criaButton(sinal){
	button = document.createElement('input');
	button.setAttribute('type','button');
	button.setAttribute('class','botao');
	button.setAttribute('value', 'font'+sinal);
	button.setAttribute('onclick',"f_font('"+sinal+"')");
	return button
}
function f_font(sinal){
	if (sinal == '+'){
		aux = parseInt(titulo.style.fontSize.slice(0,(titulo.style.fontSize.length)-2));
		if(aux<200){
			aux = aux+10;
		}else{alert('limite máximo atingido')}
		aux = String(aux);
		titulo.style.fontSize = aux+'px';
	}else{
		aux = parseInt(titulo.style.fontSize.slice(0,(titulo.style.fontSize.length)-2));
		if(aux>10){
			aux = aux-10;
		}else{alert('limite mínimo atingido')}
		aux = String(aux);
		titulo.style.fontSize = aux+'px';
	}
}