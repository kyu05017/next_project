
import Link from "next/link";
import {Board} from "./board/Board";

export default function Home() {
  return (
    <>
      <h1>비회원 게시판</h1>
      <button><Link href={"/create"}>글 작성</Link></button>
        {/*게시판*/}
        <Board/>
    </>
  );
}
