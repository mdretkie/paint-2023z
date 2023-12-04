export default function SeatsSelectionInfo({
  total,
  selected,
}: {
  total: number;
  selected: number;
}) {
  let diff = total - selected;
  return (
    <div className="text-sm my-4">
      {diff !== 0 ? (
        <span>
          Pozostał{diff > 1 ? 'y' : 'o'}{' '}
          <span className="text-orange-400">{diff}</span> miejsc
          {diff > 1 ? 'a' : 'e'} do wyboru
        </span>
      ) : (
        'Wszystkie miejsca zostały wybrane'
      )}
    </div>
  );
}
