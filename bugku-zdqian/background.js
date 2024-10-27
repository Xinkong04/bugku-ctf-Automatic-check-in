/*
 * @Author: Z-Es-0 zes18642300628@qq.com
 * @Date: 2024-09-15 18:40:03
 * @LastEditors: Z-Es-0 zes18642300628@qq.com
 * @LastEditTime: 2024-09-15 19:20:27
 * @FilePath: \bugku-zdqian\background.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// background.js

// 设置每天定时器，例：每24小时触发一次
chrome.runtime.onInstalled.addListener(() => {
    // 设置闹钟，延迟 1 分钟后触发，重复周期为 24 小时
    chrome.alarms.create('dailyCheckIn', {
        delayInMinutes: 1,  // 插件安装1分钟后首次签到
        periodInMinutes: 1440 // 24小时，1440分钟
    });
});

// 监听定时器触发
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'dailyCheckIn') {
        // 访问目标页面
        chrome.tabs.create({url: 'https://ctf.bugku.com'}, (tab) => {
            // 等页面加载完注入签到脚本
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['content.js']
            });
        });
    }
});
