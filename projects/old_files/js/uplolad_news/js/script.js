(function() {
	let body = document.getElementById('body');
	let list = document.createElement('ul');
		list.className = 'list';
	body.appendChild(list);

	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=0eca98418ef54b25bb15a900cafe4ceb', true);

	xhr.onloadend = function() {
        if (xhr.status != 200) alert(xhr.status + ' : ' + xhr.statusText);

        try {
            let parse = JSON.parse(xhr.responseText);
			let arrArticle = parse.articles;

            for (let i = 0; i < arrArticle.length; i++) {
                console.log(arrArticle[i]);
				let title = arrArticle[i].title;
				let descr = arrArticle[i].description;
				let time = arrArticle[i].publishedAt;
				let img = arrArticle[i].urlToImage;
				let item = document.createElement('li');
				item.className = 'item';
				list.appendChild(item);
				let content = document.createElement('h1');
				content.className = 'title';
				content.innerHTML = title;
				item.appendChild(content);
				let contentDescr = document.createElement('div');
				contentDescr.className = 'deskription';
				contentDescr.innerHTML = descr;
				item.appendChild(contentDescr);
				let timePublish = document.createElement('span');
				timePublish.className = 'time';
				timePublish.innerHTML = time;
				item.appendChild(timePublish);
				let wrapImg = document.createElement('div');
				wrapImg.className = 'img';
				item.appendChild(wrapImg);
				let imagNews = document.createElement('img');
				imagNews.setAttribute('src', img);
				wrapImg.appendChild(imagNews);
            }
        } catch(e) {
            alert('Некорректный ответ ' + e.message);
        }
    }

	xhr.send();
}());


