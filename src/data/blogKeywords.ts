/**
 * Target SEO Keywords mapping for WordPress Blog Posts
 * Keyed by post slug.
 */
export const blogKeywordsMap: Record<string, string> = {
  'why-is-vernacular-architecture-still-relevant-in-modern-construction':
    'vernacular architecture Mangalore, vernacular construction Coastal Karnataka, traditional eco-friendly architecture, climate responsive design, local material construction',
  'how-does-stamped-concrete-work-in-mangalore':
    'stamped concrete in Mangalore, stamped concrete work, decorative concrete flooring, stamped paving, concrete contractors Mangalore',
  'how-to-verify-the-quality-of-cement-for-construction':
    'verify quality of cement, cement quality test at site, on-site cement testing, cement inspection construction, civil engineering cement tests',
  'importance-of-sand-quality-in-building-construction':
    'importance of sand quality, sand in building construction, M-sand quality, river sand testing, concrete sand standards',
  'types-of-cement-used-in-construction':
    'types of cement in construction, OPC vs PPC, rapid hardening cement, sulphate resisting cement, cement selection guide',
  'design-bid-build-vs-design-build-delivery-methods':
    'Design-Bid-Build vs Design-Build, DBB vs DB, project delivery methods, commercial construction contracts',
  'best-sand-used-in-construction':
    'best sand used in construction, types of sand in construction, M-sand vs river sand, pit sand, concrete sand selection',
  '8-questions-to-ask-before-hiring-a-commercial-building-contractor':
    'questions to ask commercial building contractor, hiring commercial contractor Mangalore, commercial construction contractor checklist',
  '7-ways-to-optimise-budget-for-commercial-building-construction':
    'optimise commercial building budget, commercial construction cost reduction, building budget tips Mangalore, commercial building contractor',
  'commercial-building-renovation-remodeling-in-mangalore-udupi':
    'commercial building renovation Mangalore, commercial remodeling Udupi, retail renovation contractors, office renovation Mangalore'
};

/**
 * Helper to get proper keywords for any blog post
 */
export function getBlogKeywords(slug: string, post?: any): string {
  // 1. Check predefined keyword map
  if (slug && blogKeywordsMap[slug]) {
    return blogKeywordsMap[slug];
  }

  // 2. Check Yoast keywords if available
  if (post?.yoast_head_json?.keywords) {
    if (Array.isArray(post.yoast_head_json.keywords)) {
      return post.yoast_head_json.keywords.join(', ');
    }
    return String(post.yoast_head_json.keywords);
  }

  // 3. Check WordPress tags if entered
  const tags = (post?._embedded?.['wp:term']?.[1] || []).map((t: any) => t.name).filter(Boolean);
  if (tags.length > 0) {
    return tags.join(', ');
  }

  // 4. Check categories (excluding 'Uncategorized')
  const categories = (post?._embedded?.['wp:term']?.[0] || [])
    .map((c: any) => c.name)
    .filter((c: string) => c && c.toLowerCase() !== 'uncategorized');

  // 5. Fallback: Generate concise keyword phrases from slug
  const cleanSlug = slug || post?.slug || '';
  const slugKeywords = cleanSlug
    ? cleanSlug
        .split('-')
        .filter((word: string) => !['how', 'to', 'the', 'of', 'for', 'in', 'and', 'vs', 'a', 'an', '7', '8', '6'].includes(word.toLowerCase()))
        .join(' ')
    : '';

  const result = [
    slugKeywords,
    categories.length > 0 ? categories.join(', ') : null,
    'Construction companies in Mangalore',
    'Sri Lakshmi Construction'
  ].filter(Boolean);

  return result.join(', ');
}
