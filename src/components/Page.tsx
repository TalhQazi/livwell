import { Suspense } from "react";

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  isSuspense?: boolean;
  withBgImage?: boolean;
  bgImage?: string;
}

export default function Page({
  isSuspense,
  className,
  bgImage,
  withBgImage,
  ...props
}: PageProps) {
  const bgStyles = withBgImage
    ? {
        backgroundImage: `url(${bgImage ?? "/main-bg.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  if (isSuspense) {
    return (
      <Suspense fallback={null}>
        <div
          className={`w-full flex-1 bg-muted h-screen ${className}`}
          style={bgStyles}
          {...props}
        />
      </Suspense>
    );
  }

  return (
    <div
      className={`w-full flex-1 bg-muted h-screen z-10 p-2 sm:p-6 ${className}`}
      style={bgStyles}
      {...props}
    />
  );
}
