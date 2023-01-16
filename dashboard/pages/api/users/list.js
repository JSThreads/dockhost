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
    for (let user in usersInfo) 
      delete usersInfo[user].auth

    res.status(200).json({
      "success": true,
      "data": usersInfo
    })
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
