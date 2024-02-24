import getConnect from "../../db/db";

export default function readHandler(req, res){

    const bno = req.query.bno;

    // 개별 게시글 읽기
    const query = `SELECT * from board where bno = ${bno}`;

    getConnect(query)
        .then( datas => {res.status(200).json({...datas[0],bpassword:''})} )
        .catch( error => res.status(500).json({error:'Internal Server Error'}) )

}