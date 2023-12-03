import { cn } from '@/components/utils/utils';

export default function Legend() {
  return (
    <div className="flex gap-4">
      <LegendItem name="Dostępne" color="bg-orange-400" />
      <LegendItem name="Niedostępne" color="bg-zinc-400" />
      <LegendItem name="Wybrane" color="bg-orange-900" />
    </div>
  );
}

function LegendItem({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex gap-2 items-center">
      <div className={cn('w-4 h-4', color)}></div>
      {name}
    </div>
  );
}
