import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { Skeleton } from "../components/Skeleton";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({ id: id || "" });
    if (loading) {
        return <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
    }
    if (!blog) {
        return <div>Blog not found.</div>;
    }
    return (
        <div>
            <FullBlog blog={blog} />
        </div>
    )
}