import React from 'react';
import { DashboardStats as Stats } from '../../types';
import {
  Briefcase,
  MessageCircle,
  ThumbsUp,
  X,
  TrendingUp
} from 'lucide-react';

interface DashboardStatsProps {
  stats: Stats;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-teal-100 rounded-md p-3">
              <Briefcase className="h-6 w-6 text-teal-600" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500 truncate">
                Total Applications
              </p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">
                {stats.totalApplications}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-5 py-3">
          <div className="text-sm text-gray-500">
            <span className="font-medium text-teal-700">
              {stats.activeApplications} active
            </span>{' '}
            applications
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
              <MessageCircle className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500 truncate">
                Interviews
              </p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">
                {stats.interviews}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-5 py-3">
          <div className="text-sm text-gray-500">
            <span className="font-medium text-purple-700">
              {Math.round((stats.interviews / stats.totalApplications) * 100)}%
            </span>{' '}
            interview rate
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
              <ThumbsUp className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500 truncate">
                Offers
              </p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">
                {stats.offers}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-5 py-3">
          <div className="text-sm text-gray-500">
            <span className="font-medium text-green-700">
              {Math.round((stats.offers / stats.interviews) * 100 || 0)}%
            </span>{' '}
            offer rate
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-red-100 rounded-md p-3">
              <X className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500 truncate">
                Rejections
              </p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">
                {stats.rejections}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-5 py-3">
          <div className="text-sm text-gray-500">
            <span className="font-medium text-red-700">
              {Math.round((stats.rejections / stats.totalApplications) * 100)}%
            </span>{' '}
            rejection rate
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500 truncate">
                Success Rate
              </p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">
                {stats.applicationSuccessRate}%
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-5 py-3">
          <div className="text-sm text-gray-500">
            Based on all completed applications
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;