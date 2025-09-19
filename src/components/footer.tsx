import { Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 md:px-6">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Vedang Vatsa. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" aria-label="Twitter profile">
            <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="#" aria-label="LinkedIn profile">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="#" aria-label="GitHub profile">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
