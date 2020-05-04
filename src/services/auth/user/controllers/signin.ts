import { newToken } from '../controllers'
import { User } from '../models/'

export const signin = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ message: 'need email and password' })
    }

    const invalid = { message: 'Invalid email and passoword combination' }

    try {
        const user = await User.findOne({ email: req.body.email })
        .select('email password')
        .exec()

        if (!user) {
            return res.status(401).send(invalid)
        }
        console.log(user)

        const match = await user.schema.methods.checkPassword(user, req.body.password)

        if (!match) {
            return res.status(401).send(invalid)
        }

        const token = newToken(user)
            return res.status(201).send({ token })
    } catch (e) {
        console.error(e)
        res.status(500).end()
    }
}