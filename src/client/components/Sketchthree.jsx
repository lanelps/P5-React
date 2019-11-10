export default function Sketchone(p5) {
	class Disc {
		constructor(tempC, outRadius, inRadius, noDots, dotRaidus, speed) {
			this.c = tempC
			this.outerRaid = outRadius
			this.innerRaid = inRadius
			this.dotNumber = noDots
			this.dotRaid = dotRaidus
			this.freq = speed
		}

		display(p5) {
			p5.push()
			p5.translate(windWidth / 2, windHeight / 2)
			p5.ellipseMode(p5.RADIUS)

			for (let i = 0; i < this.dotNumber; i++) {
				let circle =
					this.innerRaid + this.outerRaid * p5.sin(time * this.freq * i)
				let col = p5.map(circle, 250, 250, 100, 50)
				let r = p5.map(circle, 40, 50, this.dotRaid, this.dotRaid)
				p5.fill(this.c)
				p5.noStroke()
				p5.ellipse(circle * p5.cos(i), circle * p5.sin(i), r, r)
			}
			p5.pop()
		}
	}

	let time = 0
	let timeset = 10
	let isPaused = false

	let windWidth = 600
	let windHeight = 600

	let disc1
	let button
	let inputWidth
	let inputHeight
	let colorPicker

	let sliderOutRadius
	let sliderInRadius
	let sliderNoDots
	let sliderDotRadius
	let sliderSpeed

	p5.setup = function() {
		button = p5.createButton('Play/Pause')
		button.mousePressed(p5.saveImg)
		button.addClass('save-image')

		button = p5.createButton('Play/Pause')
		button.mousePressed(p5.playPause)
		button.addClass('play-pause')

		button = p5.createButton('Reset')
		button.mousePressed(p5.reset)
		button.addClass('reset')

		p5.createElement('br', '')
		p5.createElement('br', '')

		p5.createElement('label', 'Width')
		inputWidth = p5.createInput('600')
		inputWidth.changed(p5.windowResized)
		inputWidth.addClass('window-width')

		p5.createElement('label', 'Height')
		inputHeight = p5.createInput('600')
		inputHeight.changed(p5.windowResized)
		inputHeight.addClass('window-height')
		p5.createElement('br', '')

		p5.createElement('label', 'Color')
		colorPicker = p5.createColorPicker('#f15b2b')
		colorPicker.addClass('color-picker')
		p5.createElement('br', '')

		p5.createElement('label', 'Outer Radius')
		sliderOutRadius = p5.createSlider(1, 500, 250)
		sliderOutRadius.addClass('outer-radius')
		p5.createElement('br', '')

		p5.createElement('label', 'Inner Radius')
		sliderInRadius = p5.createSlider(1, 200, 30)
		sliderInRadius.addClass('inner-radius')
		p5.createElement('br', '')

		p5.createElement('label', 'Dot Number')
		sliderNoDots = p5.createSlider(10, 1000, 200)
		sliderNoDots.addClass('dot-number')
		p5.createElement('br', '')

		p5.createElement('label', 'Dot Size')
		sliderDotRadius = p5.createSlider(1, 20, 5)
		sliderDotRadius.addClass('dot-size')
		p5.createElement('br', '')

		p5.createElement('label', 'Dot Speed')
		sliderSpeed = p5.createSlider(0.0000001, 0.00002, 0.00001, 0.00000001)
		sliderSpeed.addClass('dot-speed')
		p5.createElement('br', '')

		p5.createCanvas(windWidth, windHeight, p5.P3D)
	}

	p5.draw = function() {
		// disc1 = new Disc(
		// 	p5.color(colorPicker.value()),
		// 	sliderOutRadius.value(),
		// 	sliderInRadius.value(),
		// 	sliderNoDots.value(),
		// 	sliderDotRadius.value(),
		// 	sliderSpeed.value(),
		// 	0
		// )
		disc1 = new Disc(
			colorPicker.value(),
			sliderOutRadius.value(),
			sliderInRadius.value(),
			sliderNoDots.value(),
			sliderDotRadius.value(),
			sliderSpeed.value()
		)

		p5.background(0)
		disc1.display(p5)

		time += timeset
	}

	p5.windowResized = () => {
		windWidth = inputWidth.value()
		windHeight = inputHeight.value()
		p5.resizeCanvas(windWidth, windHeight)
	}

	p5.saveImg = () => {
		p5.saveCanvas('chapmanTripp_screenshot.png')
	}

	p5.playPause = () => {
		if (isPaused) {
			isPaused = false
			timeset = 10
		} else {
			isPaused = true
			timeset = 0
		}
	}

	p5.reset = () => {
		colorPicker.value('#f15b2b')
		isPaused = false
		timeset = 10
		time = 0
	}
}
