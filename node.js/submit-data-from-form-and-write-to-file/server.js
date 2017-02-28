const http = require('http'),
    fs = require('fs'),
    url = require('url');

function form(req) {
    var body = "<form method='post'><textarea name='text' rows='14' cols='50' style='padding:20px; text-indent:55px;'></textarea><br><br><button type='submit'>Submit</button></form>";
    return '<!DOCTYPE html>' + '<html><head></head><body>' + body + '</body><html>';
};

var server = http.createServer((req, res) => {
    var formHtml = form(req);
    var arr = [];
    if (req.url === '/getDataFromFile') {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        var textFile = fs.readFileSync('data.txt');
        res.end(textFile);
    } else if (req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(formHtml);
    } else if (req.method === 'POST') {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        req.on('data', chunk => arr.push(chunk));
        req.on('end', () => {
            var info = Buffer.concat(arr).toString('ascii');
            var message = decodeURIComponent(info.replace(/\+/g, '%20'));
            var cut = /text=/;
            if (message.match(cut)) {
                message = message.replace(cut, '');
            };
            fs.writeFileSync('data.txt', message);
            console.log('Info was saved to data.txt');
        });
        res.end(formHtml);
    } else {
        res.writeHead(200);
        res.end();
    };
});

server.listen(3000);
console.log('Server is running!');
