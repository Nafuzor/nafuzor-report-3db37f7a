// Загрузка данных
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const numbersList = document.getElementById('numbers-list');
        data.numbers.forEach(num => {
            const btn = document.createElement('button');
            btn.textContent = num.phone;
            btn.onclick = () => showDetail(num);
            numbersList.appendChild(btn);
        });
        document.getElementById('plan').textContent = 'Ваш план: ' + (data.plan || 'none');
        document.getElementById('earned-today').textContent = 'Заработано за сегодня: ' + data.earned_today;
    })
    .catch(error => console.error('Ошибка загрузки данных:', error));

// Показ детали
function showDetail(num) {
    document.getElementById('main-view').style.display = 'none';
    const detailView = document.getElementById('detail-view');
    detailView.style.display = 'block';
    document.getElementById('number-title').textContent = 'Ваш номер ' + num.phone;
    document.getElementById('status').textContent = num.status;
}

// Назад к главному
function backToMain() {
    document.getElementById('detail-view').style.display = 'none';
    document.getElementById('main-view').style.display = 'block';
}

// Падающий снег
for (let i = 0; i < 100; i++) {
    const flake = document.createElement('div');
    flake.classList.add('snowflake');
    flake.textContent = '*';
    flake.style.left = Math.random() * 100 + 'vw';
    flake.style.animationDuration = Math.random() * 10 + 5 + 's';
    flake.style.opacity = Math.random();
    flake.style.fontSize = Math.random() * 10 + 10 + 'px';
    document.getElementById('snow-container').appendChild(flake);
}