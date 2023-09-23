export function safeHTML({ elementId }: { elementId: string }): string {
  const element = document.getElementById(elementId);

  if (!element) {
    throw new Error(`Element with id "${elementId}" not found.`);
  }

  const content = element.innerHTML;

  const sanitizedContent = sanitizeHTML({ html: content });

  const encodedContent = escapeHtml({ html: sanitizedContent });

  return encodedContent;
}

function sanitizeHTML({ html }: { html: string }): string {
  const cleanedHTML = html.replace(
    /<script[^>]*>[\s\S]*?<\/script>|on\w+="[^"]*"/gi,
    "",
  );

  return cleanedHTML;
}

function escapeHtml({ html }: { html: string }): string {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(html));
  return div.innerHTML;
}
