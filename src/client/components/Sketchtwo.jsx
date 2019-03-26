export default function Sketchtwo(p) {
  p.setup = function() {
    p.createCanvas(300, 300)
  }

  p.draw = function() {
    p.background(0)
    p.stroke(255)
    p.strokeWeight(1)
    for (var x = 0; x < 300; x += 5) {
      for (var y = 0; y < 300; y += 5) {
        p.point(x, y)
      }
    }
  }
}
