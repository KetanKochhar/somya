body, html {
    margin: 0;
    padding: 0;
    overflow: hidden; /* Hide scrollbars */
    height: 100%;
    background-color: #87CEEB; /* Sky blue background */
}

.game-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('background.jpg'); /* Replace with your background image */
    background-size: cover;
    z-index: 1;
}

.clouds {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 20%;
    height: 10%;
    background-image: url('clouds.png'); /* Replace with your cloud image */
    background-size: cover;
    z-index: 2;
}

.character {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    background-image: url('character.png'); /* Replace with your character image */
    background-size: cover;
    z-index: 3;
}

.obstacle {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    background-color: red;
    z-index: 4;
}