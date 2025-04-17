$(document).ready(function () {

    // Reusable: Update rect size based on text
    function updateRectSize(svgText, rect) {
        const bbox = svgText.getBBox();
        rect.setAttribute('x', bbox.x - 5);
        rect.setAttribute('y', bbox.y - 5);
        rect.setAttribute('width', bbox.width + 10);
        rect.setAttribute('height', bbox.height + 10);
    }

    // Reusable: Create text + rect + input field
    function createTextBlock() {
        const id = Date.now();
    
        // 1. Create elements
        const wrapper = $('<div>', {
            class: 'text-control-box border p-2 mb-2',
            'data-id': id
        });
    
        const textField = $('<input>', {
            type: 'text',
            class: 'form-control mt-1',
            value: 'Demo Text',
            'data-id': id
        });
    
        const fontSize = $('<input>', {
            type: 'number',
            min: 8,
            max: 72,
            class: 'form-control mt-1',
            value: 24
        });
    
        const colorPicker = $('<input>', {
            type: 'color',
            class: 'form-control form-control-color mt-1',
            value: '#000000'
        });
    
        const fontFamily = $('<select>', {
            class: 'form-select mt-1'
        }).append(
            '<option value="Arial">Arial</option>',
            '<option value="Times New Roman">Times New Roman</option>',
            '<option value="Courier New">Courier New</option>',
            '<option value="Georgia">Georgia</option>',
            '<option value="Verdana">Verdana</option>'
        );

        const coordX = $('<input>', {
            type: 'number',
            class: 'form-control mt-1',
            value: 150,
            placeholder: 'X Coordinate'
        });
        
        const coordY = $('<input>', {
            type: 'number',
            class: 'form-control mt-1',
            value: 150,
            placeholder: 'Y Coordinate'
        });
    
        // 2. Append inputs to wrapper
        wrapper.append(textField, fontSize, colorPicker, fontFamily, coordX, coordY);
        $('#addTextBtn').after(wrapper);
    
        // 3. Create SVG elements
        const svgText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        $(svgText).attr({ x: 150, y: 150, fill: colorPicker.val(), 'font-size': fontSize.val(), 'data-id': id }).text(textField.val());
        $('#svgCanvas')[0].appendChild(svgText);
    
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        $(rect).attr({ stroke: 'black', fill: 'none', 'data-id': id });
        $('#svgCanvas')[0].appendChild(rect);
    
        updateRectSize(svgText, rect);
    
        // 4. Bind controls to update svgText
        textField.on('input', function () {
            svgText.textContent = $(this).val();
            updateRectSize(svgText, rect);
        });
    
        fontSize.on('input', function () {
            $(svgText).attr('font-size', $(this).val());
            updateRectSize(svgText, rect);
        });
    
        colorPicker.on('input', function () {
            $(svgText).attr('fill', $(this).val());
            updateRectSize(svgText, rect);
        });
    
        fontFamily.on('change', function () {
            $(svgText).css('font-family', $(this).val());
            updateRectSize(svgText, rect);
        });
        
        coordX.on('input', function () {
            $(svgText).attr('x', $(this).val());
            updateRectSize(svgText, rect);
        });
        
        coordY.on('input', function () {
            $(svgText).attr('y', $(this).val());
            updateRectSize(svgText, rect);
        });
    }
    

    // Click handler: Add new text block
    $('#addTextBtn').on('click', function () {
        createTextBlock();
    });

    // Input handler: update SVG text + rect, color, font size, and family
    $(document).on('input', '.form-control', function () {
        const id = $(this).data('id');
        const value = $(this).val();
        const svgText = $('text[data-id="' + id + '"]')[0];
        const rect = $('rect[data-id="' + id + '"]')[0];

        svgText.textContent = value;

        if (value.length === 0) {
            svgText.textContent = '';
            rect.setAttribute('width', 30);
            rect.setAttribute('height', 30);
            rect.setAttribute('x', 150);
            rect.setAttribute('y', 150);
        } else {
            updateRectSize(svgText, rect);
        }       
    });

    // Focus handler: highlight selected text
    $(document).on('focus', '.form-control', function () {
        const id = $(this).data('id');
        $('.highlighted-rect').css('stroke', 'none');
        $('rect[data-id="' + id + '"]').css('stroke', 'blue');
    });

    // Blur handler: unhighlight
    $(document).on('blur', '.form-control', function () {
        const id = $(this).data('id');
        $('rect[data-id="' + id + '"]').css('stroke', 'none');
    });

});