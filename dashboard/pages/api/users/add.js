const fs = require('fs');
const path = require('path')
const { sha256 } = require('js-sha256')

export default function handler(req, res) {
  let usersInfo = JSON.parse(fs.readFileSync(path.join(path.resolve(process.cwd(), 'database'), 'users.json')).toString())

  try {
    if (usersInfo[req.headers['x-token'].split('.')[0]].auth == req.headers['x-token'].split('.')[1] && usersInfo[req.headers['x-token'].split('.')[0]].permissions.users) {

      if (!req.headers.hasOwnProperty('x-username') && !req.headers.hasOwnProperty('x-password'))
        res.status(400).json({ "bad-request": 1 })
      else if (!req.headers.hasOwnProperty('x-username'))
        res.status(400).json({ "bad-request": 2 })
      else if (!req.headers.hasOwnProperty('x-password'))
        res.status(400).json({ "bad-request": 3 })
      else if (req.headers['x-username'].length < 3)
        res.status(400).json({ "bad-request": 4 })
      else if (usersInfo.hasOwnProperty(req.headers['x-username']))
        res.status(400).json({ "bad-request": 5 })
      else  if (req.headers['x-password'].length < 6) 
        res.status(400).json({ "bad-request": 6 })
      else {
        usersInfo[req.headers['x-username']] = {
            "auth": sha256(req.headers['x-password']),
            "permissions": {
                "users": req.headers.hasOwnProperty('x-permission-users') ? req.headers['x-permission-users'] : false,
                "pages": req.headers.hasOwnProperty('x-permission-pages') ? req.headers['x-permission-pages'] : false,
                "containers": req.headers.hasOwnProperty('x-permission-containers') ? req.headers['x-permission-containers'] : false
            }
        }

        fs.writeFileSync(path.join(path.resolve(process.cwd(), 'database'), 'users.json'), JSON.stringify(usersInfo))

        res.status(200).json({ "added-record": "successfully" })
      }
    }
    else
        res.status(401).json({ "access": "decline" })
  }
  catch { res.status(401).json({ "access": "decline" }) }
}
