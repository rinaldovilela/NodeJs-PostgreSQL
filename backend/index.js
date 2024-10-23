const express = require('express');
const cors = require('cors'); // Importa o CORS
const { pool } = require('./db/connection');

const app = express();

app.use(cors());

const port = 3001; 

app.listen(port, () => {
    pool.connect().then(client => {
        console.log('Connected to the database');
        client.release();
    }).catch(err => {
        console.error('Error connecting to the database:', err);
    });
    console.log(`Server is running on port ${port}`);
});

app.get("/tutores", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM Proprietarios");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao consultar tutores");
    }
});

app.get("/pets" , async (req, res) => {
    console.log("Consultando a tabela pets ...")
    const result = await pool.query("SELECT * FROM Animais")
    res.json(result.rows);
})

app.get("/tratamentos" , async (req, res) => {
    const result = await pool.query("SELECT * FROM Tratamentos")
    res.json(result.rows)
})