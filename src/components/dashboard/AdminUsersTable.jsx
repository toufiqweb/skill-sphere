"use client";

/**
 * AdminUsersTable
 * Purely presentational. All data + callbacks come through props.
 *
 * Props:
 *  - users         : User[]
 *  - superAdminEmail : string  — email of the untouchable Super Admin
 *  - onRoleChange  : (userId, newRole) => void
 *  - onToggleBlock : (userId, isCurrentlyBlocked) => void
 *  - isRoleChanging: Record<userId, boolean>   — loading map per row
 *  - isBlockChanging: Record<userId, boolean>  — loading map per row
 */

import Image from "next/image";
import { ShieldAlert, Ban, CheckCircle, Loader2, ShieldCheck } from "lucide-react";

const ROLE_OPTIONS = ["student", "instructor", "admin"];

const roleBadge = (role) => {
  const styles = {
    admin: "bg-[var(--brand-ocean)]/10 text-[var(--brand-ocean)] border border-[var(--brand-ocean)]/20",
    instructor: "bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] border border-[var(--brand-cyan)]/20",
    student: "bg-foreground/5 text-muted border border-card-border",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold capitalize ${
        styles[role] ?? styles.student
      }`}
    >
      {role ?? "student"}
    </span>
  );
};

const statusBadge = (isBlocked) =>
  isBlocked ? (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-500 border border-rose-500/20">
      <Ban className="w-3 h-3" /> Blocked
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[var(--brand-mint)]/10 text-[var(--brand-mint)] border border-[var(--brand-mint)]/20">
      <CheckCircle className="w-3 h-3" /> Active
    </span>
  );

export default function AdminUsersTable({
  users,
  superAdminEmail,
  onRoleChange,
  onToggleBlock,
  isRoleChanging = {},
  isBlockChanging = {},
}) {
  return (
    <div className="glass-card border border-card-border rounded-2xl shadow-card overflow-hidden transition-colors duration-300">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-foreground/5 border-b border-card-border text-xs uppercase tracking-wider text-muted">
              <th className="px-6 py-4 font-bold">User</th>
              <th className="px-6 py-4 font-bold">Current Role</th>
              <th className="px-6 py-4 font-bold">Change Role</th>
              <th className="px-6 py-4 font-bold">Status</th>
              <th className="px-6 py-4 font-bold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-card-border">
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-16 text-center text-muted">
                  <p className="text-sm font-medium">No users match your filters.</p>
                </td>
              </tr>
            ) : (
              users.map((user) => {
                const userId = user._id?.toString() || user.id?.toString();
                const isSuper =
                  user.isSuperAdmin === true ||
                  (superAdminEmail && user.email === superAdminEmail);

                const roleLoading = isRoleChanging[userId];
                const blockLoading = isBlockChanging[userId];

                return (
                  <tr
                    key={userId}
                    className="hover:bg-foreground/5 transition-colors"
                  >
                    {/* ── User Info ───────────────────────────────── */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="relative w-10 h-10 rounded-full shrink-0 border border-card-border bg-foreground/5">
                          {user.image ? (
                            <Image
                              src={user.image}
                              alt={user.name ?? "User"}
                              fill
                              className="rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--brand-cyan)] to-[var(--brand-ocean)] flex items-center justify-center text-background font-bold text-sm">
                              {user.name?.charAt(0).toUpperCase() ?? "?"}
                            </div>
                          )}
                          {isSuper && (
                            <span
                              title="Super Admin"
                              className="absolute -bottom-1 -right-1 w-5 h-5 flex items-center justify-center bg-amber-500 rounded-full border-[3px] border-card-bg shadow-sm"
                            >
                              <ShieldCheck className="w-3 h-3 text-white" />
                            </span>
                          )}
                        </div>
                        {/* Name + Email */}
                        <div>
                          <p className="text-sm font-bold text-foreground flex items-center gap-2">
                            {user.name ?? "Unknown"}
                            {isSuper && (
                              <span className="text-[10px] font-black text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                                Super Admin
                              </span>
                            )}
                          </p>
                          <p className="text-xs font-medium text-muted mt-0.5">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* ── Current Role Badge ───────────────────────── */}
                    <td className="px-6 py-4">{roleBadge(user.role)}</td>

                    {/* ── Change Role Dropdown ─────────────────────── */}
                    <td className="px-6 py-4">
                      {isSuper ? (
                        <span className="text-xs text-muted/70 italic font-medium">Protected</span>
                      ) : (
                        <div className="relative inline-flex items-center">
                          <select
                            value={user.role ?? "student"}
                            disabled={roleLoading}
                            onChange={(e) => onRoleChange(userId, e.target.value)}
                            className="appearance-none bg-foreground/5 border border-card-border text-foreground text-xs font-bold rounded-xl pl-4 pr-9 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--brand-cyan)]/40 focus:border-[var(--brand-cyan)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                          >
                            {ROLE_OPTIONS.map((r) => (
                              <option key={r} value={r} className="capitalize bg-card-bg">
                                {r.charAt(0).toUpperCase() + r.slice(1)}
                              </option>
                            ))}
                          </select>
                          {/* Loading spinner overlay */}
                          {roleLoading ? (
                            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-[var(--brand-cyan)] pointer-events-none" />
                          ) : (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                               <svg className="fill-current w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                          )}
                        </div>
                      )}
                    </td>

                    {/* ── Account Status ──────────────────────────── */}
                    <td className="px-6 py-4">{statusBadge(user.isBlocked)}</td>

                    {/* ── Block / Unblock Action ───────────────────── */}
                    <td className="px-6 py-4 text-right">
                      {isSuper ? (
                        <span
                          title="Super Admin is untouchable"
                          className="inline-flex items-center gap-1.5 text-xs text-muted/70 cursor-not-allowed font-medium"
                        >
                          <ShieldAlert className="w-4 h-4" />
                          Protected
                        </span>
                      ) : user.isBlocked ? (
                        <button
                          onClick={() => onToggleBlock(userId, true)}
                          disabled={blockLoading}
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[var(--brand-mint)] bg-[var(--brand-mint)]/10 hover:bg-[var(--brand-mint)]/20 border border-[var(--brand-mint)]/20 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                          {blockLoading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <CheckCircle className="w-4 h-4" />
                          )}
                          Unblock
                        </button>
                      ) : (
                        <button
                          onClick={() => onToggleBlock(userId, false)}
                          disabled={blockLoading}
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-rose-500 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                          {blockLoading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Ban className="w-4 h-4" />
                          )}
                          Block
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
