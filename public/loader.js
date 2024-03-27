const preloaderWrapper = document.querySelector('.preloader-wrapper');

let esperar = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        preloaderWrapper.classList.add('fade-out-animation');
      
      resolve(); // Resolvemos la promesa para indicar que ha terminado el setTimeout
    }, 4000);
  });
};

window.addEventListener('load', async () => {
  await esperar(); // Esperamos a que termine el setTimeout antes de continuar

  setTimeout(() => {
    preloaderWrapper.style.display = 'none';
  }, 500);
  
});