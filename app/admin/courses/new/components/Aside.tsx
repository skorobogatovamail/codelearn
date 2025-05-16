import React from "react";
import Link from "next/link";

export const Aside = () => {
  return (
    <aside className="w-full md:w-64 border-r bg-slate-50 p-4">
      <nav className="space-y-2">
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-2 p-2 rounded-md text-sm hover:bg-slate-100"
        >
          Dashboard
        </Link>
        <Link
          href="/admin/courses"
          className="flex items-center gap-2 p-2 rounded-md text-sm bg-slate-200 font-medium"
        >
          Courses
        </Link>
        <Link
          href="/admin/users"
          className="flex items-center gap-2 p-2 rounded-md text-sm hover:bg-slate-100"
        >
          Users
        </Link>
        <Link
          href="/admin/settings"
          className="flex items-center gap-2 p-2 rounded-md text-sm hover:bg-slate-100"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
};
