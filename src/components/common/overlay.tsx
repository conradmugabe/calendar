type Props = {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function Overlay({ children, isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed h-screen w-screen left-0 -top-8 z-50 overflow-y-hidden grid place-content-center"
      onClick={(e) => {
        e.preventDefault();
        onClose();
      }}
    >
      {children}
    </div>
  );
}
