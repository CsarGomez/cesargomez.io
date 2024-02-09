import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import dayjs from 'dayjs';
import { remark } from 'remark';
import html from 'remark-html';
import { Post } from '../models/post.model';

const postDirectory = path.join(process.cwd(), 'content/posts');

export const getSortedPosts = (): Post[] => {
  const fileNames = fs.readdirSync(postDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      author: matterResult.data.author,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      tags: matterResult.data.tags,
    };
  });

  return allPostsData
    .sort((a, b) => {
      const format = 'YYYY-MM-DD';
      const dateOne = dayjs(a.date, format);
      const dateTwo = dayjs(b.date, format);
      if (dateOne.isBefore(dateTwo)) {
        return -1;
      } else if (dateTwo.isAfter(dateOne)) {
        return 1;
      } else {
        return 0;
      }
    })
    .reverse();
};

export const getPostData = async (id: string) => {
  const fullPath = path.join(postDirectory, `${id}.md`);

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    author: matterResult.data.author,
    date: matterResult.data.date,
    excerpt: matterResult.data.excerpt,
    tags: matterResult.data.tags,
  };
};
