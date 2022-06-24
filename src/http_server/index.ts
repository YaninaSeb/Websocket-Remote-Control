import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';

export const httpServer = http.createServer(function (req, res) {
    const __dirname = path.resolve(path.dirname(''));
    const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);

    // try {
    //     let readStream = fs.createReadStream(file_path);

    //     let res: any;
    //     readStream.on('data', (chunk) => {
    //         res += chunk;
    //     });
    //     readStream.on('end', () => {
    //         res.writeHead(200);
    //         res.end(res);
    //     });
    // } catch (err) {
    //     res.writeHead(404);
    //     res.end(JSON.stringify(err));
    //     return;
    // }

    fs.readFile(file_path, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});
