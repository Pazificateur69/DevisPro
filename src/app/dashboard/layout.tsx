import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Gestion des demandes",
  robots: { index: false },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
