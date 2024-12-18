import mysql, {Pool} from 'mysql2/promise';

export const connection: Pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: 'root',
    password: 'root',
    database: 'task_list'
})