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
        if(form.lastChild.id==='output'){
            form.removeChild(form.lastChild);
        }
        const bmi = (weight/(height*height/10000)).toFixed(2);
        results.innerText = bmi;
        const output = document.createElement('div');
        if(bmi<18.6){
            output.innerText = 'Underweight';
        }else if(bmi>=18.6 && bmi<=24.9){
            output.innerText = 'Normal';
        }else{
            output.innerText = 'Overweight';
        }
        output.id = 'output';
        form.appendChild(output);
    }
})