self.addEventListener("install", (e) => {
    console.log("TestService Worker Installed");
  });

  self.addEventListener("activate", (e) => {
    console.log("Test Service Worker Activated");
  })