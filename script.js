const portfolioContainer = document.querySelector('.container');
portfolioContainer.addEventListener('click', e => {
	console.log(e)
	e.preventDefault()

	const modalToggle = e.target.closest('.list-item')
	//console.log(modalToggle)

	if (! modalToggle) return 
		// the script will end here

	const modal = modalToggle.parentNode.nextElementSibling
	const closeButton = modal.querySelector('.modal-close')
	//console.log(modal)

	const modalOpen = _ => {
		modal.classList.add('is-open')
		modal.style.animation = 'modalIn 500ms forwards'
		document.body.style.overflowY = 'hidden'
		}


	closeButton.addEventListener('click', _ => {
		modal.style.animation = 'modalOut 500ms forwards'
		modal.addEventListener('animationend', modalClose)
		document.body.style.overflowY = 'scroll'
	})
	
	const modalClose = _ => {
		modal.classList.remove('is-open')
		modal.removeEventListener('animationend', modalClose)
		//убирает сам себя, чтобы закрытие не зациклилось 
	}

	document.addEventListener('keydown', e => {
		if(e.keyCode === 27) {
		modal.style.animation = 'modalOut 500ms forwards'
		modal.addEventListener('animationend', modalClose)
		}
	})

	modalOpen()

})