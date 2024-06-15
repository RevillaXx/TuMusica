const songUrl = [
    'https://drive.google.com/uc?export=download&id=12yv9pWzLvMzppxFojwX8cGpVGYn6NCp8',
    'https://drive.google.com/uc?export=download&id=133mUbN9cv-pPAO1LNj-l2KEtnGaw6VH3',
    'https://drive.google.com/uc?export=download&id=17uQDEyHEdk3U6KGuAvWEvL2Lt9gs0NaV',
    'https://drive.google.com/uc?export=download&id=18r27T0yijo4KkIjuiqW8pZWgbjwdnJjr',
    'https://drive.google.com/uc?export=download&id=1BEoMMdZt3b5N2XPRWrYgX56LGUk-taP2',
    'https://drive.google.com/uc?export=download&id=1BHCUM8TWi7B83JXnqRxoOx-eJz0WEIxh',
    'https://drive.google.com/uc?export=download&id=1C1f7iKz3pVOsTDZPrr8QmTNAlSubS-ho',
    'https://drive.google.com/uc?export=download&id=1Hjt-Fb_-K1o0yY6LHsKTNRKBxvYJR5z6',
    'https://drive.google.com/uc?export=download&id=1L69WLckLJNDU83KEjkOsGYYxqc8Twuo0',
    'https://drive.google.com/uc?export=download&id=1PIqB-1SDOa7TCdhES44Kyp9wWyYGerLS',
    'https://drive.google.com/uc?export=download&id=1PgHr8QMUn3k99JSB5RL6Y6Wc9MGtVBab',
    'https://drive.google.com/uc?export=download&id=1RNbPJ6YLdLfumrnfOzaCQZ7DowKt_CCS',
    'https://drive.google.com/uc?export=download&id=1UEUqFW2hhtf9cmhNfjtbMZizm8MhCPjG',
    'https://drive.google.com/uc?export=download&id=1WZ3giheKNOPBEW9s_hnLC4nWaSmjO_KG',
    'https://drive.google.com/uc?export=download&id=1dOJ7ZqL74K6MGYpwfcPCfop0-SGReO-U',
    'https://drive.google.com/uc?export=download&id=1e7B5KYncEfCwo6Gd4psx5tgbEiUp6TnK',
    'https://drive.google.com/uc?export=download&id=1gwLjF3muoO6l3klsXwM5F3EZ8YkYbs7b',
    'https://drive.google.com/uc?export=download&id=1qeurhqL0gyErEyrN2Y1k_XUQRCk8xjTE',
    'https://drive.google.com/uc?export=download&id=1rLTaZi0yUeTYRyjrWBjQn5JJkM6E_g6W',
    'https://drive.google.com/uc?export=download&id=1sXg3G_QxqyZXSNK-lMUYxcdbVper-rgS',
    'https://drive.google.com/uc?export=download&id=1yQLGQC-q7NWdk7O1S55D3459HFYwilhd'
];

let currentSongIndex = 0;

const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

audioPlayer.src = songUrl[currentSongIndex];

playButton.addEventListener('click', () => {
    audioPlayer.play();
});

pauseButton.addEventListener('click', () => {
    audioPlayer.pause();
});

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    changeSong();
});

nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    changeSong();
});

function changeSong() {
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.load();
    audioPlayer.play();
}
