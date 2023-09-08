const testAPI = (req, res) => {
    return res.status(200).json({
        message: 'let go',
        data: 've que'
    })
}

const handleRegister = (req, res) => {
    console.log("yes", req.body);
}

module.exports = {
    testAPI, handleRegister
}