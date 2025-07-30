<template>
  <div class="mt-6">
    <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h4>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Boost Profile Card -->
      <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:border-blue-300 dark:hover:border-blue-600">
        <div class="flex items-center mb-3">
          <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
            <Icon name="heroicons:rocket-launch" class="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h5 class="font-semibold text-gray-900 dark:text-white">Boost Profile</h5>
        </div>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">€5 for 5 hours - Appear first in search</p>
        <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
          Boost Now
        </button>
      </div>
      
      <!-- Premium Upgrade Card -->
      <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:border-amber-300 dark:hover:border-amber-600">
        <div class="flex items-center mb-3">
          <div class="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mr-3">
            <Icon name="heroicons:star" class="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
          <h5 class="font-semibold text-gray-900 dark:text-white">Upgrade to Premium</h5>
        </div>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">€35 per week - 3x more profile views</p>
        <button class="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
          Go Premium
        </button>
      </div>
      
      <!-- Add Credits Card -->
      <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:border-emerald-300 dark:hover:border-emerald-600">
        <div class="flex items-center mb-3">
          <div class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mr-3">
            <Icon name="heroicons:credit-card" class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h5 class="font-semibold text-gray-900 dark:text-white">Add Credits</h5>
        </div>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">Top up your account balance</p>
        <button class="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
          Add Money
        </button>
      </div>
    </div>
    
    <!-- Recent Activity -->
    <div class="mt-8">
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Profile Activity</h4>
      <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        <div class="space-y-3">
          <!-- Activity Item 1 -->
          <div class="flex items-start space-x-3">
            <div class="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <Icon name="heroicons:eye" class="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-900 dark:text-white">Someone viewed your profile</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">5 minutes ago</p>
            </div>
          </div>
          
          <!-- Activity Item 2 -->
          <div class="flex items-start space-x-3">
            <div class="flex-shrink-0 w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
              <Icon name="heroicons:chat-bubble-left" class="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-900 dark:text-white">New message received</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">12 minutes ago</p>
            </div>
          </div>
          
          <!-- Activity Item 3 -->
          <div class="flex items-start space-x-3">
            <div class="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
              <Icon name="heroicons:rocket-launch" class="w-4 h-4 text-orange-600 dark:text-orange-400" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-900 dark:text-white">Boost ad expired</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
            </div>
          </div>
          
          <!-- Activity Item 4 -->
          <div class="flex items-start space-x-3">
            <div class="flex-shrink-0 w-8 h-8 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center">
              <Icon name="heroicons:cursor-arrow-rays" class="w-4 h-4 text-slate-600 dark:text-slate-400" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-900 dark:text-white">3 people clicked your profile</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">4 hours ago</p>
            </div>
          </div>
          
          <!-- Activity Item 5 -->
          <div class="flex items-start space-x-3">
            <div class="flex-shrink-0 w-8 h-8 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center">
              <Icon name="heroicons:star" class="w-4 h-4 text-amber-600 dark:text-amber-400" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-900 dark:text-white">Premium status activated</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">Yesterday</p>
            </div>
          </div>
        </div>
        
        <!-- View All Button -->
        <div class="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
          <button class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
            View all activity →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>