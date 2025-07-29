<template>
  <aside class="w-64 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col">
    <!-- Sidebar Header -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <Icon name="heroicons:squares-2x2" class="w-5 h-5 text-white" />
        </div>
        <h1 class="text-lg font-bold text-gray-900 dark:text-white">Dashboard</h1>
      </div>
    </div>
    
    <!-- Navigation Links -->
    <nav class="flex-1 p-4">
      <ul class="space-y-2">
        <li>
          <NuxtLink to="/" class="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 hover:scale-[1.02] group">
            <Icon name="heroicons:home" class="w-5 h-5 group-hover:text-primary transition-colors" />
            <span class="font-medium">Home</span>
          </NuxtLink>
        </li>
        
        <li>
          <NuxtLink to="/analytics" class="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 hover:scale-[1.02] group">
            <Icon name="heroicons:chart-bar" class="w-5 h-5 group-hover:text-success transition-colors" />
            <span class="font-medium">Analytics</span>
          </NuxtLink>
        </li>
        
        <li>
          <NuxtLink to="/users" class="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 hover:scale-[1.02] group">
            <Icon name="heroicons:users" class="w-5 h-5 group-hover:text-info transition-colors" />
            <span class="font-medium">Users</span>
          </NuxtLink>
        </li>
        
        <li>
          <NuxtLink to="/settings" class="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 hover:scale-[1.02] group">
            <Icon name="heroicons:cog-6-tooth" class="w-5 h-5 group-hover:text-warning transition-colors" />
            <span class="font-medium">Settings</span>
          </NuxtLink>
        </li>
        
        <li>
          <NuxtLink to="/reports" class="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 hover:scale-[1.02] group">
            <Icon name="heroicons:document-chart-bar" class="w-5 h-5 group-hover:text-secondary transition-colors" />
            <span class="font-medium">Reports</span>
          </NuxtLink>
        </li>
      </ul>
      
      <!-- Divider -->
      <hr class="my-6 border-gray-200 dark:border-gray-700">
      
      <!-- Support Section -->
      <div class="space-y-2">
        <h3 class="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Support</h3>
        <ul class="space-y-1">
          <li>
            <NuxtLink to="/help" class="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 hover:scale-[1.02] group">
              <Icon name="heroicons:question-mark-circle" class="w-5 h-5 group-hover:text-info transition-colors" />
              <span class="font-medium">Help Center</span>
            </NuxtLink>
          </li>
          
          <li>
            <NuxtLink to="/contact" class="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 hover:scale-[1.02] group">
              <Icon name="heroicons:envelope" class="w-5 h-5 group-hover:text-primary transition-colors" />
              <span class="font-medium">Contact</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
    
    <!-- Sidebar Footer -->
    <div class="p-4 border-t border-gray-200 dark:border-gray-700">
      <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
          JD
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 dark:text-white truncate">John Doe</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 truncate">john@example.com</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>

</script>

<style>

</style>