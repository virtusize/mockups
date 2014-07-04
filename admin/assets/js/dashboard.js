$('.js-tooltip button').tooltip({
    title:
        '<div>' +
        '   <div class="split-2">' +
        '       <div class="padding-right">' +
        '           <label class="font-weight-light">Return rate</label>' +
        '           <input type="text">' +
        '       </div>' +
        '   </div>' +
        '   <div class="split-2">' +
        '       <div class="padding-left">' +
        '           <label class="font-weight-light">Cost per return</label>' +
        '           <input type="text">' +
        '      </div>' +
        '   </div>' +
        '   <div>' +
        '       <label class="font-weight-light">Virtusize return reduction</label>' +
        '       <input type="text">' +
        '   </div>' +
        '   <div>' +
        '       <label class="font-weight-light">Currency</label>' +
        '       <div>' +
        '           <button class="btn btn-primary btn-sm split-2">Euro</button>' +
        '           <button class="btn btn-default btn-sm split-2">Sek</button>' +
        '       </div>' +
        '   </div>' +
        '   <div class="split-2 vertical-margin">' +
        '       <div class="padding-right">' +
        '          <button class="btn btn-default btn-sm btn-block">Cancel</button>' +
        '       </div>' +
        '   </div>' +
        '   <div class="split-2 vertical-margin">' +
        '       <div class="padding-left">' +
        '           <button class="btn btn-primary btn-sm btn-block">Apply</button>' +
        '       </div>' +
        '   </div>' +
        '</div>',
    html: true,
    template: '<div class="tooltip bright" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'manual',
    animation: false
});

$('.js-tooltip button').on('click', function () {
    $(this).tooltip('toggle');
});


//this.$el.tooltip({
//    placement: 'top',
//    trigger: 'manual',
//    template: '<div class="tooltip dark"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
//    container: this.model.get("tooltipContainer"),
//    animation: false
//})