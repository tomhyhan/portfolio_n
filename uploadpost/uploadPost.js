import { allPosts } from '../.contentlayer/generated/index.mjs';
import { deleteAllPost, putPost } from './db.js';

async function upload(arg) {
  switch (arg) {
    case "delete":
        await deleteAllPost();
        break;
    case "upload":
        allPosts.map(async (post) => {
          await putPost(post.slug);
        });
        break;
    default:
        throw new Error("Invalid argument");
  }
}

const firstArg = process.argv[2]
await upload(firstArg)