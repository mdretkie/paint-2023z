import Link from 'next/link';
import { cn } from '../utils/utils';

export default function Logo({ inSidebar }: { inSidebar?: boolean }) {
  return (
    <Link
      href={'/'}
      className={cn(
        'flex items-center gap-1',
        inSidebar ? 'text-zinc-50' : 'text-orange-500'
      )}
    >
      <span
        style={{ fontSize: '32px' }}
        className="material-symbols-outlined mb-0.5"
      >
        movie
      </span>
      <span className="font-logo text-3xl">CINEMA</span>
    </Link>
  );
}
