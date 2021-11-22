<script>
export default {
  name: 'Matrix',
  data() {
    return {
      showText: false
    }
  },
  created() {
    setTimeout(() => {
      this.showText = true
    }, 1000)
  },
  mounted() {
    const c = document.getElementById("canvas")
    const ctx = c.getContext("2d")
    c.height = window.innerHeight
    c.width = window.innerWidth
    let matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}"
    matrix = matrix.split("")
    const fontSize = 10
    const columns = c.width/fontSize
    const drops = []
    for(let x = 0; x < columns; x++)
      drops[x] = 1 
    function draw()
    {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)"
      ctx.fillRect(0, 0, c.width, c.height)
      ctx.fillStyle = "#157d00"
      ctx.font = fontSize + "px arial"
      for(let i = 0; i < drops.length; i++)
      {
        const text = matrix[Math.floor(Math.random()*matrix.length)]
        ctx.fillText(text, i*fontSize, drops[i]*fontSize)
        if(drops[i]*fontSize > c.height && Math.random() > 0.975)
          drops[i] = 0
        drops[i]++
      }
    }
    setInterval(draw, 20)
  },
}
</script>

<template>
  <div class="matrix">
    <canvas id="canvas" />
    <transition name="fade">
      <div 
        v-if="showText"
        class="title"
      >
        <h1>ROTECH</h1>
        <h1>AUTOMATION</h1>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.matrix {
  height: 100vh;
  max-height: -webkit-fill-available;
  width: inherit;
  position: relative;
  canvas {
    height: 100%;
    width: 100%;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-enter-active {
    transition: 1s;
  }
  .title {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      opacity: .6;
      color: var(--color-matrix-01);
      font-size: 36px;
      margin: 0;
      &:first {
        padding-bottom: 10px;
      }
    }
  }
}

</style>