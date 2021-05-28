import React from 'react'
import { styled } from './../styles/theme.config'

const CursorDot = styled('div', {
  pointerEvents: 'none',
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius: '50%',
  opacity: 0,
  transform: 'translate(-50%, -50%)',
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  width: 8,
  height: 8,
  backgroundColor: '#ffffff',
  zIndex: 99999,
  '@media only screen and (max-width: 1024px)': {
    display: 'none',
  },
})

const CursorDotOutline = styled('div', {
  pointerEvents: 'none',
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius: '50%',
  opacity: 0,
  transform: 'translate(-50%, -50%)',
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  width: 60,
  height: 60,
  backgroundColor: 'transparent',
  border: '2px solid #fff',
  zIndex: 99999,
  '@media only screen and (max-width: 1024px)': {
    display: 'none',
  },
})

const Cursor: React.FC = () => {
  React.useEffect(() => {
    var cursor = {
      delay: 8,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: true,
      cursorEnlarged: false,
      $dot: document.querySelector('.cursor-dot'),
      $outline: document.querySelector('.cursor-dot-outline'),

      init: function () {
        // @ts-ignore
        this.dotSize = this.$dot.offsetWidth
        // @ts-ignore
        this.outlineSize = this.$outline.offsetWidth

        this.setupEventListeners()
        this.animateDotOutline()
      },

      setupEventListeners: function () {
        var self: any = this

        document.querySelectorAll('a').forEach(function (el) {
          el.addEventListener('mouseover', function () {
            self.cursorEnlarged = true
            self.toggleCursorSize()
          })
          el.addEventListener('mouseout', function () {
            self.cursorEnlarged = false
            self.toggleCursorSize()
          })
        })

        document.querySelectorAll('button').forEach(function (el) {
          el.addEventListener('mouseover', function () {
            self.cursorEnlarged = true
            self.toggleCursorSize()
          })
          el.addEventListener('mouseout', function () {
            self.cursorEnlarged = false
            self.toggleCursorSize()
          })
        })

        document.addEventListener('mousedown', function () {
          self.cursorEnlarged = true
          self.toggleCursorSize()
        })
        document.addEventListener('mouseup', function () {
          self.cursorEnlarged = false
          self.toggleCursorSize()
        })

        document.addEventListener('mousemove', function (e) {
          self.cursorVisible = true
          self.toggleCursorVisibility()

          self.endX = e.pageX
          self.endY = e.pageY
          self.$dot!.style.top = self.endY + 'px'
          self.$dot!.style.left = self.endX + 'px'
        })

        document.addEventListener('mouseenter', function (e) {
          self.cursorVisible = true
          self.toggleCursorVisibility()
          self.$dot!.style.opacity = 1
          self.$outline!.style.opacity = 1
        })

        document.addEventListener('mouseleave', function (e) {
          self.cursorVisible = true
          self.toggleCursorVisibility()
          self.$dot!.style.opacity = 0
          self.$outline!.style.opacity = 0
        })
      },

      animateDotOutline: function () {
        var self: any = this

        self._x += (self.endX - self._x) / self.delay
        self._y += (self.endY - self._y) / self.delay
        self.$outline!.style.top = self._y + 'px'
        self.$outline!.style.left = self._x + 'px'

        requestAnimationFrame(this.animateDotOutline.bind(self))
      },

      toggleCursorSize: function () {
        var self: any = this

        if (self.cursorEnlarged) {
          self.$dot!.style.transform = 'translate(-50%, -50%) scale(0.75)'
          self.$outline!.style.transform = 'translate(-50%, -50%) scale(1.5)'
        } else {
          self.$dot!.style.transform = 'translate(-50%, -50%) scale(1)'
          self.$outline!.style.transform = 'translate(-50%, -50%) scale(1)'
        }
      },

      toggleCursorVisibility: function () {
        var self: any = this

        if (self.cursorVisible) {
          self.$dot!.style.opacity = 1
          self.$outline!.style.opacity = 1
        } else {
          self.$dot!.style.opacity = 0
          self.$outline!.style.opacity = 0
        }
      },
    }

    cursor.init()
  })
  return (
    <>
      <CursorDotOutline className="cursor-dot-outline" />
      <CursorDot className="cursor-dot" />
    </>
  )
}

export default Cursor
