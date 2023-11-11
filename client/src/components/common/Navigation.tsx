import DropdownMenu from './DropdownMenu';
import Logo from './Logo';
import NavigationLink from './NavigationLink';
import { LogInButton } from './buttons';

const links = ['Repertuar', 'Cennik', 'Filmy', 'Zapowiedzi'];

export default function Navigation() {
  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-[1040px] m-auto h-20 flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center justify-between md:gap-8">
          <Logo />
          <div className="gap-4 hidden md:flex">
            {links.map((name, index) => {
              return <NavigationLink key={index} name={name} />;
            })}
          </div>
        </div>
        <DropdownMenu links={links} />
        <div className="hidden md:block">
          <LogInButton />
        </div>
      </div>
    </div>
  );
}
