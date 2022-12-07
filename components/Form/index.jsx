export default function Form({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} className="sm:w-120 w-80 space-y-6">
      {children}
    </form>
  );
}
