function addcard(){
    const card = document.getElementById('card');
    card.style.padding = '50px';
    card.style.border = '2px solid black';
    card.style.textAlign = 'center';
    const img = document.createElement('img');
    img.src = data.avatar_url;
    img.style.width = '40%';
    // img.padding = '30px';
    card.appendChild(img);
    const h2 = document.createElement('h2');
    h2.innerHTML = `<i>Username</i> : ${data.login}`;
    card.appendChild(h2);
    const p = document.createElement('p');
    p.innerHTML = `id : <b>${data.id}</b> <br /> followers : <b>${data.followers}</b> <br /> following : <b>${data.following}</b>`;
    card.appendChild(p);
}
const btn = document.querySelector('button');
btn.addEventListener('click',function(){
    btn.setAttribute('hidden','');
    addcard();
})
console.log('hi');
let data;
const requestUrl = 'https://api.github.com/users/Soham13anerjee';
const xhr = new XMLHttpRequest();
xhr.open('GET',requestUrl);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        btn.removeAttribute('disabled');
        data = JSON.parse(this.responseText);
        console.log(data);
    }
}
xhr.send();