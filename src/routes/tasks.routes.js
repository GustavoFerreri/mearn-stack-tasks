const express = require('express');
const { isModuleNamespaceObject } = require('util/types');
const router = express.Router();

router.get('/', (req, res) => {
    // reemplazamos res.send('Tasks'); por un objeto json
    res.json({
        status: 'OK'
    });
});

module.exports = router;