async function findHeader() {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const header = document.querySelector('._2O84H');
      if (header) {
        resolve(header);
        clearInterval(interval);
      }
    }, 1000);
  });
}

function createButton(header) {
  const button = document.createElement('button');
  button.innerHTML = '2x';
  button.classList.add('button-2x');

  let cont = true;

  button.addEventListener('click', (event) => {
    event.preventDefault();
    const audios = document.querySelectorAll('audio');
    if (audios.length) {
      if (cont) {
        audios.forEach((audio) => {
          audio.playbackRate = 2;
        });
      } else {
        audios.forEach((audio) => {
          audio.playbackRate = 1;
        });
      }
      cont = !cont;
      button.classList.toggle('button-red');
    }
  });

  header.insertBefore(button, header.children[1]);
}

async function start() {
  const header = await findHeader();

  createButton(header);
}

start();
