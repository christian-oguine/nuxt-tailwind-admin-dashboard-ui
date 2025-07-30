<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden">
    <!-- Premium Badge -->
    <div v-if="isPremium" class="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-xl shadow-md">
      <Icon name="heroicons:star-solid" class="w-2 h-2 inline mr-1" />
      PREMIUM
    </div>
    
    <!-- Boost Badge -->
    <div v-if="isBoosted" class="absolute -top-1 -left-1 bg-gradient-to-r from-red-500 to-rose-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg rounded-tl-xl shadow-md animate-pulse">
      <Icon name="heroicons:rocket-launch-solid" class="w-2 h-2 inline mr-1" />
      BOOSTED
    </div>
    
    <!-- Main Content -->
    <div class="flex items-center justify-between mb-3">
      <div class="flex-1">
        <!-- Title -->
        <h3 class="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide mb-1">
          {{ title }}
        </h3>
        
        <!-- Main Value -->
        <div class="flex items-baseline gap-1 mb-1">
          <span v-if="isCurrency" class="text-lg font-bold text-gray-400 dark:text-gray-500">$</span>
          <p class="text-2xl font-black text-gray-900 dark:text-white group-hover:text-primary transition-colors">
            {{ formatValue(value) }}
          </p>
          <span v-if="unit" class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ unit }}</span>
        </div>
        
        <!-- Subtitle -->
        <p v-if="subtitle" class="text-xs text-gray-500 dark:text-gray-400">
          {{ subtitle }}
        </p>
      </div>
      
      <!-- Icon -->
      <div class="relative">
        <div :class="[iconColor, 'w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md']">
          <Icon v-if="icon" :name="icon" class="w-6 h-6 text-white" />
        </div>
        <!-- Status Dot -->
        <div v-if="isActive" class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"></div>
      </div>
    </div>
    
    <!-- Performance -->
    <div v-if="performance" class="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
      <div class="flex items-center gap-1">
        <Icon v-if="performanceIcon" :name="performanceIcon" :class="[performanceTextColor, 'w-3 h-3']" />
        <span :class="[performanceTextColor, 'font-bold text-sm']">
          {{ performance.change > 0 ? '+' : '' }}{{ performance.change }}%
        </span>
      </div>
      <p class="text-xs text-gray-500 dark:text-gray-400">{{ performance.period }}</p>
    </div>
    
    <!-- Status -->
    <div v-if="status" class="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
      <span :class="[statusColor, 'text-xs font-medium flex items-center gap-1']">
        <div v-if="statusDot" :class="[statusDotColor, 'w-1.5 h-1.5 rounded-full']"></div>
        {{ status }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Performance {
  change: number
  period: string
  isIncrease: boolean
  label?: string
  comparison?: string
}

interface Progress {
  label: string
  current: number
  target: number
}

interface Metric {
  label: string
  value: string | number
  unit?: string
  isCurrency?: boolean
  change?: number
}

interface Action {
  label: string
  icon: string
  color: string
  onClick: () => void
}

interface Props {
  title: string
  value: string | number
  icon: string
  color?: string
  subtitle?: string
  unit?: string
  isCurrency?: boolean
  budget?: number
  performance?: Performance
  progress?: Progress
  metrics?: Metric[]
  status?: string
  statusColor?: string
  statusDot?: boolean
  statusDotColor?: string
  lastUpdated?: string
  isPremium?: boolean
  isBoosted?: boolean
  isActive?: boolean
  actions?: Action[]
}

const props = withDefaults(defineProps<Props>(), {
  color: 'bg-gradient-to-br from-blue-500 to-blue-600',
  statusColor: 'text-gray-500',
  statusDotColor: 'bg-green-400',
  isPremium: false,
  isBoosted: false,
  isActive: false,
  isCurrency: false,
  statusDot: false
})

const iconColor = computed(() => props.color)

const performanceColor = computed(() => {
  if (!props.performance) return 'bg-gray-100 dark:bg-gray-600'
  return props.performance.isIncrease 
    ? 'bg-green-100 dark:bg-green-900/30' 
    : 'bg-red-100 dark:bg-red-900/30'
})

const performanceTextColor = computed(() => {
  if (!props.performance) return 'text-gray-500'
  return props.performance.isIncrease ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
})

const performanceIcon = computed(() => {
  if (!props.performance) return ''
  return props.performance.isIncrease ? 'heroicons:arrow-trending-up' : 'heroicons:arrow-trending-down'
})

const progressColor = computed(() => {
  if (!props.progress) return 'bg-gradient-to-r from-blue-500 to-blue-600'
  const percentage = (props.progress.current / props.progress.target) * 100
  if (percentage >= 90) return 'bg-gradient-to-r from-green-500 to-emerald-500'
  if (percentage >= 70) return 'bg-gradient-to-r from-blue-500 to-cyan-500'
  if (percentage >= 50) return 'bg-gradient-to-r from-yellow-500 to-orange-500'
  return 'bg-gradient-to-r from-red-500 to-pink-500'
})

const progressPercentage = computed(() => {
  if (!props.progress) return 0
  return Math.min((props.progress.current / props.progress.target) * 100, 100)
})

const formatValue = (value: string | number): string => {
  if (typeof value === 'number') {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M'
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K'
    }
    return value.toLocaleString()
  }
  return value
}

const formatCurrency = (value: number): string => {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + 'M'
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1) + 'K'
  }
  return value.toLocaleString()
}
</script>