import { Metadata } from 'next';
import NoteForm from '@/components/NoteForm/NoteForm';
import css from './CreateNote.module.css';

// ✅ Явна типізація
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Notehub - Create new note`,
    description: `Here you can create new note`,
    openGraph: {
      title: `Notehub - Create new note`,
      description: `Here you can create your new note`,
      url: 'https://08-zustand-three.vercel.app/notes/action/create',
      siteName: 'NoteHub',
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: 'NoteHub',
        },
      ],
      type: 'article',
    },
  };
}

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
