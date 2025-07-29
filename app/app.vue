<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
    <!-- Header -->
    <Header />
    
    <!-- Main Layout with Sidebar -->
    <div class="flex">
      <!-- Sidebar -->
      <SideBar />
      
      <!-- Main Content Area -->
      <main class="flex-1 p-6">
        <div class="max-w-7xl mx-auto">
          <h1 class="text-3xl font-bold mb-6">
            Welcome to Your Admin Dashboard
          </h1>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 class="text-lg font-semibold mb-2 text-primary">Dashboard Overview</h3>
              <p class="text-gray-600 dark:text-gray-300">Monitor your application metrics and performance.</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 class="text-lg font-semibold mb-2 text-success">Analytics</h3>
              <p class="text-gray-600 dark:text-gray-300">View detailed analytics and user insights.</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 class="text-lg font-semibold mb-2 text-warning">Settings</h3>
              <p class="text-gray-600 dark:text-gray-300">Configure your application preferences.</p>
            </div>
          </div>
          
          <div class="text-center">
            <button class="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
