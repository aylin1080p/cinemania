/**
 * Notification Utility
 * ====================
 * Handles user notifications and toast messages
 */

/**
 * Show notification
 * @param {string} message - Notification message
 * @param {string} type - Notification type: 'success', 'error', 'info', 'warning'
 * @param {number} duration - Duration in milliseconds
 */
export function showNotification(message, type = 'info', duration = 3000) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.setAttribute('role', 'alert');
  notification.setAttribute('aria-live', 'polite');
  
  // Add message
  const content = document.createElement('div');
  content.className = 'notification__content';
  content.textContent = message;
  notification.appendChild(content);
  
  // Add close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'notification__close';
  closeBtn.setAttribute('aria-label', 'Close notification');
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', () => removeNotification(notification));
  notification.appendChild(closeBtn);
  
  // Add to page
  const container = getNotificationContainer();
  container.appendChild(notification);
  
  // Remove after duration
  if (duration > 0) {
    setTimeout(() => removeNotification(notification), duration);
  }
  
  return notification;
}

/**
 * Show success notification
 * @param {string} message - Message to display
 * @param {number} duration - Duration in milliseconds
 */
export function showSuccess(message, duration = 3000) {
  return showNotification(message, 'success', duration);
}

/**
 * Show error notification
 * @param {string} message - Message to display
 * @param {number} duration - Duration in milliseconds
 */
export function showError(message, duration = 5000) {
  return showNotification(message, 'error', duration);
}

/**
 * Show warning notification
 * @param {string} message - Message to display
 * @param {number} duration - Duration in milliseconds
 */
export function showWarning(message, duration = 4000) {
  return showNotification(message, 'warning', duration);
}

/**
 * Show info notification
 * @param {string} message - Message to display
 * @param {number} duration - Duration in milliseconds
 */
export function showInfo(message, duration = 3000) {
  return showNotification(message, 'info', duration);
}

/**
 * Remove notification
 * @param {HTMLElement} notification - Notification element
 */
export function removeNotification(notification) {
  notification.classList.add('notification--removing');
  setTimeout(() => {
    notification.remove();
  }, 300);
}

/**
 * Get or create notification container
 * @returns {HTMLElement} - Notification container
 */
function getNotificationContainer() {
  let container = document.getElementById('notification-container');
  
  if (!container) {
    container = document.createElement('div');
    container.id = 'notification-container';
    container.className = 'notification-container';
    document.body.appendChild(container);
  }
  
  return container;
}

/**
 * Clear all notifications
 */
export function clearAllNotifications() {
  const container = document.getElementById('notification-container');
  if (container) {
    container.innerHTML = '';
  }
}
