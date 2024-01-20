import Heading from '../_components/Heading';

export default function Cennik() {
  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-[1040px] m-auto px-4 md:px-8">
        <div>
          <Heading>Cennik</Heading>
          <table className="w-full border-collapse text-zinc-50">
            <tr className="border-b border-white">
              <th className="border-r border-white py-8"></th>
              <th className="border-r border-white bg-zinc-800">2D</th>
              <th>3D</th>
            </tr>
            <tr className="border-b border-white ">
              <td className="text-center border-r border-white py-8">
                Bilet ulgowy
              </td>
              <td className="text-center border-r border-white text-2xl bg-zinc-800">
                19,90 zł
              </td>
              <td className="text-center text-2xl ">23,80 zł</td>
            </tr>
            <tr>
              <td className="text-center border-r border-white py-8 ">
                Bilet normalny
              </td>
              <td className="text-center border-r border-white text-2xl bg-zinc-800">
                24,90 zł
              </td>
              <td className="text-center text-2xl">28,80 zł</td>
            </tr>
          </table>
        </div>
        <div className="text-zinc-200 text-xs">
          <Heading>Regulamin</Heading>
          <h3>I. Ogólne postanowienia</h3>
          <ul>
            <li>
              Niniejszy regulamin określa zasady i warunki korzystania z usług
              Kina "Cinema" oraz cennik opłat za bilety wstępu.
            </li>
            <li>
              Kino "Cinema" zastrzega sobie prawo do zmiany cennika oraz
              regulaminu bez wcześniejszego powiadomienia.
            </li>
          </ul>

          <h3>II. Ceny biletów</h3>
          <ul>
            <li>
              Ceny biletów wstępu obowiązujące w Kinie "Cinema" są określone w
              aktualnym cenniku dostępnym w kasie kina oraz na stronie
              internetowej kina.
            </li>
            <li>
              Cena biletu może zależeć od kategorii filmu, rodzaju seansu,
              godziny rozpoczęcia, wieku widza lub innych czynników określonych
              przez Kino "Cinema".
            </li>
            <li>
              Kino "Cinema" może oferować zniżki i promocje dla określonych grup
              społecznych, np. uczniów, studentów, seniorów itp.
            </li>
          </ul>

          <h3>III. Zakup biletów</h3>
          <ul>
            <li>
              Bilety można nabywać w kasie kina, przez stronę internetową kina
              lub za pośrednictwem aplikacji mobilnej.
            </li>
            <li>
              Kasa kina jest czynna od godziny otwarcia kina do godziny
              rozpoczęcia ostatniego seansu.
            </li>
            <li>
              Rezerwacje biletów można dokonywać wyłącznie w kasie kina lub
              przez stronę internetową kina. Rezerwacja jest ważna przez
              określony czas, który zostanie podany podczas procesu rezerwacji.
            </li>
            <li>
              Po zakończeniu okresu ważności rezerwacji, bilety, które nie
              zostały opłacone, zostaną zwolnione do sprzedaży.
            </li>
          </ul>

          <h3>IV. Zwroty i wymiany biletów</h3>
          <ul>
            <li>
              Zakupione bilety nie podlegają zwrotowi ani wymianie, chyba że
              seans zostanie odwołany przez kino.
            </li>
            <li>
              W przypadku odwołania seansu przez kino, bilety można zwrócić w
              kasie kina w terminie 7 dni od daty odwołania seansu.
            </li>
          </ul>

          <h3>V. Prawa i obowiązki widza</h3>
          <ul>
            <li>
              Widzom obowiązuje się zachowanie kulturalne w trakcie pobytu w
              kinie.
            </li>
            <li>
              Wszelkie urządzenia elektroniczne (telefony komórkowe, smartfony
              itp.) powinny być wyłączone lub ustawione w tryb cichy podczas
              seansu.
            </li>
            <li>
              Zakazane jest spożywanie własnych napojów i przekąsek w sali
              kinowej.
            </li>
            <li>
              Wszelkie reklamy, plakaty i ulotki rozdawane w kinie powinny być
              pozostawione w wyznaczonych miejscach.
            </li>
            <li>
              Kino "Cinema" zastrzega sobie prawo do odmowy wstępu lub usunięcia
              z sali kinowej osób, które zakłócają spokój innych widzów lub nie
              przestrzegają regulaminu.
            </li>
          </ul>

          <h3>VI. Postanowienia końcowe</h3>
          <ul>
            <li>
              Kino "Cinema" nie ponosi odpowiedzialności za utratę lub
              uszkodzenie osobistych przedmiotów pozostawionych przez widzów w
              kinie.
            </li>
            <li>
              Wszelkie skargi i zażalenia dotyczące działalności kina można
              zgłaszać do pracowników kina lub na adres e-mail dostępny na
              stronie internetowej kina.
            </li>
            <li>
              Niniejszy regulamin wchodzi w życie od daty opublikowania na
              stronie internetowej kina.
            </li>
            <li>
              Wszelkie zmiany w regulaminie oraz cenniku będą ogłaszane na
              stronie internetowej kina.
            </li>
            <li>
              Niniejszy regulamin jest wiążący dla wszystkich widzów
              korzystających z usług Kina "Cinema".
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
