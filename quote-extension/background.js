chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({ name: 'Dixit' });
});
