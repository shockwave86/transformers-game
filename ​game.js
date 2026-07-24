let playerHP = 100;
let bossHP = 300;
let isMinionAlive = false;

function attack() {
    if (playerHP <= 0 || bossHP <= 0) return;

    let damage = Math.floor(Math.random() * 11) + 25;
    
    if (isMinionAlive) {
        alert("레이저비크가 공격을 대신 막았습니다!");
        isMinionAlive = false;
    } else {
        bossHP -= damage;
        if (bossHP < 0) bossHP = 0;
        document.getElementById("bossHp").innerText = bossHP;
    }

    if (bossHP <= 150 && bossHP > 0 && !isMinionAlive) {
        isMinionAlive = true;
        alert("사운드웨이브: '카세트 병사, 출격!' (레이저비크 소환)");
    }

    if (bossHP <= 0) {
        document.getElementById("boss").innerText = "SOUNDWAVE DEFEATED!";
        alert("STAGE CLEAR!\n범블비와 아이언하이드를 구출했습니다!");
        return;
    }

    let bossDamage = Math.floor(Math.random() * 8) + 8;
    playerHP -= bossDamage;
    if (playerHP < 0) playerHP = 0;
    document.getElementById("hp").innerText = playerHP;

    if (playerHP <= 0) {
        alert("OPTIMUS DOWN...");
        location.reload();
    }
}
