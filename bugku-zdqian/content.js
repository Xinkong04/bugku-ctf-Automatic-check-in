/*
 * @Author: Z-Es-0 zes18642300628@qq.com
 * @Date: 2024-09-15 18:40:21
 * @LastEditors: Z-Es-0 zes18642300628@qq.com
 * @LastEditTime: 2024-09-15 18:40:27
 * @FilePath: \bugku-zdqian\content.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// content.js


function autoCheckIn() {
    let checkinButton = document.getElementById('checkin');

  
    if (checkinButton) {
        checkinButton.click();
        console.log('Check-in button clicked!');

      
        let observer = new MutationObserver((mutations, obs) => {
            let modal = document.getElementById('checkinModal');
            if (modal && modal.classList.contains('show')) {
                let modalBody = modal.querySelector('.modal-body');
                if (modalBody) {
                    console.log('Check-in result:', modalBody.innerHTML);
                }
                obs.disconnect(); 
            }
        });

       
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    } else {
        console.log('Check-in button not found!');
    }
}

window.onload = function() {
    autoCheckIn();
};
