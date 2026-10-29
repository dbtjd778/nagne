// Update only when the corresponding content changes; never use build time.
export const catalogueUpdatedAt = '2026-10-29'
export const homeUpdatedAt = '2026-10-29'
export const aboutUpdatedAt = '2026-10-29'
export const originalPublishedAt = '2026-10-20'
export const guideUpdatedAt = guide => guide.updatedAt || originalPublishedAt
