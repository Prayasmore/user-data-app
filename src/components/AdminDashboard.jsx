import React, { useState } from "react";
import { Search, User, Mail, Book, GraduationCap } from "lucide-react";
import { userData } from "../data/user";
import UserDetailsPopup from "./UserDetailsPopup";

const AdminDashboard = ({ currentUser, onLogout }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const students = userData.filter((user) => user.userType === "student");

  const filteredStudents = students.filter((student) => {
    if (!searchTerm.trim()) return true;
    const searchLower = searchTerm.toLowerCase().trim();
    const nameMatch = student.userName.toLowerCase().includes(searchLower);
    const subjectMatch = student.subjects.some((s) =>
      s.toLowerCase().includes(searchLower)
    );
    return nameMatch || subjectMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">
                Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {currentUser.userName}
              </span>
              <button
                onClick={onLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Student Management
          </h2>

          <div className="flex items-center space-x-4 mb-4">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Clear
              </button>
            )}
          </div>

          {searchTerm && (
            <p className="text-sm text-gray-600 mb-4">
              Showing {filteredStudents.length} result(s) for "{searchTerm}"
            </p>
          )}
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <li key={student.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <User className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900">
                          {student.userName}
                        </h3>
                        <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <Mail className="h-4 w-4" />
                            <span>{student.email}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Book className="h-4 w-4" />
                            <span>{student.subjects.join(", ")}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedUser(student)}
                    className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                  >
                    Details
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {filteredStudents.length === 0 && (
            <div className="px-6 py-8 text-center">
              <p className="text-gray-500">
                No students found matching your search.
              </p>
            </div>
          )}
        </div>
      </main>

      {selectedUser && (
        <UserDetailsPopup
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
