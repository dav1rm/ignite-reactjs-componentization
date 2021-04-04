import '../styles/sidebar.scss';

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface HeaderProps {
  selectedGenre: Genre
}

export function Header({ selectedGenre }: HeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}