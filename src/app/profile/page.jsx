"use client";

import React from "react";
import { Mail, Edit2 } from "lucide-react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  const user = session?.user;
  console.log(user);

  return (
    <div className="min-h-screen bg-gray-50  py-10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white  rounded-3xl shadow-lg overflow-hidden">
          <div className="h-48 bg-main-gradient relative"></div>
          <div className="flex justify-center -mt-16 relative">
            <div className="relative">
              <Image
                src={user?.image}
                alt={user?.name}
                width={500}
                height={500}
                className="w-32 h-32 rounded-full border-4 border-white  object-cover shadow-md"
              />
            </div>
          </div>
          <div className="px-8 pb-8 pt-4 text-center">
            <h2 className="text-3xl  font-bold text-black/80 ">{user?.name}</h2>
            <p className="text-black/60  flex items-center justify-center gap-2 mt-1">
              <Mail />
              {user?.email}
            </p>
            <p className="text-black/60  max-w-sm mx-auto mt-3">
              Passionate learner and web developer. Always excited to explore
              new technologies and improve my skills.
            </p>
          </div>
          <div className="grid grid-cols-3 border border-gray-100 ">
            <div className="py-6 text-center border-r border-gray-100 ">
              <p className="text-2xl font-semibold text-gray-900 ">12</p>
              <p className="text-sm text-gray-500 ">Enrolled</p>
            </div>
            <div className="py-6 text-center border-r border-gray-100 ">
              <p className="text-2xl font-semibold text-gray-900 ">8</p>
              <p className="text-sm text-gray-500 ">Completed</p>
            </div>
            <div className="py-6 text-center">
              <p className="text-2xl font-semibold text-gray-900 ">67h</p>
              <p className="text-sm text-gray-500 ">Learning Hours</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button className="flex-1 cursor-pointer bg-main-gradient text-white py-4 rounded-2xl  flex items-center justify-center gap-2">
            <Edit2 className="w-5 h-5" />
            Edit Profile
          </button>

          <button className="flex-1 cursor-pointer border border-gray-300  hover:bg-gray-50 transition-all active:scale-95  py-4 rounded-2xl ">
            View My Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
