module.exports = function (app, fs) {

    app.get("/api", (req, res) => {
      res.send('Ok')
    });
  
    var patrocionio = require('./patrocionio');
    patrocionio(app, fs);
  
    // var marca = require('./marca');
    // marca(app);
  
    // var tipomedida = require('./tipomedida');
    // tipomedida(app);
    
    // var produto = require('./produto');
    // produto(app);
    
    // var lista = require('./lista');
    // lista(app);
    
    // var usuario = require('./usuario');
    // usuario(app);
  
  }