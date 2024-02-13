import { getSortedPosts } from '@/app/helpers/getBlogPosts';
import PostItem from '@/app/components/blog/PostItem';

const BlogPage = () => {
  const posts = getSortedPosts();

  return (
    <main className='py-10 px-5 md:px-10 md:max-w-[1024px] mx-auto flex flex-col items-center gap-10'>
      <section className='flex flex-col font-sans gap-5'>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
};

export default BlogPage;
