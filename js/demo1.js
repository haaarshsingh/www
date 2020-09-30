
/**
 * demo1.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
	// from http://www.quirksmode.org/js/events_properties.html#position
	const getMousePos = (ev) => {
		let posx = 0;
		let posy = 0;
		if (!ev) ev = window.event;
		if (ev.pageX || ev.pageY) 	{
			posx = ev.pageX;
			posy = ev.pageY;
		}
		else if (ev.clientX || ev.clientY) 	{
			posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		return { x : posx, y : posy };
	};

	class Letter {
		constructor(letter) {
			this.DOM = {};
			this.CONFIG = {
				color: '#fff',
				trailDelay: 0,
				maxScaleX: 1,
				minScaleX: 0.8,
				maxScaleY: 1.6,
				minScaleY: 1,
				stretchTransition: 'transform 0.4s cubic-bezier(0.1,1,0.3,1)',
				reverseAnim: {
					duration: 1000,
					easing: 'easeOutElastic',
					elasticity: 600,
					scaleY: 1,
					scaleX: 1
				}
			};
			this.DOM.letter = letter;
			this.layout();
			this.initEvents();
		}
		layout() {
			this.DOM.letterInner = document.createElement('span');
			this.DOM.letterInner.innerHTML = this.DOM.letter.innerHTML;
			this.DOM.letter.innerHTML = '';
			this.DOM.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			this.DOM.svg.setAttribute('width', '100px');
			this.DOM.svg.setAttribute('height', '150px');
			this.DOM.svg.setAttribute('viewBox', '0 0 100 150');
			this.DOM.svg.setAttribute('preserveAspectRatio', 'xMaxYMax meet');

			const r = 11;
			for (let i = 0; i < 3; i++) {
				const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
				circle.setAttribute('cx', 39*i+r);
				circle.setAttribute('cy', 139);
				circle.setAttribute('r', r);
				this.DOM.svg.appendChild(circle);
			};
			this.DOM.circles = Array.from(this.DOM.svg.querySelectorAll('circle'));
			this.DOM.letter.appendChild(this.DOM.svg);
			this.DOM.letter.appendChild(this.DOM.letterInner);
		}
		stretch(ev) {
			const mousepos = getMousePos(ev);
			const docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft, top : document.body.scrollTop + document.documentElement.scrollTop};
			const bounds = this.DOM.letter.getBoundingClientRect();
			const relmousepos = { 
				x : mousepos.x - bounds.left - docScrolls.left, 
				y : mousepos.y - bounds.top - docScrolls.top 
			};
			anime.remove(this.DOM.letterInner);
			this.DOM.letterInner.style.transformOrigin = '50% 100%';
			const sX = (this.CONFIG.maxScaleX-this.CONFIG.minScaleX)/bounds.height * relmousepos.y + this.CONFIG.minScaleX;
			const sY = (this.CONFIG.minScaleY-this.CONFIG.maxScaleY)/bounds.height * relmousepos.y + this.CONFIG.maxScaleY;
			this.DOM.letterInner.style.transform = `scaleX(${sX}) scaleY(${sY})`;
		}
		initEvents() {
			this.mouseenterFn = () => this.mouseTimeout = setTimeout(() => {
				this.isActive = true;
				requestAnimationFrame(() => this.DOM.letterInner.style.transition = this.CONFIG.stretchTransition);
			}, 50);
			
			this.mousemoveFn = (ev) => {
				if( !this.isActive ) return;
				requestAnimationFrame(() => this.stretch(ev))
			};
			this.mouseleaveFn = () => {
				clearTimeout(this.mouseTimeout);
				if( !this.isActive ) return;
				this.isActive = false;
				this.DOM.letterInner.style.transition = 'none';
				requestAnimationFrame(() => {
					const scaleYCurrent = anime.getValue(this.DOM.letterInner, 'scaleY');

					anime.remove(this.DOM.letterInner);
					let animOpts = {targets: this.DOM.letterInner};
					anime(Object.assign(animOpts, this.CONFIG.reverseAnim));

					if( scaleYCurrent > 1.4 ) {
						anime.remove(this.DOM.circles);
						anime({
							targets: this.DOM.circles,
							duration: (t,i) => { return anime.random(300,400); },
							easing: [0.1,1,0.3,1],
							delay: (t,i) => { return i*40+parseInt(this.CONFIG.trailDelay); },
							opacity: [
								{value: 1, duration: 10, easing: 'linear'},
								{value: 0, duration: 200, easing: 'linear'}
							],
							translateY: (t,i) => { return [100,anime.random(-250,-120)]; },
							scaleX: [2,0.3],
							scaleY: [2,2]
						});
					}
				});
			};
			this.DOM.letter.addEventListener('mouseenter', this.mouseenterFn);
			this.DOM.letter.addEventListener('mousemove', this.mousemoveFn);
			this.DOM.letter.addEventListener('mouseleave', this.mouseleaveFn);
			this.DOM.letter.addEventListener('touchstart', this.mouseenterFn);
			this.DOM.letter.addEventListener('touchend', this.mouseleaveFn);
		}
	}

	class Word {
		constructor(word) {
			this.DOM = {};
			this.DOM.word = word;
			this.layout();
		}
		layout() {
			charming(this.DOM.word, {classPrefix: 'letter'});
			Array.from(this.DOM.word.querySelectorAll('span')).forEach(letter => new Letter(letter));
		}
	}

	Array.from(document.querySelectorAll('.word')).forEach((word) => new Word(word));
};