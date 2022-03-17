import path from 'path';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { application } from './schemas/index.js';
import sequelize from './config/connection.js';

const PORT = process.env.PORT || 3001;
const app = express();

let apolloServer = null;

async function startServer() {
    const schema = application.createSchemaForApollo();

    apolloServer = new ApolloServer({
        schema,
    });
    
    await apolloServer.start();
    
    apolloServer.applyMiddleware({ app });
}

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 API server running on port ${PORT}!`);
        console.log(`GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`);
    });
});
