export default function TicketsType() {
  return (
    <div className="text-zinc-50 h-full">
      <div className="text-3xl font-bold ">Wybierz rodzaj biletów</div>
      <form className="pb-8 h-full flex flex-col gap-16 justify-center">
        <div>
          <TypeName>Normalny</TypeName>
        </div>
        <div>
          <TypeName>Ulgowy</TypeName>
        </div>
      </form>
    </div>
  );
}

function TypeName({ children }: any) {
  return <div className="text-2xl">{children}</div>;
}
