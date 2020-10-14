exports.parseV1Data = (req, res) => {
    let version = req.params.version; 
    let result;
    if(version === 'v1')
    {
        result = {
            firstName: 'JOHN0000',
            lastName: 'MICHAEL000',
            clientId: '9994567'
        }
    } 
    else if (version === 'v2')
    {
        result = {
            firstName: 'JOHN',
            lastName: 'MICHAEL',
            clientId: '999-4567'
        }
    }
    res.status(200).json(
        result 
    )
}
