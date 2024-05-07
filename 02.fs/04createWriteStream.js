const fs = require('fs')

let ws = fs.WriteStream('./test3.txt');

ws.write('I am arki\r\n')
ws.write('I am a experienced developer\r\n')

ws.end()