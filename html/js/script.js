//alert()
//console.log
//console.warn
//console.error

{/* <div id="form_pokesystem" >
<form action="pokesystem.php" method="get">
<div id="titulo">
    <h3>Pokesystem</h3>
</div>

<div id="nome">
    <label>Nome:</label>
    <input type="text" id="nome_user" placeholder="Digite o nome do pokemon"/>                
</div>    

<div id="tipo">
    <label>Tipo:</label>
    <select id="tipo">
        <option value="">--Selecione</option>
        <option value="eletrico" id="tipo_eletrico">Elétrico</option>
        <option value="fogo" id="tipo_fogo">Fogo</option>
        <option value="agua" id="tipo_agua">Água</option>
        <option value="terra" id="tipo_terra">Terra</option>
        <option value="gelo" id="tipo_gelo">Gelo</option>
        <option value="psiquico" id="tipo_psiquico">Psíquico</option>
        <option value="planta" id="tipo_planta">Planta</option>
    </select>
</div>

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

var loginEl = document.createElement("input")
loginEl.setAttribute("type","text")
loginEl.setAttribute("placeholder","Digite seu login")
loginEl.setAttribute("id","login") 
menu.appendChild(loginEl)

var senhaEL = document.createElement("input")
senhaEL.setAttribute("type","password")
senhaEL.setAttribute("placeholder","Digite a sua senha")
senhaEL.setAttribute("id","senha")
menu.appendChild(senhaEL)

var entrarEl = document.createElement("button")
entrarEl.innerHTML = "Entrar";
entrarEl.setAttribute("onclick", "checarlogin()")
menu.appendChild(entrarEl)



function checarlogin(){
   if ((useradmin === login.value) && (usersenha === senha.value)){
       alert("Olá " + login.value + " Seja bem vindo !")
   }
   else{
       alert("Login ou senha incorreto !")
   }

}

