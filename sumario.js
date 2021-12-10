subtitles = document.querySelectorAll('h2');
parag = document.querySelectorAll('p');
for(x=0;x<subtitles.length;x++){
	let element = subtitles[x];
	element.setAttribute('id' , 'pos'+String(x))}
lista = document.querySelector("ol");
x = 0;
parag.forEach(element=>{
	element.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu maximus felis. Ut in enim commodo, efficitur arcu non, mollis magna. Sed malesuada lectus ac ipsum porta, non venenatis ante tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus nec arcu fringilla, commodo felis ac, imperdiet ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin libero massa, finibus a enim eget, tincidunt posuere sem. Nunc tempor lacinia pellentesque. Nullam ac auctor dui. Proin id enim viverra, bibendum risus nec, congue urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ac enim ac lorem blandit aliquet eget varius justo.\nVivamus auctor ut turpis eget fermentum. Quisque feugiat bibendum dui. Nunc neque nibh, volutpat consectetur nunc eget, luctus aliquet ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Quisque eu lorem nisi. Maecenas blandit eget magna vitae volutpat. Aenean nec vestibulum ipsum. Mauris ut congue ligula. Aenean arcu dolor, volutpat vel tempor sit amet, commodo at eros. Fusce non mauris risus.\nMaecenas ultrices velit quis leo eleifend ultricies. Nunc iaculis augue sit amet interdum commodo. Curabitur molestie tempus orci finibus dapibus. Cras imperdiet urna ac hendrerit tempor. In in lorem maximus, mollis orci eu, accumsan quam. Vivamus leo nisl, maximus ac enim in, fermentum rhoncus orci. Integer elementum et lectus sit amet sollicitudin. Maecenas quis efficitur arcu. Donec vel semper enim, quis aliquam tellus. Suspendisse tempor, leo consectetur ullamcorper sollicitudin, augue lacus efficitur ipsum, rutrum ultricies tellus purus id ligula. Integer eget vulputate augue.'
})

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