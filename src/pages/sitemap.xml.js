
export async function GET() {
  const base = 'https://www.mad2moi.com/blog';
  const posts = await Astro.glob('./blog/*.md');
  const urls = posts.map(p => `${base}/${p.file.split('/').pop().replace('.md','')}`);
  const staticUrls = [`${base}/`, `${base}/categorie/libertinage`, `${base}/categorie/lgbt`, `${base}/categorie/sex-shop`];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...urls].map(u=>`<url><loc>${u}</loc></url>`).join('')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type':'application/xml' } });
}
