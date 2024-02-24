'use client'
import {useEffect, useState} from "react";
import Link from "next/link";

export function Board(){
    const [boardData, setBoardData] = useState([]);

    const fetchData = () => {

        fetch('/api/readAll',{method: 'GET'})
            .then(res => res.json() )
            .then(data => {setBoardData(()=>data);})
            .catch(error => console.log(error))

    }

    const fetchDelete = (bno) => {

        fetch('/api/delete',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({bno:bno})
        })
            .then(res => fetchData() )
            .catch(error => console.log(error))

    }

    useEffect(() => {
        fetchData();
    }, []);
    return(
        <>
            {boardData.map((data)=>
                (
                    <div style={{borderTop:'1px solid #e8e8e8', borderBottom:'1px solid #e8e8e8'}} key={`board`+data.bno}>
                        <Link href={'/read/' + data.bno}>
                            <div>
                                <p>제목: {data.btitle}</p>
                                <p>내용: {data.bcontent}</p>
                            </div>
                        </Link>

                    </div>
                )
            )}
        </>
    )
}