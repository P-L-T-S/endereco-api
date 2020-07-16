const endereco = {
    cep: "",
    bairro: "",
    localidade: "",
    logradouro: "",
    uf: ""
}
const input = document.querySelector("input[name=endereco]");
const btn = document.querySelector("input[type=submit]");

btn.onclick = () => {
    axios.get(`https://viacep.com.br/ws/${input.value}/json/`)
        .then(response => {
                endereco.cep = response.data.cep;
                endereco.bairro = response.data.bairro;
                endereco.localidade = response.data.localidade;
                endereco.logradouro = response.data.logradouro;
                endereco.uf = response.data.uf;
        })
        .catch(error => {
            alert(error);
        });
    setTimeout(() => {
        console.log(endereco)
        confirmaEndereco();
    },1000)
}
function confirmaEndereco(){
    const inputCep = document.querySelector("h5[name=cep]");
    const inputBairro = document.querySelector("h5[name=bairro]");
    const inputLocalidade = document.querySelector("h5[name=cidade]");
    const inputRua = document.querySelector("h5[name=rua]");
    const inputUf = document.querySelector("h5[name=Estado]");

    inputCep.classList.remove("hide");
    inputBairro.classList.remove("hide");
    inputLocalidade.classList.remove("hide");
    inputRua.classList.remove("hide");
    inputUf.classList.remove("hide");
    
    inputCep.textContent = endereco.cep;
    inputBairro.textContent = endereco.bairro;
    inputLocalidade.textContent = endereco.localidade;
    inputRua.textContent = endereco.logradouro;
    inputUf.textContent = endereco.uf;
   
}