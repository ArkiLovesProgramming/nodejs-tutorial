const fs = require('fs')
try {
    fs.writeFileSync('test2.txt', 'I like you again!');
} catch (e) {
    console.log(e);
}