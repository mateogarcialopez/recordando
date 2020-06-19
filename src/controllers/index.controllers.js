const index = {};

index.IndexPage = (req, res) => {
    res.send('index page');
}

index.uploadGet = (req, res) => {     
    res.render('uploads');
}

index.uploadPost = (req, res) => {
    console.log(req.file);
    res.send('uploaded');
}

index.profileImage = (req, res) => {
    res.send('profileImage');
}

index.deleteImage = (req, res) => {
    res.send('deleteImage');
}

module.exports = index