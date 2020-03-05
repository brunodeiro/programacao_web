<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- Custom fonts for this theme -->
    <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">

    <!-- Theme CSS -->
    <link href="../css/freelancer.min.css" rel="stylesheet">
    <link href="../css/novo.css" rel="stylesheet">

</head>

<body>

    <form class="form-horizontal">
    <fieldset>

    <!-- Form Name -->
    <legend>Formulario de Mensagens</legend>

    <!-- Text input-->
    <div class="form-group">
        <label class="col-md-4 control-label" for="nome">Nome:</label>  
        <div class="col-md-5">
            <input id="nome" name="nome" type="text" placeholder="Digite seu nome" class="form-control input-md" required="">
            <span class="help-block">o nome é importante para identificar o componente</span>  
        </div>
    </div>

    <!-- Text input-->
    <div class="form-group">
        <label class="col-md-4 control-label" for="email">E-mail:</label>  
        <div class="col-md-5">
            <input id="email" name="email" type="text" placeholder="Digite seu e-mail" class="form-control input-md" required="">
            <span class="help-block">E-mail precisa ser valido</span>  
        </div>
    </div>

    <!-- Text input-->
    <div class="form-group">
        <label class="col-md-4 control-label" for="telefone">Telefone:</label>  
        <div class="col-md-5">
            <input id="telefone" name="telefone" type="text" placeholder="Digite seu telefone" class="form-control input-md" required="">
            <span class="help-block">Telefone é importante para a identificação</span>  
        </div>
    </div>

    <!-- Textarea -->
    <div class="form-group">
        <label class="col-md-4 control-label" for="mensagem">Mensagem:</label>
        <div class="col-md-4">                     
            <textarea class="form-control" id="mensagem" name="mensagem">Digite sua mensagem</textarea>
        </div>
    </div>

    <!-- Button -->
    <div class="form-group">
        <label class="col-md-4 control-label" for="enviar"></label>
        <div class="col-md-4">
            <button id="enviar" name="enviar" class="btn btn-primary">Enviar</button>
        </div>
    </div>

    </fieldset>
    </form>

    <!-- Bootstrap core JavaScript -->
    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Contact Form JavaScript -->
    <script src="../js/jqBootstrapValidation.js"></script>
    <script src="../js/contact_me.js"></script>
    <script src="../js/formulario.js"></script>

    <!-- Custom scripts for this template -->
    <script src="../js/freelancer.min.js"></script>

</body>
</html>