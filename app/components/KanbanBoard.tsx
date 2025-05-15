"use client";
import { FC, useState } from 'react';
import { motion } from 'framer-motion';

// Define types for our kanban items
interface KanbanItem {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  assignee: string;
  dueDate: string;
  timeEstimate: string;
}

interface KanbanColumnProps {
  title: string;
  count: number;
  items: KanbanItem[];
  columnColor: string;
}

const KanbanCard: FC<{ item: KanbanItem }> = ({ item }) => {
  // Get appropriate color for priority badge
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-600';
      case 'Medium':
        return 'bg-amber-100 text-amber-600';
      case 'Low':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <motion.div 
      className="bg-white p-3 rounded-lg shadow-sm mb-3"
      whileHover={{ y: -2, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-sm font-medium text-gray-800">{item.title}</h4>
        <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityColor(item.priority)}`}>
          {item.priority}
        </span>
      </div>
      <div className="text-xs text-purple-600 mb-2">{item.assignee}</div>
      <div className="flex justify-between items-center text-xs text-gray-500">
        <div className="flex items-center">
          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          {item.dueDate}
        </div>
        <div className="flex items-center">
          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          {item.timeEstimate}
        </div>
      </div>
    </motion.div>
  );
};

const KanbanColumn: FC<KanbanColumnProps> = ({ title, count, items, columnColor }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 w-full">
      <div className="flex items-center mb-4">
        <div className={`w-2 h-2 rounded-full ${columnColor} mr-2`}></div>
        <h3 className="text-sm font-medium text-gray-800">{title}</h3>
        <div className="bg-gray-200 text-gray-700 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center ml-2">
          {count}
        </div>
      </div>
      <div>
        {items.map((item) => (
          <KanbanCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const KanbanBoard: FC = () => {
  // Sample data for the kanban board
  const [columns] = useState([
    {
      id: 'todo',
      title: 'To Do',
      color: 'bg-blue-500',
      items: [
        {
          id: '1',
          title: 'Update inventory schema',
          priority: 'High' as const,
          assignee: 'Hendrix',
          dueDate: 'Today',
          timeEstimate: '2h 30m',
        },
        {
          id: '2',
          title: 'Design onboarding flow',
          priority: 'Medium' as const,
          assignee: 'Leslie',
          dueDate: 'Tomorrow',
          timeEstimate: '3h 45m',
        },
        {
          id: '3',
          title: 'Implement authentication',
          priority: 'High' as const,
          assignee: 'Hendrix',
          dueDate: 'This week',
          timeEstimate: '5h',
        },
      ],
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      color: 'bg-blue-400',
      items: [
        {
          id: '4',
          title: 'Refine AI recommendations',
          priority: 'Medium' as const,
          assignee: 'Jackson',
          dueDate: 'This week',
          timeEstimate: '4h',
        },
        {
          id: '5',
          title: 'Improve dashboard analytics',
          priority: 'High' as const,
          assignee: 'Peterson',
          dueDate: 'Tomorrow',
          timeEstimate: '4h 45m',
        },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      color: 'bg-green-500',
      items: [
        {
          id: '6',
          title: 'Implement user feedback',
          priority: 'Low' as const,
          assignee: 'Lewis',
          dueDate: 'Yesterday',
          timeEstimate: '6h',
        },
      ],
    },
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {columns.map(column => (
        <KanbanColumn
          key={column.id}
          title={column.title}
          count={column.items.length}
          items={column.items}
          columnColor={column.color}
        />
      ))}
    </div>
  );
};

const VisualProjectManagement: FC = () => {
  return (
    <section className=" overflow-hidden relative">
      {/* Dots in corners */}

      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="bg-purple-100 p-2 rounded-lg">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                <path d="M9 3v18M3 9h6M3 15h6" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-purple-600">Visual Project Management</span>
            <span className="text-gray-800"> with Kanban</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Streamline your team's workflow with our intuitive Kanban boards, designed to visualize work 
            progress and maximize efficiency.
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <KanbanBoard />
        </motion.div>
      </div>
    </section>
  );
};

export default VisualProjectManagement;