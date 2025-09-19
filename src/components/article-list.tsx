import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "The Rise of Server Components",
    description: "A deep dive into how Next.js Server Components are changing the way we build for the web.",
    link: "#",
  },
  {
    title: "Minimalism in UI/UX Design",
    description: "Exploring the principles of minimalist design and how to apply them for a better user experience.",
    link: "#",
  },
  {
    title: "A Guide to Effective Technical Writing",
    description: "Learn the key strategies to write clear, concise, and helpful technical documentation.",
    link: "#",
  },
  {
    title: "Navigating the World of Open Source",
    description: "My journey and lessons learned from contributing to various open source projects.",
    link: "#",
  },
];

export function ArticleList() {
  return (
    <section id="writings" className="py-16 md:py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-3 mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Writings</h2>
          <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">A collection of my thoughts and explorations.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {articles.map((article, index) => (
            <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border">
                <Link href={article.link} className="block h-full">
                    <div className="p-6 h-full flex flex-col">
                        <CardTitle className="flex items-start justify-between text-lg">
                            <span>{article.title}</span>
                            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </CardTitle>
                        <CardDescription className="mt-2 flex-grow">{article.description}</CardDescription>
                    </div>
                </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
