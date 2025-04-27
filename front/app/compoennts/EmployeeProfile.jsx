import { FaMapMarkerAlt, FaBirthdayCake, FaPhoneAlt, FaSkype } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiFilter } from "react-icons/fi";

export default function EmployeeProfile() {
    // Dummy Data
    const projects = [
    {
        id: 1,
        icon: "/assets/icons/medical.png",
        code: "PN0102165",
        title: "Medical App (iOS native)",
        created: "Sep 12, 2020",
        priority: "Medium",
        priorityColor: "text-yellow-500",
        allTasks: 34,
        activeTasks: 13,
        assignees: [
        "/assets/images/user1.jpg",
        "/assets/images/user2.jpg",
        "/assets/images/user3.jpg",
        ],
    },
    {
        id: 2,
        icon: "/assets/icons/food.png",
        code: "PN0102121",
        title: "Food Delivery Service",
        created: "Sep 10, 2020",
        priority: "Medium",
        priorityColor: "text-yellow-500",
        allTasks: 50,
        activeTasks: 24,
        assignees: [
        "/assets/images/user4.jpg",
        "/assets/images/user5.jpg",
        "/assets/images/user6.jpg",
        ],
    },
    {
        id: 3,
        icon: "/assets/icons/internal.png",
        code: "PN0102130",
        title: "Internal Project",
        created: "May 28, 2020",
        priority: "Low",
        priorityColor: "text-green-500",
        allTasks: 23,
        activeTasks: 20,
        assignees: [
        "/assets/images/user7.jpg",
        "/assets/images/user8.jpg",
        "/assets/images/user9.jpg",
        ],
    },
    ];
  return (
    <div className="flex min-h-screen bg-gray-100 p-6">
      
      {/* Sidebar */}
      <aside className="w-[300px] bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center">
        <img
          src="/assets/images/profile.jpg" // replace with real image
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <h2 className="mt-4 text-xl font-bold text-gray-800">Allen Perkins</h2>
        <p className="text-sm text-gray-400 mb-6">UI/UX Designer</p>

        {/* Main Info */}
        <div className="w-full space-y-6 text-sm">
          <div>
            <p className="text-gray-400">Position</p>
            <p className="font-medium text-gray-700">UI/UX Designer</p>
          </div>
          <div>
            <p className="text-gray-400">Company</p>
            <p className="font-medium text-gray-700">Cadabra</p>
          </div>
          <div>
            <p className="text-gray-400">Location</p>
            <div className="flex items-center gap-2 text-gray-700">
              <FaMapMarkerAlt className="text-gray-400" />
              <span>NYC, New York, USA</span>
            </div>
          </div>
          <div>
            <p className="text-gray-400">Birthday Date</p>
            <div className="flex items-center gap-2 text-gray-700">
              <FaBirthdayCake className="text-gray-400" />
              <span>May 19, 1996</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-full mt-8 space-y-6 text-sm">
          <div>
            <p className="text-gray-400">Email</p>
            <div className="flex items-center gap-2 text-gray-700">
              <HiOutlineMail className="text-gray-400" />
              <span>enaynets@gmail.com</span>
            </div>
          </div>
          <div>
            <p className="text-gray-400">Mobile Number</p>
            <div className="flex items-center gap-2 text-gray-700">
              <FaPhoneAlt className="text-gray-400" />
              <span>+1 675 346 23-10</span>
            </div>
          </div>
          <div>
            <p className="text-gray-400">Skype</p>
            <div className="flex items-center gap-2 text-gray-700">
              <FaSkype className="text-gray-400" />
              <span>Evna 2256</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Employee’s Profile</h1>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-gray-700">
              <FiFilter />
            </button>
            <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-gray-700">
              Current Projects
              <MdOutlineKeyboardArrowDown className="text-xl" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-6">
          <button className="bg-blue-500 text-white px-5 py-2 rounded-full shadow">Projects</button>
          <button className="text-gray-500 hover:text-gray-700">Team</button>
          <button className="text-gray-500 hover:text-gray-700">My Vacations</button>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {/* Single Card */}
          {projects.map((project) => (
            <div key={project.id} className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              
              {/* Project Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gray-100">
                  <img src={project.icon} alt="icon" className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">{project.code}</p>
                  <h2 className="font-semibold text-gray-800">{project.title}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs text-gray-400">Created {project.created}</p>
                    <span className={`text-xs ${project.priorityColor} font-semibold`}>{project.priority}</span>
                  </div>
                </div>
              </div>

              {/* Project Data */}
              <div className="flex items-center gap-10">
                <div className="text-center">
                  <p className="text-xs text-gray-400">All tasks</p>
                  <p className="font-bold text-gray-800">{project.allTasks}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400">Active tasks</p>
                  <p className="font-bold text-gray-800">{project.activeTasks}</p>
                </div>
                <div className="flex -space-x-2">
                  {project.assignees.map((assignee, idx) => (
                    <img
                      key={idx}
                      src={assignee}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      alt="assignee"
                    />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
}


