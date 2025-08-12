
import rss from '@astrojs/rss';
import cfg from '../../config.m2m.json';
export const GET = async () => {
  const posts = (await import.meta.glob('./*.md', { eager: true }));
  const items = Object.values(posts).map((p) => ({
    title: p.frontmatter.title,
    description: p.frontmatter.description,
    link: p.url,
    pubDate: new Date(p.frontmatter.pubDate),
  }));
  return rss({ title: 'Mad2Moi — Blog', description: 'Blog soft libertinage, LGBT, love & lifestyle.', site: cfg.siteUrl, items });
};
