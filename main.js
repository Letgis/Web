function calcularImc() {
    const data = document.forms[0];
    const peso = data["peso"].value;
    const altura = data["altura"].value;

    fetch(`./index.php?peso=${peso}&altura=${altura}`, {
        method: 'get',
        mode:"no-cors",
        headers: {  
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        },
    })
        .then(response => response.json())
        .then(jsonData => preencherImc(jsonData))
        .catch(err => {
            console.error(err);
        });
}

function preencherImc(jsonData) {
    let imcValue = document.createElement("h1");
    imcValue.innerHTML = jsonData.imc;
    document.body.appendChild(imcValue);
}