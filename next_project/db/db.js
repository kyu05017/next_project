import mysql from "mysql";
// mysql pool 생성
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "practice_next"
});
export default function getConnect(query){
     return new Promise((resolve, reject) => {

            pool.getConnection((err, conn) => {

                if (err) {
                    console.error('DB연결에러'+err.stack);
                    reject(err);
                    return;
                }

                conn.query(query, (error, results) => {

                    if (error) {
                        console.error('쿼리에러' + error.stack);
                        reject(error);
                        return;
                    }

                    resolve(results);

                });
                // 커넥트 반환
                conn.release();

            });
        });
}