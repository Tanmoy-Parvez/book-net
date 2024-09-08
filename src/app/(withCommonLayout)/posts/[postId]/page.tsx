import PostDetails from "@/components/ui/PostDetails";
import { getPost } from "@/services/PostServices";

type TProps = {
  params: {
    postId: string;
  };
};

const PostDetailPage = async ({ params }: TProps) => {
  const post = await getPost(params.postId);
  return (
    <div className="p-5">
      <PostDetails post={post} />
    </div>
  );
};

export default PostDetailPage;
