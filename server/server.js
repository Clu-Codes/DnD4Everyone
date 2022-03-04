const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes); 

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


sequelize.sync({ force: false })
    .then( () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
        });
    });

    // Still unsure if the routes work - they need to be tested in Postman.  