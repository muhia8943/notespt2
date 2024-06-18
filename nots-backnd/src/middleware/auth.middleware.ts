import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1]

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
      if (err) {
        return res.sendStatus(403)
      }
      req.user = user
      next()
    })
  } else {
    res.sendStatus(401)
  }
}
