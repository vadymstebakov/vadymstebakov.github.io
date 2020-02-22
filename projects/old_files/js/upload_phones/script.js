let btn = document.getElementById('button');

btn.onclick = loadPhones;

function loadPhones() {
    let list = document.createElement('ul');
    list.className = 'list';
    document.body.appendChild(list);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'phones.json', true);
    xhr.onloadend = function() {
        button.innerHTML = 'Готово!';

        if (xhr.status != 200) alert(xhr.status + ' : ' + xhr.statusText);

        try {
            let parse = JSON.parse(xhr.responseText);

            for (let i = 0; i < parse.length; i++) {
                let phoneName = parse[i].name;
                let item = document.createElement('li');
                item.textContent = phoneName;
                list.appendChild(item);
            }
        } catch (e) {
            alert('Некорректный ответ ' + e.message);
        }
    }

    xhr.send();

    button.innerHTML = 'Загружаю...';
	button.disabled = true;
}