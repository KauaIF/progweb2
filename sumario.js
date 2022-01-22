subtitles = document.querySelectorAll('h2');
parag = document.querySelectorAll('p');
for(x=0;x<subtitles.length;x++){
	let element = subtitles[x];
	element.setAttribute('id' , 'pos'+String(x))}
lista = document.querySelector("ol");
x = 0;
x=0;
subtitles.forEach(element=>{
	ancora = document.createElement('a');
	ancora.setAttribute('href','#'+String(subtitles[x].id))
	item = document.createElement('li');
	item.append(element.textContent);
	ancora.append(item);
	lista.append(ancora);
	x++
})
