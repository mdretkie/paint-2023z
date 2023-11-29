import { cn } from '../utils/utils';

export default function Logo({ inSidebar }: { inSidebar?: boolean }) {
  return (
    <div
      className={cn(
        'flex items-center gap-1',
        inSidebar ? 'text-zinc-50' : 'text-orange-500'
      )}
    >
      <span className="material-symbols-outlined text-3xl -mb-0.5">movie</span>
      <span className="font-logo text-3xl pt-2">CINEMA</span>
    </div>
  );
}
