gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

//set off ScrollSmoother on mobile device
if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: 'wrapper',
        content: 'content',
        smooth: 2,
        effects: true
    })

    gsap.fromTo('.hero-section ',
        { opacity: 1 }, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'center',
                end: 'bottom',
                scrub: true,
            }
        })

    let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item')
    itemsLeft.forEach(item => {
        gsap.fromTo(item,
            { x: -100, opacity: 0}, {
                x: 0, opacity: 1,
                scrollTrigger: {
                    trigger: item,
                    start: '-1000',
                    end: '-300',
                    scrub: true,
                }
            })
    })

    let itemsRight = gsap.utils.toArray('.gallery__right .gallery__item')
    itemsRight.forEach(item => {
        gsap.fromTo(item,
            { x: 100, opacity: 0}, {
                x: 0, opacity: 1,
                scrollTrigger: {
                    trigger: item,
                    start: '-1000',
                    end: '-300',
                    scrub: true,
                }
            })
    })
}