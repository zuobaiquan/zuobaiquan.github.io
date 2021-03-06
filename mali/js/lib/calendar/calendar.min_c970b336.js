// Ion.Calendar
// version 2.0.1, build: 91
// http://ionden.com/a/plugins/ion.calendar/
// http://www.jq22.com/demo/jQueryTime201704181027/index5.html
(function (f) {
    try {
        var t = moment()
    } catch (u) {
        throw alert("Can't find Moment.js, please read the ion.calendar description."), Error(
            "Can't find Moment.js library");
    }
    var m = {
        init: function (e) {
            var c = f.extend({
                lang: "en",
                sundayFirst: !0,
                years: "80",
                format: "",
                clickable: !0,
                startDate: "",
                hideArrows: !1,
                onClick: null,
                onReady: null
            }, e),
                a, b;
            return this.each(function () {
                var n = f(this);
                if (!n.data("isActive")) {
                    n.data("isActive", !0);
                    var e, l, m, v, x, g, d = moment(t.lang(c.lang)),
                        h, k, p, y, w, q, r, u = !0;
                    this.updateData = function (a) {
                        c = f.extend(c,
                            a);
                        s()
                    };
                    var s = function () {
                        e.off();
                        l.off();
                        m.off();
                        v.off();
                        n.empty();
                        A();
                        B()
                    }, A = function () {
                            c.startDate && (g = 0 <= c.format.indexOf("L") ? moment(c.startDate, "YYYY.MM.DD").lang(c.lang) :
                                moment(c.startDate, c.format).lang(c.lang));
                            c.years = c.years.toString();
                            w = c.years.split("-");
                            1 === w.length ? (q = moment().subtract("years", w[0]).format("YYYY"), r = moment().format(
                                "YYYY")) : 2 === w.length && (q = w[0], r = w[1]);
                            q = parseInt(q);
                            r = parseInt(r);
                            r < d.format("YYYY") && d.year(r).month(11);
                            q > d.format("YYYY") && d.year(q).month(0)
                        }, B = function () {
                            h =
                                moment(d);
                            k = parseInt(h.startOf("month").format("d"));
                            p = parseInt(h.endOf("month").format("d"));
                            y = parseInt(h.endOf("month").format("D"));
                            a = '<div class="ic__container">';
                            a += '<div class="ic__header">';
                            a += '<div class="ic__prev"><div></div></div>';
                            a += '<div class="ic__next"><div></div></div>';
                            a += '<div class="ic__month"><select class="ic__month-select">';
                            for (b = 0; 12 > b; b++) a = b === parseInt(d.format("M")) - 1 ? a + ('<option value="' + b +
                                    '" selected="selected">' + h.month(b).format("MMMM") + "</option>") : a + (
                                    '<option value="' +
                                    b + '">' + h.month(b).format("MMMM") + "</option>");
                            a += "</select></div>";
                            a += '<div class="ic__year"><select class="ic__year-select">';
                            for (b = q; b <= r; b++) a = b === parseInt(d.format("YYYY")) ? a + ('<option value="' + b +
                                    '" selected="selected">' + b + "</option>") : a + ('<option value="' + b + '">' + b +
                                    "</option>");
                            a += "</select></div>";
                            a += "</div>";
                            if (c.sundayFirst) {
                                a += '<table class="ic__week-head"><tr>';
                                for (b = 0; 7 > b; b++) a += "<td>" + h.day(b).format("dd") + "</td>";
                                a += "</tr></table>";
                                a += '<table class="ic__days"><tr>';
                                for (b = 0; b < k; b++) a +=
                                        '<td class="ic__day-empty"> </td>';
                                for (b = 1; b <= y; b++) a = moment(d).date(b).format("D.M.YYYY") === t.format(
                                        "D.M.YYYY") ? a + ('<td class="ic__day ic__day_state_current">' + b + "</td>") :
                                        g && moment(d).date(b).format("D.M.YYYY") === g.format("D.M.YYYY") ? a + (
                                        '<td class="ic__day ic__day_state_selected">' + b + "</td>") : a + (
                                        '<td class="ic__day">' + b + "</td>"), (k + b) / 7 === Math.floor((k + b) / 7) &&
                                        (a += "</tr><tr>");
                                b = p
                            } else {
                                a += '<table class="ic__week-head"><tr>';
                                for (b = 1; 8 > b; b++) a = 7 > b ? a + ("<td>" + h.day(b).format("dd") + "</td>") : a +
                                        ("<td>" +
                                        h.day(0).format("dd") + "</td>");
                                a += "</tr></table>";
                                a += '<table class="ic__days"><tr>';
                                k = 0 < k ? k - 1 : 6;
                                for (b = 0; b < k; b++) a += '<td class="ic__day-empty"> </td>';
                                for (b = 1; b <= y; b++) a = moment(d).date(b).format("D.M.YYYY") === t.format(
                                        "D.M.YYYY") ? a + ('<td class="ic__day ic__day_state_current">' + b + "</td>") :
                                        g && moment(d).date(b).format("D.M.YYYY") === g.format("D.M.YYYY") ? a + (
                                        '<td class="ic__day ic__day_state_selected">' + b + "</td>") : a + (
                                        '<td class="ic__day">' + b + "</td>"), (k + b) / 7 === Math.floor((k + b) / 7) &&
                                        (a += "</tr><tr>");
                                1 > p && (p = 7);
                                b = p - 1
                            }
                            for (; 6 > b; b++) a += '<td class="ic__day-empty"> </td>';
                            a += "</tr></table>";
                            a += "</div>";
                            C()
                        }, C = function () {
                            n.html(a);
                            e = n.find(".ic__prev");
                            l = n.find(".ic__next");
                            m = n.find(".ic__month-select");
                            v = n.find(".ic__year-select");
                            x = n.find(".ic__day");
                            c.hideArrows ? (e[0].style.display = "none", l[0].style.display = "none") : (e.on("click", function (
                                a) {
                                a.preventDefault();
                                d.subtract("months", 1);
                                parseInt(d.format("YYYY")) < q && d.add("months", 1);
                                s()
                            }), l.on("click", function (a) {
                                a.preventDefault();
                                d.add("months",
                                    1);
                                parseInt(d.format("YYYY")) > r && d.subtract("months", 1);
                                s()
                            }));
                            m.on("change", function (a) {
                                a.preventDefault();
                                a = f(this).prop("value");
                                d.month(parseInt(a));
                                s()
                            });
                            v.on("change", function (a) {
                                a.preventDefault();
                                a = f(this).prop("value");
                                d.year(parseInt(a));
                                s()
                            });
                            if (c.clickable) x.on("click", function (a) {
                                    a.preventDefault();
                                    a = f(this).text();
                                    d.date(parseInt(a));
                                    g = moment(d);
                                    0 <= c.format.indexOf("L") ? c.startDate = g.format("YYYY-MM-DD") : c.startDate = g
                                        .format(c.format);
                                    "function" === typeof c.onClick && (c.format ? "moment" ===
                                        c.format ? c.onClick.call(this, g) : c.onClick.call(this, g.format(c.format)) :
                                        c.onClick.call(this, g.format()));
                                    s()
                                });
                            "function" === typeof c.onReady && (c.format ? "moment" === c.format ? c.onReady.call(this,
                                d) : c.onReady.call(this, d.format(c.format)) : c.onReady.call(this, d.format()));
                            c.startDate && u && (u = !1, d.year(parseInt(g.format("YYYY"))), d.month(parseInt(g.format(
                                "M") - 1)), s())
                        };
                    A();
                    B()
                }
            })
        },
        update: function (e) {
            return this.each(function () {
                this.updateData(e)
            })
        }
    };
    f.fn.ionCalendar = function (e) {
        if (m[e]) return m[e].apply(this,
                Array.prototype.slice.call(arguments, 1));
        if ("object" !== typeof e && e) f.error("Method " + e + " does not exist for jQuery.ionCalendar");
        else return m.init.apply(this, arguments)
    }
})(jQuery);
(function (f) {
    var t = 0,
        u, m = f(document.body),
        e = function () {
            f(".ic__datepicker").css("left", "-9999px").css("top", "-9999px")
        }, c = {
            init: function (a) {
                var b = f.extend({
                    lang: "en",
                    sundayFirst: !0,
                    years: "80",
                    clickable: !0,
                    format: ""
                }, a);
                return this.each(function () {
                    var a = f(this),
                        c, l = {}, z = this,
                        v, x, g, d, h, k;
                    if (!a.data("isActive")) {
                        a.data("isActive", !0);
                        t++;
                        this.pluginCount = t;
                        l.lang = a.data("lang") || b.lang;
                        !1 === a.data("sundayfirst") && (l.sundayFirst = a.data("sundayfirst"));
                        l.years = a.data("years") || b.years;
                        l.format = a.data("format") ||
                            b.format;
                        f.extend(b, l);
                        m.on("mousedown", function () {
                            e()
                        });
                        b.onClick = function (b) {
                            a.prop("value", b);
                            d = b;
                            e()
                        };
                        var p = function () {
                            v = parseInt(a.offset().left);
                            x = parseInt(a.offset().top);
                            g = parseInt(a.outerWidth(!0));
                            c.css("left", "50%").css("marginLeft","-500px").css("top", x +30 + "px");
                            (h = a.prop("value")) && (h !== d && 0 > b.format.indexOf("L")) && (k = moment(h, b.format),
                                k.isValid() && c.ionCalendar("update", {
                                startDate: h
                            }))
                        };
                        (function () {
                            u = '<div class="ic__datepicker" id="ic__datepicker-' + z.pluginCount + '"></div>';
                            m.append(u);
                            c = f("#ic__datepicker-" +
                                z.pluginCount);
                            c.ionCalendar(b);
                            c.on("mousedown", function (a) {
                                a.stopPropagation()
                            });
                            a.on("mousedown", function (a) {
                                a.stopPropagation()
                            });
                            a.on("focusin", function () {
                                e();
                                p()
                            });
                            a.on("keyup", function () {
                                p()
                            })
                        })()
                    }
                })
            },
            close: function () {
                e()
            }
        };
    f.fn.ionDatePicker = function (a) {
        if (c[a]) return c[a].apply(this, Array.prototype.slice.call(arguments, 1));
        if ("object" !== typeof a && a) f.error("Method " + a + " does not exist for jQuery.ionDatePicker");
        else return c.init.apply(this, arguments)
    }
})(jQuery);
