const  controller = {};
const rememberTask = require('./missions/taskRemember');

controller.inicio = (req,res)=>{
    res.render('index');
}

controller.game = (req, res)=>{
    res.render('mapa');
}

controller.contact = (req, res) =>{
    res.render('rememberOrderTask');
}


module.exports = controller;


