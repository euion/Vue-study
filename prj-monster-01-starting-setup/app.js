function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let currentRound = 0;

const app = Vue.createApp({
  data() {
    return {
      //모든 매개변수는 게임을 다시 시작할 때 리셋되어야 함
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpacialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // A draw
        this.winner = "draw";
      } else if (value <= 0) {
        // Player lost
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // 무승부
        this.winner = "draw";
      } else if (value <= 0) {
        // monster 패배
        this.winner = "player";
      }
    },
  },
  //Vue 애플리케이션에서 지원하는 액션
  methods: {
    startGame() {
      // 게임이 종료되었을 시 새 게임 진행
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
      this.logMessages = [];
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLodMessage("player", "attack", attackValue);
      this.attackPlayer(); //this 키워드를 통해 데이터 프로퍼티를 액세스 가능
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLodMessage("monster", "attack", attackValue);
    },

    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLodMessage("player", "special-attack", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++; //회복을 한 경우도 턴으로 인정해야 함ㄴ
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLodMessage("player", "heal", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addLodMessage(who, what, value) {
      //누가 무엇을 얼마나 타격을 주고 회복을 했는가.
      // 새 메시지는 언제나 배열의 맨 처음이 됨
      this.logMessages.unshift({
        //unshift는 배열에 맨 처음에 추가한다.
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
