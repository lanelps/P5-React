export default function Sketchone(p) {
  let size = 0

  p.setup = function() {
    p.createCanvas(300, 300)
    p.background(0)
  }

  p.draw = function() {
    p.noFill()
    p.stroke(255)
    p.strokeWeight(0.5)
    p.ellipse(p.mouseX, p.mouseY, size, size)

    if (size > 10) {
      size = 0
    }
    size += 1
  }
}
