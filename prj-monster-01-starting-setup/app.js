function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  // 어떤 어플리케이션이든 데이터가 들어있음 data() 로 애플리케이션에 필요한 데이터를 관리
  data() {
    // 몬스터와 플레이어의 체력 데이터가 들어가야함
    return {
      playerHealth: 100,
      monsterHealth: 100,
      //2.
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    //2.
    mayUseSpacialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    // vue 애플리케이션에서 지원하는 액션
    // attack 버튼을 누르면 몬스터의 체력을 낮추는 메서트를 트리거
    attackMonster() {
      this.currentRound++;
      // 한방에 죽으면 곤란하니 공격량의 최댓값(12) 최소값(5) 줌
      const attackValue = getRandomValue(5, 12);
      //Vue가 data객체에 있는 데이터 프로퍼티를 병합해서 내부에서 관리하는 전역적 객체로 만들기 때문에
      // this 키워드로 methods에 있는 모든 데이터 프로퍼티를 접근할 수 있음
      this.monsterHealth -= attackValue; // 공격값만큼 뺌
      this.attactPlayer(); // 플레이어가 공격하고 나면 다음은 몬스터가 플레이어를 공격 attackPlayer트리거
    },
    //몬스터의 반격
    attactPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      //this키워드를 사용하면 데이터 프로퍼티도 액세스 할 수 있고
      //Vue 인스턴스 내의 메서드도 접근할 수 있음
    },
    //2.
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attactPlayer;
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      // 힐로 인한 체력이 100을 초과하지 않게 해야함
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attactPlayer();
    },
  },
});
//app 마운트
app.mount("#game"); // <div id="game">을 가져오는 거라 선택자를 이용해 #game이 된것
