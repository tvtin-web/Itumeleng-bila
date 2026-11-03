import type { ImageMetadata } from 'astro';

export type GalleryCategory = 'build' | 'courtyard' | 'hall' | 'outdoor';

export interface GalleryPhoto {
  src: ImageMetadata;
  alt: string;
  category: GalleryCategory;
}

export const categoryLabels: Record<GalleryCategory, string> = {
  build: 'Team building',
  courtyard: 'Courtyard',
  hall: 'Hall sessions',
  outdoor: 'Outdoor games',
};

/** Alt text per file, keyed by filename without extension. */
const alts: Record<string, string> = {
  'build-01-closeup': 'Close-up of participants working together on a team build activity',
  'build-02-overhead': 'Overhead view of a team build activity in progress',
  'build-03-group-smiling': 'A smiling group of participants after a team build activity',
  'build-04-group-with-tyre': 'A group of participants gathered around a tyre during a team activity',
  'courtyard-01-colour-cards': 'Participants holding colour cards in a courtyard',
  'courtyard-02-colour-cards-queue': 'Participants queuing with colour cards in a courtyard',
  'courtyard-03-listening': 'Participants listening to instructions in a courtyard',
  'courtyard-04-lineup': 'Participants lined up in a courtyard',
  'hall-01-facilitator-on-stage': 'A facilitator leading a session from the stage in a hall',
  'hall-02-seated-group': 'A seated group of participants in a hall',
  'hall-03-seated-lines': 'Participants seated in lines during a hall session',
  'outdoor-01-circle-game': 'A facilitator leading a circle game with children outdoors',
  'outdoor-02-circle-actions': 'Children doing actions together in a circle outdoors',
  'outdoor-03-sack-race': 'Children taking part in a sack race outdoors',
  'outdoor-04-ball-game': 'Children playing a ball game outdoors',
  'outdoor-05-ball-hoop': 'Children throwing a ball through a hoop outdoors',
};

const modules = import.meta.glob<{ default: ImageMetadata }>('../assets/gallery/*.jpeg', { eager: true });

function toPhoto(path: string, mod: { default: ImageMetadata }): GalleryPhoto {
  const name = path.split('/').pop()!.replace(/\.jpeg$/, '');
  return {
    src: mod.default,
    alt: alts[name] ?? 'YETS training photo',
    category: name.split('-')[0] as GalleryCategory,
  };
}

export const photos: GalleryPhoto[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => toPhoto(path, mod));

/** Hand-picked mix shown on the home page. */
export const featured: GalleryPhoto[] = [
  'outdoor-02',
  'hall-01',
  'courtyard-01',
  'build-03',
  'outdoor-03',
  'courtyard-04',
].map((prefix) => {
  const [path, mod] = Object.entries(modules).find(([p]) => p.includes(`/${prefix}-`))!;
  return toPhoto(path, mod);
});
