import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-lg font-bold font-headline tracking-tight text-primary">
          Vedang's Voyage
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#writings" className="text-foreground/70 transition-colors hover:text-foreground">
            Writings
          </Link>
          <Link href="#profile" className="text-foreground/70 transition-colors hover:text-foreground">
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}
