'use client'

import {useRouter} from "next/navigation";

export default function Create(){
    const router = useRouter();
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            const params = {
                btitle: e.target.title.value,
                bcontent: e.target.content.value,
                bpassword: e.target.password.value
            }
            fetch('/api/insert', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(params)
            })
                .then(res=> router.push('/'))
                .catch(error=>{console.error('Error', error); alert('등록 실패')})
        }}>
            <div>
                <input type={"text"} name={"title"} placeholder={"글 제목"}/>
            </div>
            <div>
                <textarea name={"content"} placeholder={"글 내용"}/>
            </div>
            <div>
                <input type={"password"} name={"password"} placeholder={"비밀번호"}/>
            </div>
            <button type={"submit"} value={"create"}>글 작성</button>
        </form>

    )

}