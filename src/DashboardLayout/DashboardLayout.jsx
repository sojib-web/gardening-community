// src/Layouts/DashboardLayout.jsx
import React from "react";
import { Outlet, NavLink, Link } from "react-router";

const DashboardLayout = () => {
  const navLinkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg hover:bg-green-700 transition ${
      isActive ? "bg-green-700 font-bold text-lime-300" : "text-white"
    }`;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-green-800 text-white p-6 flex flex-col justify-between shadow-lg">
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide text-center mb-6">
            Dashboard
          </h2>
          <nav className="flex flex-col gap-3">
            <NavLink to="/dashboard" end className={navLinkStyle}>
              🏠 Overview
            </NavLink>
            <NavLink to="/dashboard/all-items" className={navLinkStyle}>
              📋 All Items
            </NavLink>
            <NavLink to="/dashboard/add-item" className={navLinkStyle}>
              ➕ Add Item
            </NavLink>
            <NavLink to="/dashboard/my-items" className={navLinkStyle}>
              🧾 My Items
            </NavLink>
          </nav>
        </div>

        {/* ✅ Back to Home at the bottom */}
        <div className="text-center mt-8">
          <NavLink to="/" className={navLinkStyle}>
            ⬅ Back to Home
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-green-100 via-emerald-100 to-sky-100 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
