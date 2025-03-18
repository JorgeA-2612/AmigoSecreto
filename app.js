let listaDeAmigos = [];

function agregarAmigo() 
{
    let Amigo = document.getElementById("amigo").value;
    if (Amigo !== "") 
    {
        listaDeAmigos.push(Amigo);
        Mostrar('listaAmigos', listaDeAmigos);
        vaciarCaja("amigo");
    } 
    else 
    {
        alert("Por favor ingrese un valor de entrada válido");
    }
}

function vaciarCaja(elemento) 
{
    document.getElementById(elemento).value = "";
}

function sortearAmigo() 
{
    let numeroDeAmigos = listaDeAmigos.length;
    if (numeroDeAmigos <= 2) 
    {
        alert('Ingresa más amigos');
        return;
    } 
    else 
    {
        let amigoSecreto = listaDeAmigos[Math.floor(Math.random() * numeroDeAmigos)];
        Mostrar('resultado', amigoSecreto);
    }
}

function Mostrar(elemento, x) 
{
    if (elemento === 'listaAmigos') 
    {
        let lista = document.getElementById(elemento);
        lista.innerHTML = '';
        x.forEach(amigo => {
            let li = document.createElement('li');
            li.textContent = amigo;
            lista.appendChild(li);
        });
    }

    if (elemento === 'resultado') {
        let lista = document.getElementById(elemento);
        lista.innerHTML = '';
        let li = document.createElement('li');
        li.textContent = `Tu amigo secreto es: ${x}`;
        lista.appendChild(li);
    }
}

