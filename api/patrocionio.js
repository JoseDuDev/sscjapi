module.exports = function (app, fs) {

  app.get("/api/patrocinio", function (req, res) {
    fs.readFile("data/patrocinio.json", "utf8", function (err, data) {
      if (err) {
        var response = { status: false, resultado: err };
        res.json(response);
      } else {
        var obj = JSON.parse(data);
        
        var response = { status: true, resultado: obj };
        res.json(response);
      }
    });
  });

  app.post("/api/patrocinio", function (req, res) {
    fs.readFile("data/patrocinio.json", "utf8", function (err, data) {
      if (err) {
        var response = { status: false, resultado: err };
        res.json(response);
      } else {
        var obj = JSON.parse(data);
        console.log(req.body);
        req.body.patrocinio_id = obj.patrocinios.length + 1;
        console.log(req.body);

        obj.patrocinios.push(req.body);

        fs.writeFile("data/patrocinio.json", JSON.stringify(obj), function (
          err
        ) {
          if (err) {
            var response = { status: false, resultado: err };
            res.json(response);
          } else {
            var response = {
              status: true,
              resultado: "Registro incluso com sucesso",
            };
            res.json(response);
          }
        });
      }
    });
  });

  app.put("/api/patrocinio", function (req, res) {
    fs.readFile("data/patrocinio.json", "utf8", function (err, data) {
      if (err) {
        var response = { status: "falha", resultado: err };
        res.json(response);
      } else {
        var obj = JSON.parse(data);

        obj.patrocinios[req.body.patrocinio_id - 1].nome = req.body.nome;
        obj.patrocinios[req.body.patrocinio_id - 1].site = req.body.site;

        fs.writeFile("data/patrocinio.json", JSON.stringify(obj), function (
          err
        ) {
          if (err) {
            var response = { status: "falha", resultado: err };
            res.json(response);
          } else {
            var response = {
              status: "sucesso",
              resultado: "Registro editado com sucesso",
            };
            res.json(response);
          }
        });
      }
    });
  });

  app.delete("/api/patrocinio", function (req, res) {
    fs.readFile("usuarios.json", "utf8", function (err, data) {
      if (err) {
        var response = { status: "falha", resultado: err };
        res.json(response);
      } else {
        var obj = JSON.parse(data);

        delete obj.usuarios[req.body.usuario_id - 1];

        fs.writeFile("usuarios.json", JSON.stringify(obj), function (err) {
          if (err) {
            var response = { status: "falha", resultado: err };
            res.json(response);
          } else {
            F;
            var response = {
              status: "sucesso",
              resultado: "Registro excluído com sucesso",
            };
            res.json(response);
          }
        });
      }
    });
  });

};
