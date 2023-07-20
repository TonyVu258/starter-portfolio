import * from "./pace";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        91118: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
                return t(19153)
            }])
        },
        19153: function (e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function () {
                    return h
                }
            });
            var s = t(26042),
                r = t(85893),
                o = t(67294),
                i = t(9008),
                c = t.n(i),
                a = t(4298),
                u = t.n(a),
                l = function () {
                    var e = function () {
                        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
                    };
                    ! function () {
                        if (!e()) {
                            var n = document.querySelector(".cursor-inner"),
                                t = document.querySelector(".cursor-outer");
                            window.onmousemove = function (e) {
                                t.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px)", n.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px)", e.clientY, e.clientX
                            }, document.body.addEventListener("mousemove", (function (e) {
                                e.target.closest("a, .cursor-pointer") ? (n.classList.add("cursor-hover"), t.classList.add("cursor-hover")) : (n.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
                            })), n.style.visibility = "visible", t.style.visibility = "visible"
                        }
                    }()
                },
                d = function () {
                    return o.useEffect((function () {
                        l()
                    }), []), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: "mouse-cursor cursor-outer"
                        }), (0, r.jsx)("div", {
                            className: "mouse-cursor cursor-inner"
                        })]
                    })
                },
                f = function () {
                    var e = document.querySelector(".progress-wrap path"),
                        n = e.getTotalLength();
                    e.style.transition = e.style.WebkitTransition = "none", e.style.strokeDasharray = n + " " + n, e.style.strokeDashoffset = n, e.getBoundingClientRect(), e.style.transition = e.style.WebkitTransition = "stroke-dashoffset 10ms linear";
                    var t = function () {
                        var t = window.pageYOffset,
                            s = document.documentElement.scrollHeight - window.innerHeight,
                            r = n - t * n / s;
                        e.style.strokeDashoffset = r
                    };
                    t(), window.addEventListener("scroll", t);
                    var s = document.querySelector(".progress-wrap");
                    window.addEventListener("scroll", (function () {
                        window.pageYOffset > 150 ? s.classList.add("active-progress") : document.querySelector(".progress-wrap").classList.remove("active-progress")
                    })), s.addEventListener("click", (function (e) {
                        return e.preventDefault(), window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        }), !1
                    }))
                },
                p = function () {
                    return o.useEffect((function () {
                        f()
                    }), []), (0, r.jsx)("div", {
                        className: "progress-wrap cursor-pointer",
                        children: (0, r.jsx)("svg", {
                            className: "progress-circle svg-content",
                            width: "100%",
                            height: "100%",
                            viewBox: "-1 -1 102 102",
                            children: (0, r.jsx)("path", {
                                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                            })
                        })
                    })
                },
                m = function () {
                    Pace.on("start", (function () {
                        document.querySelector("#preloader").classList.remove("isdone"), document.querySelector(".loading").classList.remove("isdone")
                    })), Pace.on("done", (function () {
                        document.querySelector("#preloader").classList.add("isdone"), document.querySelector(".loading").classList.add("isdone"), document.getElementById("navbarSupportedContent") && document.getElementById("navbarSupportedContent").classList.remove("show-with-trans")
                    })), document.querySelector("body").classList.contains("pace-done") && (document.querySelector("#preloader").classList.add("isdone"), document.querySelector(".loading").classList.add("isdone")), window.addEventListener("load", (function () {
                        document.querySelector("#preloader").classList.add("isdone"), document.querySelector(".loading").classList.add("isdone"), document.querySelector(".pace-running.pace-running") && document.querySelector(".pace-running.pace-running").classList.remove("pace-running")
                    }))
                },
                v = t(82806),
                export default g = function () {
                    return o.useEffect((function () {
                        var e = document.querySelector("body");
                        v.QP ? (m(), e.classList.contains("hideX") && e.classList.remove("hideX")) : e.classList.add("hideX")
                    })), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("div", {
                            className: "".concat(!0 === v.QP ? "showX" : "hideX"),
                            children: [(0, r.jsxs)("div", {
                                className: "loading",
                                children: [(0, r.jsx)("span", {
                                    children: "L"
                                }), (0, r.jsx)("span", {
                                    children: "o"
                                }), (0, r.jsx)("span", {
                                    children: "a"
                                }), (0, r.jsx)("span", {
                                    children: "d"
                                }), (0, r.jsx)("span", {
                                    children: "i"
                                }), (0, r.jsx)("span", {
                                    children: "n"
                                }), (0, r.jsx)("span", {
                                    children: "g"
                                })]
                            }), (0, r.jsx)("div", {
                                id: "preloader"
                            })]
                        }), v.QP ? (0, r.jsx)(u(), {
                            id: "pace",
                            strategy: "beforeInteractive",
                            "data-pace-options": '{"eventLag": false,"restartOnRequestAfter": false}',
                            src: "/js/pace.min.js"
                        }) : ""]
                    })
                };
            t(25420);
            var h = function (e) {
                var n, t = e.Component,
                    i = e.pageProps,
                    a = (0, o.useState)(!1),
                    l = a[0],
                    f = a[1];
                return (0, o.useEffect)((function () {
                    f(!0)
                }), []), (null !== (n = t.getLayout) && void 0 !== n ? n : function (e) {
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(c(), {
                            children: [(0, r.jsx)("title", {
                                children: "NUS Technology - Professional Software Solution & Consulting Company "
                            }), (0, r.jsx)("link", {
                                rel: "icon",
                                href: "/img/favicon.ico"
                            })]
                        }), (0, r.jsx)(d, {}), (0, r.jsx)(g, {}), e, l && (0, r.jsx)(p, {}), (0, r.jsx)(u(), {
                            strategy: "beforeInteractive",
                            id: "splitting",
                            src: "/js/splitting.min.js"
                        }), (0, r.jsx)(u(), {
                            id: "simpleParallax",
                            src: "/js/simpleParallax.min.js"
                        }), (0, r.jsx)(u(), {
                            id: "isotope",
                            strategy: "beforeInteractive",
                            src: "/js/isotope.pkgd.min.js"
                        }), (0, r.jsx)(u(), {
                            strategy: "beforeInteractive",
                            src: "/js/wow.min.js"
                        }), (0, r.jsx)(u(), {
                            id: "wowInit",
                            children: "new WOW().init();"
                        })]
                    })
                })((0, r.jsx)(t, (0, s.Z)({}, i)))
            }
        },
        25420: function () { },
        9008: function (e, n, t) {
            e.exports = t(5443)
        },
        4298: function (e, n, t) {
            e.exports = t(20699)
        },
        14924: function (e, n, t) {
            "use strict";

            function s(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }
            t.d(n, {
                Z: function () {
                    return s
                }
            })
        },
        26042: function (e, n, t) {
            "use strict";
            t.d(n, {
                Z: function () {
                    return r
                }
            });
            var s = t(14924);

            function r(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })))), r.forEach((function (n) {
                        (0, s.Z)(e, n, t[n])
                    }))
                }
                return e
            }
        },
        82806: function (e) {
            "use strict";
            e.exports = JSON.parse('{"E8":"/img/logo.png","Q1":"/img/logo.png","QP":true}')
        }
    },
    function (e) {
        var n = function (n) {
            return e(e.s = n)
        };
        e.O(0, [774, 179], (function () {
            return n(91118), n(90387)
        }));
        var t = e.O();
        _N_E = t
    }
]);