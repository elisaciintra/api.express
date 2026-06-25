const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express(); 
app.use(cors());
app.use(express.json());

//Rotas
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

//Tratamento de erros
const erroHandler = require('./middlewares/erroHandler');
app.use(erroHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

