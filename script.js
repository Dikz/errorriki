new Vue({
  el: "#app",
  data: {
    xp: 0,
    xpmaxanterior: 0,
    xpmax: 100,
    level: 0,
    diferencaxp: 0,
  },
  methods: {
    verificalvl() {
			if (this.xp == this.xpmax) {
          this.diferenca()
          this.levelup()
          this.xp = 0
        } 
      if (this.xp > this.xpmax) {
        	this.xp = (this.xp - this.xpmaxanterior)
          this.diferenca()
          this.levelup()
        }
    },
    levelup(){
    	this.level++
      this.xpmax = Math.round(this.xpmax*1.3)
      this.verificalvl()
    },
    aumentaxp(val) {
    	this.xp = this.xp + val
      this.xpmaxanterior = this.xpmax
      this.verificalvl()
      this.diferenca()
    },
    diferenca() {
    	this.diferencaxp = (this.xp / this.xpmax) * 100
    }
  }
})