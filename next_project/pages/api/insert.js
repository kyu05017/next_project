import getConnect from "../../db/db";

// 게시글 등록
export default function insertHandler(req, res) {
    const { btitle, bcontent, bpassword } = req.body;

    const query = `INSERT INTO board( btitle, bcontent, bpassword ) 
                        VALUES('${btitle}', '${bcontent}', '${bpassword}')`;

    const result = getConnect(query)

    result
        .then( datas => {console.log('정상실행', datas);res.status(200).json(datas)} )
        .catch( error => res.status(500).json({error:'Internal Server Error'}) )


}