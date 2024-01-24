export const Nav: React.FC = () => {
  const menuItems = [
    ['Certificates', 'certificates'],
    ['Projects', 'projects'],
    ['UX/UI', 'ux'],
    ['About me', 'about'],
    ['Contact', 'contact'],
  ];

  return (
    <nav className="flex justify-end w-full mr-20 mt-12 ">
      <ul className="list-none p-0 flex items-center gap-7 mr-2">
        {menuItems.map(([title, url]) => (
          <li key={url} className="hover:text-[#5BC0EB]" data-testid={url}>
            <a href={`#${url}`}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
