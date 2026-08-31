!(function (e) {
  e(window).on("scroll", function (i) {
    e(window).scrollTop() <= 100
      ? (e(".header-sticky").removeClass("sticky"),
        e(
          ".header-sticky .header-main-04 .header-logo img, .header-sticky .header-main-05 .header-logo img"
        ).attr("src", "assets/images/light-logo.png"))
      : (e(".header-sticky").addClass("sticky"),
        e(
          ".header-sticky .header-main-04 .header-logo img, .header-sticky .header-main-05 .header-logo img"
        ).attr("src", "assets/images/dark-logo.png"));
  });
  var i = e(window);
  e(".menu-primary__container>li").find(".sub-menu").length &&
    e(".menu-primary__container>li")
      .find(".sub-menu")
      .each(function () {
        var t = e(this).offset().left,
          s = e(this).width();
        i.height();
        t + s <= i.width() - 10 || e(this).addClass("left");
      });
  e(".search-open").click(function () {
    e(".header-serach").toggleClass("open");
  }),
    e(function () {
      var i = window.location.pathname,
        t = i.substring(i.lastIndexOf("/") + 1);
      e(".dashboard-nav__menu-list li a").each(function () {
        var i = this.href.substring(this.href.lastIndexOf("/") + 1);
        t == i && e(this).closest("li").addClass("active");
      });
    });
  var t = e(".canvas-menu"),
    s = t.find(".sub-menu, .mega-menu, .menu-item ");
  s.parent().prepend('<span class="mobile-menu-expand"></span>'),
    s.slideUp(),
    t.on("click", "li a, li .mobile-menu-expand, li .menu-title", function (i) {
      var t = e(this);
      t
        .parent()
        .attr("class")
        .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
        ("#" === t.attr("href") || t.hasClass("mobile-menu-expand")) &&
        (i.preventDefault(),
        t.siblings("ul:visible").length
          ? (t.parent("li").removeClass("active-expand"),
            t.siblings("ul").slideUp())
          : (t.parent("li").addClass("active-expand"),
            t.closest("li").siblings("li").find("ul:visible").slideUp(),
            t.closest("li").siblings("li").removeClass("active-expand"),
            t.siblings("ul").slideDown()));
    }),
    e(".sub-menu, .mega-menu, .menu-item")
      .parent("li")
      .addClass("menu-item-has-children"),
    e(".mega-menu").parent("li").addClass("mega-menu-children"),
    document.querySelectorAll(".scene").forEach((e) => {
      if (typeof Parallax !== 'undefined') {
        new Parallax(e, { pointerEvents: !0 });
      }
    }),
    e(".btn-toggle").click(function () {
      e(".dashboard-menu").addClass("open");
    }),
    e(".close-btn").click(function () {
      e(".dashboard-menu").removeClass("open");
    }),
    e(".demo-open").click(function () {
      e(".edumall-demo-option").toggleClass("open");
    });
  var a = new Swiper(".testimonial-active .swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1e3,
      loop: !0,
      pagination: {
        el: ".testimonial-active .swiper-pagination",
        clickable: !0,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      },
    }),
    o =
      (new Swiper(".testimonial-active-02 .swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1e3,
        loop: !0,
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        },
        autoplay: { delay: 2e3 },
      }),
      new Swiper(".testimonial-active-03 .swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 1e3,
        loop: !0,
        pagination: {
          el: ".testimonial-active-03 .swiper-pagination",
          clickable: !0,
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 2 },
        },
      }),
      new Swiper(".course-tab-active .swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 1e3,
        loop: !0,
        navigation: {
          nextEl: ".course-tab-active .swiper-button-next",
          prevEl: ".course-tab-active .swiper-button-prev",
        },
        pagination: {
          el: ".course-tab-active .swiper-pagination",
          clickable: !0,
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        },
      }),
      new Swiper(".course-active .swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 1e3,
        loop: !0,
        navigation: {
          nextEl: ".course-active .swiper-button-next",
          prevEl: ".course-active .swiper-button-prev",
        },
        pagination: { el: ".course-active .swiper-pagination", clickable: !0 },
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        },
      }),
      new Swiper(".category-active .swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 1e3,
        loop: !0,
        pagination: {
          el: ".category-active .swiper-pagination",
          clickable: !0,
        },
        navigation: {
          nextEl: ".category-active .swiper-button-next",
          prevEl: ".category-active .swiper-button-prev",
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        },
      }),
      new Swiper(".experts-active .swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1e3,
        loop: !0,
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 3 },
        },
        autoplay: { delay: 2e3 },
      }),
      new Swiper(".partners-active .swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 4500,
        loop: !0,
        freeMode: !0,
        slidesPerView: "auto",
        autoplay: { delay: 0.5, disableOnInteraction: !1 },
        breakpoints: {
          0: { slidesPerView: 3 },
          576: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          992: { slidesPerView: 6 },
          1200: { slidesPerView: 7 },
        },
      }),
      new Swiper(".event-active .swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1e3,
        loop: !0,
        pagination: { el: ".event-active .swiper-pagination", clickable: !0 },
        navigation: {
          nextEl: ".event-active .swiper-button-next",
          prevEl: ".event-active .swiper-button-prev",
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        },
      }),
      new Swiper(".event-active-02 .swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 1e3,
        loop: !0,
        navigation: {
          nextEl: ".event-active-02 .swiper-button-next",
          prevEl: ".event-active-02 .swiper-button-prev",
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        },
      }),
      new Swiper(".banner-active .swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 1e3,
        loop: !0,
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          992: { slidesPerView: 5 },
        },
        autoplay: { delay: 2e3 },
      }),
      new Swiper(".instructor-active .swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 1e3,
        loop: !0,
        breakpoints: {
          0: { slidesPerView: 2 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        },
        autoplay: { delay: 2e3 },
      }),
      new Swiper(".instructor-active-msu .swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1e3,
        loop: !0,
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        },
        autoplay: { delay: 2e3 },
      }),
      new Swiper(".credential-active .swiper", {
        slidesPerView: 2,
        spaceBetween: 50,
        speed: 1e3,
        loop: !0,
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          992: { slidesPerView: 2 },
          1200: { slidesPerView: 2 },
        },
        autoplay: { delay: 2e3 },
      }),
      new Swiper(".instructor-active-1 .swiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        speed: 1e3,
        loop: !0,
        navigation: {
          nextEl: ".instructor-active-1 .swiper-button-next",
          prevEl: ".instructor-active-1 .swiper-button-prev",
        },
        pagination: {
          el: ".instructor-active-1 .swiper-pagination",
          clickable: !0,
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        },
      }),
      new Swiper(".related-posts .swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1e3,
        loop: !0,
        navigation: {
          nextEl: ".related-posts .swiper-button-next",
          prevEl: ".related-posts .swiper-button-prev",
        },
        pagination: { el: ".related-posts .swiper-pagination", clickable: !0 },
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        },
      }),
      new Swiper(".speaker-active .swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 1e3,
        loop: !0,
        breakpoints: {
          0: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        },
        autoplay: { delay: 2e3 },
      }),
      new Swiper(".related-products-active .swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 1e3,
        loop: !1,
        pagination: {
          el: ".related-products-active .swiper-pagination",
          clickable: !0,
        },
        navigation: {
          nextEl: ".related-products-active .swiper-button-next",
          prevEl: ".related-products-active .swiper-button-prev",
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        },
      }),
      (a = new Swiper(".shop-single-product__image-thumbs  .swiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: !0,
        watchSlidesProgress: !0,
      })),
      new Swiper(".shop-single-product__image-main  .swiper", {
        spaceBetween: 10,
        speed: 1e3,
        thumbs: { swiper: a },
      }),
      0);
  e(window).scroll(function () {
    document.querySelectorAll(".counter").forEach(function (i) {
      var t = e(i).offset().top - window.innerHeight;
      0 == o &&
        e(window).scrollTop() > t &&
        (e(".count").each(function () {
          var i = e(this),
            t = i.attr("data-count");
          e({ countNum: i.text() }).animate(
            { countNum: t },
            {
              duration: 2e3,
              easing: "swing",
              step: function () {
                i.text(Math.floor(this.countNum));
              },
              complete: function () {
                i.text(this.countNum);
              },
            }
          );
        }),
        (o = 1));
    });
  }),
    e(".countdown").each(function () {
      var i = e(this),
        t = e(this).data("countdown"),
        s = e(this).data("format");
      setInterval(function () {
        !(function (i, t, s) {
          var a = new Date(),
            o = (new Date(i).getTime() - a.getTime()) / 864e5,
            n = 24 * (o - (u = Math.floor(o))),
            r = 60 * (n - (w = Math.floor(n))),
            l = ((h = Math.floor(60 * (n - w))), Math.floor(60 * (r - h))),
            c = 0,
            d = 0,
            p = 0;
          "short" != s &&
            (u > 365 && ((c = Math.floor(u / 365)), (u %= 365)),
            u > 30 && ((d = Math.floor(u / 30)), (u %= 30)),
            u > 7 && ((p = Math.floor(u / 7)), (u %= 7)));
          var u,
            w,
            h,
            m = (c = c < 10 ? "0" + c : c) > 1 ? "Years" : "year",
            g = (d = d < 10 ? "0" + d : d) > 1 ? "Months" : "month",
            v = (p = p < 10 ? "0" + p : p) > 1 ? "Weeks" : "week",
            f = (u = u < 10 ? "0" + u : u) > 1 ? "Days" : "day",
            b = (w = w < 10 ? "0" + w : w) > 1 ? "Hours" : "hr",
            P = (h = h < 10 ? "0" + h : h) > 1 ? "Mints" : "min",
            V = (l = l < 10 ? "0" + l : l) > 1 ? "Secs" : "sec",
            _ = {
              wrapper: t.find(".countdown__item"),
              year: t.find(".yearsLeft"),
              month: t.find(".monthsLeft"),
              week: t.find(".weeksLeft"),
              day: t.find(".daysLeft"),
              hour: t.find(".hoursLeft"),
              minute: t.find(".minsLeft"),
              second: t.find(".secsLeft"),
              yearTxt: t.find(".yearsText"),
              monthTxt: t.find(".monthsText"),
              weekTxt: t.find(".weeksText"),
              dayTxt: t.find(".daysText"),
              hourTxt: t.find(".hoursText"),
              minTxt: t.find(".minsText"),
              secTxt: t.find(".secsText"),
            },
            k = _.wrapper.length;
          t.addClass("item-" + k),
            e(_.year).html(c),
            e(_.yearTxt).html(m),
            e(_.month).html(d),
            e(_.monthTxt).html(g),
            e(_.week).html(p),
            e(_.weekTxt).html(v),
            e(_.day).html(u),
            e(_.dayTxt).html(f),
            e(_.hour).html(w),
            e(_.hourTxt).html(b),
            e(_.minute).html(h),
            e(_.minTxt).html(P),
            e(_.second).html(l),
            e(_.secTxt).html(V);
        })(t, i, s);
      }, 0);
    });
  GLightbox({ selector: ".glightbox" });
  document.querySelectorAll(".widgetScroll").forEach(function (e) {
    new PerfectScrollbar(e, {
      wheelSpeed: 0.4,
      wheelPropagation: !0,
      minScrollbarLength: 10,
    });
  });
  document.querySelectorAll(".navScroll").forEach(function (e) {
    new PerfectScrollbar(e, {
      wheelSpeed: 0.4,
      wheelPropagation: !0,
      minScrollbarLength: 10,
    });
  });
  [].slice
    .call(document.querySelectorAll('[data-bs-tooltip="tooltip"]'))
    .map(function (e) {
      return new bootstrap.Tooltip(e);
    });
  e(".course-item, .course-item-02").data("powertiptarget", "course-hover"),
    e(".course-item, .course-item-02").powerTip({
      placement: "e",
      mouseOnToPopup: !0,
      smartPlacement: !0,
    }),
    e(".course-list-item").data("powertiptarget", "course-list-hover"),
    e(".course-list-item").powerTip({
      placement: "n",
      mouseOnToPopup: !0,
      smartPlacement: !0,
    }),
    e(".edumall-nice-select").EdumallNiceSelect(),
    e(".filter_start_date").flatpickr({
      altInput: !0,
      altFormat: "F j, Y",
      disableMobile: !0,
    }),
    e(".sidebar-sticky").stick_in_parent({
      offset_top: 130,
      parent: ".sticky-parent",
    }),
    e(".container").imagesLoaded(function () {
      e(".grid").masonry({ itemSelector: ".grid-item", columnWidth: 2 });
    }),
    e(".add").on("click", function () {
      e(this).prev().val() &&
        e(this)
          .prev()
          .val(+e(this).prev().val() + 1);
    }),
    e(".sub").on("click", function () {
      e(this).next().val() > 1 &&
        e(this).next().val() > 1 &&
        e(this)
          .next()
          .val(+e(this).next().val() - 1);
    }),
    e("#rating li").on("mouseover", function () {
      var i = parseInt(e(this).data("value"), 10),
        t = e(this).parent().children("li.star");
      Array.from(t, function (e) {
        var t = e.dataset.value,
          s = e.firstChild;
        t <= i ? s.classList.add("hover") : s.classList.remove("hover");
      });
    }),
    e("#rating").on("mouseleave", function () {
      var i = e(this).find("li.star i");
      Array.from(i, function (e) {
        e.classList.remove("hover");
      });
    }),
    e("#rating li").on("click", function (i) {
      var t = parseInt(e(this).data("value"), 10),
        s = e(this).parent().children("li.star");
      Array.from(s, function (e) {
        var i = e.dataset.value,
          s = e.firstChild;
        i <= t
          ? (s.classList.remove("hover", "far"), s.classList.add("fas"))
          : (s.classList.remove("fas"), s.classList.add("far"));
      });
    }),
    e(".select2").select2({ tags: !0 }),
    e("#account").on("click", function () {
      e("#account:checked").length > 0
        ? e(".checkout-form__account").slideDown()
        : e(".checkout-form__account").slideUp();
    }),
    e("#shipping").on("click", function () {
      e("#shipping:checked").length > 0
        ? e(".checkout-form__shipping").slideDown()
        : e(".checkout-form__shipping").slideUp();
    });
  var n = e(".payment-method:checked");
  n && e(n).siblings(".payment-details").slideDown(500),
    e(".payment-method").on("change", function () {
      e(".payment-details").slideUp(500),
        e(this).siblings(".payment-details").slideToggle(500);
    }),
    e(".card-option").on("click", function () {
      e(".card-option:checked").length > 0
        ? e(".checkout-form__payment-card").slideDown()
        : e(".checkout-form__payment-card").slideUp();
    }),
    AOS.init({ once: !0, offset: 0 });
  var r = e("#dashboard-profile-cover-photo-editor");
  r.length > 0 &&
    new (function (i) {
      (this.dialogue_box = i.find("#dashboard-photo-dialogue-box")),
        (this.open_dialogue_box = function (e) {
          this.dialogue_box.attr("name", e), this.dialogue_box.trigger("click");
        }),
        (this.validate_image = function (e) {
          return !0;
        }),
        (this.upload_selected_image = function (i, t) {
          if (t && this.validate_image(t)) {
            var s = tutor_get_nonce_data(!0),
              a = this;
            a.toggle_loader(i, !0);
            var o = new FormData();
            o.append("action", "tutor_user_photo_upload"),
              o.append("photo_type", i),
              o.append("photo_file", t, t.name),
              o.append(s.key, s.value),
              e.ajax({
                url: window._tutorobject.ajaxurl,
                data: o,
                type: "POST",
                processData: !1,
                contentType: !1,
                error: a.error_alert,
                complete: function () {
                  a.toggle_loader(i, !1);
                },
              });
          }
        }),
        (this.accept_upload_image = function (i, t) {
          var s = t.currentTarget.files[0] || null;
          i.update_preview(t.currentTarget.name, s),
            i.upload_selected_image(t.currentTarget.name, s),
            e(t.currentTarget).val("");
        }),
        (this.delete_image = function (i) {
          var t = this;
          t.toggle_loader(i, !0),
            e.ajax({
              url: window._tutorobject.ajaxurl,
              data: { action: "tutor_user_photo_remove", photo_type: i },
              type: "POST",
              error: t.error_alert,
              complete: function () {
                t.toggle_loader(i, !1);
              },
            });
        }),
        (this.update_preview = function (e, t) {
          var s = i.find(
            "cover_photo" == e ? "#dashboard-cover-area" : "#profile-photo"
          );
          if (!t)
            return (
              s.css("background-image", "url(" + s.data("fallback") + ")"),
              void this.delete_image(e)
            );
          var a = new FileReader();
          (a.onload = function (e) {
            s.css("background-image", "url(" + e.target.result + ")");
          }),
            a.readAsDataURL(t);
        }),
        (this.toggle_profile_pic_action = function (e) {
          i[void 0 === e ? "toggleClass" : e ? "addClass" : "removeClass"](
            "pop-up-opened"
          );
        }),
        (this.error_alert = function () {
          alert("Something Went Wrong.");
        }),
        (this.toggle_loader = function (e, t) {
          i.find("#photo-meta-area .loader-area").css(
            "display",
            t ? "block" : "none"
          );
        }),
        (this.initialize = function () {
          var e = this;
          this.dialogue_box.change(function (i) {
            e.accept_upload_image(e, i);
          }),
            i
              .find(
                "#profile-photo .overlay, #profile-photo-option>div:last-child"
              )
              .click(function () {
                e.toggle_profile_pic_action();
              }),
            i.find(".cover-uploader").click(function () {
              e.open_dialogue_box("cover_photo");
            }),
            i.find(".profile-photo-uploader").click(function () {
              e.open_dialogue_box("profile_photo");
            }),
            i.find(".cover-deleter").click(function () {
              e.update_preview("cover_photo", null);
            }),
            i.find(".profile-photo-deleter").click(function () {
              e.update_preview("profile_photo", null);
            });
        });
    })(r).initialize(),
    document.querySelectorAll(".backBtn").forEach(function (e) {
      e.addEventListener("click", function (e) {
        e.preventDefault(), window.scrollTo({ top: 0, behavior: "smooth" });
      });
      var i = 0;
      window.addEventListener("scroll", function () {
        document.body.getBoundingClientRect().top > i
          ? (e.style.display = "none")
          : (e.style.display = "block"),
          (i = document.body.getBoundingClientRect().top);
      });
    }),
    console.log(localStorage.getItem("setupTime")),
    console.log(Date.now());
  var l = Date.now(),
    c = Number(localStorage.getItem("setupTime"));
  if ((console.log((l - c) / 6e4), null == c))
    localStorage.setItem("setupTime", l);
  else if (c) {
    (l - c) / 6e4 > 15 &&
      (localStorage.clear(), localStorage.setItem("setupTime", l));
  } else localStorage.setItem("setupTime", l);
})(jQuery);
