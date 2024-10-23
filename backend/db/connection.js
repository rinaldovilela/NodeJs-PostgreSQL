const {Pool} = require('pg');

const pool = new Pool({
    connectionString: "postgresql://app_garantias_user:O6LkLTqhtU1C5bQ9vsSpxldwC2RUiVEE@dpg-cs7rl4lumphs73acs81g-a.oregon-postgres.render.com/app_garantias",
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = {pool}