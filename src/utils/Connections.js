import mysql from 'mysql2/promise'
import { Pool } from 'pg'

/*
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
    waitForConnections: true
})*/
const pool = new Pool({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "Tahulzen15_",
    database: "db_perpusda"
})

export default pool