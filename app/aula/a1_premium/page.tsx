import LevelPage from '../components/LevelPage';

export default function A1PremiumAula() {
  return (
    <LevelPage 
      level="A1" // We map it to A1 for the engine, but customize titles
      levelTitle="A1 Premium (9 Meses)"
      colorFrom="from-coral-600"
      colorTo="to-peach-600"
    />
  );
}
