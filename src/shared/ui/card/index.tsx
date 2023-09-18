interface Props {
  onClick?: () => void;
  backgroundColor?: string;
  children: React.ReactNode;
}

export const Card = ({ children, onClick, backgroundColor }: Props) => {
  return (
    <div
      onClick={onClick}
      className="relative flex h-fit w-64 flex-col rounded-xl border border-gray-300 px-3 py-2 shadow-sm"
      style={{ backgroundColor: backgroundColor }}
    >
      {children}
    </div>
  );
};
