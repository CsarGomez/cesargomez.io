import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import dayjs from 'dayjs';
import { remark } from 'remark';
import html from 'remark-html';
import { ProjectPost } from '@/interfaces/work-post.interface';

const projectDirectory = path.join(process.cwd(), 'content/projects');

export const getSortedProjects = (): ProjectPost[] => {
  const fileNames = fs.readdirSync(projectDirectory);

  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(projectDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      image: matterResult.data.image,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      stack: matterResult.data.stack,
    };
  });

  return allProjectsData
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

export const getProjectData = async (id: string) => {
  const fullPath = path.join(projectDirectory, `${id}.md`);

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
    image: matterResult.data.image,
    date: matterResult.data.date,
    excerpt: matterResult.data.excerpt,
    stack: matterResult.data.stack,
  };
};
