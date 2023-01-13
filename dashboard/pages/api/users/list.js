const fs = require('fs');
const path = require('path')

export default function handler(req, res) {
  let usersInfo = JSON.parse(fs.readFileSync(path.join(path.resolve(process.cwd(), 'database'), 'users.json')).toString())

  try {
    if (usersInfo[req.headers['x-token'].split('.')[0]].auth == req.headers['x-token'].split('.')[1] && usersInfo[req.headers['x-token'].split('.')[0]].permissions.users) {
      for (let user in usersInfo) 
        delete usersInfo[user].auth

      res.status(200).json(usersInfo)
    }
    else
      res.status(401).json({ "access": "decline" })
  }
  catch { res.status(401).json({ "access": "decline" }) }
}
