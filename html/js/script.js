//alert()
//console.log
//console.warn
//console.error

{/* 
<div id="poder">
    <div id="ataque">
        <label>Ataque:</label>
        <input type="number" id="ataque" placeholder="0-100"/>
        <label>Evoluido?</label>
    </div>
    
    <div id="defesa">
        <label>Defesa:</label>
        <input type="number" id="defesa" placeholder="0-100"/>
        <input type="radio" name="evoluido" checked>Sim
        <input type="radio" name="evoluido">Não                    
    </div>
</div>



<div id="descricao">
    <label>Descrição:</label>
    <textarea id="descricao_pokemon" placeholder="Quais as características do seu pokemon ?" cols="30" rows="10"></textarea>
</div>

<div id="botao">
    <button id="botao_salvar">Salvar</button>
</div>
</form>
</div>     */}

//Exemplo de dados
useradmin='admin'
usersenha='admin'

var menu = document.getElementById("app")

var form = document.createElement("form")
form.setAttribute("method", "get")
form.setAttribute("action", "pokesystem.php")
menu.appendChild(form)

var tituloEl = document.createElement("h3")
tituloEl.setAttribute("id", "pokesystem")
tituloEl.innerText = "PokeSystem"
form.appendChild(tituloEl)

var nomeEl = document.createElement("label")
nomeEl.innerText = "Nome: "
form.appendChild(nomeEl)

var loginEl = document.createElement("input")
loginEl.setAttribute("type","text")
loginEl.setAttribute("placeholder","Digite o nome do seu Pokemon")
loginEl.setAttribute("id","login") 
form.appendChild(loginEl)

var tipoLabelEl = document.createElement("label")
tipoLabelEl.innerText = "Tipo: "
form.appendChild(tipoLabelEl)


var opt = ["--Selecione","eletrico","fogo","agua","terra","gelo","psiquico","planta"]

var tipoEl = document.createElement("select")
tipoEl.id = "tipo"
form.appendChild(tipoEl)

for (var x = 0; x <opt.length; x++){ 
    var optionEl = document.createElement("option")
    optionEl.value = opt[x];
    optionEl.text = opt[x];
    tipoEl.appendChild(optionEl)
}


var entrarEl = document.createElement("button")
entrarEl.innerHTML = "Entrar";
entrarEl.setAttribute("onclick", "checarlogin()")
form.appendChild(entrarEl)



function checarlogin(){
   if ((useradmin === login.value) && (usersenha === senha.value)){
       alert("Olá " + login.value + " Seja bem vindo !")
   }
   else{
       alert("Login ou senha incorreto !")
   }

}

