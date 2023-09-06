const testAPI = (req, res) => {
    return res.status(200).json({
        message: 'let go',
        data: 've que'
    })
}

module.exports = {
    testAPI
}