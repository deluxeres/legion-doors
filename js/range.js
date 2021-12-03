(function() {
    var sliderFrom = document.getElementById('slider-from');
    var sliderTo = document.getElementById('slider-to');
    var inputFrom = document.getElementById('input-from');
    var inputTo = document.getElementById('input-to');

    noUiSlider.create(sliderFrom, {
        start: 4000,
        step: 1,
        connect: 'lower',
        range: {
            'min': 1000,
            'max': 15000
        },
    });
    noUiSlider.create(sliderTo, {
        start: 12000,
        step: 1,
        connect: 'lower',
        range: {
            'min': 1000,
            'max': 15000
        },
    });    

    sliderFrom.noUiSlider.on('slide', function() {
        inputFrom.value = Math.round(sliderFrom.noUiSlider.get());
    });
    sliderFrom.noUiSlider.on('update', function() {
        inputFrom.value = Math.round(sliderFrom.noUiSlider.get());
    });

    sliderTo.noUiSlider.on('slide', function() {
        inputTo.value = Math.round(sliderTo.noUiSlider.get());
    });
    sliderTo.noUiSlider.on('update', function() {
        inputTo.value = Math.round(sliderTo.noUiSlider.get());
    });

    inputFrom.addEventListener('input', function() {
        sliderFrom.noUiSlider.set(inputFrom.value)
    })
    inputTo.addEventListener('input', function() {
        sliderTo.noUiSlider.set(inputTo.value)
    })

})()