import { Header } from '@/components/header';
import { Profile } from '@/components/profile';
import { ArticleList } from '@/components/article-list';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Profile />
        <ArticleList />
      </main>
      <Footer />
    </div>
  );
}
