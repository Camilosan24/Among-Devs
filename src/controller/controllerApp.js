const  controller = {};

controller.inicio = (req,res)=>{
    res.render('index');
}

controller.game = (req, res)=>{
    res.render('mapa');
}


module.exports = controller;


