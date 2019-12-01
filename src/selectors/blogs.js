import moment from "moment"

export default ( blogs,  {text , sortBy}) => {
    return blogs.filter((blog)=>{
        const textMatch = typeof text !== "string" || blog.title.toLowerCase().includes(text.toLowerCase())
        return textMatch
    }).sort((a,b)=>{
        if ( sortBy === "newest" ) {
            return a.createdAt > b.createdAt ? 1 : -1
        }
        if ( sortBy === "oldest" ) {
            return a.createdAt < b.createdAt ? 1 : -1
        }
    })
}