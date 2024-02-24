'use client'
import Link from "next/link";
import {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";

export default function DetailedPage(props){
    const [detail, setDetail] = useState({})
    const router = useRouter();
    // url 파람으로 받아온 게시글 번호
    const params = useParams();
    const bno = params.bno
    // 상세 게시글 요청
    const fetchData = () => {
        fetch(`/api/read?bno=${bno}`)
            .then( data => data.json())
            .then( data => setDetail(()=>data));
    }

    // 삭제 요청
    const fetchDeleteData = (password) => {
        fetch('/api/delete',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({bno:bno, bpassword:password})
        })
            .then(res => res.json() )
            .then(res => {
                switch (res) {
                    case 'fail':
                        alert('삭제 실패');
                        break;
                    case 'success':
                        alert('삭제 성공')
                        router.push(`/`);
                }
            })
            .catch(error => console.log(error))
    }

    // onClick 시 삭제 함수
    const onDelete = () => {
        const password = prompt('비밀번호를 입력해주세요')
        fetchDeleteData(password);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>
            <h1>상세 페이지</h1>
            <p>제목 : {detail.btitle}</p>
            <p>내용 : {detail.bcontent}</p>
            <p>날짜 : {detail.b_date}</p>
            <Link href={"/update/"+detail.bno}><button type={"button"} >수정</button></Link>
            <button type={"button"} onClick={()=>{onDelete()}}>삭제</button>
        </div>

    )
}