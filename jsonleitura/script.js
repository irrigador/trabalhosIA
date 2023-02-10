fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const root = document.getElementById('root');
    const h1 = document.createElement('h1');
    h1.innerHTML = data.message;
    root.appendChild(h1);
  })
  .catch(error => console.error(error));