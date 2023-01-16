const fs = require('fs');
const path = require('path')

export default function handler(req, res) {
    let usersInfo = JSON.parse(fs.readFileSync(path.join(path.resolve(process.cwd(), 'database'), 'users.json')).toString())

    if (!req.headers.hasOwnProperty('x-token'))
        res.status(400).json({
            "success": false,
            "error": {
              "error-type": "bad-request",
              "error-code": 1,
              "error-message": "Any token has been given"
            }
        })
    if (!usersInfo.hasOwnProperty(req.headers['x-token'].split('.')[0]))
        res.status(400).json({
            "success": false,
            "error": {
              "error-type": "bad-request",
              "error-code": 2,
              "error-message": "User doesn't exists"
            }
        })

    if (usersInfo[req.headers['x-token'].split('.')[0]].auth == req.headers['x-token'].split('.')[1] && usersInfo[req.headers['x-token'].split('.')[0]].permissions.users) {
        if (!req.headers.hasOwnProperty('x-username') && !req.headers.hasOwnProperty('x-password'))
            res.status(400).json({
                "success": false,
                "error": {
                  "error-type": "bad-request",
                  "error-code": 3,
                  "error-message": "Username and password haven't been given"
                }
            })
        else if (!req.headers.hasOwnProperty('x-username'))
            res.status(400).json({
                "success": false,
                "error": {
                  "error-type": "bad-request",
                  "error-code": 4,
                  "error-message": "Username hasn't been given"
                }
            })
        else if (!req.headers.hasOwnProperty('x-password'))
            res.status(400).json({
                "success": false,
                "error": {
                  "error-type": "bad-request",
                  "error-code": 5,
                  "error-message": "Password hasn't been given"
                }
            })
        else if (req.headers['x-username'].length < 3)
            res.status(400).json({
                "success": false,
                "error": {
                  "error-type": "bad-request",
                  "error-code": 6,
                  "error-message": "Username isn't long enough"
                }
            })
        else if (usersInfo.hasOwnProperty(req.headers['x-username']))
            res.status(400).json({
                "success": false,
                "error": {
                  "error-type": "bad-request",
                  "error-code": 7,
                  "error-message": "Username already exists"
                }
            })
        else {
            usersInfo[req.headers['x-username']] = {
                "auth": req.headers['x-password'],
                "permissions": {
                    "users": req.headers.hasOwnProperty('x-permission-users') ? req.headers['x-permission-users'] == "true" ? true : false : false,
                    "pages": req.headers.hasOwnProperty('x-permission-pages') ? req.headers['x-permission-pages'] == "true" ? true : false : false,
                    "containers": req.headers.hasOwnProperty('x-permission-containers') ? req.headers['x-permission-containers'] == "true" ? true : false : false
                }
            }

            fs.writeFileSync(path.join(path.resolve(process.cwd(), 'database'), 'users.json'), JSON.stringify(usersInfo))

            res.status(200).json({
                "success": true,
                "message": "Record successfully added"
            })
        }
    }
    else
        res.status(401).json({
            "success": false,
            "error": {
              "error-type": "access-decline",
              "error-code": 1,
              "error-message": "Invalid token"
            }
        })
}
