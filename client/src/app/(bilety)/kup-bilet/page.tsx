import ActiveStep from './_components/ActiveStep';
import Container from './_components/Container';
import ProgressBar from './_components/ProgressBar';
import Summary from './_components/Summary';

export default function buyTicket() {
  return (
    <div className="h-[100dvh] max-w-[1024px] m-auto flex flex-col items-center justify-center gap-5">
      <ProgressBar />
      <div className="w-full flex gap-5">
        <Container>
          <Summary />
        </Container>
        <Container>
          <ActiveStep />
        </Container>
      </div>
    </div>
  );
}
