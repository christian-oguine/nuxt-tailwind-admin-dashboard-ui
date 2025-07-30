<script setup lang="ts">
import TrafficChart from './components/TrafficChart.vue';


</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
    <!-- Header -->
    <Header />
    
    <!-- Main Layout with Sidebar -->
    <div class="flex">
      <!-- Sidebar -->
      <SideBar />
      
      <!-- Main Content Area -->
      <main class="flex-1 p-6">
        <div class="max-w-8xl mx-auto">
          <!-- Dashboard Title with Wallet Balance -->
          <div class="mb-6">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Advertising Dashboard</h1>
                <p class="text-gray-600 dark:text-gray-400 mt-2 text-md">Monitor your ad performance and profile metrics</p>
              </div>
              
              <!-- Ad Status & Performance Section -->
              <div class="mt-4 sm:mt-0 flex items-center space-x-4">
                <!-- Wallet Balance -->
                <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 shadow-sm">
                  <div class="flex items-center space-x-3">
                    <Icon name="heroicons:wallet" class="w-5 h-5 text-green-600 dark:text-green-400" />
                    <div>
                      <div class="text-sm font-medium text-gray-600 dark:text-gray-400">Ad Balance</div>
                      <div class="text-lg font-bold text-gray-900 dark:text-white">€2,847.50</div>
                    </div>
                    <div class="text-right">
                      <div class="text-sm font-semibold text-green-600 dark:text-green-400">+5.6%</div>
                      <div class="text-xs text-gray-500 dark:text-gray-400">vs last week</div>
                    </div>
                  </div>
                </div>
                
                <!-- Add Money Button -->
                <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors shadow-sm flex items-center space-x-2">
                  <Icon name="heroicons:plus" class="w-4 h-4" />
                  <span>Add Money</span>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Status Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Ad Balance Card -->
            <StatusCard
              title="Ad Balance"
              :value="2847.50"
              icon="heroicons:wallet"
              :isCurrency="true"
              color="bg-gradient-to-br from-green-500 to-emerald-600"
              subtitle="Available credit"
              :performance="{
                change: 5.6,
                period: 'vs last week',
                isIncrease: true
              }"
              status="Active"
              :statusDot="true"
              statusColor="text-green-600"
              statusDotColor="bg-green-400"
            />
            
            <!-- Today Traffic Card -->
            <StatusCard
              title="Today Traffic"
              :value="1427"
              icon="heroicons:eye"
              color="bg-gradient-to-br from-blue-500 to-cyan-600"
              subtitle="Profile views today"
              :performance="{
                change: 27.1,
                period: 'vs yesterday',
                isIncrease: true
              }"
              status="Boosted Ad Active"
              :statusDot="true"
              statusColor="text-blue-600"
              statusDotColor="bg-blue-400"
              :isBoosted="true"
            />
            
            <!-- Yesterday Views Card -->
            <StatusCard
              title="Yesterday Views"
              :value="1123"
              icon="heroicons:chart-bar"
              color="bg-gradient-to-br from-purple-500 to-indigo-600"
              subtitle="Previous day traffic"
              :performance="{
                change: -7.8,
                period: 'vs 2 days ago',
                isIncrease: false
              }"
              status="Normal Traffic"
              statusColor="text-purple-600"
            />
            
            <!-- Total Profile Clicks Card -->
            <StatusCard
              title="Total Profile Clicks"
              :value="2847"
              icon="heroicons:cursor-arrow-rays"
              color="bg-gradient-to-br from-orange-500 to-red-600"
              subtitle="All-time clicks"
              :performance="{
                change: 18.6,
                period: 'this month',
                isIncrease: true
              }"
              status="Premium Member"
              :statusDot="true"
              statusColor="text-orange-600"
              statusDotColor="bg-orange-400"
              :isPremium="true"
            />
          </div>
          <TrafficChart class="mt-8" />
          <ActiveCampaigns />
          <QuickActions />
        </div>
      </main>
    </div>
  </div>
</template>
