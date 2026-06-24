"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import {
  Avatar,
  Button,
  Modal,
  Surface,
} from "@heroui/react";
import { Edit2, User, Link2 } from "lucide-react";

const UpdateUserModal = ({ user }) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    const { name, image } = userData;
    
    await authClient.updateUser({
      image: image.toString(),
      name: name.toString(),
    });
  };

  // Safe fallback characters for the avatar badge
  const initialFallback = user?.name ? user.name.substring(0, 2).toUpperCase() : "SP";

  return (
    <div>
      <Modal>
        {/* Trigger Button with transparent background inheriting custom styling safely */}
        <Button className="w-full h-full text-base font-bold bg-transparent text-foreground flex items-center justify-center gap-2 border-none outline-none cursor-pointer transition-colors duration-300 ">
          <Edit2 className="w-4 h-4" />
          Edit Profile
        </Button>
        
        <Modal.Backdrop className="backdrop-blur-md bg-black/40">
          <Modal.Container placement="auto" className="p-4">
            <Modal.Dialog className="sm:max-w-md overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--background)] shadow-2xl">
              <Modal.CloseTrigger className="text-muted hover:text-primary transition-colors duration-300 cursor-pointer top-4 right-4" />
              
              {/* Profile Header Block */}
              <Modal.Header className="flex flex-col items-center justify-center gap-3 pt-8 pb-4 px-6 border-b border-[var(--glass-border)] bg-[var(--card-bg)]/20">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-gradient-start)] to-[var(--primary-gradient-end)] rounded-full blur-md opacity-30" />
                  <Avatar className="w-20 h-20 border-2 border-[var(--glass-border)] ring-4 ring-[var(--brand-purple)]/10 shadow-lg">
                    <Avatar.Image alt={user?.name || "User account profile"} src={user?.image} />
                    <Avatar.Fallback className="bg-gradient-to-br from-[var(--primary-gradient-start)] to-[var(--primary-gradient-end)] text-white font-bold text-lg">
                      {initialFallback}
                    </Avatar.Fallback>
                  </Avatar>
                </div>
                <Modal.Heading className="text-xl font-black text-primary tracking-tight mt-1">
                  {user?.name || "Update Workspace"}
                </Modal.Heading>
              </Modal.Header>
              
              {/* Form Input Body Container */}
              <Modal.Body className="p-6">
                <Surface className="bg-transparent border-none p-0 shadow-none">
                  <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                    
                    {/* Full Name Input Parameter Group */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary flex items-center gap-2">
                        <User className="w-4 h-4 text-[var(--brand-purple)]" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={user?.name || ""}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3.5 rounded-2xl bg-[var(--card-bg)] border border-[var(--glass-border)] text-primary placeholder:text-muted focus:border-[var(--brand-purple)] focus:ring-2 focus:ring-[var(--brand-purple)]/20 outline-none transition-all text-sm"
                        required
                      />
                    </div>

                    {/* Profile Avatar Image URL Parameter Group */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary flex items-center gap-2">
                        <Link2 className="w-4 h-4 text-[var(--brand-indigo)]" />
                        Profile Photo URL
                      </label>
                      <input
                        type="url"
                        name="image"
                        defaultValue={user?.image || ""}
                        placeholder="https://example.com/your-photo.jpg"
                        className="w-full px-4 py-3.5 rounded-2xl bg-[var(--card-bg)] border border-[var(--glass-border)] text-primary placeholder:text-muted focus:border-[var(--brand-indigo)] focus:ring-2 focus:ring-[var(--brand-indigo)]/20 outline-none transition-all text-sm"
                      />
                    </div>

                    {/* Footer Execution Trigger Buttons */}
                    <div className="flex gap-3 items-center justify-end mt-4 pt-4 border-t border-[var(--glass-border)]">
                      <Button
                        slot="close"
                        className="px-5 py-3 rounded-xl border border-[var(--glass-border)] bg-[var(--card-bg)] hover:bg-[var(--glass-border)] text-primary font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        slot="close"
                        className="px-6 py-3 rounded-xl bg-main-gradient text-foreground font-bold text-xs uppercase tracking-wider transition-all cursor-pointer select-none border-none outline-none shadow-md transition-colors duration-300 "
                      >
                        Update Info
                      </Button>
                    </div>

                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UpdateUserModal;