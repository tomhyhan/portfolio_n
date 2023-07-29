import { Post } from "contentlayer/generated";

export function algoPageGenerator(posts: Post[], URL:string) {
    return posts.map((post) => {
        return {
            url: URL + `/algo/${post.slug}`,
            lastModified: new Date(),
        }
    })
}