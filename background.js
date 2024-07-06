// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: '懒'
  });
});

// const extensions = 'https://developer.chrome.com/docs/extensions';
// const webstore = 'https://developer.chrome.com/docs/webstore';
const vpn = 'seone.sharee.tech';
const login = '1.1.1.1';

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
  console.log('onClicked:', tab);
  if (tab.url.includes(vpn)) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        function: () => {
          console.log('executeScript function');
          const pwdInput = document.getElementById("password")
          console.log(pwdInput);
          if (pwdInput) {
            pwdInput.value = 'XXXX';
          }
        }
      },
      (result) => { console.log('executeScript callback:', result); },
    )
  } else if (tab.url.startsWith(login)) {
    // TODO
  }
});
