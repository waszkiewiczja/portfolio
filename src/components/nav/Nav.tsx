export const Nav: React.FC = () => {
  const menuItems: string[][] = [
    ['Certificates', 'certificates'],
    ['Projects', 'projects'],
    ['UX/UI', 'ux'],
    ['About me', 'about'],
    ['Contact', 'contact'],
  ];

  return (
    <nav
      className="flex justify-center md:justify-end w-full md:mr-20 mt-12 underline underline-offset-4"
      data-testid="nav"
    >
      <ul className="list-none p-0 flex items-center gap-7 mr-2">
        {menuItems.map(([title, url]) => {
          const style = `hover:text-[#5BC0EB] ${title === 'Certificates' ? 'hidden md:block' : ''}`;
          return (
            <li key={url} className={style} data-testid={url}>
              <a href={`#${url}`}>{title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
