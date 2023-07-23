import { rehypeCode } from './src/lib/rehypeCode';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    publishedAt: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'Slug of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'Description of the post',
      required: true,
    },
    status: {
      type: 'string',
      description: 'Status of the post',
      required: true,
    },
    tags: {
      type: 'string',
      description: 'tags of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: './src/contents',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [[rehypePrettyCode], [rehypeCode]],
  },
});
// [rehypeCode]
