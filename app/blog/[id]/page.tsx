import Layout from "@/components/layout/Layout"
import data from "@/util/blog.json"

interface Post {
    id: number
    title: string
    img: string
    category: string
    author: string
    date: string
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    return data.map((post: Post) => ({
        id: post.id.toString(),
    }))
}

export default function BlogDetails({ params }: { params: { id: string } }) {
    const blogPost = data.find((post: Post) => String(post.id) === params.id)

    if (!blogPost) {
        return (
            <Layout>
                <div>Blog post not found</div>
            </Layout>
        )
    }

    return (
        <>
            <Layout>
                {blogPost.title}
            </Layout>
        </>
    )
}
