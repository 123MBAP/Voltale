import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = 'https://voltaleltd.com/images/favicon.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  keywords,
}) {
  const location = useLocation();

  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const setMetaTag = (selector, attribute, value) => {
      if (!value) return;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [attrName, attrVal] = selector.replace(/[\[\]]/g, '').split('=');
        element.setAttribute(attrName, attrVal ? attrVal.replace(/['"]/g, '') : '');
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    if (description) {
      setMetaTag('meta[name="description"]', 'content', description);
    }

    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'content', keywords);
    }

    const pageUrl = canonical || `https://voltaleltd.com${location.pathname === '/' ? '/' : location.pathname}`;

    setMetaTag('meta[property="og:title"]', 'content', ogTitle || title);
    setMetaTag('meta[property="og:description"]', 'content', ogDescription || description);
    setMetaTag('meta[property="og:url"]', 'content', pageUrl);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    if (ogImage) {
      setMetaTag('meta[property="og:image"]', 'content', ogImage);
    }

    setMetaTag('meta[name="twitter:card"]', 'content', twitterCard);
    setMetaTag('meta[name="twitter:title"]', 'content', ogTitle || title);
    setMetaTag('meta[name="twitter:description"]', 'content', ogDescription || description);
    if (ogImage) {
      setMetaTag('meta[name="twitter:image"]', 'content', ogImage);
    }

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', pageUrl);
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogType, twitterCard, keywords, location.pathname]);

  return null;
}

