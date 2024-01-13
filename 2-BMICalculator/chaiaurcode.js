const form = document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height=== '' || height<0 || isNaN(height)){
        // const text = document.createTextNode(`Enter genuine height ${height}`);
        // results.replaceChild(text);
        // results.innerHTML = 'invalid';
        while(results.childNodes.length>=1){
            results.removeChild(results.firstChild);
        }
        results.appendChild(document.createTextNode(`invalid height. re enter height. ${height}`));
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerText = `invalid weight. re enter weight. ${weight}`;
    }else{
        results.innerText = (weight/(height*height/10000)).toFixed(2);
    }
})