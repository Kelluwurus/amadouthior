import Container from "@/components/ui/Container";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  // TODO: Phase 5 — Load article from content/articles.ts
  return (
    <div className="section-py pt-32">
      <Container narrow>
        <div className="text-meta text-[--color-accent] mb-3">Article</div>
        <h1 className="text-h1 text-[--color-fg] mb-6">{slug}</h1>
        <p className="text-body text-[--color-fg-muted]">
          Contenu à venir.
        </p>
      </Container>
    </div>
  );
}
