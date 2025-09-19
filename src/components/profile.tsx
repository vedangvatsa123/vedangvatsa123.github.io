import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const profileImage = PlaceHolderImages.find(p => p.id === 'vedang-profile');

export function Profile() {
  return (
    <section id="profile" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="flex justify-center md:justify-start">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                data-ai-hint={profileImage.imageHint}
                width={200}
                height={200}
                className="rounded-full object-cover aspect-square shadow-lg"
              />
            )}
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Vedang Vatsa
            </h1>
            <p className="text-foreground/80 md:text-xl max-w-2xl mx-auto md:mx-0">
              A passionate writer and developer exploring the intersections of technology, culture, and personal growth.
            </p>
            <p className="text-muted-foreground">
              Affiliations: Tech Writer @ DevMonthly, Contributor @ OpenSourceWeekly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
