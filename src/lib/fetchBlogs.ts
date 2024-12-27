export const fetchBlogs = async (category:string="", search:string = "") => {
try {
    const response = await fetch (`https://news-api-next-js-kappa.vercel.app/api/news?category=${category}&search=${search}`);
    if(!response.ok){
        throw new Error (`Failed to fetch blogs : ${response.status}`)
    }
    const data = await response.json ();
    return data;

} catch (error){
    console.error('Error fetching blogs data', error);
    return []
}




} 