import { marked } from 'marked'

/**
 * Convert markdown string to HTML
 * @param {string} markdown - Markdown text
 * @returns {string} HTML string
 */
export function markdownToHtml(markdown) {
  return marked.parse(markdown)
}

/**
 * Sanitize HTML (basic implementation)
 * @param {string} html - HTML string
 * @returns {string} Sanitized HTML
 */
export function sanitizeHtml(html) {
  // Basic sanitization - in production use a proper library like DOMPurify
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
}
