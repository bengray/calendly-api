module.exports = function(app, db) {
    app.post('/calendly', (req, res) => {
        db.collection('events').insert(req.body, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(200);
            }
        });
    });

    app.get('/calendly', (req, res) => {
        db.collection('events').find()
        .sort({time: -1})
        .limit(50) // would be cool to add pagination here
        .toArray((err, docs) => {
            if (err) {
                res.send('error fetching events');
            } else {
                res.send(docs);
            }
        });
    });
}   
