<script lang="ts" setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import type { ChartOptions } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const mode = useColorMode()

// Time period selection
const selectedPeriod = ref('today')
const timePeriods = [
  { key: 'today', label: 'Today', icon: '📅' },
  { key: 'yesterday', label: 'Yesterday', icon: '📆' },
  { key: 'lastweek', label: 'Last Week', icon: '📊' },
  { key: 'lastmonth', label: 'Last Month', icon: '📈' }
]

// Different data sets for each time period
const chartData = {
  today: {
    labels: ['12 AM', '3 AM', '6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
    datasets: [
      {
        label: 'Profile Views (Hourly)',
        data: [5, 8, 15, 45, 120, 180, 220, 95],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Profile Clicks (Hourly)', 
        data: [1, 2, 4, 12, 25, 35, 42, 18],
        borderColor: '#F59E0B',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Messages Received (Hourly)',
        data: [0, 0, 1, 2, 5, 8, 12, 4],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  },
  yesterday: {
    labels: ['12 AM', '3 AM', '6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
    datasets: [
      {
        label: 'Profile Views (Hourly)',
        data: [8, 12, 18, 52, 135, 195, 245, 110],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Profile Clicks (Hourly)',
        data: [2, 3, 5, 15, 28, 38, 48, 22],
        borderColor: '#F59E0B',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Messages Received (Hourly)',
        data: [0, 1, 1, 3, 6, 9, 14, 6],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  },
  lastweek: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Profile Views (Daily)',
        data: [1200, 1100, 1300, 1427, 1350, 1100, 950],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Profile Clicks (Daily)',
        data: [180, 165, 195, 187, 200, 175, 150],
        borderColor: '#F59E0B',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Messages Received (Daily)',
        data: [25, 18, 32, 28, 35, 22, 15],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  },
  lastmonth: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Profile Views (Weekly)',
        data: [8500, 9200, 7800, 8900],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Profile Clicks (Weekly)',
        data: [1250, 1380, 1150, 1290],
        borderColor: '#F59E0B',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Messages Received (Weekly)',
        data: [175, 195, 160, 185],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  }
}

// Computed data based on selected period
const chartDataComputed = computed(() => {
  return chartData[selectedPeriod.value as keyof typeof chartData]
})

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        usePointStyle: true,
        padding: 20,
        color: mode.value === 'dark' ? '#F9FAFB' : '#111827',
        font: {
          size: 12
        }
      }
    },
    tooltip: {
      backgroundColor: mode.value === 'dark' ? '#1F2937' : '#FFFFFF',
      titleColor: mode.value === 'dark' ? '#F9FAFB' : '#111827',
      bodyColor: mode.value === 'dark' ? '#D1D5DB' : '#374151',
      borderColor: mode.value === 'dark' ? '#374151' : '#E5E7EB',
      borderWidth: 1,
      callbacks: {
        afterBody: function() {
          return ['💡 Premium ads get 3x more views', '🚀 Boosted ads show first in search'];
        }
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: true,
        color: mode.value === 'dark' ? '#374151' : '#F3F4F6'
      },
      ticks: {
        color: mode.value === 'dark' ? '#9CA3AF' : '#6B7280'
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        color: mode.value === 'dark' ? '#374151' : '#F3F4F6'
      },
      ticks: {
        color: mode.value === 'dark' ? '#9CA3AF' : '#6B7280',
        callback: function(value) {
          const numValue = Number(value);
          if (numValue >= 1000000) {
            return (numValue / 1000000).toFixed(1) + 'M';
          } else if (numValue >= 1000) {
            return (numValue / 1000).toFixed(1) + 'K';
          }
          return numValue;
        }
      }
    }
  }
}
</script>

<template>
  <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
    <!-- Header with time period selector -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Your Profile Performance
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Track how many people view, click, and message your profile
        </p>
      </div>
      
      <!-- Time Period Buttons -->
      <div class="flex mt-4 sm:mt-0 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        <button
          v-for="period in timePeriods"
          :key="period.key"
          @click="selectedPeriod = period.key"
          :class="[
            'px-3 py-2 text-sm font-medium rounded-md transition-all duration-200',
            selectedPeriod === period.key
              ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          ]"
        >
          <span class="mr-1">{{ period.icon }}</span>
          {{ period.label }}
        </button>
      </div>
    </div>
    
    <!-- Chart -->
    <div class="h-80">
      <Line :data="chartDataComputed" :options="options" />
    </div>
    
    <!-- Performance Tips -->
    <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
      <p class="text-sm text-blue-700 dark:text-blue-300">
        💡 <strong>Tip:</strong> Premium ads (€35/week) get 3x more views, Boosted ads (€5/5hrs) appear first in search results!
      </p>
    </div>
  </div>
</template>

