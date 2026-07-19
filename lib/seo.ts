import {
  education,
  experience,
  profile,
  projects,
  siteUrl,
  type Project,
} from "@/lib/data";

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.seoDescription,
    url: siteUrl,
    knowsAbout: profile.focus,
    sameAs: profile.sameAs.length > 0 ? profile.sameAs : undefined,
    worksFor: experience.map((item) => ({
      "@type": "Organization",
      name: item.company,
    })),
    alumniOf: education.map((item) => ({
      "@type": "CollegeOrUniversity",
      name: item.school,
    })),
    hasOccupation: {
      "@type": "Occupation",
      name: profile.role,
      skills: profile.focus.join(", "),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: profile.name,
    url: siteUrl,
    description: profile.seoDescription,
    author: {
      "@type": "Person",
      name: profile.name,
    },
  };
}

export function projectJsonLd(project: Project) {
  const cover = project.gallery.find((slide) => slide.image)?.image;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: project.tagline,
    description: project.summary,
    url: absoluteUrl(`/work/${project.slug}`),
    image: cover ? absoluteUrl(cover) : undefined,
    dateCreated: project.year,
    genre: project.category,
    keywords: [...project.types, ...project.stack].join(", "),
    author: {
      "@type": "Person",
      name: profile.name,
      url: siteUrl,
    },
    creator: {
      "@type": "Person",
      name: profile.name,
    },
  };
}

export function breadcrumbJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: absoluteUrl("/#work"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: absoluteUrl(`/work/${project.slug}`),
      },
    ],
  };
}

export function itemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected work",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      url: absoluteUrl(`/work/${project.slug}`),
    })),
  };
}
