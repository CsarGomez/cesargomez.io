import { getSortedPosts } from '@/app/helpers/getBlogPosts';
import PostItem from '@/app/components/blog/PostItem';

const BlogPage = () => {
  const posts = getSortedPosts();

  return (
    <main className='py-10 px-5 md:px-10 md:max-w-[1024px] mx-auto flex flex-col gap-10'>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </main>
  );
};

export default BlogPage;
