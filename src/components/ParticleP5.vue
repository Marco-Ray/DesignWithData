/* eslint-disable */
<template>
  <div class="container">
    <div id="p5Canvas"></div>
    <div class="btt-scroll animate__animated animate__flash animate__infinite animate__slower" @click="scrollDown">
      <div class="pc">
        <div>Scroll down</div>
        <div class="arrow-down-box">
          <img :src="ArrowDown" alt="scroll down" class="arrow-down" />
        </div>
      </div>
      <div class="mobile">
        <img :src="IconScrollDown" alt="scroll down" class="arrow-down" />
      </div>
    </div>

    <fast-entry></fast-entry>
  </div>
</template>

<script>
import ArrowDown from '@/assets/img/HomeView/ArrowDown.png';
import IconScrollDown from '@/assets/img/HomeView/icon-scrolldown.svg';
import FastEntry from '@/components/FastEntry';
import HelveticaFont from '@/assets/fonts/Helvetica/Helvetica.otf';


export default {
  name: 'ParticleP5',
  emits: ['scrollDown'],
  components: {
    FastEntry,
  },
  data() {
    return {
      ArrowDown: ArrowDown,
      IconScrollDown: IconScrollDown,
      HelveticaFont: HelveticaFont,
    };
  },
  methods: {
    scrollDown() {
      this.$emit('scrollDown');
    },
  },
  mounted() {
    const script = function (p5) {
      let particleList = [];
      let interval = p5.max(16*p5.windowWidth/1200, 8);
      let vels = 0.08;
      let max_s = p5.max(15*p5.windowWidth/1200, 7);
      let mouseMaskSize = 50;
      let fontSize = p5.max(140*p5.windowWidth/1200, 80);

      function checkPixelColor(index) {
        if (p5.pixels[index]===255 && p5.pixels[index+1]===255 && p5.pixels[index+2]===255) {
          return true;
        } else {
          return false;
        }
      }

      function initCanvas() {
        p5.pixelDensity(1);
        let d = p5.pixelDensity();

        p5.background(0);
        p5.fill(255);
        p5.textSize(fontSize/d/d);
        p5.textStyle(p5.BOLD);
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.textLeading(160*p5.windowHeight/700);
        p5.text('DESIGN\nWITH\nDATA', p5.width/2, p5.height/2);

        // 遍历canvas上每个点的像素
        particleList.length = 0;
        p5.loadPixels();
        for (let x=0; x<p5.width; x+=interval) {
          for (let y=0; y<p5.height; y+=interval) {
            let i = 4 * (y*p5.width*d + x*d);
            // 判断像素的颜色
            if (checkPixelColor(i)) {
              particleList.push(new Particle(x, y, 5+p5.random(max_s)));
            }
          }
        }
        p5.updatePixels();

        p5.clear();
        p5.fill(255);
        p5.noStroke();
      }

      let font;
      p5.preload = _ => {
        font = p5.loadFont('/Helvetica.otf');
      }

      // NOTE: Set up is here
      p5.setup = _ => {
        p5.frameRate(20);
        let cnv = p5.createCanvas(p5.windowWidth, p5.windowHeight);
        cnv.style('display', 'block');
        cnv.parent("p5Canvas");

        initCanvas();
      }
      // NOTE: Draw is here
      p5.draw = _ => {
        p5.background(0);
        let withinMouse = [];
        for (let i=0; i<particleList.length;i++) {
          let particle = particleList[i];
          particle.breathe();
          if (p5.sqrt(p5.pow(particle.x-p5.mouseX,2)+p5.pow(particle.y-p5.mouseY,2))<20) {
            withinMouse.push(particle);
          }
        }
        if (withinMouse.length>0) {
          p5.fill(255,255,255);
          p5.ellipse(p5.mouseX,p5.mouseY, mouseMaskSize, mouseMaskSize);
        }
        for (let j=0; j<withinMouse.length;j++) {
          let particle = withinMouse[j];
          p5.fill(0, 0, 0);
          p5.ellipse(particle.x, particle.y, particle.curr_s, particle.curr_s);
        }
      }

      p5.windowResized = _ => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
        initCanvas();
      }

      class Particle {
        constructor(x, y, s) {
          this.x = x;
          this.y = y;
          this.curr_s = s;
        }

        breathe() {
          if (this.curr_s > 5) {
            this.curr_s -= vels;
          } else {
            this.curr_s = 5+p5.random(5);
          }
          // p5.noStroke();
          p5.fill(255,255,255);
          p5.ellipse(this.x, this.y, this.curr_s, this.curr_s);

        }
      }
    }
    // NOTE: Use p5 as an instance mode
    const P5 = require('p5');
    new P5(script)
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.btt-scroll {
  position: absolute;
  bottom: 17px;
  height: 68px;
  font-family: Helvetica Light;
  font-size: fSizeCalc(12);
  font-weight: 100;
  line-height: fSizeCalc(28);
  color: white;
  cursor: pointer;
  .pc {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 68px;
  }
  .mobile {
    display: none;
    flex-direction: row;
    align-items: center;
    height: 68px;
  }
  .arrow-down-box {
    margin-left: 3px;
    width: fSizeCalc(12);
    height: fSizeCalc(12);
    display: flex;
    justify-content: center;
    align-items: center;
    .arrow-down {
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    animation: unset;
  }
}

.animate__animated.animate__flash {
  transition-timing-function: ease-in-out;
  --animate-duration: 2.2s !important;
}

@media screen and (max-width: 414px) {
  .btt-scroll {
    position: absolute;
    right: wCalcM(16);
    .pc {
      display: none;
    }
    .mobile {
      display: flex;
    }
  }
}
</style>
