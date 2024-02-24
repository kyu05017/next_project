// 전체 읽기
import getConnect from "../../db/db";

export default function readAllHandler(req, res) {
    // 게시글 읽기
    const query = `SELECT * from board`;

    getConnect(query)
        .then( datas => res.status(200).json(datas) )
        .catch( error => res.status(500).json({error:'Internal Server Error'}) )

}