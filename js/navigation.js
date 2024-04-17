function showScreen(screenId) {
    const screens = ['homeScreen', 'mapScreen', 'sosScreen'];
    screens.forEach(screen => {
      const element = document.getElementById(screen);
      if (screen === screenId) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });

    if (screenId === 'mapScreen' && !window.mapInitialized) {
        initializeMap();
        window.mapInitialized = true;
    }
}
