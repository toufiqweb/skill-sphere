"use client";
import { authClient } from "@/lib/auth-client";
import {
  Avatar,
  Button,
  Modal,
  Surface,

} from "@heroui/react";
import { Edit2 } from "lucide-react";

const UpdateUserModal = ({ user }) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    // console.log(userData);
    const { name, image } = userData;
    await authClient.updateUser({
      image,
      name,
    });
  };
  return (
    <div>
      <Modal>
        <Button className=" w-full h-8 text-lg font-normal bg-transparent  flex items-center justify-center gap-2">
          <Edit2 className="w-5 h-5" />
          Edit Profile
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Avatar>
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>

                <Modal.Heading>{user?.name}</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <div>
                      <label className="block text-sm text-gray-700  mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200  outline-none transition-all"
                        required
                      />
                    </div>

                    {/* Photo*/}
                    <div>
                      <label className="block text-sm text-gray-700  mb-1.5">
                        Profile Photo URL
                      </label>
                      <input
                        type="url"
                        name="image"
                        placeholder="https://example.com/your-photo.jpg"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200  outline-none transition-all"
                      />
                    </div>
                    <div className="flex gap-3 items-center justify-end mt-5">
                      <Button
                        slot="close"
                        variant="secondary"
                        className="text-purple-700 "
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        slot="close"
                        className="bg-main-gradient"
                      >
                        Update
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
