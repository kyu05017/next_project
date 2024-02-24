import getConnect from "../../db/db";

// 게시글 등록
export default function deleteHandler(req, res) {

    const {bno, bpassword} = req.body;
    const query = `UPDATE board SET bdeleteyn = 'Y' where bno = ${bno} AND bpassword = ${bpassword}`;

    const result = getConnect(query)
    result
        .then( datas => res.status(200).json(datas.changedRows === 0 ? 'fail' : 'success'))
        .catch( error => res.status(500).json({error:'Internal Server Error'}) )

}