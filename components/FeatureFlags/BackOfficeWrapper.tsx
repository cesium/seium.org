type BackOfficeWrapperProps = {
  children: React.ReactNode;
};

export default function BackOfficeWrapper({
  children,
}: BackOfficeWrapperProps) {
  if (process.env.NEXT_PUBLIC_BACKOFFICE_FEATURE_FLAG === "true") {
    return <>{children}</>;
  }

  return null;
}
