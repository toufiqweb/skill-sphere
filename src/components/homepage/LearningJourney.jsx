import { Button } from "@heroui/react";
import React from "react";

const LearningJourney = () => {
  return (
    <div className="container mx-auto my-15 border-2 bg-white/10 border-black/10 rounded-2xl p-3">
      <div className="hero bg-main-gradient rounded-2xl py-12">
        <div className="hero-content text-center px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="mb-5 text-3xl md:text-4xl font-bold text-white">
              Stay Ahead in Your Learning Journey
            </h1>
            <p className="mb-6 text-white/70">
              Join 20,000+ learners and get weekly updates on new courses,
              expert tips, and exclusive learning resources delivered straight
              to your inbox.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 text-black">
              <input
                className="bg-white  rounded-lg px-4 py-2 border border-gray-300"
                type="email"
                placeholder="Enter your email"
              />
              <Button
                variant="secondary"
                size="lg"
                className="rounded-md text-[#7c3aed] bg-white font-semibold px-6"
              >
                Get Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningJourney;
