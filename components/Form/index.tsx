interface IFormProps extends React.HTMLProps<HTMLFormElement> {
  children: React.ReactNode;
}

export default function Form({ onSubmit, children, ...rest }: IFormProps) {
  return (
    <form onSubmit={onSubmit} className="sm:w-120 w-80 space-y-6" {...rest}>
      {children}
    </form>
  );
}
