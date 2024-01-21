import Link from 'next/link';

interface ShowTimesProps {
  times: { godzina: string; id: number }[];
  film: any;
  date: string;
}

const ShowTimes: React.FC<ShowTimesProps> = ({ times, film, date }) => {
  return (
    <div className="basis-1/6 flex gap-2 p-4">
      {times.map((seans, index) => (
        <Link
          key={index}
          href={`/kup-bilet/${film.id}?date=${date}T${
            seans.godzina.split(':')[0]
          }-${seans.godzina.split(':')[1]}&seans=${seans.id}`}
        >
          {seans.godzina}
        </Link>
      ))}
    </div>
  );
};

export default ShowTimes;
