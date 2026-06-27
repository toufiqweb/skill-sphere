"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Mail, Phone, MapPin, Briefcase, Award, 
  Settings, BookOpen, Clock, CheckCircle, Edit3, 
  X, Camera, Save, Github, Linkedin, Twitter 
} from "lucide-react";
import { toast } from "react-toastify";

export default function ProfileView({ initialUser }) {
  const router = useRouter();
  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: user?.name || "",
    profileImage: user?.image || "",
    bio: user?.bio || "",
    skills: user?.skills?.join(", ") || "",
    phoneNumber: user?.phoneNumber || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      const skillsArray = formData.skills
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

      const payload = {
        name: formData.name,
        profileImage: formData.profileImage,
        bio: formData.bio,
        skills: skillsArray,
        phoneNumber: formData.phoneNumber,
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": user.id,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message || "Profile updated successfully!");
        // Update local state for immediate feedback
        setUser((prev) => ({
          ...prev,
          name: payload.name,
          image: payload.profileImage,
          bio: payload.bio,
          skills: payload.skills,
          phoneNumber: payload.phoneNumber,
        }));
        setIsEditing(false);
        // Refresh server components to sync session
        router.refresh();
      } else {
        toast.error(data.message || "Failed to update profile");
      }
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error("An error occurred while updating profile");
    } finally {
      setIsSaving(false);
    }
  };

  const getRoleBadgeColor = (role) => {
    switch (role?.toLowerCase()) {
      case 'admin': return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'instructor': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      default: return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-zinc-100 dark:to-zinc-500 tracking-tight">
            User Profile
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">
            Manage your personal information and preferences
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: User Identity Frame */}
        <div className="lg:col-span-1 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm relative overflow-hidden"
          >
            {/* Background Decorative Blob */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col items-center text-center space-y-4 relative z-10">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full ring-4 ring-zinc-50 dark:ring-zinc-800 overflow-hidden shadow-xl bg-zinc-100 dark:bg-zinc-800">
                  {user?.image ? (
                    <img 
                      src={user.image} 
                      alt={user.name || "Profile"} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400">
                      <User size={48} />
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm cursor-pointer" onClick={() => setIsEditing(true)}>
                  <Camera className="text-white" size={24} />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {user?.name || "Anonymous User"}
                </h2>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border capitalize tracking-wider ${getRoleBadgeColor(user?.role)}`}>
                    {user?.role || "Student"}
                  </span>
                  {user?.status === "active" && (
                    <span className="flex items-center text-emerald-500 text-xs font-medium">
                      <CheckCircle size={14} className="mr-1" /> Active
                    </span>
                  )}
                </div>
              </div>

              <div className="w-full pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-3 text-sm">
                <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                  <Mail size={16} className="mr-3 text-zinc-400" />
                  <span className="truncate">{user?.email}</span>
                </div>
                {user?.phoneNumber && (
                  <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <Phone size={16} className="mr-3 text-zinc-400" />
                    <span>{user.phoneNumber}</span>
                  </div>
                )}
              </div>

              {/* Bio Section */}
              <div className="w-full pt-4 border-t border-zinc-100 dark:border-zinc-800 text-left">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">About Me</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {user?.bio || "No bio provided yet. Add a bio to tell people more about yourself."}
                </p>
              </div>

              {/* Stats Tracker */}
              <div className="w-full grid grid-cols-3 gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex flex-col items-center p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
                  <BookOpen size={18} className="text-blue-500 mb-1" />
                  <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">12</span>
                  <span className="text-[10px] text-zinc-500 uppercase font-semibold">Enrolled</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
                  <CheckCircle size={18} className="text-emerald-500 mb-1" />
                  <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">4</span>
                  <span className="text-[10px] text-zinc-500 uppercase font-semibold">Finished</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
                  <Clock size={18} className="text-amber-500 mb-1" />
                  <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">48</span>
                  <span className="text-[10px] text-zinc-500 uppercase font-semibold">Hours</span>
                </div>
              </div>

              {/* Expert Skill Matrix */}
              <div className="w-full pt-4 border-t border-zinc-100 dark:border-zinc-800 text-left">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center">
                  <Award size={16} className="mr-2 text-indigo-500" />
                  Expert Skill Matrix
                </h3>
                <div className="flex flex-wrap gap-2">
                  {user?.skills?.length > 0 ? (
                    user.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-medium rounded-lg border border-indigo-100 dark:border-indigo-500/20"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-zinc-400 italic">No skills added</span>
                  )}
                </div>
              </div>

              <div className="w-full pt-6">
                <button 
                  onClick={() => setIsEditing(true)}
                  className="w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-900 text-white py-3 rounded-xl font-medium transition-all duration-200 active:scale-95 shadow-sm"
                >
                  <Edit3 size={18} />
                  Edit Profile
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Dynamic Sections */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center mr-4">
                <Settings className="text-blue-500" size={20} />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Account Settings Dashboard</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Account Settings items */}
              <div className="p-4 border border-zinc-100 dark:border-zinc-800 rounded-2xl flex items-start gap-4 hover:border-blue-500/30 transition-colors cursor-pointer group">
                <div className="p-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 transition-colors">
                  <Mail className="text-zinc-500 group-hover:text-blue-500" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Email Preferences</h4>
                  <p className="text-xs text-zinc-500 mt-1">Manage notifications and alerts</p>
                </div>
              </div>
              <div className="p-4 border border-zinc-100 dark:border-zinc-800 rounded-2xl flex items-start gap-4 hover:border-purple-500/30 transition-colors cursor-pointer group">
                <div className="p-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg group-hover:bg-purple-50 dark:group-hover:bg-purple-500/10 transition-colors">
                  <Settings className="text-zinc-500 group-hover:text-purple-500" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Security & Privacy</h4>
                  <p className="text-xs text-zinc-500 mt-1">Password, 2FA, and sessions</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conditional Sections based on Role */}
          {(user?.role === "student" || user?.role === "admin") && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mr-4">
                  <Briefcase className="text-emerald-500" size={20} />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Active Deployment Track</h2>
              </div>
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-6 w-px bg-zinc-200 dark:bg-zinc-800" />
                <div className="space-y-6 relative">
                  {[
                    { title: "Frontend Mastery Track", status: "In Progress", progress: 65, color: "bg-blue-500" },
                    { title: "UI/UX Foundations", status: "Completed", progress: 100, color: "bg-emerald-500" }
                  ].map((track, i) => (
                    <div key={i} className="flex items-center gap-6 relative">
                      <div className={`w-3 h-3 rounded-full z-10 ${track.progress === 100 ? 'bg-emerald-500 ring-4 ring-emerald-50 dark:ring-emerald-500/20' : 'bg-blue-500 ring-4 ring-blue-50 dark:ring-blue-500/20'} ml-[22px] -translate-x-1.5`} />
                      <div className="flex-1 bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{track.title}</h4>
                          <span className="text-xs font-medium text-zinc-500">{track.status}</span>
                        </div>
                        <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                          <div className={`h-full ${track.color} rounded-full`} style={{ width: `${track.progress}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center mr-4">
                <Award className="text-amber-500" size={20} />
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Earned Credentials & Certifications</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="aspect-[4/3] rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 flex flex-col items-center justify-center text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
                <Award size={32} className="mb-2 opacity-50" />
                <span className="text-xs font-medium">Add Certification</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Global Edit Modal Framework */}
      <AnimatePresence>
        {isEditing && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-zinc-900 w-full max-w-2xl rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="flex justify-between items-center p-6 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center">
                  <Edit3 size={20} className="mr-2 text-blue-500" />
                  Edit Profile Information
                </h3>
                <button 
                  onClick={() => setIsEditing(false)}
                  className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Full Name</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all dark:text-zinc-100"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Phone Number</label>
                    <input 
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all dark:text-zinc-100"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Profile Image URL</label>
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shrink-0 overflow-hidden flex items-center justify-center">
                      {formData.profileImage ? (
                        <img src={formData.profileImage} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <Camera size={20} className="text-zinc-400" />
                      )}
                    </div>
                    <input 
                      type="url"
                      name="profileImage"
                      value={formData.profileImage}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all dark:text-zinc-100"
                      placeholder="https://example.com/avatar.jpg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Custom Bio</label>
                  <textarea 
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all resize-none dark:text-zinc-100"
                    placeholder="Tell us about your background, goals, and interests..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Expert Skill Matrix</label>
                  <p className="text-xs text-zinc-500 mb-1">Separate each skill with a comma (e.g., React, Node.js, UI Design)</p>
                  <input 
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all dark:text-zinc-100"
                    placeholder="JavaScript, Python, Figma..."
                  />
                </div>
              </form>

              <div className="p-6 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2.5 rounded-xl font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSubmit}
                  disabled={isSaving}
                  className="px-6 py-2.5 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-70 disabled:pointer-events-none shadow-sm shadow-blue-500/20"
                >
                  {isSaving ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Save size={18} />
                  )}
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
