(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery); // end jQuery



(function () {
  // 왼쪽 메뉴 탭
  $(function () {
    $('.con > div').hide();
    $('.nav a').click(function () {
      $('.con > div').hide().filter(this.hash).fadeIn();
      $('.nav li a').removeClass('active');
      $('.nav li span').removeClass('active');
      $(this).parent().find('span').addClass('active');
      $(this).parent().find('a').addClass('active');
      return false;
    }).filter(':eq(0)').click();
  });

})();