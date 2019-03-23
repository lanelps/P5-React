export default function Sketch(p) {
  let size = 0

  p.setup = function() {
    p.createCanvas(600, 600)
  }

  p.draw = function() {
    p.background(0)
    p.noFill()
    p.stroke(255)
    p.strokeWeight(5)
    p.ellipse(p.mouseX, p.mouseY, size, size)

    if (size > 200) {
      size = 0
    }
    size += 4
  }
}
