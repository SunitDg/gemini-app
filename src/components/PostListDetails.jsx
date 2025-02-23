import { useLoaderData, useParams } from "react-router-dom";
import { getPostDetailsFunc } from "../store/getPostDetails";
import { useEffect } from "react";
import { useState } from "react";

function PostListDetails() {
    // const data = useLoaderData();
    const [data, setData] = useState({});
    // console.log(data)
    const params = useParams();
    console.log(params)
    useEffect(() => {
        const response = getPostDetailsFunc(params)
        response.then(res => setData(res))
    },[])
    return <>Post details :  <h1>{data.title}</h1></>
}

export default PostListDetails;