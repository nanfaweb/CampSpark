import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CampSpark — Home",
  description:
    "Your CampSpark feed — stories, posts, and friends all in one warm place.",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
