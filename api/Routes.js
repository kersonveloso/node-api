const express = require('express');
const routes = express.Router();
const _ = require('lodash');

// API & Routes
let id = 1;
const members = require('./Members'); 

routes.route('/')
    .get((req, res) => {
        res.json(members);
    })
    .post((req, res) => {
        const member = {
            "id": ++id,
            "name": req.body.name,
            "age": req.body.age
        };
        members.push(member);
        res.json(member);
    });

routes.route('/:id')
    .get((req, res) => {
        const member = _.find(members, { "id": parseInt(req.params.id) });
        if(!member) res.status(500).json({"msg": `No member with id ${req.params.id} found`});
        res.json(member);
    })
    .put((req, res) => {
        let update = req.body;
        if(update.id) delete update.id;

        const index = _.findIndex(members, { "id": parseInt(req.params.id) });
        if(!index) res.status(500).json({"msg": `No member with id ${req.params.id} found`});
        else {
            const updatedMember = _.assign(members[index], update);
            res.json(updatedMember);
        }
    })
    .delete((req, res) => {
        const index = _.findIndex(members, { "id": parseInt(req.params.id) });
        if(!index) res.status(500).json({"msg": `No member with id ${req.params.id} found`});
        const deletedMember = members[index];
        members.splice(index, 1);
        res.json(deletedMember);
    });

// Error Handling Middleware 
routes.use((err, req, res, next) => {
    if (err) res.status(500).send(err);
});

module.exports = routes;