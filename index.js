#!/usr/bin/env node
const http = require('http')

http.createServer((req, res) => {
    res.write('teste')
    res.end()
}).listen(8088)