import { motion } from "framer-motion";
import {
  User,
  Camera,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Link,
  Globe,
  AtSign,
  BookOpen,
  Clock,
  Edit3,
} from "lucide-react";
import Image from "next/image";

export default function ProfileIdentity({ user, onEdit }) {
  const getRoleBadgeColor = (role) => {
    switch (role?.toLowerCase()) {
      case "admin":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "instructor":
        return "bg-brand-ocean/10 text-brand-ocean border-brand-ocean/20";
      default:
        return "bg-brand-mint/10 text-brand-mint border-brand-mint/20";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-[28px] p-6 sm:p-8 relative overflow-hidden"
    >
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-brand-ocean/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="flex flex-col items-center text-center space-y-4 relative z-10">
        <div className="relative group">
          <div className="w-32 h-32 rounded-[32px] ring-4 ring-card-border overflow-hidden shadow-card bg-foreground/5 p-1 transition-all duration-300 group-hover:ring-brand-cyan">
            <div className="w-full h-full rounded-[28px] overflow-hidden relative">
              {user?.image ? (
                <Image
                  fill
                  src={user.image}
                  alt={user.name || "Profile"}
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted bg-card-bg">
                  <User size={48} />
                </div>
              )}
            </div>
          </div>
          <div
            className="absolute inset-0 bg-black/50 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm cursor-pointer"
            onClick={onEdit}
          >
            <Camera className="text-white" size={28} />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-foreground">
            {user?.name || "Anonymous User"}
          </h2>
          {user?.title && (
            <p className="text-sm font-bold text-brand-cyan mt-1">
              {user.title}
            </p>
          )}

          <div className="flex items-center justify-center gap-2 mt-3">
            <span
              className={`px-3 py-1 rounded-md text-[10px] font-black uppercase border tracking-wider ${getRoleBadgeColor(user?.role)}`}
            >
              {user?.role || "Student"}
            </span>
            {user?.status === "active" && (
              <span className="flex items-center text-emerald-500 text-[10px] font-black uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md">
                <CheckCircle size={12} className="mr-1" /> Active
              </span>
            )}
          </div>
        </div>

        <div className="w-full pt-6 border-t border-card-border space-y-3 text-sm font-medium">
          <div className="flex items-center text-muted hover:text-foreground transition-colors">
            <Mail size={16} className="mr-3 text-brand-ocean" />
            <span className="truncate">{user?.email}</span>
          </div>
          {user?.phoneNumber && (
            <div className="flex items-center text-muted hover:text-foreground transition-colors">
              <Phone size={16} className="mr-3 text-brand-mint" />
              <span>{user.phoneNumber}</span>
            </div>
          )}
          {user?.location && (
            <div className="flex items-center text-muted hover:text-foreground transition-colors">
              <MapPin size={16} className="mr-3 text-purple-500" />
              <span>{user.location}</span>
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="w-full pt-4 flex items-center justify-center gap-3">
          {user?.socials?.github && (
            <a
              href={user.socials.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-foreground/5 hover:bg-brand-cyan/20 text-muted hover:text-brand-cyan flex items-center justify-center transition-colors"
            >
              <Link size={18} />
            </a>
          )}
          {user?.socials?.linkedin && (
            <a
              href={user.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-foreground/5 hover:bg-brand-ocean/20 text-muted hover:text-brand-ocean flex items-center justify-center transition-colors"
            >
              <Globe size={18} />
            </a>
          )}
          {user?.socials?.twitter && (
            <a
              href={user.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-foreground/5 hover:bg-purple-500/20 text-muted hover:text-purple-500 flex items-center justify-center transition-colors"
            >
              <AtSign size={18} />
            </a>
          )}
        </div>

        {/* Bio Section */}
        <div className="w-full pt-6 border-t border-card-border text-left">
          <h3 className="text-sm font-black text-foreground mb-2 flex items-center gap-2">
            <User size={16} className="text-brand-ocean" />
            About Me
          </h3>
          <p className="text-xs font-medium text-muted leading-relaxed">
            {user?.bio ||
              "No bio provided yet. Update your profile to tell the community more about yourself and your goals."}
          </p>
        </div>

        {/* Stats Tracker */}
        <div className="w-full grid grid-cols-3 gap-3 pt-6 border-t border-card-border">
          <div className="flex flex-col items-center p-3 rounded-2xl bg-foreground/5 border border-card-border hover:border-brand-ocean/50 transition-colors">
            <BookOpen size={18} className="text-brand-ocean mb-1" />
            <span className="text-lg font-black text-foreground">12</span>
            <span className="text-[10px] text-muted uppercase font-bold tracking-wider">
              Enrolled
            </span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-2xl bg-foreground/5 border border-card-border hover:border-brand-mint/50 transition-colors">
            <CheckCircle size={18} className="text-brand-mint mb-1" />
            <span className="text-lg font-black text-foreground">4</span>
            <span className="text-[10px] text-muted uppercase font-bold tracking-wider">
              Finished
            </span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-2xl bg-foreground/5 border border-card-border hover:border-yellow-500/50 transition-colors">
            <Clock size={18} className="text-yellow-500 mb-1" />
            <span className="text-lg font-black text-foreground">48</span>
            <span className="text-[10px] text-muted uppercase font-bold tracking-wider">
              Hours
            </span>
          </div>
        </div>

        <div className="w-full pt-6">
          <button
            onClick={onEdit}
            className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-xl font-bold transition-all duration-200 hover:bg-brand-cyan hover:text-background active:scale-95 shadow-sm"
          >
            <Edit3 size={18} />
            Update Identity
          </button>
        </div>
      </div>
    </motion.div>
  );
}
