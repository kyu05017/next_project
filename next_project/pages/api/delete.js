import getConnect from "../../db/db";

// 게시글 등록
export default function deleteHandler(req, res) {

    const {bno} = req.body;

    const query = `DELETE FROM board where bno = ${bno}`;

    const result = getConnect(query)

    result
        .then( datas => {console.log('정상실행', datas);res.status(200).json(datas)} )
        .catch( error => res.status(500).json({error:'Internal Server Error'}) )


}