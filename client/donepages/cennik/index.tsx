import type { NextPage } from "next";

const CennikDesktop: NextPage = () => {
  return (
    <div className="relative bg-extended-gray-900 w-full h-[1428px] overflow-hidden text-center text-17xl text-extended-white font-roboto">
      <div className="absolute top-[248px] left-[551px] bg-extended-gray-800 w-[341px] h-24" />
      <div className="absolute top-[152px] left-[551px] bg-extended-gray-800 w-[339px] h-24" />
      <div className="absolute top-[0px] left-[200px] w-[1040px] h-20 text-left text-base">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-extended-gray-900" />
        <img
          className="absolute h-[45%] w-[3.46%] top-[25%] right-[96.54%] bottom-[30%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/movie.svg"
        />
        <div className="absolute top-[26.25%] left-[4.13%] text-13xl font-black-han-sans text-extended-orange-500">
          CINEMA
        </div>
        <div className="absolute top-[23px] left-[206px] w-[387px] h-[31px]">
          <div className="absolute top-[0px] left-[0px] rounded-md bg-extended-gray-900 overflow-hidden flex flex-row items-center justify-center py-1.5 px-3">
            <div className="relative font-medium">Repertuar</div>
          </div>
          <div className="absolute top-[0px] left-[111px] rounded-md bg-extended-gray-900 overflow-hidden flex flex-row items-center justify-center py-1.5 px-3">
            <div className="relative font-medium">Cennik</div>
          </div>
          <div className="absolute top-[0px] left-[201px] rounded-md bg-extended-gray-900 overflow-hidden flex flex-row items-center justify-center py-1.5 px-3">
            <div className="relative font-medium">Filmy</div>
          </div>
          <div className="absolute top-[0px] left-[280px] rounded-md bg-extended-gray-900 overflow-hidden flex flex-row items-center justify-center py-1.5 px-3">
            <div className="relative font-medium">Zapowiedzi</div>
          </div>
        </div>
        <div className="absolute h-[53.75%] w-[10.58%] top-[23.75%] right-[0%] bottom-[22.5%] left-[89.42%] rounded-md bg-extended-gray-800 overflow-hidden flex flex-row items-center justify-center py-3 px-4 box-border">
          <div className="relative font-medium">Logowanie</div>
        </div>
      </div>
      <b className="absolute top-[95px] left-[203px] text-extended-orange-500 text-left">
        Cennik
      </b>
      <b className="absolute top-[282px] left-[200px] text-5xl inline-block w-[345px] h-7">
        Bilet ulgowy
      </b>
      <b className="absolute top-[181px] left-[548px] text-5xl inline-block w-[345px] h-7">
        2D
      </b>
      <b className="absolute top-[181px] left-[890px] text-5xl inline-block w-[345px] h-7">
        3D
      </b>
      <div className="absolute top-[277px] left-[545px] inline-block w-[345px] h-7">
        19,90 zł
      </div>
      <b className="absolute top-[378px] left-[197px] text-5xl inline-block w-[349px] h-7">
        Bilet normalny
      </b>
      <b className="absolute top-[488px] left-[197px] text-extended-orange-500 text-left">
        Regulamin
      </b>
      <div className="absolute top-[246.5px] left-[198.5px] box-border w-[1043px] h-[3px] border-t-[3px] border-solid border-extended-gray-500" />
      <div className="absolute top-[343.5px] left-[196.5px] box-border w-[1041px] h-px border-t-[1px] border-solid border-extended-gray-500" />
      <div className="absolute top-[344px] left-[546px] bg-extended-gray-800 w-[346.67px] h-24" />
      <div className="absolute top-[439.5px] left-[197.5px] box-border w-[1041px] h-px border-t-[1px] border-solid border-extended-gray-500" />
      <div className="absolute top-[372px] left-[545px] inline-block w-[345px] h-7">
        24,90 zł
      </div>
      <div className="absolute top-[277px] left-[890px] inline-block w-[345px] h-7">
        23,80 zł
      </div>
      <div className="absolute top-[372px] left-[890px] inline-block w-[345px] h-7">
        28,80 zł
      </div>
      <div className="absolute top-[150.5px] left-[549.5px] box-border w-[3px] h-[289px] border-r-[3px] border-solid border-extended-gray-500" />
      <div className="absolute top-[153.5px] left-[889.5px] box-border w-px h-[287px] border-r-[1px] border-solid border-extended-gray-500" />
      <div className="absolute top-[546px] left-[198px] text-[14px] font-inter text-left inline-block w-[1040px]">
        <p className="m-0">I. Ogólne postanowienia</p>
        <ul className="m-0 font-inherit text-inherit pl-[19px]">
          <li className="mb-0">
            Niniejszy regulamin określa zasady i warunki korzystania z usług
            Kina "Nazwa Kina" oraz cennik opłat za bilety wstępu.
          </li>
          <li className="mb-0">
            Kino "Nazwa Kina" zastrzega sobie prawo do zmiany cennika oraz
            regulaminu bez wcześniejszego powiadomienia.
          </li>
        </ul>
        <p className="m-0">II. Ceny biletów</p>
        <ul className="m-0 font-inherit text-inherit pl-[19px]">
          <li className="mb-0">
            Ceny biletów wstępu obowiązujące w Kinie "Nazwa Kina" są określone w
            aktualnym cenniku dostępnym w kasie kina oraz na stronie
            internetowej kina.
          </li>
          <li className="mb-0">
            Cena biletu może zależeć od kategorii filmu, rodzaju seansu, godziny
            rozpoczęcia, wieku widza lub innych czynników określonych przez Kino
            "Nazwa Kina".
          </li>
          <li className="mb-0">
            Kino "Nazwa Kina" może oferować zniżki i promocje dla określonych
            grup społecznych, np. uczniów, studentów, seniorów itp.
          </li>
        </ul>
        <p className="m-0">III. Zakup biletów</p>
        <ul className="m-0 font-inherit text-inherit pl-[19px]">
          <li className="mb-0">
            Bilety można nabywać w kasie kina, przez stronę internetową kina lub
            za pośrednictwem aplikacji mobilnej.
          </li>
          <li className="mb-0">
            Kasa kina jest czynna od godziny otwarcia kina do godziny
            rozpoczęcia ostatniego seansu.
          </li>
          <li className="mb-0">
            Rezerwacje biletów można dokonywać wyłącznie w kasie kina lub przez
            stronę internetową kina. Rezerwacja jest ważna przez określony czas,
            który zostanie podany podczas procesu rezerwacji.
          </li>
          <li className="mb-0">
            Po zakończeniu okresu ważności rezerwacji, bilety, które nie zostały
            opłacone, zostaną zwolnione do sprzedaży.
          </li>
        </ul>
        <p className="m-0">IV. Zwroty i wymiany biletów</p>
        <ul className="m-0 font-inherit text-inherit pl-[19px]">
          <li className="mb-0">
            Zakupione bilety nie podlegają zwrotowi ani wymianie, chyba że seans
            zostanie odwołany przez kino.
          </li>
          <li className="mb-0">
            W przypadku odwołania seansu przez kino, bilety można zwrócić w
            kasie kina w terminie 7 dni od daty odwołania seansu.
          </li>
        </ul>
        <p className="m-0">V. Prawa i obowiązki widza</p>
        <ul className="m-0 font-inherit text-inherit pl-[19px]">
          <li className="mb-0">
            Widzom obowiązuje się zachowanie kulturalne w trakcie pobytu w
            kinie.
          </li>
          <li className="mb-0">
            Wszelkie urządzenia elektroniczne (telefony komórkowe, smartfony
            itp.) powinny być wyłączone lub ustawione w tryb cichy podczas
            seansu.
          </li>
          <li className="mb-0">
            Zakazane jest spożywanie własnych napojów i przekąsek w sali
            kinowej.
          </li>
          <li className="mb-0">
            Wszelkie reklamy, plakaty i ulotki rozdawane w kinie powinny być
            pozostawione w wyznaczonych miejscach.
          </li>
          <li className="mb-0">
            Kino "Nazwa Kina" zastrzega sobie prawo do odmowy wstępu lub
            usunięcia z sali kinowej osób, które zakłócają spokój innych widzów
            lub nie przestrzegają regulaminu.
          </li>
        </ul>
        <p className="m-0">VI. Postanowienia końcowe</p>
        <ul className="m-0 font-inherit text-inherit pl-[19px]">
          <li className="mb-0">
            Kino "Nazwa Kina" nie ponosi odpowiedzialności za utratę lub
            uszkodzenie osobistych przedmiotów pozostawionych przez widzów w
            kinie.
          </li>
          <li className="mb-0">
            Wszelkie skargi i zażalenia dotyczące działalności kina można
            zgłaszać do pracowników kina lub na adres e-mail dostępny na stronie
            internetowej kina.
          </li>
          <li className="mb-0">
            Niniejszy regulamin wchodzi w życie od daty opublikowania na stronie
            internetowej kina.
          </li>
          <li className="mb-0">
            Wszelkie zmiany w regulaminie oraz cenniku będą ogłaszane na stronie
            internetowej kina.
          </li>
          <li>
            Niniejszy regulamin jest wiążący dla wszystkich widzów
            korzystających z usług Kina "Nazwa Kina".
          </li>
        </ul>
      </div>
      <div className="absolute top-[1104px] left-[2px] bg-extended-true-gray-800 w-full h-[324px]" />
      <div className="absolute top-[1208px] left-[566px] w-[87px] h-28 text-left text-base font-inter">
        <div className="absolute top-[0px] left-[0px]">Repertuar</div>
        <div className="absolute top-[31px] left-[0px]">Cennik</div>
        <div className="absolute top-[62px] left-[0px]">Filmy</div>
        <div className="absolute top-[93px] left-[0px]">Zapowiedzi</div>
      </div>
      <div className="absolute top-[1208px] left-[810px] w-[163px] h-[138px] text-left text-base font-inter">
        <div className="absolute top-[0px] left-[0px]">kontakt@cinema.com</div>
        <div className="absolute top-[31px] left-[0px]">
          <p className="m-0">Telefon:</p>
          <p className="m-0">+48 123 456 789</p>
        </div>
        <div className="absolute top-[81px] left-[0px]">
          <p className="m-0">Adres:</p>
          <p className="m-0">{`Pl. Politechniki 1, `}</p>
          <p className="m-0">00-661 Warszawa</p>
        </div>
      </div>
      <img
        className="absolute top-[1168px] left-[201px] w-9 h-9 overflow-hidden"
        alt=""
        src="/movie.svg"
      />
      <div className="absolute top-[1169px] left-[244px] w-[999px] h-10 text-left text-5xl font-inter">
        <div className="absolute top-[0px] left-[0px] text-13xl font-black-han-sans text-extended-orange-500">
          CINEMA
        </div>
        <b className="absolute top-[5.5px] left-[321.67px]">Kino</b>
        <b className="absolute top-[5.5px] left-[566.33px]">Kontakt</b>
        <b className="absolute top-[5.5px] left-[849px]">Social Media</b>
      </div>
      <div className="absolute top-[1209px] left-[1093px] w-24 h-6">
        <img
          className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
          alt=""
          src="/iconfacebook-1.svg"
        />
        <img
          className="absolute top-[0px] left-[36px] w-6 h-6 overflow-hidden"
          alt=""
          src="/iconinstagram-1.svg"
        />
        <img
          className="absolute top-[1.8px] left-[72px] w-6 h-[20.4px] overflow-hidden"
          alt=""
          src="/icontwitter-1.svg"
        />
      </div>
    </div>
  );
};

export default CennikDesktop;
