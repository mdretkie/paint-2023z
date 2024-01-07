const romanRowNumbers = ['I', 'II', 'III', 'IV', 'V'];

export default function RowNumber({ index }: { index: number }) {
  return (
    <div className="w-4 shrink-0 text-center">{romanRowNumbers[index]}</div>
  );
}
