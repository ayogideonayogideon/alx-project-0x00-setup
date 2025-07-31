// Pill.tsx
interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <span className="px-3 py-1 text-xs font-medium bg-gray-200 rounded-full">
      {title}
    </span>
  );
}

export default Pill;