<template>
  <div class="mt-8">
    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2 shadow-sm">
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center">
          <Icon name="mdi:storefront" class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Active Campaigns</h4>
        </div>
        <div class="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
          <div class="flex items-center">
            <Icon name="mdi:crown" class="w-4 h-4 text-amber-500 mr-1" />
            <span>3 Premium</span>
          </div>
          <div class="flex items-center">
            <Icon name="mdi:rocket-launch" class="w-4 h-4 text-blue-500 mr-1" />
            <span>2 Boosted</span>
          </div>
        </div>
      </div>

      <div class="space-y-2">
        <!-- Premium Campaign 1 -->
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-2 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10">
          <div class="flex items-start space-x-2">
            <!-- Product Image -->
            <div class="relative flex-shrink-0">
              <img src="/1.jpg" alt="Premium Electronics Store" class="w-16 h-16 object-cover rounded-lg shadow-sm" />
              <div class="absolute -top-1 -right-1 bg-amber-500 text-white text-xs px-1 py-0.5 rounded-full font-bold shadow-lg">
                <Icon name="mdi:crown" class="w-3 h-3 inline mr-0.5" />
                Premium
              </div>
            </div>
            
            <!-- Campaign Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between mb-1">
                <div class="flex-1 min-w-0 pr-2">
                  <h5 class="text-sm font-semibold text-gray-900 dark:text-white mb-1 truncate">Premium Electronics Store</h5>
                  <p class="text-xs text-gray-600 dark:text-gray-400 mb-1 line-clamp-2">High-end electronics, smartphones, laptops, and tech accessories. Free shipping and warranty included.</p>
                  <div class="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                    <div class="flex items-center">
                      <Icon name="mdi:calendar-start" class="w-3 h-3 mr-1 text-green-500" />
                      <span>Jul 25</span>
                    </div>
                    <div class="flex items-center">
                      <Icon name="mdi:calendar-end" class="w-3 h-3 mr-1 text-red-500" />
                      <span>Aug 1</span>
                    </div>
                    <div class="flex items-center">
                      <Icon name="mdi:currency-eur" class="w-3 h-3 mr-1 text-blue-500" />
                      <span class="font-medium">€89/wk</span>
                    </div>
                  </div>
                </div>
                
                <!-- Time Remaining Progress -->
                <div class="text-right flex-shrink-0">
                  <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 border border-gray-200 dark:border-gray-600">
                    <div class="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Remaining</div>
                    <div class="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">1d 14h</div>
                    <div class="w-12 bg-gray-200 dark:bg-gray-600 rounded-full h-1 mb-0.5">
                      <div class="bg-amber-500 h-1 rounded-full" style="width: 75%"></div>
                    </div>
                    <div class="text-xs text-amber-600 dark:text-amber-400">75%</div>
                  </div>
                </div>
              </div>
              
              <!-- Performance Stats -->
              <div class="grid grid-cols-4 gap-1">
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:eye" class="w-3 h-3 mx-auto text-blue-500 mb-0.5" />
                  <div class="text-xs font-bold text-gray-900 dark:text-white">847</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Views</div>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:cursor-default-click" class="w-3 h-3 mx-auto text-green-500 mb-0.5" />
                  <div class="text-xs font-bold text-gray-900 dark:text-white">67</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Clicks</div>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:message-text" class="w-3 h-3 mx-auto text-purple-500 mb-0.5" />
                  <div class="text-xs font-bold text-gray-900 dark:text-white">23</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Messages</div>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:trending-up" class="w-3 h-3 mx-auto text-green-500 mb-0.5" />
                  <div class="text-xs font-bold text-green-600 dark:text-green-400">+23%</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Perf</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Premium Campaign 2 -->
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-2 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10">
          <div class="flex items-start space-x-2">
            <!-- Product Image -->
            <div class="relative flex-shrink-0">
              <img src="/2.jpg" alt="Fashion Boutique Store" class="w-16 h-16 object-cover rounded-lg shadow-sm" />
              <div class="absolute -top-1 -right-1 bg-amber-500 text-white text-xs px-1 py-0.5 rounded-full font-bold shadow-lg">
                <Icon name="mdi:crown" class="w-3 h-3 inline mr-0.5" />
                Premium
              </div>
            </div>
            
            <!-- Campaign Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between mb-1">
                <div class="flex-1 min-w-0 pr-2">
                  <h5 class="text-sm font-semibold text-gray-900 dark:text-white mb-1 truncate">Fashion Boutique Store</h5>
                  <p class="text-xs text-gray-600 dark:text-gray-400 mb-1 line-clamp-2">Trendy clothing, designer accessories, and premium fashion items. Latest collections and seasonal sales.</p>
                  <div class="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                    <div class="flex items-center">
                      <Icon name="mdi:calendar-start" class="w-3 h-3 mr-1 text-green-500" />
                      <span>Jul 23</span>
                    </div>
                    <div class="flex items-center">
                      <Icon name="mdi:calendar-end" class="w-3 h-3 mr-1 text-red-500" />
                      <span>Jul 30</span>
                    </div>
                    <div class="flex items-center">
                      <Icon name="mdi:currency-eur" class="w-3 h-3 mr-1 text-blue-500" />
                      <span class="font-medium">€89/wk</span>
                    </div>
                  </div>
                </div>
                
                <!-- Time Remaining Progress -->
                <div class="text-right flex-shrink-0">
                  <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 border border-red-200 dark:border-red-600">
                    <div class="text-xs text-red-500 dark:text-red-400 mb-0.5">Expiring</div>
                    <div class="text-sm font-semibold text-red-600 dark:text-red-400 mb-0.5">8h 15m</div>
                    <div class="w-12 bg-gray-200 dark:bg-gray-600 rounded-full h-1 mb-0.5">
                      <div class="bg-red-500 h-1 rounded-full animate-pulse" style="width: 20%"></div>
                    </div>
                    <div class="text-xs text-red-600 dark:text-red-400">20%</div>
                  </div>
                </div>
              </div>
              
              <!-- Performance Stats -->
              <div class="grid grid-cols-4 gap-1">
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:eye" class="w-3 h-3 mx-auto text-blue-500 mb-0.5" />
                  <div class="text-xs font-bold text-gray-900 dark:text-white">523</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Views</div>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:cursor-default-click" class="w-3 h-3 mx-auto text-green-500 mb-0.5" />
                  <div class="text-xs font-bold text-gray-900 dark:text-white">41</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Clicks</div>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:message-text" class="w-3 h-3 mx-auto text-purple-500 mb-0.5" />
                  <div class="text-xs font-bold text-gray-900 dark:text-white">12</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Messages</div>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:trending-up" class="w-3 h-3 mx-auto text-green-500 mb-0.5" />
                  <div class="text-xs font-bold text-green-600 dark:text-green-400">+32%</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Perf</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Premium Campaign 3 -->
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-2 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10">
          <div class="flex items-start space-x-2">
            <!-- Product Image -->
            <div class="relative flex-shrink-0">
              <img src="/3.jpg" alt="Premium Home Appliances" class="w-16 h-16 object-cover rounded-lg shadow-sm" />
              <div class="absolute -top-1 -right-1 bg-amber-500 text-white text-xs px-1 py-0.5 rounded-full font-bold shadow-lg">
                <Icon name="mdi:crown" class="w-3 h-3 inline mr-0.5" />
                Premium
              </div>
            </div>
            
            <!-- Campaign Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between mb-1">
                <div class="flex-1 min-w-0 pr-2">
                  <h5 class="text-sm font-semibold text-gray-900 dark:text-white mb-1 truncate">Premium Home Appliances</h5>
                  <p class="text-xs text-gray-600 dark:text-gray-400 mb-1 line-clamp-2">High-quality kitchen appliances, smart home devices, and modern furniture. Energy-efficient and warranty covered.</p>
                  <div class="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                    <div class="flex items-center">
                      <Icon name="mdi:calendar-start" class="w-3 h-3 mr-1 text-green-500" />
                      <span>Jul 27</span>
                    </div>
                    <div class="flex items-center">
                      <Icon name="mdi:calendar-end" class="w-3 h-3 mr-1 text-red-500" />
                      <span>Aug 3</span>
                    </div>
                    <div class="flex items-center">
                      <Icon name="mdi:currency-eur" class="w-3 h-3 mr-1 text-blue-500" />
                      <span class="font-medium">€89/wk</span>
                    </div>
                  </div>
                </div>
                
                <!-- Time Remaining Progress -->
                <div class="text-right flex-shrink-0">
                  <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 border border-green-200 dark:border-green-600">
                    <div class="text-xs text-green-500 dark:text-green-400 mb-0.5">Active</div>
                    <div class="text-sm font-semibold text-green-600 dark:text-green-400 mb-0.5">3d 18h</div>
                    <div class="w-12 bg-gray-200 dark:bg-gray-600 rounded-full h-1 mb-0.5">
                      <div class="bg-green-500 h-1 rounded-full" style="width: 90%"></div>
                    </div>
                    <div class="text-xs text-green-600 dark:text-green-400">90%</div>
                  </div>
                </div>
              </div>
              
              <!-- Performance Stats -->
              <div class="grid grid-cols-4 gap-1">
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:eye" class="w-3 h-3 mx-auto text-blue-500 mb-0.5" />
                  <div class="text-xs font-bold text-gray-900 dark:text-white">692</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Views</div>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:cursor-default-click" class="w-3 h-3 mx-auto text-green-500 mb-0.5" />
                  <div class="text-xs font-bold text-gray-900 dark:text-white">55</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Clicks</div>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:message-text" class="w-3 h-3 mx-auto text-purple-500 mb-0.5" />
                  <div class="text-xs font-bold text-gray-900 dark:text-white">18</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Messages</div>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:trending-up" class="w-3 h-3 mx-auto text-green-500 mb-0.5" />
                  <div class="text-xs font-bold text-green-600 dark:text-green-400">+45%</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Perf</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Boosted Campaign 1 -->
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10">
          <div class="flex items-start space-x-2">
            <!-- Product Image -->
            <div class="relative flex-shrink-0">
              <img src="/1.jpg" alt="Sports Equipment Store" class="w-16 h-16 object-cover rounded-lg shadow-sm" />
              <div class="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-1 py-0.5 rounded-full font-bold shadow-lg">
                <Icon name="mdi:rocket-launch" class="w-3 h-3 inline mr-0.5" />
                Boosted
              </div>
            </div>
            
            <!-- Campaign Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between mb-1">
                <div class="flex-1 min-w-0 pr-2">
                  <h5 class="text-sm font-semibold text-gray-900 dark:text-white mb-1 truncate">Sports Equipment Store</h5>
                  <p class="text-xs text-gray-600 dark:text-gray-400 mb-1 line-clamp-2">Professional sports gear, fitness equipment, and outdoor adventure accessories. Quality brands and competitive prices.</p>
                  <div class="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                    <div class="flex items-center">
                      <Icon name="mdi:calendar-start" class="w-3 h-3 mr-1 text-green-500" />
                      <span>3h ago</span>
                    </div>
                    <div class="flex items-center">
                      <Icon name="mdi:currency-eur" class="w-3 h-3 mr-1 text-blue-500" />
                      <span class="font-medium">€40 (5h boost)</span>
                    </div>
                  </div>
                </div>
                
                <!-- Countdown Timer -->
                <div class="text-right flex-shrink-0">
                  <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 border-2 border-red-200 dark:border-red-600">
                    <div class="text-xs text-red-500 dark:text-red-400 mb-0.5 flex items-center">
                      <Icon name="mdi:timer" class="w-3 h-3 mr-1" />
                      Ending Soon
                    </div>
                    <div class="text-sm font-bold text-red-600 dark:text-red-400 mb-0.5">01:47:23</div>
                    <div class="w-12 bg-gray-200 dark:bg-gray-600 rounded-full h-1 mb-0.5">
                      <div class="bg-red-500 h-1 rounded-full animate-pulse" style="width: 35%"></div>
                    </div>
                    <div class="text-xs text-red-600 dark:text-red-400">2h left</div>
                  </div>
                </div>
              </div>
              
              <!-- Performance Stats -->
              <div class="grid grid-cols-4 gap-1">
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:eye" class="w-3 h-3 mx-auto text-blue-500 mb-0.5" />
                  <div class="text-xs font-bold text-gray-900 dark:text-white">312</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Views</div>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:cursor-default-click" class="w-3 h-3 mx-auto text-green-500 mb-0.5" />
                  <div class="text-xs font-bold text-gray-900 dark:text-white">45</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Clicks</div>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:message-text" class="w-3 h-3 mx-auto text-purple-500 mb-0.5" />
                  <div class="text-xs font-bold text-gray-900 dark:text-white">11</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Messages</div>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:trending-up" class="w-3 h-3 mx-auto text-green-500 mb-0.5" />
                  <div class="text-xs font-bold text-green-600 dark:text-green-400">+68%</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Perf</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Boosted Campaign 2 -->
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10">
          <div class="flex items-start space-x-2">
            <!-- Product Image -->
            <div class="relative flex-shrink-0">
              <img src="/2.jpg" alt="Beauty & Wellness Store" class="w-16 h-16 object-cover rounded-lg shadow-sm" />
              <div class="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-1 py-0.5 rounded-full font-bold shadow-lg">
                <Icon name="mdi:rocket-launch" class="w-3 h-3 inline mr-0.5" />
                Boosted
              </div>
            </div>
            
            <!-- Campaign Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between mb-1">
                <div class="flex-1 min-w-0 pr-2">
                  <h5 class="text-sm font-semibold text-gray-900 dark:text-white mb-1 truncate">Beauty & Wellness Store</h5>
                  <p class="text-xs text-gray-600 dark:text-gray-400 mb-1 line-clamp-2">Skincare products, cosmetics, wellness supplements, and natural health solutions. Expert-tested quality.</p>
                  <div class="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                    <div class="flex items-center">
                      <Icon name="mdi:calendar-start" class="w-3 h-3 mr-1 text-green-500" />
                      <span>1h ago</span>
                    </div>
                    <div class="flex items-center">
                      <Icon name="mdi:currency-eur" class="w-3 h-3 mr-1 text-blue-500" />
                      <span class="font-medium">€40 (5h boost)</span>
                    </div>
                  </div>
                </div>
                
                <!-- Countdown Timer -->
                <div class="text-right flex-shrink-0">
                  <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 border-2 border-green-200 dark:border-green-600">
                    <div class="text-xs text-green-500 dark:text-green-400 mb-0.5 flex items-center">
                      <Icon name="mdi:timer" class="w-3 h-3 mr-1" />
                      Boost Active
                    </div>
                    <div class="text-sm font-bold text-green-600 dark:text-green-400 mb-0.5">03:52:17</div>
                    <div class="w-12 bg-gray-200 dark:bg-gray-600 rounded-full h-1 mb-0.5">
                      <div class="bg-green-500 h-1 rounded-full" style="width: 78%"></div>
                    </div>
                    <div class="text-xs text-green-600 dark:text-green-400">4h left</div>
                  </div>
                </div>
              </div>
              
              <!-- Performance Stats -->
              <div class="grid grid-cols-4 gap-1">
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:eye" class="w-3 h-3 mx-auto text-blue-500 mb-0.5" />
                  <div class="text-xs font-bold text-gray-900 dark:text-white">398</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Views</div>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:cursor-default-click" class="w-3 h-3 mx-auto text-green-500 mb-0.5" />
                  <div class="text-xs font-bold text-gray-900 dark:text-white">52</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Clicks</div>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:message-text" class="w-3 h-3 mx-auto text-purple-500 mb-0.5" />
                  <div class="text-xs font-bold text-gray-900 dark:text-white">14</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Messages</div>
                </div>
                <div class="bg-white dark:bg-gray-700 rounded-lg p-1.5 text-center border border-gray-200 dark:border-gray-600">
                  <Icon name="mdi:trending-up" class="w-3 h-3 mx-auto text-green-500 mb-0.5" />
                  <div class="text-xs font-bold text-green-600 dark:text-green-400">+89%</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">Perf</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
