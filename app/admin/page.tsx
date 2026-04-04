import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.dailymediacasino.com/admin" },
};

export default function AdminPage() {
  return (
    <div className="container py-12">
      <h1 className="mb-4 text-2xl font-bold text-foreground">Admin</h1>
      <p className="text-muted-foreground">
        Admin dashboard placeholder. This page is not indexed by search engines.
      </p>
    </div>
  );
}
