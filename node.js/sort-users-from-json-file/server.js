const http = require('http'),
    fs = require('fs'),
    url = require('url');

const server = http.createServer((req, res) => {
    var arr = [],
        flag,
        usersJson = fs.readFileSync('data/users.json'),
        usersParse = JSON.parse(usersJson),
        users = JSON.stringify(usersParse);

    if (req.url === '/users') {
        //respond all users in json format 
        res.setHeader('Content-Type', 'application/json')
        res.writeHead(200);
        res.end(users);
    }

    //respond user with specified id in json format
    usersParse.forEach((i) => {
        if (req.url === '/users/' + i.id) {
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(i));
            flag = true;
        } else {
            flag = false;
        }
    });

    //respond all users with male gender in json format
    if (req.url === '/users/gender/male') {
        usersParse.forEach((i) => {
            if (i.gender == 'male') {
                res.writeHead(200);
                arr.push(i);
                flag = true;
            } else {
                flag = false;
            };
        });
        res.end(JSON.stringify(arr));
    };

    //respond all users with male female in json format
    if (req.url === '/users/gender/female') {
        usersParse.forEach((i) => {
            if (i.gender == 'female') {
                res.writeHead(200);
                arr.push(i);
                flag = true;
            } else {
                flag = false;
            }
        });
    };
    if (flag === false) {
        res.end("No such user in file!");
    }
    res.end(JSON.stringify(arr));
});

server.listen(3000);
console.log('Server is running!');
