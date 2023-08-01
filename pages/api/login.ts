import cookie from 'cookie'

export default (req, res) => {
    res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', req.body.token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600,
            sameSite: 'strict',
            path: '/'
        })
    )

    res.statusCode = 200;
    res.json({ success: true })
}