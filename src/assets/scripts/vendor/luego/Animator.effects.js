;(function(window, document, undefined, Animator){
    Animator.add('chars', function($el, duration) {
        var tl = new TimelineLite,
            st = new SplitText($el, {type: 'words,chars'}),
            chars = st.chars;

        return tl.staggerFrom(chars, duration, { opacity: 0, scale: 0, y: 50, rotationX: 90, transformOrigin: '0% 50% -50', ease: Quint.easeOut }, 0.01, '+=0');
    });

    Animator.add('fade', function($el, duration) {
        return TweenLite.from($el, duration, { opacity: 0, ease: Linear.easeNone });
    });

    Animator.add('fade-top', function($el, duration) {
        return TweenLite.from($el, duration, { opacity: 0, y: 60, ease: Quint.easeOut });
    });

    Animator.add('fade-right', function($el, duration) {
        return TweenLite.from($el, duration, { opacity: 0, x: -60, ease: Quint.easeOut });
    });

    Animator.add('fade-bottom', function($el, duration) {
        return TweenLite.from($el, duration, { opacity: 0, y: -60, ease: Quint.easeOut });
    });

    Animator.add('fade-left', function($el, duration) {
        return TweenLite.from($el, duration, { opacity: 0, x: 60, ease: Quint.easeOut });
    });

    Animator.add('zoom-in', function($el, duration) {
        return TweenLite.from($el, duration, { opacity: 0, scale: 0, ease: Quint.easeOut });
    });

    Animator.add('arise-right', function($el, duration) {
        TweenLite.set( $el, { width: $el.width(), maxWidth: 'none' } );
        TweenLite.set( $el.parent(), { display: 'block', overflow: 'hidden', width: 0 } );
        return TweenLite.to($el.parent(), duration, { width: '100%', ease: 'cubic-bezier(0.575,0.005,0.285,1.005)' });
    });

    Animator.add('each-from-center', function($el, duration) {
        var elWidth = $el.width();
        var childWidth = $el.children().outerWidth();
        var childLength = $el.children().length;

        var cols = Math.floor(elWidth / childWidth);
        var rows = Math.ceil(childLength / cols);

        return TweenMax.staggerFrom($el.children(), .6, {
            scale: 0.7,
            y: 70,
            opacity: 0,
            ease: Power2.easeOut,
            stagger: {
                grid: 'auto',
                from: 'center',
                amount: .35,
            }
        });
    });

    Animator.add('draw-svg', function($el, duration) {
        return TweenMax.from($el.find('path'), duration, { drawSVG: '100%', ease: Power2.easeOut });
    });

    Animator.add('add-class', function($el, duration) {
       $el.addClass($el.attr('data-ani-class'));
       setTimeout(function(){ $el.removeClass($el.attr('data-ani-class')); }, 600);
    });

    Animator.add('sprite-sheet', function($el, duration) {
        var ss = $el.attr('data-ss');
        var fps = $el.attr('data-ss-fps') || 30;

        var spritesheet = new SpriteSheet($el.get(0), SpriteSheets[ss], fps);
        spritesheet.one();
    });

    Animator.add('sm-parallax', function ($el) {
        return new TimelineMax()
            .add([
                TweenLite.fromTo($el, 1, { y: '0%' }, { y: '50%', ease: Linear.easeNone })
            ]);
    });
})(window, document, undefined, Animator);
