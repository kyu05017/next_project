
export default async function DetailedPage(props){
    const bno = props.params.bno
    const detail = await fetch(`/api/read`,{method: 'GET'});


}