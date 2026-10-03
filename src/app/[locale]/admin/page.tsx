import type { Metadata } from 'next';
import Link from 'next/link';
import { BarChart3, Calendar, CreditCard, Users, Moon, Bell, Settings, ClipboardList } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Temple Management',
  description: 'Admin dashboard for Abyadi Sri Mahishamardhini Temple. Manage sevas, bookings, donations, events, and Hunnime Pooja details.',
};

const stats = [
  { label: 'Total Bookings (This Month)', value: '142', icon: ClipboardList, color: 'bg-amber-100 text-amber-700' },
  { label: 'Hunnime Bookings (Last Pournami)', value: '38', icon: Moon, color: 'bg-orange-100 text-orange-700' },
  { label: 'Donations This Month', value: '₹1,24,500', icon: CreditCard, color: 'bg-green-100 text-green-700' },
  { label: 'Registered Devotees', value: '1,842', icon: Users, color: 'bg-blue-100 text-blue-700' },
];

const adminSections = [
  { href: '/admin/sevas', icon: '🙏', title: 'Manage Sevas & Poojas', desc: 'Add, edit, delete seva types, time slots, pricing. Manage Hunnime-specific sevas.' },
  { href: '/admin/hunnime', icon: '🌕', title: 'Hunnime Pooja Schedule', desc: 'Manage Hunnime dates, ritual timelines, special notes for each Pournami.' },
  { href: '/admin/bookings', icon: '📋', title: 'Bookings & Reservations', desc: 'View all bookings, filter by Hunnime vs regular, manage payment status.' },
  { href: '/admin/donations', icon: '💝', title: 'Donations & Receipts', desc: 'View donations, generate 80G receipts, view fund allocation summaries.' },
  { href: '/admin/events', icon: '📅', title: 'Events & Festival Calendar', desc: 'Add/edit festivals, highlight Hunnime dates, manage event details.' },
  { href: '/admin/timings', icon: '⏰', title: 'Darshan Timings & Notices', desc: 'Update daily timings, add Hunnime-day extended timings, post notices.' },
  { href: '/admin/gallery', icon: '🖼️', title: 'Gallery Management', desc: 'Upload and organize photos/videos. Tag Hunnime Pooja and festival media.' },
  { href: '/admin/users', icon: '👥', title: 'Users & Volunteers', desc: 'Manage admin accounts, roles (Admin/Seva Manager/Editor), and volunteers.' },
];

export default function AdminDashboardPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Admin header */}
      <div className="bg-[#1a0a00] border-b border-amber-900/50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-amber-400 font-bold text-lg">Temple Admin Dashboard</h1>
            <p className="text-amber-200/50 text-xs">Abyadi Sri Mahishamardhini Temple Trust</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-amber-200/60 hover:text-amber-200 transition-colors">
              <Bell size={18} />
            </button>
            <button className="text-amber-200/60 hover:text-amber-200 transition-colors">
              <Settings size={18} />
            </button>
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-[#1a0a00] text-xs font-bold">
              A
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
                <stat.icon size={18} />
              </div>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Next Hunnime Alert */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Moon size={20} className="text-amber-600" />
            <div>
              <p className="font-semibold text-gray-800 text-sm">Next Hunnime Pooja Action Required</p>
              <p className="text-xs text-gray-500">Ensure timings, sevas, and notices are updated for the upcoming full moon</p>
            </div>
          </div>
          <Link href="/admin/hunnime" className="bg-amber-500 text-[#1a0a00] font-semibold text-xs px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors">
            Manage →
          </Link>
        </div>

        {/* Admin sections grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {adminSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="bg-white rounded-xl p-5 border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all group"
            >
              <div className="text-3xl mb-3">{section.icon}</div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-amber-700 transition-colors">
                {section.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">{section.desc}</p>
            </Link>
          ))}
        </div>

        {/* Recent bookings table (preview) */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h2 className="font-bold text-gray-800 flex items-center gap-2">
              <BarChart3 size={16} className="text-amber-600" /> Recent Bookings
            </h2>
            <Link href="/admin/bookings" className="text-xs text-amber-600 font-medium hover:underline">View all →</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Ref</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Devotee</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Seva</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Date</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Amount</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { ref: 'BK001', name: 'Ramesh Bhat', seva: 'Hunnime Abhishekam', date: 'Nov 5, 2025', amount: '₹1,500', status: 'PAID', isHunnime: true },
                  { ref: 'BK002', name: 'Savitha Hegde', seva: 'Panchamruta Abhishekam', date: 'Nov 3, 2025', amount: '₹500', status: 'PAID', isHunnime: false },
                  { ref: 'BK003', name: 'Latha Kamath', seva: 'Hunnime Annadanam', date: 'Nov 5, 2025', amount: '₹10,000', status: 'PAID', isHunnime: true },
                  { ref: 'BK004', name: 'Mohan Shenoy', seva: 'Sapta Archana', date: 'Nov 2, 2025', amount: '₹50', status: 'PAID', isHunnime: false },
                  { ref: 'BK005', name: 'Geetha Rao', seva: 'Deepa Seva (108)', date: 'Nov 5, 2025', amount: '₹300', status: 'PENDING', isHunnime: true },
                ].map((booking) => (
                  <tr key={booking.ref} className="hover:bg-gray-50">
                    <td className="px-5 py-3 font-mono text-xs text-gray-500">{booking.ref}</td>
                    <td className="px-5 py-3 font-medium text-gray-800">{booking.name}</td>
                    <td className="px-5 py-3 text-gray-600">
                      <div className="flex items-center gap-1">
                        {booking.isHunnime && <Moon size={11} className="text-amber-500" />}
                        {booking.seva}
                      </div>
                    </td>
                    <td className="px-5 py-3 text-gray-500">{booking.date}</td>
                    <td className="px-5 py-3 font-semibold text-gray-700">{booking.amount}</td>
                    <td className="px-5 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${booking.status === 'PAID' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
