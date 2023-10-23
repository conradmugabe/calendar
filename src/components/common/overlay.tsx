type Props = {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function Overlay({ children, isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed -top-8 left-0 z-50 grid h-screen w-screen place-content-center overflow-y-hidden"
      onClick={(e) => {
        e.preventDefault();
        onClose();
      }}
    >
      {children}
    </div>
  );
}
