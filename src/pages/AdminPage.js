import React, { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';

const AdminPage = () => {
  const { user } = useContext(StoreContext);
  if (user?.role !== 'admin') {
    return (
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded">Unauthorized</div>
      </main>
    );
  }
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Console</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded shadow">Catalog CRUD (stub)</div>
        <div className="bg-white p-6 rounded shadow">Orders dashboard (stub)</div>
        <div className="bg-white p-6 rounded shadow">Inventory adjustments (stub)</div>
        <div className="bg-white p-6 rounded shadow">Moderation queue (stub)</div>
      </div>
    </main>
  );
};

export default AdminPage;


