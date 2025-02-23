export const getPostDetailsFunc = async(params) => {
    const id = params.postId;
    const response = await fetch('https://dummyjson.com/posts/'+id);
    const data = response.json();
    return data;
}