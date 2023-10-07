export type Post = {
  id: string;
  view: number;
};

export type Comment = {
  id: string;
  comment: string;
  authorId: string;
  postId: string;
  parentId: string;
  userEmail: string;
  userImage: string;
  date: string;
  deleted: boolean;
};

export type CommentList = {
  [key: string]: DenamoComment[];
};


export type CommentBody = {
  comment: string;
  email: string;
  image: string;
  post: string;
  parentId: string | null;
};

export type DenamoComment = {
  GSI1PK: { S: string };
  userImage: {
    S: string;
  };
  userEmail: { S: string };
  parentid: { S: string };
  authorid: { S: string };
  comment: { S: string };
  pk: { S: string };
  GSI1SK: { S: string };
  deleted: { BOOL: boolean };
};

export type CommentController = {
  postComment: (body: CommentBody) => Promise<any>;
  data: CommentList;
  isLoading: boolean;
  error: any;
  deleteComment: (commentId: string, parentId: string) => Promise<void>;
  editComment: (commentId: string, comment: string, parentId: string) => Promise<void>;
  isEditing: string | null;
  handleIsEditing: (commentId:string) => void;
  editCommentRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  commentRef: React.MutableRefObject<HTMLDivElement | null>;
  isNew: React.MutableRefObject<string | null>;
};
