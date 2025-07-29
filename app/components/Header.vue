<template>
    <header class="sticky top-0 z-20 border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur border-gray-200 dark:border-gray-700">
        <div class="container flex h-16 items-center justify-between">
            <div class="flex items-center gap-4 ml-8">
                <img src="/icon.svg" alt="Logo" class="h-8 w-8" />
                <NuxtLink to="/" class="text-lg font-bold text-gray-900 dark:text-white">MyApp</NuxtLink>
                <nav class="flex items-center space-x-4">
                    <ul class="flex space-x-4">
                        <li><NuxtLink to="/about" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">About</NuxtLink></li>
                        <li><NuxtLink to="/contact" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Contact</NuxtLink></li>
                    </ul>
                </nav>
            </div>

            <div class="flex items-center gap-4 mr-8">

                <!-- Theme toggle button -->
                <button 
                    @click="toggleTheme" 
                    class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    <Icon 
                        :name="isDark ? 'heroicons:sun' : 'heroicons:moon'" 
                        class="h-5 w-5 text-gray-600 dark:text-gray-300" 
                    />
                </button>
                
                <!-- User Dropdown -->
                <HMenu as="div" class="relative">
                    <HMenuButton class="flex items-center gap-2 p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg rounded-lg group">
                        <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 group-hover:scale-110">
                            <img src="/1.jpg" alt="User Avatar" class="rounded-full w-full h-full object-cover" />
                        </div>
                        <Icon name="heroicons:chevron-down" class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </HMenuButton>

                    <TransitionScale 
                        :scale="0.6" 
                        :duration="500"
                        origin="top-right"
                        easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                        :opacity="true"
                        :blur="8"
                        :rotate="12"
                        :translateY="-20"
                        :translateX="10"
                    >
                        <!-- Dropdown Menu -->
                        <HMenuItems class="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-600 py-2 z-50 origin-top-right backdrop-blur-md bg-white/95 dark:bg-gray-800/95 ring-1 ring-black/5 dark:ring-white/10">
                            <HMenuItem v-slot="{ active }">
                                <a href="/profile" :class="[active ? 'bg-gradient-to-r from-primary/10 to-primary/5 text-primary dark:from-primary/20 dark:to-primary/10 dark:text-primary-400 scale-[1.02] shadow-sm' : 'text-gray-700 dark:text-gray-300', 'flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 ease-out hover:scale-[1.02] rounded-lg mx-2']">
                                    <Icon name="heroicons:user-circle" class="w-4 h-4" />
                                    Profile
                                </a>
                            </HMenuItem>
                            <HMenuItem v-slot="{ active }">
                                <a href="/settings" :class="[active ? 'bg-gradient-to-r from-secondary/10 to-secondary/5 text-secondary dark:from-secondary/20 dark:to-secondary/10 dark:text-secondary-400 scale-[1.02] shadow-sm' : 'text-gray-700 dark:text-gray-300', 'flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 ease-out hover:scale-[1.02] rounded-lg mx-2']">
                                    <Icon name="heroicons:cog-6-tooth" class="w-4 h-4" />
                                    Settings
                                </a>
                            </HMenuItem>
                            <hr class="my-2 border-gray-200 dark:border-gray-600 mx-2">
                            <HMenuItem v-slot="{ active }">
                                <button @click="signOut" :class="[active ? 'bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/20 text-red-700 dark:text-red-400 scale-[1.02] shadow-sm' : 'text-red-600 dark:text-red-400', 'flex items-center gap-3 w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 ease-out hover:scale-[1.02] rounded-lg mx-2']">
                                    <Icon name="heroicons:arrow-right-on-rectangle" class="w-4 h-4" />
                                    Sign Out
                                </button>
                            </HMenuItem>
                        </HMenuItems>
                    </TransitionScale>
                </HMenu>

                
            </div>
        </div>

    </header>
</template>

<script setup lang="ts">
const isDark = useDark()

const toggleTheme = () => {
  isDark.value = !isDark.value
}

const signOut = () => {
  // Implement your sign-out logic here
}
</script>