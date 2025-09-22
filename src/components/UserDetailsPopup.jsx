import React from "react";
import { X, User, Mail, MapPin, Book, GraduationCap } from "lucide-react";

const UserDetailsPopup = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">User Details</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <User className="h-5 w-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">{user.userName}</p>
              <p className="text-sm text-gray-500">Name</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">{user.email}</p>
              <p className="text-sm text-gray-500">Email</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">{user.address}</p>
              <p className="text-sm text-gray-500">Address</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <GraduationCap className="h-5 w-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">{user.standard}</p>
              <p className="text-sm text-gray-500">Standard</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Book className="h-5 w-5 text-gray-400 mt-1" />
            <div>
              <p className="font-medium text-gray-900">{user.subjects.join(", ")}</p>
              <p className="text-sm text-gray-500">Subjects</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="h-5 w-5 text-gray-400 flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
            <div>
              <p className="font-medium text-gray-900">{user.language}</p>
              <p className="text-sm text-gray-500">Language</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPopup;
