// composables/useAnalytics.ts
export const useAnalytics = () => {
  // Mock function to simulate real API calls
  const simulateApiCall = async (baseValue: number, variance: number = 0.1) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100))
    
    // Add some realistic variance to simulate real data changes
    const randomFactor = 1 + (Math.random() - 0.5) * variance
    return Math.round(baseValue * randomFactor)
  }

  const getAdBalance = async () => {
    // In real app: const response = await $fetch('/api/user/balance')
    const currentBalance = await simulateApiCall(2847.50, 0.05)
    const lastWeekBalance = 2695.30
    
    return {
      current: currentBalance,
      previous: lastWeekBalance,
      change: calculatePercentageChange(currentBalance, lastWeekBalance),
      period: 'vs last week'
    }
  }

  const getTodayTraffic = async () => {
    // In real app: const response = await $fetch('/api/analytics/traffic/today')
    const todayViews = await simulateApiCall(1427, 0.15)
    const yesterdayViews = 1123
    
    return {
      current: todayViews,
      previous: yesterdayViews,
      change: calculatePercentageChange(todayViews, yesterdayViews),
      period: 'vs yesterday'
    }
  }

  const getYesterdayViews = async () => {
    // In real app: const response = await $fetch('/api/analytics/traffic/yesterday')
    const yesterdayViews = await simulateApiCall(1123, 0.1)
    const twoDaysAgoViews = 1218
    
    return {
      current: yesterdayViews,
      previous: twoDaysAgoViews,
      change: calculatePercentageChange(yesterdayViews, twoDaysAgoViews),
      period: 'vs 2 days ago'
    }
  }

  const getTotalClicks = async () => {
    // In real app: const response = await $fetch('/api/analytics/clicks/total')
    const currentMonthClicks = await simulateApiCall(2847, 0.08)
    const lastMonthClicks = 2401
    
    return {
      current: currentMonthClicks,
      previous: lastMonthClicks,
      change: calculatePercentageChange(currentMonthClicks, lastMonthClicks),
      period: 'this month'
    }
  }

  // Calculate percentage change with proper sign handling
  const calculatePercentageChange = (current: number, previous: number): number => {
    if (previous === 0) return current > 0 ? 100 : 0
    return Number(((current - previous) / previous * 100).toFixed(1))
  }

  // Reactive data store
  const analyticsData = ref({
    adBalance: null as any,
    todayTraffic: null as any,
    yesterdayViews: null as any,
    totalClicks: null as any,
    isLoading: false,
    lastUpdated: null as Date | null
  })

  const loadAnalytics = async () => {
    analyticsData.value.isLoading = true
    
    try {
      console.log('🔄 Loading analytics data...')
      
      // Load all analytics data in parallel
      const [balance, traffic, yesterday, clicks] = await Promise.all([
        getAdBalance(),
        getTodayTraffic(),
        getYesterdayViews(),
        getTotalClicks()
      ])

      analyticsData.value = {
        adBalance: balance,
        todayTraffic: traffic,
        yesterdayViews: yesterday,
        totalClicks: clicks,
        isLoading: false,
        lastUpdated: new Date()
      }
      
      console.log('✅ Analytics data loaded:', analyticsData.value)
    } catch (error) {
      console.error('❌ Failed to load analytics:', error)
      analyticsData.value.isLoading = false
    }
  }

  // Auto-refresh data every 30 seconds for demo (in production use longer intervals)
  const startAutoRefresh = () => {
    console.log('🔄 Starting auto-refresh...')
    
    const interval = setInterval(() => {
      console.log('🔄 Auto-refreshing analytics...')
      loadAnalytics()
    }, 30 * 1000) // 30 seconds for demo

    // Cleanup on unmount
    onUnmounted(() => {
      console.log('🛑 Stopping auto-refresh')
      clearInterval(interval)
    })
  }

  return {
    analyticsData: readonly(analyticsData),
    loadAnalytics,
    startAutoRefresh,
    calculatePercentageChange
  }
}
