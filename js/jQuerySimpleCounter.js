!(function ($) {
  $.fn.jQuerySimpleCounter = function (b) {
    let a = $.extend(
        { start: 0, end: 100, easing: "swing", duration: 400, complete: "" },
        b
      ),
      c = $(this);
    $({ count: a.start }).animate(
      { count: a.end },
      {
        duration: a.duration,
        easing: a.easing,
        step: function () {
          let a = Math.ceil(this.count);
          c.text(a);
        },
        complete: a.complete,
      }
    );
  };
})(jQuery);
