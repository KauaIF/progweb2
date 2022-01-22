const tamanhoCelula = 40;
var pecas_comidas = document.createElement('div');
var aux = ['a','b','c','d','e','f','g','h']
document.body.append(criaTabuleiro());

function criaTabuleiro() {
    const tamanho = 8;
    let tabela = document.createElement('table');

    tabela.style.borderStyle = 'solid';
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    for (let i = 0; i < tamanho; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha);
        for (let j = 0; j < tamanho; j++) {
            let celula = document.createElement('td');
			celula.setAttribute('class',aux[j]+String((((i+1)-8)*-1)+1))
            linha.append(celula);

            celula.style.width = `${tamanhoCelula}px`;
            celula.style.height = `${tamanhoCelula}px`;
            if (i % 2 == j % 2) {
                celula.style.backgroundColor = 'black',celula.className;
                if (i * 8 + j <= 24) {
                    celula.append(criaPeca('black',celula.className));
                } else if (i * 8 + j >= 40) {
                    celula.append(criaPeca('red',celula.className));
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
        }
    };
    return tabela;
}

function criaPeca(cor,onde) {
    let imagem = document.createElement('img');
    imagem.setAttribute('src', `${cor}.png`);
    imagem.setAttribute('width', `${tamanhoCelula-4}px`);
    imagem.setAttribute('height', `${tamanhoCelula-4}px`);
	imagem.setAttribute('draggable','true')
	imagem.setAttribute('id', onde)
	imagem.setAttribute('ondragstart', 'inicia(this.id)')
    return imagem;
}
var peca;
var casaA;
var casaB;
function inicia(onde){
	peca = document.querySelector('#'+onde)
	casaX = document.querySelector('.'+onde)
	if(casaX.className.includes('a')){
		casaB = document.createElement('div')
		if (peca.src.includes('red')){
			casaA = document.querySelector('.'+aux[Number(aux.indexOf(onde[0]))+1]+String(Number(onde[1])+1))
			if (casaA.hasChildNodes()){
				if(casaA.className.includes('h')||casaA.firstElementChild.outerHTML.includes('red')){casaA = document.createElement('div')}else{
			casaA = document.querySelector('.'+aux[Number(aux.indexOf(onde[0]))+2]+String(Number(onde[1])+2))
		if (casaA.hasChildNodes()){casaA = document.createElement('div')}}}}
		else{
			casaA = document.querySelector('.'+aux[Number(aux.indexOf(onde[0]))+1]+String(Number(onde[1])-1))
			if (casaA.hasChildNodes()){
				if(casaA.className.includes('h')||casaA.firstElementChild.outerHTML.includes('black')){casaA = document.createElement('div')}else{
			casaA = document.querySelector('.'+aux[Number(aux.indexOf(onde[0]))+2]+String(Number(onde[1])-2))
		if (casaA.hasChildNodes()){casaA = document.createElement('div')}}}
		}
	}
	else{if (casaX.className.includes('h')){
		casaA = document.createElement('div')
		if(peca.src.includes('red')){
			casaB = document.querySelector('.'+aux[Number(aux.indexOf(onde[0]))-1]+String(Number(onde[1])+1))
			if (casaB.hasChildNodes()){
				if(casaB.className.includes('h')||casaB.firstElementChild.outerHTML.includes('red')){casaB = document.createElement('div')}else{
			casaB = document.querySelector('.'+aux[Number(aux.indexOf(onde[0]))-2]+String(Number(onde[1])+2))
			if (casaB.hasChildNodes()){casaB = document.createElement('div')}}}}
			else{
				casaB = document.querySelector('.'+aux[Number(aux.indexOf(onde[0]))-1]+String(Number(onde[1])-1))
				if (casaB.hasChildNodes()){
					if(casaB.className.includes('h')||casaB.firstElementChild.outerHTML.includes('black')){casaB = document.createElement('div')}else{
				casaB = document.querySelector('.'+aux[Number(aux.indexOf(onde[0]))-2]+String(Number(onde[1])-2))
			if (casaB.hasChildNodes()){casaB = document.createElement('div')}}}
			}
	}
	else{
		if (peca.src.includes('red')){
			casaA = document.querySelector('.'+aux[Number(aux.indexOf(onde[0]))+1]+String(Number(onde[1])+1))
			if (casaA.hasChildNodes()){
				if(casaA.className.includes('h')||casaA.firstElementChild.outerHTML.includes('red')){casaA = document.createElement('div')}else{
			casaA = document.querySelector('.'+aux[Number(aux.indexOf(onde[0]))+2]+String(Number(onde[1])+2))
			if (casaA.hasChildNodes()){casaA = document.createElement('div')}}}
			
			casaB = document.querySelector('.'+aux[Number(aux.indexOf(onde[0]))-1]+String(Number(onde[1])+1))
			if (casaB.hasChildNodes()){
				if(casaB.className.includes('h')||casaB.firstElementChild.outerHTML.includes('red')){casaB = document.createElement('div')}else{
			casaB = document.querySelector('.'+aux[Number(aux.indexOf(onde[0]))-2]+String(Number(onde[1])+2))
			if (casaB.hasChildNodes()){casaB = document.createElement('div')}}}
		}else{
			casaA = document.querySelector('.'+aux[Number(aux.indexOf(onde[0]))+1]+String(Number(onde[1])-1))
			if (casaA.hasChildNodes()){
				if(casaA.className.includes('h')||casaA.firstElementChild.outerHTML.includes('black')){casaA = document.createElement('div')}else{
			casaA = document.querySelector('.'+aux[Number(aux.indexOf(onde[0]))+2]+String(Number(onde[1])-2))
			if (casaA.hasChildNodes()){casaA = document.createElement('div')}}}
			
			casaB = document.querySelector('.'+aux[Number(aux.indexOf(onde[0]))-1]+String(Number(onde[1])-1))
			if (casaB.hasChildNodes()){
				if(casaB.className.includes('h')||casaB.firstElementChild.outerHTML.includes('black')){casaB = document.createElement('div')}else{
			casaB = document.querySelector('.'+aux[Number(aux.indexOf(onde[0]))-2]+String(Number(onde[1])-2))
			if (casaB.hasChildNodes()){casaB = document.createElement('div')}}}
	}}}
		
	casaX.addEventListener('dragover', function(){dragover(casaX)})
	casaA.style.backgroundColor = 'blue'
	casaB.style.backgroundColor = 'blue'
	casaA.addEventListener('dragover', function(){dragover(casaA)})
	casaB.addEventListener('dragover', function(){dragover(casaB)})
	
}
function dragover(item){
	item.append(peca)
	peca.setAttribute('id',item.className)
}
window.addEventListener('dragend',function(){limpar(casaA,casaB,casaX)})
function limpar(A,B,X){
	A.style.backgroundColor = 'black'
	B.style.backgroundColor = 'black'
	X.removeEventListener('dragover', function(){dragover(casaX)})
	A.removeEventListener('dragover', function(){dragover(casaA)})
	B.removeEventListener('dragover', function(){dragover(casaB)})
}
