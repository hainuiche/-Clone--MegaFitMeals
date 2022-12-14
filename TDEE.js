/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!(function (a, b) {
    'object' == typeof module && 'object' == typeof module.exports
        ? (module.exports = a.document
              ? b(a, !0)
              : function (a) {
                    if (!a.document) throw new Error('jQuery requires a window with a document');
                    return b(a);
                })
        : b(a);
})('undefined' != typeof window ? window : this, function (a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = a.document,
        m = '2.1.4',
        n = function (a, b) {
            return new n.fn.init(a, b);
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function (a, b) {
            return b.toUpperCase();
        };
    (n.fn = n.prototype =
        {
            jquery: m,
            constructor: n,
            selector: '',
            length: 0,
            toArray: function () {
                return d.call(this);
            },
            get: function (a) {
                return null != a ? (0 > a ? this[a + this.length] : this[a]) : d.call(this);
            },
            pushStack: function (a) {
                var b = n.merge(this.constructor(), a);
                return (b.prevObject = this), (b.context = this.context), b;
            },
            each: function (a, b) {
                return n.each(this, a, b);
            },
            map: function (a) {
                return this.pushStack(
                    n.map(this, function (b, c) {
                        return a.call(b, c, b);
                    })
                );
            },
            slice: function () {
                return this.pushStack(d.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor(null);
            },
            push: f,
            sort: c.sort,
            splice: c.splice,
        }),
        (n.extend = n.fn.extend =
            function () {
                var a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g = arguments[0] || {},
                    h = 1,
                    i = arguments.length,
                    j = !1;
                for (
                    'boolean' == typeof g && ((j = g), (g = arguments[h] || {}), h++),
                        'object' == typeof g || n.isFunction(g) || (g = {}),
                        h === i && ((g = this), h--);
                    i > h;
                    h++
                )
                    if (null != (a = arguments[h]))
                        for (b in a)
                            (c = g[b]),
                                (d = a[b]),
                                g !== d &&
                                    (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))
                                        ? (e
                                              ? ((e = !1), (f = c && n.isArray(c) ? c : []))
                                              : (f = c && n.isPlainObject(c) ? c : {}),
                                          (g[b] = n.extend(j, f, d)))
                                        : void 0 !== d && (g[b] = d));
                return g;
            }),
        n.extend({
            expando: 'jQuery' + (m + Math.random()).replace(/\D/g, ''),
            isReady: !0,
            error: function (a) {
                throw new Error(a);
            },
            noop: function () {},
            isFunction: function (a) {
                return 'function' === n.type(a);
            },
            isArray: Array.isArray,
            isWindow: function (a) {
                return null != a && a === a.window;
            },
            isNumeric: function (a) {
                return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
            },
            isPlainObject: function (a) {
                return 'object' !== n.type(a) || a.nodeType || n.isWindow(a)
                    ? !1
                    : a.constructor && !j.call(a.constructor.prototype, 'isPrototypeOf')
                    ? !1
                    : !0;
            },
            isEmptyObject: function (a) {
                var b;
                for (b in a) return !1;
                return !0;
            },
            type: function (a) {
                return null == a
                    ? a + ''
                    : 'object' == typeof a || 'function' == typeof a
                    ? h[i.call(a)] || 'object'
                    : typeof a;
            },
            globalEval: function (a) {
                var b,
                    c = eval;
                (a = n.trim(a)),
                    a &&
                        (1 === a.indexOf('use strict')
                            ? ((b = l.createElement('script')),
                              (b.text = a),
                              l.head.appendChild(b).parentNode.removeChild(b))
                            : c(a));
            },
            camelCase: function (a) {
                return a.replace(p, 'ms-').replace(q, r);
            },
            nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
            },
            each: function (a, b, c) {
                var d,
                    e = 0,
                    f = a.length,
                    g = s(a);
                if (c) {
                    if (g) {
                        for (; f > e; e++) if (((d = b.apply(a[e], c)), d === !1)) break;
                    } else for (e in a) if (((d = b.apply(a[e], c)), d === !1)) break;
                } else if (g) {
                    for (; f > e; e++) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
                } else for (e in a) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
                return a;
            },
            trim: function (a) {
                return null == a ? '' : (a + '').replace(o, '');
            },
            makeArray: function (a, b) {
                var c = b || [];
                return (
                    null != a &&
                        (s(Object(a)) ? n.merge(c, 'string' == typeof a ? [a] : a) : f.call(c, a)),
                    c
                );
            },
            inArray: function (a, b, c) {
                return null == b ? -1 : g.call(b, a, c);
            },
            merge: function (a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
                return (a.length = e), a;
            },
            grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                    (d = !b(a[f], f)), d !== h && e.push(a[f]);
                return e;
            },
            map: function (a, b, c) {
                var d,
                    f = 0,
                    g = a.length,
                    h = s(a),
                    i = [];
                if (h) for (; g > f; f++) (d = b(a[f], f, c)), null != d && i.push(d);
                else for (f in a) (d = b(a[f], f, c)), null != d && i.push(d);
                return e.apply([], i);
            },
            guid: 1,
            proxy: function (a, b) {
                var c, e, f;
                return (
                    'string' == typeof b && ((c = a[b]), (b = a), (a = c)),
                    n.isFunction(a)
                        ? ((e = d.call(arguments, 2)),
                          (f = function () {
                              return a.apply(b || this, e.concat(d.call(arguments)));
                          }),
                          (f.guid = a.guid = a.guid || n.guid++),
                          f)
                        : void 0
                );
            },
            now: Date.now,
            support: k,
        }),
        n.each(
            'Boolean Number String Function Array Date RegExp Object Error'.split(' '),
            function (a, b) {
                h['[object ' + b + ']'] = b.toLowerCase();
            }
        );
    function s(a) {
        var b = 'length' in a && a.length,
            c = n.type(a);
        return 'function' === c || n.isWindow(a)
            ? !1
            : 1 === a.nodeType && b
            ? !0
            : 'array' === c || 0 === b || ('number' == typeof b && b > 0 && b - 1 in a);
    }
    var t = (function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = 'sizzle' + 1 * new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function (a, b) {
                return a === b && (l = !0), 0;
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                return -1;
            },
            K =
                'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
            L = '[\\x20\\t\\r\\n\\f]',
            M = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
            N = M.replace('w', 'w#'),
            O =
                '\\[' +
                L +
                '*(' +
                M +
                ')(?:' +
                L +
                '*([*^$|!~]?=)' +
                L +
                '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                N +
                '))|)' +
                L +
                '*\\]',
            P =
                ':(' +
                M +
                ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                O +
                ')*)|.*)\\)|)',
            Q = new RegExp(L + '+', 'g'),
            R = new RegExp('^' + L + '+|((?:^|[^\\\\])(?:\\\\.)*)' + L + '+$', 'g'),
            S = new RegExp('^' + L + '*,' + L + '*'),
            T = new RegExp('^' + L + '*([>+~]|' + L + ')' + L + '*'),
            U = new RegExp('=' + L + '*([^\\]\'"]*?)' + L + '*\\]', 'g'),
            V = new RegExp(P),
            W = new RegExp('^' + N + '$'),
            X = {
                ID: new RegExp('^#(' + M + ')'),
                CLASS: new RegExp('^\\.(' + M + ')'),
                TAG: new RegExp('^(' + M.replace('w', 'w*') + ')'),
                ATTR: new RegExp('^' + O),
                PSEUDO: new RegExp('^' + P),
                CHILD: new RegExp(
                    '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                        L +
                        '*(even|odd|(([+-]|)(\\d*)n|)' +
                        L +
                        '*(?:([+-]|)' +
                        L +
                        '*(\\d+)|))' +
                        L +
                        '*\\)|)',
                    'i'
                ),
                bool: new RegExp('^(?:' + K + ')$', 'i'),
                needsContext: new RegExp(
                    '^' +
                        L +
                        '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                        L +
                        '*((?:-\\d)?\\d*)' +
                        L +
                        '*\\)|)(?=[^-]|$)',
                    'i'
                ),
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            aa = /[+~]/,
            ba = /'|\\/g,
            ca = new RegExp('\\\\([\\da-f]{1,6}' + L + '?|(' + L + ')|.)', 'ig'),
            da = function (a, b, c) {
                var d = '0x' + b - 65536;
                return d !== d || c
                    ? b
                    : 0 > d
                    ? String.fromCharCode(d + 65536)
                    : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
            },
            ea = function () {
                m();
            };
        try {
            H.apply((E = I.call(v.childNodes)), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (fa) {
            H = {
                apply: E.length
                    ? function (a, b) {
                          G.apply(a, I.call(b));
                      }
                    : function (a, b) {
                          var c = a.length,
                              d = 0;
                          while ((a[c++] = b[d++]));
                          a.length = c - 1;
                      },
            };
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if (
                ((b ? b.ownerDocument || b : v) !== n && m(b),
                (b = b || n),
                (d = d || []),
                (k = b.nodeType),
                'string' != typeof a || !a || (1 !== k && 9 !== k && 11 !== k))
            )
                return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if ((j = f[1])) {
                        if (9 === k) {
                            if (((h = b.getElementById(j)), !h || !h.parentNode)) return d;
                            if (h.id === j) return d.push(h), d;
                        } else if (
                            b.ownerDocument &&
                            (h = b.ownerDocument.getElementById(j)) &&
                            t(b, h) &&
                            h.id === j
                        )
                            return d.push(h), d;
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(j)), d;
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (
                        ((s = r = u),
                        (w = b),
                        (x = 1 !== k && a),
                        1 === k && 'object' !== b.nodeName.toLowerCase())
                    ) {
                        (o = g(a)),
                            (r = b.getAttribute('id'))
                                ? (s = r.replace(ba, '\\$&'))
                                : b.setAttribute('id', s),
                            (s = "[id='" + s + "'] "),
                            (l = o.length);
                        while (l--) o[l] = s + ra(o[l]);
                        (w = (aa.test(a) && pa(b.parentNode)) || b), (x = o.join(','));
                    }
                    if (x)
                        try {
                            return H.apply(d, w.querySelectorAll(x)), d;
                        } catch (y) {
                        } finally {
                            r || b.removeAttribute('id');
                        }
                }
            }
            return i(a.replace(R, '$1'), b, d, e);
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + ' ') > d.cacheLength && delete b[a.shift()], (b[c + ' '] = e);
            }
            return b;
        }
        function ia(a) {
            return (a[u] = !0), a;
        }
        function ja(a) {
            var b = n.createElement('div');
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), (b = null);
            }
        }
        function ka(a, b) {
            var c = a.split('|'),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b;
        }
        function la(a, b) {
            var c = b && a,
                d =
                    c &&
                    1 === a.nodeType &&
                    1 === b.nodeType &&
                    (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while ((c = c.nextSibling)) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return 'input' === c && b.type === a;
            };
        }
        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ('input' === c || 'button' === c) && b.type === a;
            };
        }
        function oa(a) {
            return ia(function (b) {
                return (
                    (b = +b),
                    ia(function (c, d) {
                        var e,
                            f = a([], c.length, b),
                            g = f.length;
                        while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
                    })
                );
            });
        }
        function pa(a) {
            return a && 'undefined' != typeof a.getElementsByTagName && a;
        }
        (c = ga.support = {}),
            (f = ga.isXML =
                function (a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? 'HTML' !== b.nodeName : !1;
                }),
            (m = ga.setDocument =
                function (a) {
                    var b,
                        e,
                        g = a ? a.ownerDocument || a : v;
                    return g !== n && 9 === g.nodeType && g.documentElement
                        ? ((n = g),
                          (o = g.documentElement),
                          (e = g.defaultView),
                          e &&
                              e !== e.top &&
                              (e.addEventListener
                                  ? e.addEventListener('unload', ea, !1)
                                  : e.attachEvent && e.attachEvent('onunload', ea)),
                          (p = !f(g)),
                          (c.attributes = ja(function (a) {
                              return (a.className = 'i'), !a.getAttribute('className');
                          })),
                          (c.getElementsByTagName = ja(function (a) {
                              return (
                                  a.appendChild(g.createComment('')),
                                  !a.getElementsByTagName('*').length
                              );
                          })),
                          (c.getElementsByClassName = $.test(g.getElementsByClassName)),
                          (c.getById = ja(function (a) {
                              return (
                                  (o.appendChild(a).id = u),
                                  !g.getElementsByName || !g.getElementsByName(u).length
                              );
                          })),
                          c.getById
                              ? ((d.find.ID = function (a, b) {
                                    if ('undefined' != typeof b.getElementById && p) {
                                        var c = b.getElementById(a);
                                        return c && c.parentNode ? [c] : [];
                                    }
                                }),
                                (d.filter.ID = function (a) {
                                    var b = a.replace(ca, da);
                                    return function (a) {
                                        return a.getAttribute('id') === b;
                                    };
                                }))
                              : (delete d.find.ID,
                                (d.filter.ID = function (a) {
                                    var b = a.replace(ca, da);
                                    return function (a) {
                                        var c =
                                            'undefined' != typeof a.getAttributeNode &&
                                            a.getAttributeNode('id');
                                        return c && c.value === b;
                                    };
                                })),
                          (d.find.TAG = c.getElementsByTagName
                              ? function (a, b) {
                                    return 'undefined' != typeof b.getElementsByTagName
                                        ? b.getElementsByTagName(a)
                                        : c.qsa
                                        ? b.querySelectorAll(a)
                                        : void 0;
                                }
                              : function (a, b) {
                                    var c,
                                        d = [],
                                        e = 0,
                                        f = b.getElementsByTagName(a);
                                    if ('*' === a) {
                                        while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                                        return d;
                                    }
                                    return f;
                                }),
                          (d.find.CLASS =
                              c.getElementsByClassName &&
                              function (a, b) {
                                  return p ? b.getElementsByClassName(a) : void 0;
                              }),
                          (r = []),
                          (q = []),
                          (c.qsa = $.test(g.querySelectorAll)) &&
                              (ja(function (a) {
                                  (o.appendChild(a).innerHTML =
                                      "<a id='" +
                                      u +
                                      "'></a><select id='" +
                                      u +
                                      "-\f]' msallowcapture=''><option selected=''></option></select>"),
                                      a.querySelectorAll("[msallowcapture^='']").length &&
                                          q.push('[*^$]=' + L + '*(?:\'\'|"")'),
                                      a.querySelectorAll('[selected]').length ||
                                          q.push('\\[' + L + '*(?:value|' + K + ')'),
                                      a.querySelectorAll('[id~=' + u + '-]').length || q.push('~='),
                                      a.querySelectorAll(':checked').length || q.push(':checked'),
                                      a.querySelectorAll('a#' + u + '+*').length ||
                                          q.push('.#.+[+~]');
                              }),
                              ja(function (a) {
                                  var b = g.createElement('input');
                                  b.setAttribute('type', 'hidden'),
                                      a.appendChild(b).setAttribute('name', 'D'),
                                      a.querySelectorAll('[name=d]').length &&
                                          q.push('name' + L + '*[*^$|!~]?='),
                                      a.querySelectorAll(':enabled').length ||
                                          q.push(':enabled', ':disabled'),
                                      a.querySelectorAll('*,:x'),
                                      q.push(',.*:');
                              })),
                          (c.matchesSelector = $.test(
                              (s =
                                  o.matches ||
                                  o.webkitMatchesSelector ||
                                  o.mozMatchesSelector ||
                                  o.oMatchesSelector ||
                                  o.msMatchesSelector)
                          )) &&
                              ja(function (a) {
                                  (c.disconnectedMatch = s.call(a, 'div')),
                                      s.call(a, "[s!='']:x"),
                                      r.push('!=', P);
                              }),
                          (q = q.length && new RegExp(q.join('|'))),
                          (r = r.length && new RegExp(r.join('|'))),
                          (b = $.test(o.compareDocumentPosition)),
                          (t =
                              b || $.test(o.contains)
                                  ? function (a, b) {
                                        var c = 9 === a.nodeType ? a.documentElement : a,
                                            d = b && b.parentNode;
                                        return (
                                            a === d ||
                                            !(
                                                !d ||
                                                1 !== d.nodeType ||
                                                !(c.contains
                                                    ? c.contains(d)
                                                    : a.compareDocumentPosition &&
                                                      16 & a.compareDocumentPosition(d))
                                            )
                                        );
                                    }
                                  : function (a, b) {
                                        if (b) while ((b = b.parentNode)) if (b === a) return !0;
                                        return !1;
                                    }),
                          (B = b
                              ? function (a, b) {
                                    if (a === b) return (l = !0), 0;
                                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                    return d
                                        ? d
                                        : ((d =
                                              (a.ownerDocument || a) === (b.ownerDocument || b)
                                                  ? a.compareDocumentPosition(b)
                                                  : 1),
                                          1 & d ||
                                          (!c.sortDetached && b.compareDocumentPosition(a) === d)
                                              ? a === g || (a.ownerDocument === v && t(v, a))
                                                  ? -1
                                                  : b === g || (b.ownerDocument === v && t(v, b))
                                                  ? 1
                                                  : k
                                                  ? J(k, a) - J(k, b)
                                                  : 0
                                              : 4 & d
                                              ? -1
                                              : 1);
                                }
                              : function (a, b) {
                                    if (a === b) return (l = !0), 0;
                                    var c,
                                        d = 0,
                                        e = a.parentNode,
                                        f = b.parentNode,
                                        h = [a],
                                        i = [b];
                                    if (!e || !f)
                                        return a === g
                                            ? -1
                                            : b === g
                                            ? 1
                                            : e
                                            ? -1
                                            : f
                                            ? 1
                                            : k
                                            ? J(k, a) - J(k, b)
                                            : 0;
                                    if (e === f) return la(a, b);
                                    c = a;
                                    while ((c = c.parentNode)) h.unshift(c);
                                    c = b;
                                    while ((c = c.parentNode)) i.unshift(c);
                                    while (h[d] === i[d]) d++;
                                    return d
                                        ? la(h[d], i[d])
                                        : h[d] === v
                                        ? -1
                                        : i[d] === v
                                        ? 1
                                        : 0;
                                }),
                          g)
                        : n;
                }),
            (ga.matches = function (a, b) {
                return ga(a, null, null, b);
            }),
            (ga.matchesSelector = function (a, b) {
                if (
                    ((a.ownerDocument || a) !== n && m(a),
                    (b = b.replace(U, "='$1']")),
                    !(!c.matchesSelector || !p || (r && r.test(b)) || (q && q.test(b))))
                )
                    try {
                        var d = s.call(a, b);
                        if (d || c.disconnectedMatch || (a.document && 11 !== a.document.nodeType))
                            return d;
                    } catch (e) {}
                return ga(b, n, null, [a]).length > 0;
            }),
            (ga.contains = function (a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b);
            }),
            (ga.attr = function (a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f
                    ? f
                    : c.attributes || !p
                    ? a.getAttribute(b)
                    : (f = a.getAttributeNode(b)) && f.specified
                    ? f.value
                    : null;
            }),
            (ga.error = function (a) {
                throw new Error('Syntax error, unrecognized expression: ' + a);
            }),
            (ga.uniqueSort = function (a) {
                var b,
                    d = [],
                    e = 0,
                    f = 0;
                if (((l = !c.detectDuplicates), (k = !c.sortStable && a.slice(0)), a.sort(B), l)) {
                    while ((b = a[f++])) b === a[f] && (e = d.push(f));
                    while (e--) a.splice(d[e], 1);
                }
                return (k = null), a;
            }),
            (e = ga.getText =
                function (a) {
                    var b,
                        c = '',
                        d = 0,
                        f = a.nodeType;
                    if (f) {
                        if (1 === f || 9 === f || 11 === f) {
                            if ('string' == typeof a.textContent) return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                        } else if (3 === f || 4 === f) return a.nodeValue;
                    } else while ((b = a[d++])) c += e(b);
                    return c;
                }),
            (d = ga.selectors =
                {
                    cacheLength: 50,
                    createPseudo: ia,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        '>': { dir: 'parentNode', first: !0 },
                        ' ': { dir: 'parentNode' },
                        '+': { dir: 'previousSibling', first: !0 },
                        '~': { dir: 'previousSibling' },
                    },
                    preFilter: {
                        ATTR: function (a) {
                            return (
                                (a[1] = a[1].replace(ca, da)),
                                (a[3] = (a[3] || a[4] || a[5] || '').replace(ca, da)),
                                '~=' === a[2] && (a[3] = ' ' + a[3] + ' '),
                                a.slice(0, 4)
                            );
                        },
                        CHILD: function (a) {
                            return (
                                (a[1] = a[1].toLowerCase()),
                                'nth' === a[1].slice(0, 3)
                                    ? (a[3] || ga.error(a[0]),
                                      (a[4] = +(a[4]
                                          ? a[5] + (a[6] || 1)
                                          : 2 * ('even' === a[3] || 'odd' === a[3]))),
                                      (a[5] = +(a[7] + a[8] || 'odd' === a[3])))
                                    : a[3] && ga.error(a[0]),
                                a
                            );
                        },
                        PSEUDO: function (a) {
                            var b,
                                c = !a[6] && a[2];
                            return X.CHILD.test(a[0])
                                ? null
                                : (a[3]
                                      ? (a[2] = a[4] || a[5] || '')
                                      : c &&
                                        V.test(c) &&
                                        (b = g(c, !0)) &&
                                        (b = c.indexOf(')', c.length - b) - c.length) &&
                                        ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                                  a.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (a) {
                            var b = a.replace(ca, da).toLowerCase();
                            return '*' === a
                                ? function () {
                                      return !0;
                                  }
                                : function (a) {
                                      return a.nodeName && a.nodeName.toLowerCase() === b;
                                  };
                        },
                        CLASS: function (a) {
                            var b = y[a + ' '];
                            return (
                                b ||
                                ((b = new RegExp('(^|' + L + ')' + a + '(' + L + '|$)')) &&
                                    y(a, function (a) {
                                        return b.test(
                                            ('string' == typeof a.className && a.className) ||
                                                ('undefined' != typeof a.getAttribute &&
                                                    a.getAttribute('class')) ||
                                                ''
                                        );
                                    }))
                            );
                        },
                        ATTR: function (a, b, c) {
                            return function (d) {
                                var e = ga.attr(d, a);
                                return null == e
                                    ? '!=' === b
                                    : b
                                    ? ((e += ''),
                                      '=' === b
                                          ? e === c
                                          : '!=' === b
                                          ? e !== c
                                          : '^=' === b
                                          ? c && 0 === e.indexOf(c)
                                          : '*=' === b
                                          ? c && e.indexOf(c) > -1
                                          : '$=' === b
                                          ? c && e.slice(-c.length) === c
                                          : '~=' === b
                                          ? (' ' + e.replace(Q, ' ') + ' ').indexOf(c) > -1
                                          : '|=' === b
                                          ? e === c || e.slice(0, c.length + 1) === c + '-'
                                          : !1)
                                    : !0;
                            };
                        },
                        CHILD: function (a, b, c, d, e) {
                            var f = 'nth' !== a.slice(0, 3),
                                g = 'last' !== a.slice(-4),
                                h = 'of-type' === b;
                            return 1 === d && 0 === e
                                ? function (a) {
                                      return !!a.parentNode;
                                  }
                                : function (b, c, i) {
                                      var j,
                                          k,
                                          l,
                                          m,
                                          n,
                                          o,
                                          p = f !== g ? 'nextSibling' : 'previousSibling',
                                          q = b.parentNode,
                                          r = h && b.nodeName.toLowerCase(),
                                          s = !i && !h;
                                      if (q) {
                                          if (f) {
                                              while (p) {
                                                  l = b;
                                                  while ((l = l[p]))
                                                      if (
                                                          h
                                                              ? l.nodeName.toLowerCase() === r
                                                              : 1 === l.nodeType
                                                      )
                                                          return !1;
                                                  o = p = 'only' === a && !o && 'nextSibling';
                                              }
                                              return !0;
                                          }
                                          if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                                              (k = q[u] || (q[u] = {})),
                                                  (j = k[a] || []),
                                                  (n = j[0] === w && j[1]),
                                                  (m = j[0] === w && j[2]),
                                                  (l = n && q.childNodes[n]);
                                              while (
                                                  (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                                              )
                                                  if (1 === l.nodeType && ++m && l === b) {
                                                      k[a] = [w, n, m];
                                                      break;
                                                  }
                                          } else if (
                                              s &&
                                              (j = (b[u] || (b[u] = {}))[a]) &&
                                              j[0] === w
                                          )
                                              m = j[1];
                                          else
                                              while (
                                                  (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                                              )
                                                  if (
                                                      (h
                                                          ? l.nodeName.toLowerCase() === r
                                                          : 1 === l.nodeType) &&
                                                      ++m &&
                                                      (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                                                      l === b)
                                                  )
                                                      break;
                                          return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                                      }
                                  };
                        },
                        PSEUDO: function (a, b) {
                            var c,
                                e =
                                    d.pseudos[a] ||
                                    d.setFilters[a.toLowerCase()] ||
                                    ga.error('unsupported pseudo: ' + a);
                            return e[u]
                                ? e(b)
                                : e.length > 1
                                ? ((c = [a, a, '', b]),
                                  d.setFilters.hasOwnProperty(a.toLowerCase())
                                      ? ia(function (a, c) {
                                            var d,
                                                f = e(a, b),
                                                g = f.length;
                                            while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                                        })
                                      : function (a) {
                                            return e(a, 0, c);
                                        })
                                : e;
                        },
                    },
                    pseudos: {
                        not: ia(function (a) {
                            var b = [],
                                c = [],
                                d = h(a.replace(R, '$1'));
                            return d[u]
                                ? ia(function (a, b, c, e) {
                                      var f,
                                          g = d(a, null, e, []),
                                          h = a.length;
                                      while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                                  })
                                : function (a, e, f) {
                                      return (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop();
                                  };
                        }),
                        has: ia(function (a) {
                            return function (b) {
                                return ga(a, b).length > 0;
                            };
                        }),
                        contains: ia(function (a) {
                            return (
                                (a = a.replace(ca, da)),
                                function (b) {
                                    return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                                }
                            );
                        }),
                        lang: ia(function (a) {
                            return (
                                W.test(a || '') || ga.error('unsupported lang: ' + a),
                                (a = a.replace(ca, da).toLowerCase()),
                                function (b) {
                                    var c;
                                    do
                                        if (
                                            (c = p
                                                ? b.lang
                                                : b.getAttribute('xml:lang') ||
                                                  b.getAttribute('lang'))
                                        )
                                            return (
                                                (c = c.toLowerCase()),
                                                c === a || 0 === c.indexOf(a + '-')
                                            );
                                    while ((b = b.parentNode) && 1 === b.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function (b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id;
                        },
                        root: function (a) {
                            return a === o;
                        },
                        focus: function (a) {
                            return (
                                a === n.activeElement &&
                                (!n.hasFocus || n.hasFocus()) &&
                                !!(a.type || a.href || ~a.tabIndex)
                            );
                        },
                        enabled: function (a) {
                            return a.disabled === !1;
                        },
                        disabled: function (a) {
                            return a.disabled === !0;
                        },
                        checked: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return (
                                ('input' === b && !!a.checked) || ('option' === b && !!a.selected)
                            );
                        },
                        selected: function (a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                        },
                        empty: function (a) {
                            for (a = a.firstChild; a; a = a.nextSibling)
                                if (a.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (a) {
                            return !d.pseudos.empty(a);
                        },
                        header: function (a) {
                            return Z.test(a.nodeName);
                        },
                        input: function (a) {
                            return Y.test(a.nodeName);
                        },
                        button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return ('input' === b && 'button' === a.type) || 'button' === b;
                        },
                        text: function (a) {
                            var b;
                            return (
                                'input' === a.nodeName.toLowerCase() &&
                                'text' === a.type &&
                                (null == (b = a.getAttribute('type')) || 'text' === b.toLowerCase())
                            );
                        },
                        first: oa(function () {
                            return [0];
                        }),
                        last: oa(function (a, b) {
                            return [b - 1];
                        }),
                        eq: oa(function (a, b, c) {
                            return [0 > c ? c + b : c];
                        }),
                        even: oa(function (a, b) {
                            for (var c = 0; b > c; c += 2) a.push(c);
                            return a;
                        }),
                        odd: oa(function (a, b) {
                            for (var c = 1; b > c; c += 2) a.push(c);
                            return a;
                        }),
                        lt: oa(function (a, b, c) {
                            for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                            return a;
                        }),
                        gt: oa(function (a, b, c) {
                            for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                            return a;
                        }),
                    },
                }),
            (d.pseudos.nth = d.pseudos.eq);
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
            d.pseudos[b] = ma(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
        function qa() {}
        (qa.prototype = d.filters = d.pseudos),
            (d.setFilters = new qa()),
            (g = ga.tokenize =
                function (a, b) {
                    var c,
                        e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k = z[a + ' '];
                    if (k) return b ? 0 : k.slice(0);
                    (h = a), (i = []), (j = d.preFilter);
                    while (h) {
                        (!c || (e = S.exec(h))) &&
                            (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
                            (c = !1),
                            (e = T.exec(h)) &&
                                ((c = e.shift()),
                                f.push({ value: c, type: e[0].replace(R, ' ') }),
                                (h = h.slice(c.length)));
                        for (g in d.filter)
                            !(e = X[g].exec(h)) ||
                                (j[g] && !(e = j[g](e))) ||
                                ((c = e.shift()),
                                f.push({ value: c, type: g, matches: e }),
                                (h = h.slice(c.length)));
                        if (!c) break;
                    }
                    return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
                });
        function ra(a) {
            for (var b = 0, c = a.length, d = ''; c > b; b++) d += a[b].value;
            return d;
        }
        function sa(a, b, c) {
            var d = b.dir,
                e = c && 'parentNode' === d,
                f = x++;
            return b.first
                ? function (b, c, f) {
                      while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
                  }
                : function (b, c, g) {
                      var h,
                          i,
                          j = [w, f];
                      if (g) {
                          while ((b = b[d])) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                      } else
                          while ((b = b[d]))
                              if (1 === b.nodeType || e) {
                                  if (
                                      ((i = b[u] || (b[u] = {})),
                                      (h = i[d]) && h[0] === w && h[1] === f)
                                  )
                                      return (j[2] = h[2]);
                                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                              }
                  };
        }
        function ta(a) {
            return a.length > 1
                ? function (b, c, d) {
                      var e = a.length;
                      while (e--) if (!a[e](b, c, d)) return !1;
                      return !0;
                  }
                : a[0];
        }
        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c;
        }
        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g;
        }
        function wa(a, b, c, d, e, f) {
            return (
                d && !d[u] && (d = wa(d)),
                e && !e[u] && (e = wa(e, f)),
                ia(function (f, g, h, i) {
                    var j,
                        k,
                        l,
                        m = [],
                        n = [],
                        o = g.length,
                        p = f || ua(b || '*', h.nodeType ? [h] : h, []),
                        q = !a || (!f && b) ? p : va(p, m, a, h, i),
                        r = c ? (e || (f ? a : o || d) ? [] : g) : q;
                    if ((c && c(q, r, h, i), d)) {
                        (j = va(r, n)), d(j, [], h, i), (k = j.length);
                        while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                (j = []), (k = r.length);
                                while (k--) (l = r[k]) && j.push((q[k] = l));
                                e(null, (r = []), j, i);
                            }
                            k = r.length;
                            while (k--)
                                (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                        }
                    } else (r = va(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
                })
            );
        }
        function xa(a) {
            for (
                var b,
                    c,
                    e,
                    f = a.length,
                    g = d.relative[a[0].type],
                    h = g || d.relative[' '],
                    i = g ? 1 : 0,
                    k = sa(
                        function (a) {
                            return a === b;
                        },
                        h,
                        !0
                    ),
                    l = sa(
                        function (a) {
                            return J(b, a) > -1;
                        },
                        h,
                        !0
                    ),
                    m = [
                        function (a, c, d) {
                            var e =
                                (!g && (d || c !== j)) ||
                                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                            return (b = null), e;
                        },
                    ];
                f > i;
                i++
            )
                if ((c = d.relative[a[i].type])) m = [sa(ta(m), c)];
                else {
                    if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
                        for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                        return wa(
                            i > 1 && ta(m),
                            i > 1 &&
                                ra(
                                    a
                                        .slice(0, i - 1)
                                        .concat({ value: ' ' === a[i - 2].type ? '*' : '' })
                                ).replace(R, '$1'),
                            c,
                            e > i && xa(a.slice(i, e)),
                            f > e && xa((a = a.slice(e))),
                            f > e && ra(a)
                        );
                    }
                    m.push(c);
                }
            return ta(m);
        }
        function ya(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l,
                        m,
                        o,
                        p = 0,
                        q = '0',
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || (e && d.find.TAG('*', k)),
                        v = (w += null == t ? 1 : Math.random() || 0.1),
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while ((o = a[m++]))
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break;
                                }
                            k && (w = v);
                        }
                        c && ((l = !o && l) && p--, f && r.push(l));
                    }
                    if (((p += q), c && q !== p)) {
                        m = 0;
                        while ((o = b[m++])) o(r, s, g, h);
                        if (f) {
                            if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
                            s = va(s);
                        }
                        H.apply(i, s),
                            k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
                    }
                    return k && ((w = v), (j = t)), r;
                };
            return c ? ia(f) : f;
        }
        return (
            (h = ga.compile =
                function (a, b) {
                    var c,
                        d = [],
                        e = [],
                        f = A[a + ' '];
                    if (!f) {
                        b || (b = g(a)), (c = b.length);
                        while (c--) (f = xa(b[c])), f[u] ? d.push(f) : e.push(f);
                        (f = A(a, ya(e, d))), (f.selector = a);
                    }
                    return f;
                }),
            (i = ga.select =
                function (a, b, e, f) {
                    var i,
                        j,
                        k,
                        l,
                        m,
                        n = 'function' == typeof a && a,
                        o = !f && g((a = n.selector || a));
                    if (((e = e || []), 1 === o.length)) {
                        if (
                            ((j = o[0] = o[0].slice(0)),
                            j.length > 2 &&
                                'ID' === (k = j[0]).type &&
                                c.getById &&
                                9 === b.nodeType &&
                                p &&
                                d.relative[j[1].type])
                        ) {
                            if (((b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0]), !b))
                                return e;
                            n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
                        }
                        i = X.needsContext.test(a) ? 0 : j.length;
                        while (i--) {
                            if (((k = j[i]), d.relative[(l = k.type)])) break;
                            if (
                                (m = d.find[l]) &&
                                (f = m(
                                    k.matches[0].replace(ca, da),
                                    (aa.test(j[0].type) && pa(b.parentNode)) || b
                                ))
                            ) {
                                if ((j.splice(i, 1), (a = f.length && ra(j)), !a))
                                    return H.apply(e, f), e;
                                break;
                            }
                        }
                    }
                    return (n || h(a, o))(f, b, !p, e, (aa.test(a) && pa(b.parentNode)) || b), e;
                }),
            (c.sortStable = u.split('').sort(B).join('') === u),
            (c.detectDuplicates = !!l),
            m(),
            (c.sortDetached = ja(function (a) {
                return 1 & a.compareDocumentPosition(n.createElement('div'));
            })),
            ja(function (a) {
                return (
                    (a.innerHTML = "<a href='#'></a>"), '#' === a.firstChild.getAttribute('href')
                );
            }) ||
                ka('type|href|height|width', function (a, b, c) {
                    return c ? void 0 : a.getAttribute(b, 'type' === b.toLowerCase() ? 1 : 2);
                }),
            (c.attributes &&
                ja(function (a) {
                    return (
                        (a.innerHTML = '<input/>'),
                        a.firstChild.setAttribute('value', ''),
                        '' === a.firstChild.getAttribute('value')
                    );
                })) ||
                ka('value', function (a, b, c) {
                    return c || 'input' !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
                }),
            ja(function (a) {
                return null == a.getAttribute('disabled');
            }) ||
                ka(K, function (a, b, c) {
                    var d;
                    return c
                        ? void 0
                        : a[b] === !0
                        ? b.toLowerCase()
                        : (d = a.getAttributeNode(b)) && d.specified
                        ? d.value
                        : null;
                }),
            ga
        );
    })(a);
    (n.find = t),
        (n.expr = t.selectors),
        (n.expr[':'] = n.expr.pseudos),
        (n.unique = t.uniqueSort),
        (n.text = t.getText),
        (n.isXMLDoc = t.isXML),
        (n.contains = t.contains);
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;
    function x(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c;
            });
        if (b.nodeType)
            return n.grep(a, function (a) {
                return (a === b) !== c;
            });
        if ('string' == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a);
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c;
        });
    }
    (n.filter = function (a, b, c) {
        var d = b[0];
        return (
            c && (a = ':not(' + a + ')'),
            1 === b.length && 1 === d.nodeType
                ? n.find.matchesSelector(d, a)
                    ? [d]
                    : []
                : n.find.matches(
                      a,
                      n.grep(b, function (a) {
                          return 1 === a.nodeType;
                      })
                  )
        );
    }),
        n.fn.extend({
            find: function (a) {
                var b,
                    c = this.length,
                    d = [],
                    e = this;
                if ('string' != typeof a)
                    return this.pushStack(
                        n(a).filter(function () {
                            for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
                        })
                    );
                for (b = 0; c > b; b++) n.find(a, e[b], d);
                return (
                    (d = this.pushStack(c > 1 ? n.unique(d) : d)),
                    (d.selector = this.selector ? this.selector + ' ' + a : a),
                    d
                );
            },
            filter: function (a) {
                return this.pushStack(x(this, a || [], !1));
            },
            not: function (a) {
                return this.pushStack(x(this, a || [], !0));
            },
            is: function (a) {
                return !!x(this, 'string' == typeof a && u.test(a) ? n(a) : a || [], !1).length;
            },
        });
    var y,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = (n.fn.init = function (a, b) {
            var c, d;
            if (!a) return this;
            if ('string' == typeof a) {
                if (
                    ((c =
                        '<' === a[0] && '>' === a[a.length - 1] && a.length >= 3
                            ? [null, a, null]
                            : z.exec(a)),
                    !c || (!c[1] && b))
                )
                    return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (
                        ((b = b instanceof n ? b[0] : b),
                        n.merge(
                            this,
                            n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)
                        ),
                        v.test(c[1]) && n.isPlainObject(b))
                    )
                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this;
                }
                return (
                    (d = l.getElementById(c[2])),
                    d && d.parentNode && ((this.length = 1), (this[0] = d)),
                    (this.context = l),
                    (this.selector = a),
                    this
                );
            }
            return a.nodeType
                ? ((this.context = this[0] = a), (this.length = 1), this)
                : n.isFunction(a)
                ? 'undefined' != typeof y.ready
                    ? y.ready(a)
                    : a(n)
                : (void 0 !== a.selector &&
                      ((this.selector = a.selector), (this.context = a.context)),
                  n.makeArray(a, this));
        });
    (A.prototype = n.fn), (y = n(l));
    var B = /^(?:parents|prev(?:Until|All))/,
        C = { children: !0, contents: !0, next: !0, prev: !0 };
    n.extend({
        dir: function (a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a);
                }
            return d;
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        },
    }),
        n.fn.extend({
            has: function (a) {
                var b = n(a, this),
                    c = b.length;
                return this.filter(function () {
                    for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
                });
            },
            closest: function (a, b) {
                for (
                    var c,
                        d = 0,
                        e = this.length,
                        f = [],
                        g = u.test(a) || 'string' != typeof a ? n(a, b || this.context) : 0;
                    e > d;
                    d++
                )
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (
                            c.nodeType < 11 &&
                            (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))
                        ) {
                            f.push(c);
                            break;
                        }
                return this.pushStack(f.length > 1 ? n.unique(f) : f);
            },
            index: function (a) {
                return a
                    ? 'string' == typeof a
                        ? g.call(n(a), this[0])
                        : g.call(this, a.jquery ? a[0] : a)
                    : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
            },
            add: function (a, b) {
                return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
            },
            addBack: function (a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
            },
        });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a;
    }
    n.each(
        {
            parent: function (a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null;
            },
            parents: function (a) {
                return n.dir(a, 'parentNode');
            },
            parentsUntil: function (a, b, c) {
                return n.dir(a, 'parentNode', c);
            },
            next: function (a) {
                return D(a, 'nextSibling');
            },
            prev: function (a) {
                return D(a, 'previousSibling');
            },
            nextAll: function (a) {
                return n.dir(a, 'nextSibling');
            },
            prevAll: function (a) {
                return n.dir(a, 'previousSibling');
            },
            nextUntil: function (a, b, c) {
                return n.dir(a, 'nextSibling', c);
            },
            prevUntil: function (a, b, c) {
                return n.dir(a, 'previousSibling', c);
            },
            siblings: function (a) {
                return n.sibling((a.parentNode || {}).firstChild, a);
            },
            children: function (a) {
                return n.sibling(a.firstChild);
            },
            contents: function (a) {
                return a.contentDocument || n.merge([], a.childNodes);
            },
        },
        function (a, b) {
            n.fn[a] = function (c, d) {
                var e = n.map(this, b, c);
                return (
                    'Until' !== a.slice(-5) && (d = c),
                    d && 'string' == typeof d && (e = n.filter(d, e)),
                    this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()),
                    this.pushStack(e)
                );
            };
        }
    );
    var E = /\S+/g,
        F = {};
    function G(a) {
        var b = (F[a] = {});
        return (
            n.each(a.match(E) || [], function (a, c) {
                b[c] = !0;
            }),
            b
        );
    }
    (n.Callbacks = function (a) {
        a = 'string' == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b,
            c,
            d,
            e,
            f,
            g,
            h = [],
            i = !a.once && [],
            j = function (l) {
                for (
                    b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0;
                    h && f > g;
                    g++
                )
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break;
                    }
                (d = !1), h && (i ? i.length && j(i.shift()) : b ? (h = []) : k.disable());
            },
            k = {
                add: function () {
                    if (h) {
                        var c = h.length;
                        !(function g(b) {
                            n.each(b, function (b, c) {
                                var d = n.type(c);
                                'function' === d
                                    ? (a.unique && k.has(c)) || h.push(c)
                                    : c && c.length && 'string' !== d && g(c);
                            });
                        })(arguments),
                            d ? (f = h.length) : b && ((e = c), j(b));
                    }
                    return this;
                },
                remove: function () {
                    return (
                        h &&
                            n.each(arguments, function (a, b) {
                                var c;
                                while ((c = n.inArray(b, h, c)) > -1)
                                    h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
                            }),
                        this
                    );
                },
                has: function (a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
                },
                empty: function () {
                    return (h = []), (f = 0), this;
                },
                disable: function () {
                    return (h = i = b = void 0), this;
                },
                disabled: function () {
                    return !h;
                },
                lock: function () {
                    return (i = void 0), b || k.disable(), this;
                },
                locked: function () {
                    return !i;
                },
                fireWith: function (a, b) {
                    return (
                        !h ||
                            (c && !i) ||
                            ((b = b || []),
                            (b = [a, b.slice ? b.slice() : b]),
                            d ? i.push(b) : j(b)),
                        this
                    );
                },
                fire: function () {
                    return k.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!c;
                },
            };
        return k;
    }),
        n.extend({
            Deferred: function (a) {
                var b = [
                        ['resolve', 'done', n.Callbacks('once memory'), 'resolved'],
                        ['reject', 'fail', n.Callbacks('once memory'), 'rejected'],
                        ['notify', 'progress', n.Callbacks('memory')],
                    ],
                    c = 'pending',
                    d = {
                        state: function () {
                            return c;
                        },
                        always: function () {
                            return e.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var a = arguments;
                            return n
                                .Deferred(function (c) {
                                    n.each(b, function (b, f) {
                                        var g = n.isFunction(a[b]) && a[b];
                                        e[f[1]](function () {
                                            var a = g && g.apply(this, arguments);
                                            a && n.isFunction(a.promise)
                                                ? a
                                                      .promise()
                                                      .done(c.resolve)
                                                      .fail(c.reject)
                                                      .progress(c.notify)
                                                : c[f[0] + 'With'](
                                                      this === d ? c.promise() : this,
                                                      g ? [a] : arguments
                                                  );
                                        });
                                    }),
                                        (a = null);
                                })
                                .promise();
                        },
                        promise: function (a) {
                            return null != a ? n.extend(a, d) : d;
                        },
                    },
                    e = {};
                return (
                    (d.pipe = d.then),
                    n.each(b, function (a, f) {
                        var g = f[2],
                            h = f[3];
                        (d[f[1]] = g.add),
                            h &&
                                g.add(
                                    function () {
                                        c = h;
                                    },
                                    b[1 ^ a][2].disable,
                                    b[2][2].lock
                                ),
                            (e[f[0]] = function () {
                                return e[f[0] + 'With'](this === e ? d : this, arguments), this;
                            }),
                            (e[f[0] + 'With'] = g.fireWith);
                    }),
                    d.promise(e),
                    a && a.call(e, e),
                    e
                );
            },
            when: function (a) {
                var b = 0,
                    c = d.call(arguments),
                    e = c.length,
                    f = 1 !== e || (a && n.isFunction(a.promise)) ? e : 0,
                    g = 1 === f ? a : n.Deferred(),
                    h = function (a, b, c) {
                        return function (e) {
                            (b[a] = this),
                                (c[a] = arguments.length > 1 ? d.call(arguments) : e),
                                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                        };
                    },
                    i,
                    j,
                    k;
                if (e > 1)
                    for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
                        c[b] && n.isFunction(c[b].promise)
                            ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i))
                            : --f;
                return f || g.resolveWith(k, c), g.promise();
            },
        });
    var H;
    (n.fn.ready = function (a) {
        return n.ready.promise().done(a), this;
    }),
        n.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (a) {
                a ? n.readyWait++ : n.ready(!0);
            },
            ready: function (a) {
                (a === !0 ? --n.readyWait : n.isReady) ||
                    ((n.isReady = !0),
                    (a !== !0 && --n.readyWait > 0) ||
                        (H.resolveWith(l, [n]),
                        n.fn.triggerHandler && (n(l).triggerHandler('ready'), n(l).off('ready'))));
            },
        });
    function I() {
        l.removeEventListener('DOMContentLoaded', I, !1),
            a.removeEventListener('load', I, !1),
            n.ready();
    }
    (n.ready.promise = function (b) {
        return (
            H ||
                ((H = n.Deferred()),
                'complete' === l.readyState
                    ? setTimeout(n.ready)
                    : (l.addEventListener('DOMContentLoaded', I, !1),
                      a.addEventListener('load', I, !1))),
            H.promise(b)
        );
    }),
        n.ready.promise();
    var J = (n.access = function (a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ('object' === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g);
        } else if (
            void 0 !== d &&
            ((e = !0),
            n.isFunction(d) || (g = !0),
            j &&
                (g
                    ? (b.call(a, d), (b = null))
                    : ((j = b),
                      (b = function (a, b, c) {
                          return j.call(n(a), c);
                      }))),
            b)
        )
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    });
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    function K() {
        Object.defineProperty((this.cache = {}), 0, {
            get: function () {
                return {};
            },
        }),
            (this.expando = n.expando + K.uid++);
    }
    (K.uid = 1),
        (K.accepts = n.acceptData),
        (K.prototype = {
            key: function (a) {
                if (!K.accepts(a)) return 0;
                var b = {},
                    c = a[this.expando];
                if (!c) {
                    c = K.uid++;
                    try {
                        (b[this.expando] = { value: c }), Object.defineProperties(a, b);
                    } catch (d) {
                        (b[this.expando] = c), n.extend(a, b);
                    }
                }
                return this.cache[c] || (this.cache[c] = {}), c;
            },
            set: function (a, b, c) {
                var d,
                    e = this.key(a),
                    f = this.cache[e];
                if ('string' == typeof b) f[b] = c;
                else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
                else for (d in b) f[d] = b[d];
                return f;
            },
            get: function (a, b) {
                var c = this.cache[this.key(a)];
                return void 0 === b ? c : c[b];
            },
            access: function (a, b, c) {
                var d;
                return void 0 === b || (b && 'string' == typeof b && void 0 === c)
                    ? ((d = this.get(a, b)), void 0 !== d ? d : this.get(a, n.camelCase(b)))
                    : (this.set(a, b, c), void 0 !== c ? c : b);
            },
            remove: function (a, b) {
                var c,
                    d,
                    e,
                    f = this.key(a),
                    g = this.cache[f];
                if (void 0 === b) this.cache[f] = {};
                else {
                    n.isArray(b)
                        ? (d = b.concat(b.map(n.camelCase)))
                        : ((e = n.camelCase(b)),
                          b in g ? (d = [b, e]) : ((d = e), (d = d in g ? [d] : d.match(E) || []))),
                        (c = d.length);
                    while (c--) delete g[d[c]];
                }
            },
            hasData: function (a) {
                return !n.isEmptyObject(this.cache[a[this.expando]] || {});
            },
            discard: function (a) {
                a[this.expando] && delete this.cache[a[this.expando]];
            },
        });
    var L = new K(),
        M = new K(),
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;
    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (
                ((d = 'data-' + b.replace(O, '-$1').toLowerCase()),
                (c = a.getAttribute(d)),
                'string' == typeof c)
            ) {
                try {
                    c =
                        'true' === c
                            ? !0
                            : 'false' === c
                            ? !1
                            : 'null' === c
                            ? null
                            : +c + '' === c
                            ? +c
                            : N.test(c)
                            ? n.parseJSON(c)
                            : c;
                } catch (e) {}
                M.set(a, b, c);
            } else c = void 0;
        return c;
    }
    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a);
        },
        data: function (a, b, c) {
            return M.access(a, b, c);
        },
        removeData: function (a, b) {
            M.remove(a, b);
        },
        _data: function (a, b, c) {
            return L.access(a, b, c);
        },
        _removeData: function (a, b) {
            L.remove(a, b);
        },
    }),
        n.fn.extend({
            data: function (a, b) {
                var c,
                    d,
                    e,
                    f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (
                        this.length &&
                        ((e = M.get(f)), 1 === f.nodeType && !L.get(f, 'hasDataAttrs'))
                    ) {
                        c = g.length;
                        while (c--)
                            g[c] &&
                                ((d = g[c].name),
                                0 === d.indexOf('data-') &&
                                    ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
                        L.set(f, 'hasDataAttrs', !0);
                    }
                    return e;
                }
                return 'object' == typeof a
                    ? this.each(function () {
                          M.set(this, a);
                      })
                    : J(
                          this,
                          function (b) {
                              var c,
                                  d = n.camelCase(a);
                              if (f && void 0 === b) {
                                  if (((c = M.get(f, a)), void 0 !== c)) return c;
                                  if (((c = M.get(f, d)), void 0 !== c)) return c;
                                  if (((c = P(f, d, void 0)), void 0 !== c)) return c;
                              } else
                                  this.each(function () {
                                      var c = M.get(this, d);
                                      M.set(this, d, b),
                                          -1 !== a.indexOf('-') &&
                                              void 0 !== c &&
                                              M.set(this, a, b);
                                  });
                          },
                          null,
                          b,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (a) {
                return this.each(function () {
                    M.remove(this, a);
                });
            },
        }),
        n.extend({
            queue: function (a, b, c) {
                var d;
                return a
                    ? ((b = (b || 'fx') + 'queue'),
                      (d = L.get(a, b)),
                      c && (!d || n.isArray(c) ? (d = L.access(a, b, n.makeArray(c))) : d.push(c)),
                      d || [])
                    : void 0;
            },
            dequeue: function (a, b) {
                b = b || 'fx';
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function () {
                        n.dequeue(a, b);
                    };
                'inprogress' === e && ((e = c.shift()), d--),
                    e && ('fx' === b && c.unshift('inprogress'), delete f.stop, e.call(a, g, f)),
                    !d && f && f.empty.fire();
            },
            _queueHooks: function (a, b) {
                var c = b + 'queueHooks';
                return (
                    L.get(a, c) ||
                    L.access(a, c, {
                        empty: n.Callbacks('once memory').add(function () {
                            L.remove(a, [b + 'queue', c]);
                        }),
                    })
                );
            },
        }),
        n.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return (
                    'string' != typeof a && ((b = a), (a = 'fx'), c--),
                    arguments.length < c
                        ? n.queue(this[0], a)
                        : void 0 === b
                        ? this
                        : this.each(function () {
                              var c = n.queue(this, a, b);
                              n._queueHooks(this, a),
                                  'fx' === a && 'inprogress' !== c[0] && n.dequeue(this, a);
                          })
                );
            },
            dequeue: function (a) {
                return this.each(function () {
                    n.dequeue(this, a);
                });
            },
            clearQueue: function (a) {
                return this.queue(a || 'fx', []);
            },
            promise: function (a, b) {
                var c,
                    d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function () {
                        --d || e.resolveWith(f, [f]);
                    };
                'string' != typeof a && ((b = a), (a = void 0)), (a = a || 'fx');
                while (g--)
                    (c = L.get(f[g], a + 'queueHooks')), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b);
            },
        });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ['Top', 'Right', 'Bottom', 'Left'],
        S = function (a, b) {
            return (a = b || a), 'none' === n.css(a, 'display') || !n.contains(a.ownerDocument, a);
        },
        T = /^(?:checkbox|radio)$/i;
    !(function () {
        var a = l.createDocumentFragment(),
            b = a.appendChild(l.createElement('div')),
            c = l.createElement('input');
        c.setAttribute('type', 'radio'),
            c.setAttribute('checked', 'checked'),
            c.setAttribute('name', 't'),
            b.appendChild(c),
            (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (b.innerHTML = '<textarea>x</textarea>'),
            (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
    })();
    var U = 'undefined';
    k.focusinBubbles = 'onfocusin' in a;
    var V = /^key/,
        W = /^(?:mouse|pointer|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
        return !0;
    }
    function $() {
        return !1;
    }
    function _() {
        try {
            return l.activeElement;
        } catch (a) {}
    }
    (n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                o,
                p,
                q,
                r = L.get(a);
            if (r) {
                c.handler && ((f = c), (c = f.handler), (e = f.selector)),
                    c.guid || (c.guid = n.guid++),
                    (i = r.events) || (i = r.events = {}),
                    (g = r.handle) ||
                        (g = r.handle =
                            function (b) {
                                return typeof n !== U && n.event.triggered !== b.type
                                    ? n.event.dispatch.apply(a, arguments)
                                    : void 0;
                            }),
                    (b = (b || '').match(E) || ['']),
                    (j = b.length);
                while (j--)
                    (h = Y.exec(b[j]) || []),
                        (o = q = h[1]),
                        (p = (h[2] || '').split('.').sort()),
                        o &&
                            ((l = n.event.special[o] || {}),
                            (o = (e ? l.delegateType : l.bindType) || o),
                            (l = n.event.special[o] || {}),
                            (k = n.extend(
                                {
                                    type: o,
                                    origType: q,
                                    data: d,
                                    handler: c,
                                    guid: c.guid,
                                    selector: e,
                                    needsContext: e && n.expr.match.needsContext.test(e),
                                    namespace: p.join('.'),
                                },
                                f
                            )),
                            (m = i[o]) ||
                                ((m = i[o] = []),
                                (m.delegateCount = 0),
                                (l.setup && l.setup.call(a, d, p, g) !== !1) ||
                                    (a.addEventListener && a.addEventListener(o, g, !1))),
                            l.add &&
                                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
                            e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                            (n.event.global[o] = !0));
            }
        },
        remove: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                o,
                p,
                q,
                r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                (b = (b || '').match(E) || ['']), (j = b.length);
                while (j--)
                    if (
                        ((h = Y.exec(b[j]) || []),
                        (o = q = h[1]),
                        (p = (h[2] || '').split('.').sort()),
                        o)
                    ) {
                        (l = n.event.special[o] || {}),
                            (o = (d ? l.delegateType : l.bindType) || o),
                            (m = i[o] || []),
                            (h =
                                h[2] &&
                                new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)')),
                            (g = f = m.length);
                        while (f--)
                            (k = m[f]),
                                (!e && q !== k.origType) ||
                                    (c && c.guid !== k.guid) ||
                                    (h && !h.test(k.namespace)) ||
                                    (d && d !== k.selector && ('**' !== d || !k.selector)) ||
                                    (m.splice(f, 1),
                                    k.selector && m.delegateCount--,
                                    l.remove && l.remove.call(a, k));
                        g &&
                            !m.length &&
                            ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                                n.removeEvent(a, o, r.handle),
                            delete i[o]);
                    } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, 'events'));
            }
        },
        trigger: function (b, c, d, e) {
            var f,
                g,
                h,
                i,
                k,
                m,
                o,
                p = [d || l],
                q = j.call(b, 'type') ? b.type : b,
                r = j.call(b, 'namespace') ? b.namespace.split('.') : [];
            if (
                ((g = h = d = d || l),
                3 !== d.nodeType &&
                    8 !== d.nodeType &&
                    !X.test(q + n.event.triggered) &&
                    (q.indexOf('.') >= 0 && ((r = q.split('.')), (q = r.shift()), r.sort()),
                    (k = q.indexOf(':') < 0 && 'on' + q),
                    (b = b[n.expando] ? b : new n.Event(q, 'object' == typeof b && b)),
                    (b.isTrigger = e ? 2 : 3),
                    (b.namespace = r.join('.')),
                    (b.namespace_re = b.namespace
                        ? new RegExp('(^|\\.)' + r.join('\\.(?:.*\\.|)') + '(\\.|$)')
                        : null),
                    (b.result = void 0),
                    b.target || (b.target = d),
                    (c = null == c ? [b] : n.makeArray(c, [b])),
                    (o = n.event.special[q] || {}),
                    e || !o.trigger || o.trigger.apply(d, c) !== !1))
            ) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (
                        i = o.delegateType || q, X.test(i + q) || (g = g.parentNode);
                        g;
                        g = g.parentNode
                    )
                        p.push(g), (h = g);
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped())
                    (b.type = f > 1 ? i : o.bindType || q),
                        (m = (L.get(g, 'events') || {})[b.type] && L.get(g, 'handle')),
                        m && m.apply(g, c),
                        (m = k && g[k]),
                        m &&
                            m.apply &&
                            n.acceptData(g) &&
                            ((b.result = m.apply(g, c)), b.result === !1 && b.preventDefault());
                return (
                    (b.type = q),
                    e ||
                        b.isDefaultPrevented() ||
                        (o._default && o._default.apply(p.pop(), c) !== !1) ||
                        !n.acceptData(d) ||
                        (k &&
                            n.isFunction(d[q]) &&
                            !n.isWindow(d) &&
                            ((h = d[k]),
                            h && (d[k] = null),
                            (n.event.triggered = q),
                            d[q](),
                            (n.event.triggered = void 0),
                            h && (d[k] = h))),
                    b.result
                );
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b,
                c,
                e,
                f,
                g,
                h = [],
                i = d.call(arguments),
                j = (L.get(this, 'events') || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (
                ((i[0] = a),
                (a.delegateTarget = this),
                !k.preDispatch || k.preDispatch.call(this, a) !== !1)
            ) {
                (h = n.event.handlers.call(this, a, j)), (b = 0);
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    (a.currentTarget = f.elem), (c = 0);
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(g.namespace)) &&
                            ((a.handleObj = g),
                            (a.data = g.data),
                            (e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(
                                f.elem,
                                i
                            )),
                            void 0 !== e &&
                                (a.result = e) === !1 &&
                                (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (a, b) {
            var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || 'click' !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || 'click' !== a.type) {
                        for (d = [], c = 0; h > c; c++)
                            (f = b[c]),
                                (e = f.selector + ' '),
                                void 0 === d[e] &&
                                    (d[e] = f.needsContext
                                        ? n(e, this).index(i) >= 0
                                        : n.find(e, this, null, [i]).length),
                                d[e] && d.push(f);
                        d.length && g.push({ elem: i, handlers: d });
                    }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
        },
        props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
            ' '
        ),
        fixHooks: {},
        keyHooks: {
            props: 'char charCode key keyCode'.split(' '),
            filter: function (a, b) {
                return (
                    null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                );
            },
        },
        mouseHooks: {
            props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(
                ' '
            ),
            filter: function (a, b) {
                var c,
                    d,
                    e,
                    f = b.button;
                return (
                    null == a.pageX &&
                        null != b.clientX &&
                        ((c = a.target.ownerDocument || l),
                        (d = c.documentElement),
                        (e = c.body),
                        (a.pageX =
                            b.clientX +
                            ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
                            ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
                        (a.pageY =
                            b.clientY +
                            ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
                            ((d && d.clientTop) || (e && e.clientTop) || 0))),
                    a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                    a
                );
            },
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b,
                c,
                d,
                e = a.type,
                f = a,
                g = this.fixHooks[e];
            g ||
                (this.fixHooks[e] = g =
                    W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}),
                (d = g.props ? this.props.concat(g.props) : this.props),
                (a = new n.Event(f)),
                (b = d.length);
            while (b--) (c = d[b]), (a[c] = f[c]);
            return (
                a.target || (a.target = l),
                3 === a.target.nodeType && (a.target = a.target.parentNode),
                g.filter ? g.filter(a, f) : a
            );
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: 'focusin',
            },
            blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: 'focusout',
            },
            click: {
                trigger: function () {
                    return 'checkbox' === this.type && this.click && n.nodeName(this, 'input')
                        ? (this.click(), !1)
                        : void 0;
                },
                _default: function (a) {
                    return n.nodeName(a.target, 'a');
                },
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result &&
                        a.originalEvent &&
                        (a.originalEvent.returnValue = a.result);
                },
            },
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e),
                e.isDefaultPrevented() && c.preventDefault();
        },
    }),
        (n.removeEvent = function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1);
        }),
        (n.Event = function (a, b) {
            return this instanceof n.Event
                ? (a && a.type
                      ? ((this.originalEvent = a),
                        (this.type = a.type),
                        (this.isDefaultPrevented =
                            a.defaultPrevented ||
                            (void 0 === a.defaultPrevented && a.returnValue === !1)
                                ? Z
                                : $))
                      : (this.type = a),
                  b && n.extend(this, b),
                  (this.timeStamp = (a && a.timeStamp) || n.now()),
                  void (this[n.expando] = !0))
                : new n.Event(a, b);
        }),
        (n.Event.prototype = {
            isDefaultPrevented: $,
            isPropagationStopped: $,
            isImmediatePropagationStopped: $,
            preventDefault: function () {
                var a = this.originalEvent;
                (this.isDefaultPrevented = Z), a && a.preventDefault && a.preventDefault();
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                (this.isPropagationStopped = Z), a && a.stopPropagation && a.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var a = this.originalEvent;
                (this.isImmediatePropagationStopped = Z),
                    a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        n.each(
            {
                mouseenter: 'mouseover',
                mouseleave: 'mouseout',
                pointerenter: 'pointerover',
                pointerleave: 'pointerout',
            },
            function (a, b) {
                n.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function (a) {
                        var c,
                            d = this,
                            e = a.relatedTarget,
                            f = a.handleObj;
                        return (
                            (!e || (e !== d && !n.contains(d, e))) &&
                                ((a.type = f.origType),
                                (c = f.handler.apply(this, arguments)),
                                (a.type = b)),
                            c
                        );
                    },
                };
            }
        ),
        k.focusinBubbles ||
            n.each({ focus: 'focusin', blur: 'focusout' }, function (a, b) {
                var c = function (a) {
                    n.event.simulate(b, a.target, n.event.fix(a), !0);
                };
                n.event.special[b] = {
                    setup: function () {
                        var d = this.ownerDocument || this,
                            e = L.access(d, b);
                        e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
                    },
                    teardown: function () {
                        var d = this.ownerDocument || this,
                            e = L.access(d, b) - 1;
                        e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
                    },
                };
            }),
        n.fn.extend({
            on: function (a, b, c, d, e) {
                var f, g;
                if ('object' == typeof a) {
                    'string' != typeof b && ((c = c || b), (b = void 0));
                    for (g in a) this.on(g, b, c, a[g], e);
                    return this;
                }
                if (
                    (null == c && null == d
                        ? ((d = b), (c = b = void 0))
                        : null == d &&
                          ('string' == typeof b
                              ? ((d = c), (c = void 0))
                              : ((d = c), (c = b), (b = void 0))),
                    d === !1)
                )
                    d = $;
                else if (!d) return this;
                return (
                    1 === e &&
                        ((f = d),
                        (d = function (a) {
                            return n().off(a), f.apply(this, arguments);
                        }),
                        (d.guid = f.guid || (f.guid = n.guid++))),
                    this.each(function () {
                        n.event.add(this, a, d, c, b);
                    })
                );
            },
            one: function (a, b, c, d) {
                return this.on(a, b, c, d, 1);
            },
            off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)
                    return (
                        (d = a.handleObj),
                        n(a.delegateTarget).off(
                            d.namespace ? d.origType + '.' + d.namespace : d.origType,
                            d.selector,
                            d.handler
                        ),
                        this
                    );
                if ('object' == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this;
                }
                return (
                    (b === !1 || 'function' == typeof b) && ((c = b), (b = void 0)),
                    c === !1 && (c = $),
                    this.each(function () {
                        n.event.remove(this, a, c, b);
                    })
                );
            },
            trigger: function (a, b) {
                return this.each(function () {
                    n.event.trigger(a, b, this);
                });
            },
            triggerHandler: function (a, b) {
                var c = this[0];
                return c ? n.event.trigger(a, b, c, !0) : void 0;
            },
        });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ba = /<([\w:]+)/,
        ca = /<|&#?\w+;/,
        da = /<(?:script|style|link)/i,
        ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fa = /^$|\/(?:java|ecma)script/i,
        ga = /^true\/(.*)/,
        ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ia = {
            option: [1, "<select multiple='multiple'>", '</select>'],
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: [0, '', ''],
        };
    (ia.optgroup = ia.option),
        (ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead),
        (ia.th = ia.td);
    function ja(a, b) {
        return n.nodeName(a, 'table') && n.nodeName(11 !== b.nodeType ? b : b.firstChild, 'tr')
            ? a.getElementsByTagName('tbody')[0] ||
                  a.appendChild(a.ownerDocument.createElement('tbody'))
            : a;
    }
    function ka(a) {
        return (a.type = (null !== a.getAttribute('type')) + '/' + a.type), a;
    }
    function la(a) {
        var b = ga.exec(a.type);
        return b ? (a.type = b[1]) : a.removeAttribute('type'), a;
    }
    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            L.set(a[c], 'globalEval', !b || L.get(b[c], 'globalEval'));
    }
    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && ((f = L.access(a)), (g = L.set(b, f)), (j = f.events))) {
                delete g.handle, (g.events = {});
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
            }
            M.hasData(a) && ((h = M.access(a)), (i = n.extend({}, h)), M.set(b, i));
        }
    }
    function oa(a, b) {
        var c = a.getElementsByTagName
            ? a.getElementsByTagName(b || '*')
            : a.querySelectorAll
            ? a.querySelectorAll(b || '*')
            : [];
        return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
    }
    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        'input' === c && T.test(a.type)
            ? (b.checked = a.checked)
            : ('input' === c || 'textarea' === c) && (b.defaultValue = a.defaultValue);
    }
    n.extend({
        clone: function (a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || (1 !== a.nodeType && 11 !== a.nodeType) || n.isXMLDoc(a)))
                for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++)
                        na(f[d], g[d]);
                else na(a, h);
            return (g = oa(h, 'script')), g.length > 0 && ma(g, !i && oa(a, 'script')), h;
        },
        buildFragment: function (a, b, c, d) {
            for (
                var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length;
                o > m;
                m++
            )
                if (((e = a[m]), e || 0 === e))
                    if ('object' === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
                    else if (ca.test(e)) {
                        (f = f || k.appendChild(b.createElement('div'))),
                            (g = (ba.exec(e) || ['', ''])[1].toLowerCase()),
                            (h = ia[g] || ia._default),
                            (f.innerHTML = h[1] + e.replace(aa, '<$1></$2>') + h[2]),
                            (j = h[0]);
                        while (j--) f = f.lastChild;
                        n.merge(l, f.childNodes), (f = k.firstChild), (f.textContent = '');
                    } else l.push(b.createTextNode(e));
            (k.textContent = ''), (m = 0);
            while ((e = l[m++]))
                if (
                    (!d || -1 === n.inArray(e, d)) &&
                    ((i = n.contains(e.ownerDocument, e)),
                    (f = oa(k.appendChild(e), 'script')),
                    i && ma(f),
                    c)
                ) {
                    j = 0;
                    while ((e = f[j++])) fa.test(e.type || '') && c.push(e);
                }
            return k;
        },
        cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && ((e = c[L.expando]), e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events)
                            f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e];
                }
                delete M.cache[c[M.expando]];
            }
        },
    }),
        n.fn.extend({
            text: function (a) {
                return J(
                    this,
                    function (a) {
                        return void 0 === a
                            ? n.text(this)
                            : this.empty().each(function () {
                                  (1 === this.nodeType ||
                                      11 === this.nodeType ||
                                      9 === this.nodeType) &&
                                      (this.textContent = a);
                              });
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            append: function () {
                return this.domManip(arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = ja(this, a);
                        b.appendChild(a);
                    }
                });
            },
            prepend: function () {
                return this.domManip(arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = ja(this, a);
                        b.insertBefore(a, b.firstChild);
                    }
                });
            },
            before: function () {
                return this.domManip(arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this);
                });
            },
            after: function () {
                return this.domManip(arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
                });
            },
            remove: function (a, b) {
                for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                    b || 1 !== c.nodeType || n.cleanData(oa(c)),
                        c.parentNode &&
                            (b && n.contains(c.ownerDocument, c) && ma(oa(c, 'script')),
                            c.parentNode.removeChild(c));
                return this;
            },
            empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++)
                    1 === a.nodeType && (n.cleanData(oa(a, !1)), (a.textContent = ''));
                return this;
            },
            clone: function (a, b) {
                return (
                    (a = null == a ? !1 : a),
                    (b = null == b ? a : b),
                    this.map(function () {
                        return n.clone(this, a, b);
                    })
                );
            },
            html: function (a) {
                return J(
                    this,
                    function (a) {
                        var b = this[0] || {},
                            c = 0,
                            d = this.length;
                        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                        if (
                            'string' == typeof a &&
                            !da.test(a) &&
                            !ia[(ba.exec(a) || ['', ''])[1].toLowerCase()]
                        ) {
                            a = a.replace(aa, '<$1></$2>');
                            try {
                                for (; d > c; c++)
                                    (b = this[c] || {}),
                                        1 === b.nodeType &&
                                            (n.cleanData(oa(b, !1)), (b.innerHTML = a));
                                b = 0;
                            } catch (e) {}
                        }
                        b && this.empty().append(a);
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            replaceWith: function () {
                var a = arguments[0];
                return (
                    this.domManip(arguments, function (b) {
                        (a = this.parentNode), n.cleanData(oa(this)), a && a.replaceChild(b, this);
                    }),
                    a && (a.length || a.nodeType) ? this : this.remove()
                );
            },
            detach: function (a) {
                return this.remove(a, !0);
            },
            domManip: function (a, b) {
                a = e.apply([], a);
                var c,
                    d,
                    f,
                    g,
                    h,
                    i,
                    j = 0,
                    l = this.length,
                    m = this,
                    o = l - 1,
                    p = a[0],
                    q = n.isFunction(p);
                if (q || (l > 1 && 'string' == typeof p && !k.checkClone && ea.test(p)))
                    return this.each(function (c) {
                        var d = m.eq(c);
                        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
                    });
                if (
                    l &&
                    ((c = n.buildFragment(a, this[0].ownerDocument, !1, this)),
                    (d = c.firstChild),
                    1 === c.childNodes.length && (c = d),
                    d)
                ) {
                    for (f = n.map(oa(c, 'script'), ka), g = f.length; l > j; j++)
                        (h = c),
                            j !== o && ((h = n.clone(h, !0, !0)), g && n.merge(f, oa(h, 'script'))),
                            b.call(this[j], h, j);
                    if (g)
                        for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++)
                            (h = f[j]),
                                fa.test(h.type || '') &&
                                    !L.access(h, 'globalEval') &&
                                    n.contains(i, h) &&
                                    (h.src
                                        ? n._evalUrl && n._evalUrl(h.src)
                                        : n.globalEval(h.textContent.replace(ha, '')));
                }
                return this;
            },
        }),
        n.each(
            {
                appendTo: 'append',
                prependTo: 'prepend',
                insertBefore: 'before',
                insertAfter: 'after',
                replaceAll: 'replaceWith',
            },
            function (a, b) {
                n.fn[a] = function (a) {
                    for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
                        (c = h === g ? this : this.clone(!0)), n(e[h])[b](c), f.apply(d, c.get());
                    return this.pushStack(d);
                };
            }
        );
    var qa,
        ra = {};
    function sa(b, c) {
        var d,
            e = n(c.createElement(b)).appendTo(c.body),
            f =
                a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
                    ? d.display
                    : n.css(e[0], 'display');
        return e.detach(), f;
    }
    function ta(a) {
        var b = l,
            c = ra[a];
        return (
            c ||
                ((c = sa(a, b)),
                ('none' !== c && c) ||
                    ((qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(
                        b.documentElement
                    )),
                    (b = qa[0].contentDocument),
                    b.write(),
                    b.close(),
                    (c = sa(a, b)),
                    qa.detach()),
                (ra[a] = c)),
            c
        );
    }
    var ua = /^margin/,
        va = new RegExp('^(' + Q + ')(?!px)[a-z%]+$', 'i'),
        wa = function (b) {
            return b.ownerDocument.defaultView.opener
                ? b.ownerDocument.defaultView.getComputedStyle(b, null)
                : a.getComputedStyle(b, null);
        };
    function xa(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;
        return (
            (c = c || wa(a)),
            c && (g = c.getPropertyValue(b) || c[b]),
            c &&
                ('' !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
                va.test(g) &&
                    ua.test(b) &&
                    ((d = h.width),
                    (e = h.minWidth),
                    (f = h.maxWidth),
                    (h.minWidth = h.maxWidth = h.width = g),
                    (g = c.width),
                    (h.width = d),
                    (h.minWidth = e),
                    (h.maxWidth = f))),
            void 0 !== g ? g + '' : g
        );
    }
    function ya(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            },
        };
    }
    !(function () {
        var b,
            c,
            d = l.documentElement,
            e = l.createElement('div'),
            f = l.createElement('div');
        if (f.style) {
            (f.style.backgroundClip = 'content-box'),
                (f.cloneNode(!0).style.backgroundClip = ''),
                (k.clearCloneStyle = 'content-box' === f.style.backgroundClip),
                (e.style.cssText =
                    'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute'),
                e.appendChild(f);
            function g() {
                (f.style.cssText =
                    '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute'),
                    (f.innerHTML = ''),
                    d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                (b = '1%' !== g.top), (c = '4px' === g.width), d.removeChild(e);
            }
            a.getComputedStyle &&
                n.extend(k, {
                    pixelPosition: function () {
                        return g(), b;
                    },
                    boxSizingReliable: function () {
                        return null == c && g(), c;
                    },
                    reliableMarginRight: function () {
                        var b,
                            c = f.appendChild(l.createElement('div'));
                        return (
                            (c.style.cssText = f.style.cssText =
                                '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
                            (c.style.marginRight = c.style.width = '0'),
                            (f.style.width = '1px'),
                            d.appendChild(e),
                            (b = !parseFloat(a.getComputedStyle(c, null).marginRight)),
                            d.removeChild(e),
                            f.removeChild(c),
                            b
                        );
                    },
                });
        }
    })(),
        (n.swap = function (a, b, c, d) {
            var e,
                f,
                g = {};
            for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        });
    var za = /^(none|table(?!-c[ea]).+)/,
        Aa = new RegExp('^(' + Q + ')(.*)$', 'i'),
        Ba = new RegExp('^([+-])=(' + Q + ')', 'i'),
        Ca = { position: 'absolute', visibility: 'hidden', display: 'block' },
        Da = { letterSpacing: '0', fontWeight: '400' },
        Ea = ['Webkit', 'O', 'Moz', 'ms'];
    function Fa(a, b) {
        if (b in a) return b;
        var c = b[0].toUpperCase() + b.slice(1),
            d = b,
            e = Ea.length;
        while (e--) if (((b = Ea[e] + c), b in a)) return b;
        return d;
    }
    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || 'px') : b;
    }
    function Ha(a, b, c, d, e) {
        for (
            var f = c === (d ? 'border' : 'content') ? 4 : 'width' === b ? 1 : 0, g = 0;
            4 > f;
            f += 2
        )
            'margin' === c && (g += n.css(a, c + R[f], !0, e)),
                d
                    ? ('content' === c && (g -= n.css(a, 'padding' + R[f], !0, e)),
                      'margin' !== c && (g -= n.css(a, 'border' + R[f] + 'Width', !0, e)))
                    : ((g += n.css(a, 'padding' + R[f], !0, e)),
                      'padding' !== c && (g += n.css(a, 'border' + R[f] + 'Width', !0, e)));
        return g;
    }
    function Ia(a, b, c) {
        var d = !0,
            e = 'width' === b ? a.offsetWidth : a.offsetHeight,
            f = wa(a),
            g = 'border-box' === n.css(a, 'boxSizing', !1, f);
        if (0 >= e || null == e) {
            if (((e = xa(a, b, f)), (0 > e || null == e) && (e = a.style[b]), va.test(e))) return e;
            (d = g && (k.boxSizingReliable() || e === a.style[b])), (e = parseFloat(e) || 0);
        }
        return e + Ha(a, b, c || (g ? 'border' : 'content'), d, f) + 'px';
    }
    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            (d = a[g]),
                d.style &&
                    ((f[g] = L.get(d, 'olddisplay')),
                    (c = d.style.display),
                    b
                        ? (f[g] || 'none' !== c || (d.style.display = ''),
                          '' === d.style.display &&
                              S(d) &&
                              (f[g] = L.access(d, 'olddisplay', ta(d.nodeName))))
                        : ((e = S(d)),
                          ('none' === c && e) ||
                              L.set(d, 'olddisplay', e ? c : n.css(d, 'display'))));
        for (g = 0; h > g; g++)
            (d = a[g]),
                d.style &&
                    ((b && 'none' !== d.style.display && '' !== d.style.display) ||
                        (d.style.display = b ? f[g] || '' : 'none'));
        return a;
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xa(a, 'opacity');
                        return '' === c ? '1' : c;
                    }
                },
            },
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: { float: 'cssFloat' },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = n.camelCase(b),
                    i = a.style;
                return (
                    (b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h))),
                    (g = n.cssHooks[b] || n.cssHooks[h]),
                    void 0 === c
                        ? g && 'get' in g && void 0 !== (e = g.get(a, !1, d))
                            ? e
                            : i[b]
                        : ((f = typeof c),
                          'string' === f &&
                              (e = Ba.exec(c)) &&
                              ((c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b))), (f = 'number')),
                          null != c &&
                              c === c &&
                              ('number' !== f || n.cssNumber[h] || (c += 'px'),
                              k.clearCloneStyle ||
                                  '' !== c ||
                                  0 !== b.indexOf('background') ||
                                  (i[b] = 'inherit'),
                              (g && 'set' in g && void 0 === (c = g.set(a, c, d))) || (i[b] = c)),
                          void 0)
                );
            }
        },
        css: function (a, b, c, d) {
            var e,
                f,
                g,
                h = n.camelCase(b);
            return (
                (b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h))),
                (g = n.cssHooks[b] || n.cssHooks[h]),
                g && 'get' in g && (e = g.get(a, !0, c)),
                void 0 === e && (e = xa(a, b, d)),
                'normal' === e && b in Da && (e = Da[b]),
                '' === c || c ? ((f = parseFloat(e)), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
            );
        },
    }),
        n.each(['height', 'width'], function (a, b) {
            n.cssHooks[b] = {
                get: function (a, c, d) {
                    return c
                        ? za.test(n.css(a, 'display')) && 0 === a.offsetWidth
                            ? n.swap(a, Ca, function () {
                                  return Ia(a, b, d);
                              })
                            : Ia(a, b, d)
                        : void 0;
                },
                set: function (a, c, d) {
                    var e = d && wa(a);
                    return Ga(
                        a,
                        c,
                        d ? Ha(a, b, d, 'border-box' === n.css(a, 'boxSizing', !1, e), e) : 0
                    );
                },
            };
        }),
        (n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
            return b ? n.swap(a, { display: 'inline-block' }, xa, [a, 'marginRight']) : void 0;
        })),
        n.each({ margin: '', padding: '', border: 'Width' }, function (a, b) {
            (n.cssHooks[a + b] = {
                expand: function (c) {
                    for (
                        var d = 0, e = {}, f = 'string' == typeof c ? c.split(' ') : [c];
                        4 > d;
                        d++
                    )
                        e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                    return e;
                },
            }),
                ua.test(a) || (n.cssHooks[a + b].set = Ga);
        }),
        n.fn.extend({
            css: function (a, b) {
                return J(
                    this,
                    function (a, b, c) {
                        var d,
                            e,
                            f = {},
                            g = 0;
                        if (n.isArray(b)) {
                            for (d = wa(a), e = b.length; e > g; g++)
                                f[b[g]] = n.css(a, b[g], !1, d);
                            return f;
                        }
                        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
                    },
                    a,
                    b,
                    arguments.length > 1
                );
            },
            show: function () {
                return Ja(this, !0);
            },
            hide: function () {
                return Ja(this);
            },
            toggle: function (a) {
                return 'boolean' == typeof a
                    ? a
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          S(this) ? n(this).show() : n(this).hide();
                      });
            },
        });
    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e);
    }
    (n.Tween = Ka),
        (Ka.prototype = {
            constructor: Ka,
            init: function (a, b, c, d, e, f) {
                (this.elem = a),
                    (this.prop = c),
                    (this.easing = e || 'swing'),
                    (this.options = b),
                    (this.start = this.now = this.cur()),
                    (this.end = d),
                    (this.unit = f || (n.cssNumber[c] ? '' : 'px'));
            },
            cur: function () {
                var a = Ka.propHooks[this.prop];
                return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
            },
            run: function (a) {
                var b,
                    c = Ka.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = b =
                              n.easing[this.easing](
                                  a,
                                  this.options.duration * a,
                                  0,
                                  1,
                                  this.options.duration
                              ))
                        : (this.pos = b = a),
                    (this.now = (this.end - this.start) * b + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : Ka.propHooks._default.set(this),
                    this
                );
            },
        }),
        (Ka.prototype.init.prototype = Ka.prototype),
        (Ka.propHooks = {
            _default: {
                get: function (a) {
                    var b;
                    return null == a.elem[a.prop] || (a.elem.style && null != a.elem.style[a.prop])
                        ? ((b = n.css(a.elem, a.prop, '')), b && 'auto' !== b ? b : 0)
                        : a.elem[a.prop];
                },
                set: function (a) {
                    n.fx.step[a.prop]
                        ? n.fx.step[a.prop](a)
                        : a.elem.style &&
                          (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop])
                        ? n.style(a.elem, a.prop, a.now + a.unit)
                        : (a.elem[a.prop] = a.now);
                },
            },
        }),
        (Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft =
            {
                set: function (a) {
                    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
                },
            }),
        (n.easing = {
            linear: function (a) {
                return a;
            },
            swing: function (a) {
                return 0.5 - Math.cos(a * Math.PI) / 2;
            },
        }),
        (n.fx = Ka.prototype.init),
        (n.fx.step = {});
    var La,
        Ma,
        Na = /^(?:toggle|show|hide)$/,
        Oa = new RegExp('^(?:([+-])=|)(' + Q + ')([a-z%]*)$', 'i'),
        Pa = /queueHooks$/,
        Qa = [Va],
        Ra = {
            '*': [
                function (a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = Oa.exec(b),
                        f = (e && e[3]) || (n.cssNumber[a] ? '' : 'px'),
                        g = (n.cssNumber[a] || ('px' !== f && +d)) && Oa.exec(n.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        (f = f || g[3]), (e = e || []), (g = +d || 1);
                        do (h = h || '.5'), (g /= h), n.style(c.elem, a, g + f);
                        while (h !== (h = c.cur() / d) && 1 !== h && --i);
                    }
                    return (
                        e &&
                            ((g = c.start = +g || +d || 0),
                            (c.unit = f),
                            (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
                        c
                    );
                },
            ],
        };
    function Sa() {
        return (
            setTimeout(function () {
                La = void 0;
            }),
            (La = n.now())
        );
    }
    function Ta(a, b) {
        var c,
            d = 0,
            e = { height: a };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) (c = R[d]), (e['margin' + c] = e['padding' + c] = a);
        return b && (e.opacity = e.width = a), e;
    }
    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra['*']), f = 0, g = e.length; g > f; f++)
            if ((d = e[f].call(c, b, a))) return d;
    }
    function Va(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = this,
            m = {},
            o = a.style,
            p = a.nodeType && S(a),
            q = L.get(a, 'fxshow');
        c.queue ||
            ((h = n._queueHooks(a, 'fx')),
            null == h.unqueued &&
                ((h.unqueued = 0),
                (i = h.empty.fire),
                (h.empty.fire = function () {
                    h.unqueued || i();
                })),
            h.unqueued++,
            l.always(function () {
                l.always(function () {
                    h.unqueued--, n.queue(a, 'fx').length || h.empty.fire();
                });
            })),
            1 === a.nodeType &&
                ('height' in b || 'width' in b) &&
                ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
                (j = n.css(a, 'display')),
                (k = 'none' === j ? L.get(a, 'olddisplay') || ta(a.nodeName) : j),
                'inline' === k && 'none' === n.css(a, 'float') && (o.display = 'inline-block')),
            c.overflow &&
                ((o.overflow = 'hidden'),
                l.always(function () {
                    (o.overflow = c.overflow[0]),
                        (o.overflowX = c.overflow[1]),
                        (o.overflowY = c.overflow[2]);
                }));
        for (d in b)
            if (((e = b[d]), Na.exec(e))) {
                if ((delete b[d], (f = f || 'toggle' === e), e === (p ? 'hide' : 'show'))) {
                    if ('show' !== e || !q || void 0 === q[d]) continue;
                    p = !0;
                }
                m[d] = (q && q[d]) || n.style(a, d);
            } else j = void 0;
        if (n.isEmptyObject(m)) 'inline' === ('none' === j ? ta(a.nodeName) : j) && (o.display = j);
        else {
            q ? 'hidden' in q && (p = q.hidden) : (q = L.access(a, 'fxshow', {})),
                f && (q.hidden = !p),
                p
                    ? n(a).show()
                    : l.done(function () {
                          n(a).hide();
                      }),
                l.done(function () {
                    var b;
                    L.remove(a, 'fxshow');
                    for (b in m) n.style(a, b, m[b]);
                });
            for (d in m)
                (g = Ua(p ? q[d] : 0, d, l)),
                    d in q ||
                        ((q[d] = g.start),
                        p &&
                            ((g.end = g.start),
                            (g.start = 'width' === d || 'height' === d ? 1 : 0)));
        }
    }
    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (
                ((d = n.camelCase(c)),
                (e = b[d]),
                (f = a[c]),
                n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
                c !== d && ((a[d] = f), delete a[c]),
                (g = n.cssHooks[d]),
                g && 'expand' in g)
            ) {
                (f = g.expand(f)), delete a[d];
                for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
            } else b[d] = e;
    }
    function Xa(a, b, c) {
        var d,
            e,
            f = 0,
            g = Qa.length,
            h = n.Deferred().always(function () {
                delete i.elem;
            }),
            i = function () {
                if (e) return !1;
                for (
                    var b = La || Sa(),
                        c = Math.max(0, j.startTime + j.duration - b),
                        d = c / j.duration || 0,
                        f = 1 - d,
                        g = 0,
                        i = j.tweens.length;
                    i > g;
                    g++
                )
                    j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, { specialEasing: {} }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: La || Sa(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d;
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
                },
            }),
            k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++)
            if ((d = Qa[f].call(j, a, k, j.opts))) return d;
        return (
            n.map(k, Ua, j),
            n.isFunction(j.opts.start) && j.opts.start.call(a, j),
            n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
            j
                .progress(j.opts.progress)
                .done(j.opts.done, j.opts.complete)
                .fail(j.opts.fail)
                .always(j.opts.always)
        );
    }
    (n.Animation = n.extend(Xa, {
        tweener: function (a, b) {
            n.isFunction(a) ? ((b = a), (a = ['*'])) : (a = a.split(' '));
            for (var c, d = 0, e = a.length; e > d; d++)
                (c = a[d]), (Ra[c] = Ra[c] || []), Ra[c].unshift(b);
        },
        prefilter: function (a, b) {
            b ? Qa.unshift(a) : Qa.push(a);
        },
    })),
        (n.speed = function (a, b, c) {
            var d =
                a && 'object' == typeof a
                    ? n.extend({}, a)
                    : {
                          complete: c || (!c && b) || (n.isFunction(a) && a),
                          duration: a,
                          easing: (c && b) || (b && !n.isFunction(b) && b),
                      };
            return (
                (d.duration = n.fx.off
                    ? 0
                    : 'number' == typeof d.duration
                    ? d.duration
                    : d.duration in n.fx.speeds
                    ? n.fx.speeds[d.duration]
                    : n.fx.speeds._default),
                (null == d.queue || d.queue === !0) && (d.queue = 'fx'),
                (d.old = d.complete),
                (d.complete = function () {
                    n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
                }),
                d
            );
        }),
        n.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(S)
                    .css('opacity', 0)
                    .show()
                    .end()
                    .animate({ opacity: b }, a, c, d);
            },
            animate: function (a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function () {
                        var b = Xa(this, n.extend({}, a), f);
                        (e || L.get(this, 'finish')) && b.stop(!0);
                    };
                return (g.finish = g), e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c);
                };
                return (
                    'string' != typeof a && ((c = b), (b = a), (a = void 0)),
                    b && a !== !1 && this.queue(a || 'fx', []),
                    this.each(function () {
                        var b = !0,
                            e = null != a && a + 'queueHooks',
                            f = n.timers,
                            g = L.get(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                        for (e = f.length; e--; )
                            f[e].elem !== this ||
                                (null != a && f[e].queue !== a) ||
                                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
                        (b || !c) && n.dequeue(this, a);
                    })
                );
            },
            finish: function (a) {
                return (
                    a !== !1 && (a = a || 'fx'),
                    this.each(function () {
                        var b,
                            c = L.get(this),
                            d = c[a + 'queue'],
                            e = c[a + 'queueHooks'],
                            f = n.timers,
                            g = d ? d.length : 0;
                        for (
                            c.finish = !0,
                                n.queue(this, a, []),
                                e && e.stop && e.stop.call(this, !0),
                                b = f.length;
                            b--;

                        )
                            f[b].elem === this &&
                                f[b].queue === a &&
                                (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish;
                    })
                );
            },
        }),
        n.each(['toggle', 'show', 'hide'], function (a, b) {
            var c = n.fn[b];
            n.fn[b] = function (a, d, e) {
                return null == a || 'boolean' == typeof a
                    ? c.apply(this, arguments)
                    : this.animate(Ta(b, !0), a, d, e);
            };
        }),
        n.each(
            {
                slideDown: Ta('show'),
                slideUp: Ta('hide'),
                slideToggle: Ta('toggle'),
                fadeIn: { opacity: 'show' },
                fadeOut: { opacity: 'hide' },
                fadeToggle: { opacity: 'toggle' },
            },
            function (a, b) {
                n.fn[a] = function (a, c, d) {
                    return this.animate(b, a, c, d);
                };
            }
        ),
        (n.timers = []),
        (n.fx.tick = function () {
            var a,
                b = 0,
                c = n.timers;
            for (La = n.now(); b < c.length; b++) (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), (La = void 0);
        }),
        (n.fx.timer = function (a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
        }),
        (n.fx.interval = 13),
        (n.fx.start = function () {
            Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
        }),
        (n.fx.stop = function () {
            clearInterval(Ma), (Ma = null);
        }),
        (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (n.fn.delay = function (a, b) {
            return (
                (a = n.fx ? n.fx.speeds[a] || a : a),
                (b = b || 'fx'),
                this.queue(b, function (b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function () {
                        clearTimeout(d);
                    };
                })
            );
        }),
        (function () {
            var a = l.createElement('input'),
                b = l.createElement('select'),
                c = b.appendChild(l.createElement('option'));
            (a.type = 'checkbox'),
                (k.checkOn = '' !== a.value),
                (k.optSelected = c.selected),
                (b.disabled = !0),
                (k.optDisabled = !c.disabled),
                (a = l.createElement('input')),
                (a.value = 't'),
                (a.type = 'radio'),
                (k.radioValue = 't' === a.value);
        })();
    var Ya,
        Za,
        $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a);
            });
        },
    }),
        n.extend({
            attr: function (a, b, c) {
                var d,
                    e,
                    f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f)
                    return typeof a.getAttribute === U
                        ? n.prop(a, b, c)
                        : ((1 === f && n.isXMLDoc(a)) ||
                              ((b = b.toLowerCase()),
                              (d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya))),
                          void 0 === c
                              ? d && 'get' in d && null !== (e = d.get(a, b))
                                  ? e
                                  : ((e = n.find.attr(a, b)), null == e ? void 0 : e)
                              : null !== c
                              ? d && 'set' in d && void 0 !== (e = d.set(a, c, b))
                                  ? e
                                  : (a.setAttribute(b, c + ''), c)
                              : void n.removeAttr(a, b));
            },
            removeAttr: function (a, b) {
                var c,
                    d,
                    e = 0,
                    f = b && b.match(E);
                if (f && 1 === a.nodeType)
                    while ((c = f[e++]))
                        (d = n.propFix[c] || c),
                            n.expr.match.bool.test(c) && (a[d] = !1),
                            a.removeAttribute(c);
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!k.radioValue && 'radio' === b && n.nodeName(a, 'input')) {
                            var c = a.value;
                            return a.setAttribute('type', b), c && (a.value = c), b;
                        }
                    },
                },
            },
        }),
        (Za = {
            set: function (a, b, c) {
                return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
            },
        }),
        n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = $a[b] || n.find.attr;
            $a[b] = function (a, b, d) {
                var e, f;
                return (
                    d ||
                        ((f = $a[b]),
                        ($a[b] = e),
                        (e = null != c(a, b, d) ? b.toLowerCase() : null),
                        ($a[b] = f)),
                    e
                );
            };
        });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a];
            });
        },
    }),
        n.extend({
            propFix: { for: 'htmlFor', class: 'className' },
            prop: function (a, b, c) {
                var d,
                    e,
                    f,
                    g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g)
                    return (
                        (f = 1 !== g || !n.isXMLDoc(a)),
                        f && ((b = n.propFix[b] || b), (e = n.propHooks[b])),
                        void 0 !== c
                            ? e && 'set' in e && void 0 !== (d = e.set(a, c, b))
                                ? d
                                : (a[b] = c)
                            : e && 'get' in e && null !== (d = e.get(a, b))
                            ? d
                            : a[b]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        return a.hasAttribute('tabindex') || _a.test(a.nodeName) || a.href
                            ? a.tabIndex
                            : -1;
                    },
                },
            },
        }),
        k.optSelected ||
            (n.propHooks.selected = {
                get: function (a) {
                    var b = a.parentNode;
                    return b && b.parentNode && b.parentNode.selectedIndex, null;
                },
            }),
        n.each(
            [
                'tabIndex',
                'readOnly',
                'maxLength',
                'cellSpacing',
                'cellPadding',
                'rowSpan',
                'colSpan',
                'useMap',
                'frameBorder',
                'contentEditable',
            ],
            function () {
                n.propFix[this.toLowerCase()] = this;
            }
        );
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h = 'string' == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a))
                return this.each(function (b) {
                    n(this).addClass(a.call(this, b, this.className));
                });
            if (h)
                for (b = (a || '').match(E) || []; j > i; i++)
                    if (
                        ((c = this[i]),
                        (d =
                            1 === c.nodeType &&
                            (c.className ? (' ' + c.className + ' ').replace(ab, ' ') : ' ')))
                    ) {
                        f = 0;
                        while ((e = b[f++])) d.indexOf(' ' + e + ' ') < 0 && (d += e + ' ');
                        (g = n.trim(d)), c.className !== g && (c.className = g);
                    }
            return this;
        },
        removeClass: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h = 0 === arguments.length || ('string' == typeof a && a),
                i = 0,
                j = this.length;
            if (n.isFunction(a))
                return this.each(function (b) {
                    n(this).removeClass(a.call(this, b, this.className));
                });
            if (h)
                for (b = (a || '').match(E) || []; j > i; i++)
                    if (
                        ((c = this[i]),
                        (d =
                            1 === c.nodeType &&
                            (c.className ? (' ' + c.className + ' ').replace(ab, ' ') : '')))
                    ) {
                        f = 0;
                        while ((e = b[f++]))
                            while (d.indexOf(' ' + e + ' ') >= 0) d = d.replace(' ' + e + ' ', ' ');
                        (g = a ? n.trim(d) : ''), c.className !== g && (c.className = g);
                    }
            return this;
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return 'boolean' == typeof b && 'string' === c
                ? b
                    ? this.addClass(a)
                    : this.removeClass(a)
                : this.each(
                      n.isFunction(a)
                          ? function (c) {
                                n(this).toggleClass(a.call(this, c, this.className, b), b);
                            }
                          : function () {
                                if ('string' === c) {
                                    var b,
                                        d = 0,
                                        e = n(this),
                                        f = a.match(E) || [];
                                    while ((b = f[d++]))
                                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                                } else
                                    (c === U || 'boolean' === c) &&
                                        (this.className &&
                                            L.set(this, '__className__', this.className),
                                        (this.className =
                                            this.className || a === !1
                                                ? ''
                                                : L.get(this, '__className__') || ''));
                            }
                  );
        },
        hasClass: function (a) {
            for (var b = ' ' + a + ' ', c = 0, d = this.length; d > c; c++)
                if (
                    1 === this[c].nodeType &&
                    (' ' + this[c].className + ' ').replace(ab, ' ').indexOf(b) >= 0
                )
                    return !0;
            return !1;
        },
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b,
                c,
                d,
                e = this[0];
            {
                if (arguments.length)
                    return (
                        (d = n.isFunction(a)),
                        this.each(function (c) {
                            var e;
                            1 === this.nodeType &&
                                ((e = d ? a.call(this, c, n(this).val()) : a),
                                null == e
                                    ? (e = '')
                                    : 'number' == typeof e
                                    ? (e += '')
                                    : n.isArray(e) &&
                                      (e = n.map(e, function (a) {
                                          return null == a ? '' : a + '';
                                      })),
                                (b =
                                    n.valHooks[this.type] ||
                                    n.valHooks[this.nodeName.toLowerCase()]),
                                (b && 'set' in b && void 0 !== b.set(this, e, 'value')) ||
                                    (this.value = e));
                        })
                    );
                if (e)
                    return (
                        (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
                        b && 'get' in b && void 0 !== (c = b.get(e, 'value'))
                            ? c
                            : ((c = e.value),
                              'string' == typeof c ? c.replace(bb, '') : null == c ? '' : c)
                    );
            }
        },
    }),
        n.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = n.find.attr(a, 'value');
                        return null != b ? b : n.trim(n.text(a));
                    },
                },
                select: {
                    get: function (a) {
                        for (
                            var b,
                                c,
                                d = a.options,
                                e = a.selectedIndex,
                                f = 'select-one' === a.type || 0 > e,
                                g = f ? null : [],
                                h = f ? e + 1 : d.length,
                                i = 0 > e ? h : f ? e : 0;
                            h > i;
                            i++
                        )
                            if (
                                ((c = d[i]),
                                !(
                                    (!c.selected && i !== e) ||
                                    (k.optDisabled
                                        ? c.disabled
                                        : null !== c.getAttribute('disabled')) ||
                                    (c.parentNode.disabled && n.nodeName(c.parentNode, 'optgroup'))
                                ))
                            ) {
                                if (((b = n(c).val()), f)) return b;
                                g.push(b);
                            }
                        return g;
                    },
                    set: function (a, b) {
                        var c,
                            d,
                            e = a.options,
                            f = n.makeArray(b),
                            g = e.length;
                        while (g--)
                            (d = e[g]), (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                        return c || (a.selectedIndex = -1), f;
                    },
                },
            },
        }),
        n.each(['radio', 'checkbox'], function () {
            (n.valHooks[this] = {
                set: function (a, b) {
                    return n.isArray(b) ? (a.checked = n.inArray(n(a).val(), b) >= 0) : void 0;
                },
            }),
                k.checkOn ||
                    (n.valHooks[this].get = function (a) {
                        return null === a.getAttribute('value') ? 'on' : a.value;
                    });
        }),
        n.each(
            'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
                ' '
            ),
            function (a, b) {
                n.fn[b] = function (a, c) {
                    return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
                };
            }
        ),
        n.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a);
            },
            bind: function (a, b, c) {
                return this.on(a, null, b, c);
            },
            unbind: function (a, b) {
                return this.off(a, null, b);
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d);
            },
            undelegate: function (a, b, c) {
                return 1 === arguments.length ? this.off(a, '**') : this.off(b, a || '**', c);
            },
        });
    var cb = n.now(),
        db = /\?/;
    (n.parseJSON = function (a) {
        return JSON.parse(a + '');
    }),
        (n.parseXML = function (a) {
            var b, c;
            if (!a || 'string' != typeof a) return null;
            try {
                (c = new DOMParser()), (b = c.parseFromString(a, 'text/xml'));
            } catch (d) {
                b = void 0;
            }
            return (
                (!b || b.getElementsByTagName('parsererror').length) &&
                    n.error('Invalid XML: ' + a),
                b
            );
        });
    var eb = /#.*$/,
        fb = /([?&])_=[^&]*/,
        gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ib = /^(?:GET|HEAD)$/,
        jb = /^\/\//,
        kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        lb = {},
        mb = {},
        nb = '*/'.concat('*'),
        ob = a.location.href,
        pb = kb.exec(ob.toLowerCase()) || [];
    function qb(a) {
        return function (b, c) {
            'string' != typeof b && ((c = b), (b = '*'));
            var d,
                e = 0,
                f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                while ((d = f[e++]))
                    '+' === d[0]
                        ? ((d = d.slice(1) || '*'), (a[d] = a[d] || []).unshift(c))
                        : (a[d] = a[d] || []).push(c);
        };
    }
    function rb(a, b, c, d) {
        var e = {},
            f = a === mb;
        function g(h) {
            var i;
            return (
                (e[h] = !0),
                n.each(a[h] || [], function (a, h) {
                    var j = h(b, c, d);
                    return 'string' != typeof j || f || e[j]
                        ? f
                            ? !(i = j)
                            : void 0
                        : (b.dataTypes.unshift(j), g(j), !1);
                }),
                i
            );
        }
        return g(b.dataTypes[0]) || (!e['*'] && g('*'));
    }
    function sb(a, b) {
        var c,
            d,
            e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a;
    }
    function tb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;
        while ('*' === i[0])
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader('Content-Type'));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break;
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + ' ' + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function ub(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (
                (a.responseFields[f] && (c[a.responseFields[f]] = b),
                !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                (i = f),
                (f = k.shift()))
            )
                if ('*' === f) f = i;
                else if ('*' !== i && i !== f) {
                    if (((g = j[i + ' ' + f] || j['* ' + f]), !g))
                        for (e in j)
                            if (
                                ((h = e.split(' ')),
                                h[1] === f && (g = j[i + ' ' + h[0]] || j['* ' + h[0]]))
                            ) {
                                g === !0
                                    ? (g = j[e])
                                    : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                                break;
                            }
                    if (g !== !0)
                        if (g && a['throws']) b = g(b);
                        else
                            try {
                                b = g(b);
                            } catch (l) {
                                return {
                                    state: 'parsererror',
                                    error: g ? l : 'No conversion from ' + i + ' to ' + f,
                                };
                            }
                }
        return { state: 'success', data: b };
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: 'GET',
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
                '*': nb,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript',
            },
            contents: { xml: /xml/, html: /html/, json: /json/ },
            responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
            converters: {
                '* text': String,
                'text html': !0,
                'text json': n.parseJSON,
                'text xml': n.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function (a, b) {
            'object' == typeof a && ((b = a), (a = void 0)), (b = b || {});
            var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks('once memory'),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = 'canceled',
                v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while ((b = gb.exec(e))) f[b[1].toLowerCase()] = b[2];
                            }
                            b = f[a.toLowerCase()];
                        }
                        return null == b ? null : b;
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? e : null;
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
                    },
                    overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this;
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > t) for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this;
                    },
                    abort: function (a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this;
                    },
                };
            if (
                ((o.promise(v).complete = p.add),
                (v.success = v.done),
                (v.error = v.fail),
                (k.url = ((a || k.url || ob) + '').replace(eb, '').replace(jb, pb[1] + '//')),
                (k.type = b.method || b.type || k.method || k.type),
                (k.dataTypes = n
                    .trim(k.dataType || '*')
                    .toLowerCase()
                    .match(E) || ['']),
                null == k.crossDomain &&
                    ((h = kb.exec(k.url.toLowerCase())),
                    (k.crossDomain = !(
                        !h ||
                        (h[1] === pb[1] &&
                            h[2] === pb[2] &&
                            (h[3] || ('http:' === h[1] ? '80' : '443')) ===
                                (pb[3] || ('http:' === pb[1] ? '80' : '443')))
                    ))),
                k.data &&
                    k.processData &&
                    'string' != typeof k.data &&
                    (k.data = n.param(k.data, k.traditional)),
                rb(lb, k, b, v),
                2 === t)
            )
                return v;
            (i = n.event && k.global),
                i && 0 === n.active++ && n.event.trigger('ajaxStart'),
                (k.type = k.type.toUpperCase()),
                (k.hasContent = !ib.test(k.type)),
                (d = k.url),
                k.hasContent ||
                    (k.data && ((d = k.url += (db.test(d) ? '&' : '?') + k.data), delete k.data),
                    k.cache === !1 &&
                        (k.url = fb.test(d)
                            ? d.replace(fb, '$1_=' + cb++)
                            : d + (db.test(d) ? '&' : '?') + '_=' + cb++)),
                k.ifModified &&
                    (n.lastModified[d] &&
                        v.setRequestHeader('If-Modified-Since', n.lastModified[d]),
                    n.etag[d] && v.setRequestHeader('If-None-Match', n.etag[d])),
                ((k.data && k.hasContent && k.contentType !== !1) || b.contentType) &&
                    v.setRequestHeader('Content-Type', k.contentType),
                v.setRequestHeader(
                    'Accept',
                    k.dataTypes[0] && k.accepts[k.dataTypes[0]]
                        ? k.accepts[k.dataTypes[0]] +
                              ('*' !== k.dataTypes[0] ? ', ' + nb + '; q=0.01' : '')
                        : k.accepts['*']
                );
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = 'abort';
            for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);
            if ((c = rb(mb, k, b, v))) {
                (v.readyState = 1),
                    i && m.trigger('ajaxSend', [v, k]),
                    k.async &&
                        k.timeout > 0 &&
                        (g = setTimeout(function () {
                            v.abort('timeout');
                        }, k.timeout));
                try {
                    (t = 1), c.send(r, x);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w);
                }
            } else x(-1, 'No Transport');
            function x(a, b, f, h) {
                var j,
                    r,
                    s,
                    u,
                    w,
                    x = b;
                2 !== t &&
                    ((t = 2),
                    g && clearTimeout(g),
                    (c = void 0),
                    (e = h || ''),
                    (v.readyState = a > 0 ? 4 : 0),
                    (j = (a >= 200 && 300 > a) || 304 === a),
                    f && (u = tb(k, v, f)),
                    (u = ub(k, u, v, j)),
                    j
                        ? (k.ifModified &&
                              ((w = v.getResponseHeader('Last-Modified')),
                              w && (n.lastModified[d] = w),
                              (w = v.getResponseHeader('etag')),
                              w && (n.etag[d] = w)),
                          204 === a || 'HEAD' === k.type
                              ? (x = 'nocontent')
                              : 304 === a
                              ? (x = 'notmodified')
                              : ((x = u.state), (r = u.data), (s = u.error), (j = !s)))
                        : ((s = x), (a || !x) && ((x = 'error'), 0 > a && (a = 0))),
                    (v.status = a),
                    (v.statusText = (b || x) + ''),
                    j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                    v.statusCode(q),
                    (q = void 0),
                    i && m.trigger(j ? 'ajaxSuccess' : 'ajaxError', [v, k, j ? r : s]),
                    p.fireWith(l, [v, x]),
                    i &&
                        (m.trigger('ajaxComplete', [v, k]),
                        --n.active || n.event.trigger('ajaxStop')));
            }
            return v;
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, 'json');
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, 'script');
        },
    }),
        n.each(['get', 'post'], function (a, b) {
            n[b] = function (a, c, d, e) {
                return (
                    n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
                    n.ajax({ url: a, type: b, dataType: e, data: c, success: d })
                );
            };
        }),
        (n._evalUrl = function (a) {
            return n.ajax({
                url: a,
                type: 'GET',
                dataType: 'script',
                async: !1,
                global: !1,
                throws: !0,
            });
        }),
        n.fn.extend({
            wrapAll: function (a) {
                var b;
                return n.isFunction(a)
                    ? this.each(function (b) {
                          n(this).wrapAll(a.call(this, b));
                      })
                    : (this[0] &&
                          ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
                          this[0].parentNode && b.insertBefore(this[0]),
                          b
                              .map(function () {
                                  var a = this;
                                  while (a.firstElementChild) a = a.firstElementChild;
                                  return a;
                              })
                              .append(this)),
                      this);
            },
            wrapInner: function (a) {
                return this.each(
                    n.isFunction(a)
                        ? function (b) {
                              n(this).wrapInner(a.call(this, b));
                          }
                        : function () {
                              var b = n(this),
                                  c = b.contents();
                              c.length ? c.wrapAll(a) : b.append(a);
                          }
                );
            },
            wrap: function (a) {
                var b = n.isFunction(a);
                return this.each(function (c) {
                    n(this).wrapAll(b ? a.call(this, c) : a);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        n.nodeName(this, 'body') || n(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        }),
        (n.expr.filters.hidden = function (a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0;
        }),
        (n.expr.filters.visible = function (a) {
            return !n.expr.filters.hidden(a);
        });
    var vb = /%20/g,
        wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;
    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function (b, e) {
                c || wb.test(a)
                    ? d(a, e)
                    : Ab(a + '[' + ('object' == typeof e ? b : '') + ']', e, c, d);
            });
        else if (c || 'object' !== n.type(b)) d(a, b);
        else for (e in b) Ab(a + '[' + e + ']', b[e], c, d);
    }
    (n.param = function (a, b) {
        var c,
            d = [],
            e = function (a, b) {
                (b = n.isFunction(b) ? b() : null == b ? '' : b),
                    (d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b));
            };
        if (
            (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
            n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
        )
            n.each(a, function () {
                e(this.name, this.value);
            });
        else for (c in a) Ab(c, a[c], b, e);
        return d.join('&').replace(vb, '+');
    }),
        n.fn.extend({
            serialize: function () {
                return n.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var a = n.prop(this, 'elements');
                    return a ? n.makeArray(a) : this;
                })
                    .filter(function () {
                        var a = this.type;
                        return (
                            this.name &&
                            !n(this).is(':disabled') &&
                            zb.test(this.nodeName) &&
                            !yb.test(a) &&
                            (this.checked || !T.test(a))
                        );
                    })
                    .map(function (a, b) {
                        var c = n(this).val();
                        return null == c
                            ? null
                            : n.isArray(c)
                            ? n.map(c, function (a) {
                                  return { name: b.name, value: a.replace(xb, '\r\n') };
                              })
                            : { name: b.name, value: c.replace(xb, '\r\n') };
                    })
                    .get();
            },
        }),
        (n.ajaxSettings.xhr = function () {
            try {
                return new XMLHttpRequest();
            } catch (a) {}
        });
    var Bb = 0,
        Cb = {},
        Db = { 0: 200, 1223: 204 },
        Eb = n.ajaxSettings.xhr();
    a.attachEvent &&
        a.attachEvent('onunload', function () {
            for (var a in Cb) Cb[a]();
        }),
        (k.cors = !!Eb && 'withCredentials' in Eb),
        (k.ajax = Eb = !!Eb),
        n.ajaxTransport(function (a) {
            var b;
            return k.cors || (Eb && !a.crossDomain)
                ? {
                      send: function (c, d) {
                          var e,
                              f = a.xhr(),
                              g = ++Bb;
                          if ((f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields))
                              for (e in a.xhrFields) f[e] = a.xhrFields[e];
                          a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                              a.crossDomain ||
                                  c['X-Requested-With'] ||
                                  (c['X-Requested-With'] = 'XMLHttpRequest');
                          for (e in c) f.setRequestHeader(e, c[e]);
                          (b = function (a) {
                              return function () {
                                  b &&
                                      (delete Cb[g],
                                      (b = f.onload = f.onerror = null),
                                      'abort' === a
                                          ? f.abort()
                                          : 'error' === a
                                          ? d(f.status, f.statusText)
                                          : d(
                                                Db[f.status] || f.status,
                                                f.statusText,
                                                'string' == typeof f.responseText
                                                    ? { text: f.responseText }
                                                    : void 0,
                                                f.getAllResponseHeaders()
                                            ));
                              };
                          }),
                              (f.onload = b()),
                              (f.onerror = b('error')),
                              (b = Cb[g] = b('abort'));
                          try {
                              f.send((a.hasContent && a.data) || null);
                          } catch (h) {
                              if (b) throw h;
                          }
                      },
                      abort: function () {
                          b && b();
                      },
                  }
                : void 0;
        }),
        n.ajaxSetup({
            accepts: {
                script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
            },
            contents: { script: /(?:java|ecma)script/ },
            converters: {
                'text script': function (a) {
                    return n.globalEval(a), a;
                },
            },
        }),
        n.ajaxPrefilter('script', function (a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = 'GET');
        }),
        n.ajaxTransport('script', function (a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function (d, e) {
                        (b = n('<script>')
                            .prop({ async: !0, charset: a.scriptCharset, src: a.url })
                            .on(
                                'load error',
                                (c = function (a) {
                                    b.remove(),
                                        (c = null),
                                        a && e('error' === a.type ? 404 : 200, a.type);
                                })
                            )),
                            l.head.appendChild(b[0]);
                    },
                    abort: function () {
                        c && c();
                    },
                };
            }
        });
    var Fb = [],
        Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
            var a = Fb.pop() || n.expando + '_' + cb++;
            return (this[a] = !0), a;
        },
    }),
        n.ajaxPrefilter('json jsonp', function (b, c, d) {
            var e,
                f,
                g,
                h =
                    b.jsonp !== !1 &&
                    (Gb.test(b.url)
                        ? 'url'
                        : 'string' == typeof b.data &&
                          !(b.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                          Gb.test(b.data) &&
                          'data');
            return h || 'jsonp' === b.dataTypes[0]
                ? ((e = b.jsonpCallback =
                      n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback),
                  h
                      ? (b[h] = b[h].replace(Gb, '$1' + e))
                      : b.jsonp !== !1 &&
                        (b.url += (db.test(b.url) ? '&' : '?') + b.jsonp + '=' + e),
                  (b.converters['script json'] = function () {
                      return g || n.error(e + ' was not called'), g[0];
                  }),
                  (b.dataTypes[0] = 'json'),
                  (f = a[e]),
                  (a[e] = function () {
                      g = arguments;
                  }),
                  d.always(function () {
                      (a[e] = f),
                          b[e] && ((b.jsonpCallback = c.jsonpCallback), Fb.push(e)),
                          g && n.isFunction(f) && f(g[0]),
                          (g = f = void 0);
                  }),
                  'script')
                : void 0;
        }),
        (n.parseHTML = function (a, b, c) {
            if (!a || 'string' != typeof a) return null;
            'boolean' == typeof b && ((c = b), (b = !1)), (b = b || l);
            var d = v.exec(a),
                e = !c && [];
            return d
                ? [b.createElement(d[1])]
                : ((d = n.buildFragment([a], b, e)),
                  e && e.length && n(e).remove(),
                  n.merge([], d.childNodes));
        });
    var Hb = n.fn.load;
    (n.fn.load = function (a, b, c) {
        if ('string' != typeof a && Hb) return Hb.apply(this, arguments);
        var d,
            e,
            f,
            g = this,
            h = a.indexOf(' ');
        return (
            h >= 0 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
            n.isFunction(b) ? ((c = b), (b = void 0)) : b && 'object' == typeof b && (e = 'POST'),
            g.length > 0 &&
                n
                    .ajax({ url: a, type: e, dataType: 'html', data: b })
                    .done(function (a) {
                        (f = arguments), g.html(d ? n('<div>').append(n.parseHTML(a)).find(d) : a);
                    })
                    .complete(
                        c &&
                            function (a, b) {
                                g.each(c, f || [a.responseText, b, a]);
                            }
                    ),
            this
        );
    }),
        n.each(
            ['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'],
            function (a, b) {
                n.fn[b] = function (a) {
                    return this.on(b, a);
                };
            }
        ),
        (n.expr.filters.animated = function (a) {
            return n.grep(n.timers, function (b) {
                return a === b.elem;
            }).length;
        });
    var Ib = a.document.documentElement;
    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    (n.offset = {
        setOffset: function (a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = n.css(a, 'position'),
                l = n(a),
                m = {};
            'static' === k && (a.style.position = 'relative'),
                (h = l.offset()),
                (f = n.css(a, 'top')),
                (i = n.css(a, 'left')),
                (j = ('absolute' === k || 'fixed' === k) && (f + i).indexOf('auto') > -1),
                j
                    ? ((d = l.position()), (g = d.top), (e = d.left))
                    : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
                n.isFunction(b) && (b = b.call(a, c, h)),
                null != b.top && (m.top = b.top - h.top + g),
                null != b.left && (m.left = b.left - h.left + e),
                'using' in b ? b.using.call(a, m) : l.css(m);
        },
    }),
        n.fn.extend({
            offset: function (a) {
                if (arguments.length)
                    return void 0 === a
                        ? this
                        : this.each(function (b) {
                              n.offset.setOffset(this, a, b);
                          });
                var b,
                    c,
                    d = this[0],
                    e = { top: 0, left: 0 },
                    f = d && d.ownerDocument;
                if (f)
                    return (
                        (b = f.documentElement),
                        n.contains(b, d)
                            ? (typeof d.getBoundingClientRect !== U &&
                                  (e = d.getBoundingClientRect()),
                              (c = Jb(f)),
                              {
                                  top: e.top + c.pageYOffset - b.clientTop,
                                  left: e.left + c.pageXOffset - b.clientLeft,
                              })
                            : e
                    );
            },
            position: function () {
                if (this[0]) {
                    var a,
                        b,
                        c = this[0],
                        d = { top: 0, left: 0 };
                    return (
                        'fixed' === n.css(c, 'position')
                            ? (b = c.getBoundingClientRect())
                            : ((a = this.offsetParent()),
                              (b = this.offset()),
                              n.nodeName(a[0], 'html') || (d = a.offset()),
                              (d.top += n.css(a[0], 'borderTopWidth', !0)),
                              (d.left += n.css(a[0], 'borderLeftWidth', !0))),
                        {
                            top: b.top - d.top - n.css(c, 'marginTop', !0),
                            left: b.left - d.left - n.css(c, 'marginLeft', !0),
                        }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var a = this.offsetParent || Ib;
                    while (a && !n.nodeName(a, 'html') && 'static' === n.css(a, 'position'))
                        a = a.offsetParent;
                    return a || Ib;
                });
            },
        }),
        n.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (b, c) {
            var d = 'pageYOffset' === c;
            n.fn[b] = function (e) {
                return J(
                    this,
                    function (b, e, f) {
                        var g = Jb(b);
                        return void 0 === f
                            ? g
                                ? g[c]
                                : b[e]
                            : void (g
                                  ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset)
                                  : (b[e] = f));
                    },
                    b,
                    e,
                    arguments.length,
                    null
                );
            };
        }),
        n.each(['top', 'left'], function (a, b) {
            n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
                return c ? ((c = xa(a, b)), va.test(c) ? n(a).position()[b] + 'px' : c) : void 0;
            });
        }),
        n.each({ Height: 'height', Width: 'width' }, function (a, b) {
            n.each({ padding: 'inner' + a, content: b, '': 'outer' + a }, function (c, d) {
                n.fn[d] = function (d, e) {
                    var f = arguments.length && (c || 'boolean' != typeof d),
                        g = c || (d === !0 || e === !0 ? 'margin' : 'border');
                    return J(
                        this,
                        function (b, c, d) {
                            var e;
                            return n.isWindow(b)
                                ? b.document.documentElement['client' + a]
                                : 9 === b.nodeType
                                ? ((e = b.documentElement),
                                  Math.max(
                                      b.body['scroll' + a],
                                      e['scroll' + a],
                                      b.body['offset' + a],
                                      e['offset' + a],
                                      e['client' + a]
                                  ))
                                : void 0 === d
                                ? n.css(b, c, g)
                                : n.style(b, c, d, g);
                        },
                        b,
                        f ? d : void 0,
                        f,
                        null
                    );
                };
            });
        }),
        (n.fn.size = function () {
            return this.length;
        }),
        (n.fn.andSelf = n.fn.addBack),
        'function' == typeof define &&
            define.amd &&
            define('jquery', [], function () {
                return n;
            });
    var Kb = a.jQuery,
        Lb = a.$;
    return (
        (n.noConflict = function (b) {
            return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
        }),
        typeof b === U && (a.jQuery = a.$ = n),
        n
    );
});
//# sourceMappingURL=jquery.min.map

//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function () {
    // Baseline setup
    // --------------

    // Establish the root object, `window` in the browser, or `exports` on the server.
    var root = this;

    // Save the previous value of the `_` variable.
    var previousUnderscore = root._;

    // Save bytes in the minified (but not gzipped) version:
    var ArrayProto = Array.prototype,
        ObjProto = Object.prototype,
        FuncProto = Function.prototype;

    // Create quick reference variables for speed access to core prototypes.
    var push = ArrayProto.push,
        slice = ArrayProto.slice,
        toString = ObjProto.toString,
        hasOwnProperty = ObjProto.hasOwnProperty;

    // All **ECMAScript 5** native function implementations that we hope to use
    // are declared here.
    var nativeIsArray = Array.isArray,
        nativeKeys = Object.keys,
        nativeBind = FuncProto.bind,
        nativeCreate = Object.create;

    // Naked function reference for surrogate-prototype-swapping.
    var Ctor = function () {};

    // Create a safe reference to the Underscore object for use below.
    var _ = function (obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };

    // Export the Underscore object for **Node.js**, with
    // backwards-compatibility for the old `require()` API. If we're in
    // the browser, add `_` as a global object.
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = _;
        }
        exports._ = _;
    } else {
        root._ = _;
    }

    // Current version.
    _.VERSION = '1.8.3';

    // Internal function that returns an efficient (for current engines) version
    // of the passed-in callback, to be repeatedly applied in other Underscore
    // functions.
    var optimizeCb = function (func, context, argCount) {
        if (context === void 0) return func;
        switch (argCount == null ? 3 : argCount) {
            case 1:
                return function (value) {
                    return func.call(context, value);
                };
            case 2:
                return function (value, other) {
                    return func.call(context, value, other);
                };
            case 3:
                return function (value, index, collection) {
                    return func.call(context, value, index, collection);
                };
            case 4:
                return function (accumulator, value, index, collection) {
                    return func.call(context, accumulator, value, index, collection);
                };
        }
        return function () {
            return func.apply(context, arguments);
        };
    };

    // A mostly-internal function to generate callbacks that can be applied
    // to each element in a collection, returning the desired result ?????????????????? either
    // identity, an arbitrary callback, a property matcher, or a property accessor.
    var cb = function (value, context, argCount) {
        if (value == null) return _.identity;
        if (_.isFunction(value)) return optimizeCb(value, context, argCount);
        if (_.isObject(value)) return _.matcher(value);
        return _.property(value);
    };
    _.iteratee = function (value, context) {
        return cb(value, context, Infinity);
    };

    // An internal function for creating assigner functions.
    var createAssigner = function (keysFunc, undefinedOnly) {
        return function (obj) {
            var length = arguments.length;
            if (length < 2 || obj == null) return obj;
            for (var index = 1; index < length; index++) {
                var source = arguments[index],
                    keys = keysFunc(source),
                    l = keys.length;
                for (var i = 0; i < l; i++) {
                    var key = keys[i];
                    if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
                }
            }
            return obj;
        };
    };

    // An internal function for creating a new object that inherits from another.
    var baseCreate = function (prototype) {
        if (!_.isObject(prototype)) return {};
        if (nativeCreate) return nativeCreate(prototype);
        Ctor.prototype = prototype;
        var result = new Ctor();
        Ctor.prototype = null;
        return result;
    };

    var property = function (key) {
        return function (obj) {
            return obj == null ? void 0 : obj[key];
        };
    };

    // Helper for collection methods to determine whether a collection
    // should be iterated as an array or as an object
    // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
    // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
    var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
    var getLength = property('length');
    var isArrayLike = function (collection) {
        var length = getLength(collection);
        return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
    };

    // Collection Functions
    // --------------------

    // The cornerstone, an `each` implementation, aka `forEach`.
    // Handles raw objects in addition to array-likes. Treats all
    // sparse array-likes as if they were dense.
    _.each = _.forEach = function (obj, iteratee, context) {
        iteratee = optimizeCb(iteratee, context);
        var i, length;
        if (isArrayLike(obj)) {
            for (i = 0, length = obj.length; i < length; i++) {
                iteratee(obj[i], i, obj);
            }
        } else {
            var keys = _.keys(obj);
            for (i = 0, length = keys.length; i < length; i++) {
                iteratee(obj[keys[i]], keys[i], obj);
            }
        }
        return obj;
    };

    // Return the results of applying the iteratee to each element.
    _.map = _.collect = function (obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length,
            results = Array(length);
        for (var index = 0; index < length; index++) {
            var currentKey = keys ? keys[index] : index;
            results[index] = iteratee(obj[currentKey], currentKey, obj);
        }
        return results;
    };

    // Create a reducing function iterating left or right.
    function createReduce(dir) {
        // Optimized iterator function as using arguments.length
        // in the main function will deoptimize the, see #1991.
        function iterator(obj, iteratee, memo, keys, index, length) {
            for (; index >= 0 && index < length; index += dir) {
                var currentKey = keys ? keys[index] : index;
                memo = iteratee(memo, obj[currentKey], currentKey, obj);
            }
            return memo;
        }

        return function (obj, iteratee, memo, context) {
            iteratee = optimizeCb(iteratee, context, 4);
            var keys = !isArrayLike(obj) && _.keys(obj),
                length = (keys || obj).length,
                index = dir > 0 ? 0 : length - 1;
            // Determine the initial value if none is provided.
            if (arguments.length < 3) {
                memo = obj[keys ? keys[index] : index];
                index += dir;
            }
            return iterator(obj, iteratee, memo, keys, index, length);
        };
    }

    // **Reduce** builds up a single result from a list of values, aka `inject`,
    // or `foldl`.
    _.reduce = _.foldl = _.inject = createReduce(1);

    // The right-associative version of reduce, also known as `foldr`.
    _.reduceRight = _.foldr = createReduce(-1);

    // Return the first value which passes a truth test. Aliased as `detect`.
    _.find = _.detect = function (obj, predicate, context) {
        var key;
        if (isArrayLike(obj)) {
            key = _.findIndex(obj, predicate, context);
        } else {
            key = _.findKey(obj, predicate, context);
        }
        if (key !== void 0 && key !== -1) return obj[key];
    };

    // Return all the elements that pass a truth test.
    // Aliased as `select`.
    _.filter = _.select = function (obj, predicate, context) {
        var results = [];
        predicate = cb(predicate, context);
        _.each(obj, function (value, index, list) {
            if (predicate(value, index, list)) results.push(value);
        });
        return results;
    };

    // Return all the elements for which a truth test fails.
    _.reject = function (obj, predicate, context) {
        return _.filter(obj, _.negate(cb(predicate)), context);
    };

    // Determine whether all of the elements match a truth test.
    // Aliased as `all`.
    _.every = _.all = function (obj, predicate, context) {
        predicate = cb(predicate, context);
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length;
        for (var index = 0; index < length; index++) {
            var currentKey = keys ? keys[index] : index;
            if (!predicate(obj[currentKey], currentKey, obj)) return false;
        }
        return true;
    };

    // Determine if at least one element in the object matches a truth test.
    // Aliased as `any`.
    _.some = _.any = function (obj, predicate, context) {
        predicate = cb(predicate, context);
        var keys = !isArrayLike(obj) && _.keys(obj),
            length = (keys || obj).length;
        for (var index = 0; index < length; index++) {
            var currentKey = keys ? keys[index] : index;
            if (predicate(obj[currentKey], currentKey, obj)) return true;
        }
        return false;
    };

    // Determine if the array or object contains a given item (using `===`).
    // Aliased as `includes` and `include`.
    _.contains =
        _.includes =
        _.include =
            function (obj, item, fromIndex, guard) {
                if (!isArrayLike(obj)) obj = _.values(obj);
                if (typeof fromIndex != 'number' || guard) fromIndex = 0;
                return _.indexOf(obj, item, fromIndex) >= 0;
            };

    // Invoke a method (with arguments) on every item in a collection.
    _.invoke = function (obj, method) {
        var args = slice.call(arguments, 2);
        var isFunc = _.isFunction(method);
        return _.map(obj, function (value) {
            var func = isFunc ? method : value[method];
            return func == null ? func : func.apply(value, args);
        });
    };

    // Convenience version of a common use case of `map`: fetching a property.
    _.pluck = function (obj, key) {
        return _.map(obj, _.property(key));
    };

    // Convenience version of a common use case of `filter`: selecting only objects
    // containing specific `key:value` pairs.
    _.where = function (obj, attrs) {
        return _.filter(obj, _.matcher(attrs));
    };

    // Convenience version of a common use case of `find`: getting the first object
    // containing specific `key:value` pairs.
    _.findWhere = function (obj, attrs) {
        return _.find(obj, _.matcher(attrs));
    };

    // Return the maximum element (or element-based computation).
    _.max = function (obj, iteratee, context) {
        var result = -Infinity,
            lastComputed = -Infinity,
            value,
            computed;
        if (iteratee == null && obj != null) {
            obj = isArrayLike(obj) ? obj : _.values(obj);
            for (var i = 0, length = obj.length; i < length; i++) {
                value = obj[i];
                if (value > result) {
                    result = value;
                }
            }
        } else {
            iteratee = cb(iteratee, context);
            _.each(obj, function (value, index, list) {
                computed = iteratee(value, index, list);
                if (computed > lastComputed || (computed === -Infinity && result === -Infinity)) {
                    result = value;
                    lastComputed = computed;
                }
            });
        }
        return result;
    };

    // Return the minimum element (or element-based computation).
    _.min = function (obj, iteratee, context) {
        var result = Infinity,
            lastComputed = Infinity,
            value,
            computed;
        if (iteratee == null && obj != null) {
            obj = isArrayLike(obj) ? obj : _.values(obj);
            for (var i = 0, length = obj.length; i < length; i++) {
                value = obj[i];
                if (value < result) {
                    result = value;
                }
            }
        } else {
            iteratee = cb(iteratee, context);
            _.each(obj, function (value, index, list) {
                computed = iteratee(value, index, list);
                if (computed < lastComputed || (computed === Infinity && result === Infinity)) {
                    result = value;
                    lastComputed = computed;
                }
            });
        }
        return result;
    };

    // Shuffle a collection, using the modern version of the
    // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher??????????????????Yates_shuffle).
    _.shuffle = function (obj) {
        var set = isArrayLike(obj) ? obj : _.values(obj);
        var length = set.length;
        var shuffled = Array(length);
        for (var index = 0, rand; index < length; index++) {
            rand = _.random(0, index);
            if (rand !== index) shuffled[index] = shuffled[rand];
            shuffled[rand] = set[index];
        }
        return shuffled;
    };

    // Sample **n** random values from a collection.
    // If **n** is not specified, returns a single random element.
    // The internal `guard` argument allows it to work with `map`.
    _.sample = function (obj, n, guard) {
        if (n == null || guard) {
            if (!isArrayLike(obj)) obj = _.values(obj);
            return obj[_.random(obj.length - 1)];
        }
        return _.shuffle(obj).slice(0, Math.max(0, n));
    };

    // Sort the object's values by a criterion produced by an iteratee.
    _.sortBy = function (obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        return _.pluck(
            _.map(obj, function (value, index, list) {
                return {
                    value: value,
                    index: index,
                    criteria: iteratee(value, index, list),
                };
            }).sort(function (left, right) {
                var a = left.criteria;
                var b = right.criteria;
                if (a !== b) {
                    if (a > b || a === void 0) return 1;
                    if (a < b || b === void 0) return -1;
                }
                return left.index - right.index;
            }),
            'value'
        );
    };

    // An internal function used for aggregate "group by" operations.
    var group = function (behavior) {
        return function (obj, iteratee, context) {
            var result = {};
            iteratee = cb(iteratee, context);
            _.each(obj, function (value, index) {
                var key = iteratee(value, index, obj);
                behavior(result, value, key);
            });
            return result;
        };
    };

    // Groups the object's values by a criterion. Pass either a string attribute
    // to group by, or a function that returns the criterion.
    _.groupBy = group(function (result, value, key) {
        if (_.has(result, key)) result[key].push(value);
        else result[key] = [value];
    });

    // Indexes the object's values by a criterion, similar to `groupBy`, but for
    // when you know that your index values will be unique.
    _.indexBy = group(function (result, value, key) {
        result[key] = value;
    });

    // Counts instances of an object that group by a certain criterion. Pass
    // either a string attribute to count by, or a function that returns the
    // criterion.
    _.countBy = group(function (result, value, key) {
        if (_.has(result, key)) result[key]++;
        else result[key] = 1;
    });

    // Safely create a real, live array from anything iterable.
    _.toArray = function (obj) {
        if (!obj) return [];
        if (_.isArray(obj)) return slice.call(obj);
        if (isArrayLike(obj)) return _.map(obj, _.identity);
        return _.values(obj);
    };

    // Return the number of elements in an object.
    _.size = function (obj) {
        if (obj == null) return 0;
        return isArrayLike(obj) ? obj.length : _.keys(obj).length;
    };

    // Split a collection into two arrays: one whose elements all satisfy the given
    // predicate, and one whose elements all do not satisfy the predicate.
    _.partition = function (obj, predicate, context) {
        predicate = cb(predicate, context);
        var pass = [],
            fail = [];
        _.each(obj, function (value, key, obj) {
            (predicate(value, key, obj) ? pass : fail).push(value);
        });
        return [pass, fail];
    };

    // Array Functions
    // ---------------

    // Get the first element of an array. Passing **n** will return the first N
    // values in the array. Aliased as `head` and `take`. The **guard** check
    // allows it to work with `_.map`.
    _.first =
        _.head =
        _.take =
            function (array, n, guard) {
                if (array == null) return void 0;
                if (n == null || guard) return array[0];
                return _.initial(array, array.length - n);
            };

    // Returns everything but the last entry of the array. Especially useful on
    // the arguments object. Passing **n** will return all the values in
    // the array, excluding the last N.
    _.initial = function (array, n, guard) {
        return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
    };

    // Get the last element of an array. Passing **n** will return the last N
    // values in the array.
    _.last = function (array, n, guard) {
        if (array == null) return void 0;
        if (n == null || guard) return array[array.length - 1];
        return _.rest(array, Math.max(0, array.length - n));
    };

    // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
    // Especially useful on the arguments object. Passing an **n** will return
    // the rest N values in the array.
    _.rest =
        _.tail =
        _.drop =
            function (array, n, guard) {
                return slice.call(array, n == null || guard ? 1 : n);
            };

    // Trim out all falsy values from an array.
    _.compact = function (array) {
        return _.filter(array, _.identity);
    };

    // Internal implementation of a recursive `flatten` function.
    var flatten = function (input, shallow, strict, startIndex) {
        var output = [],
            idx = 0;
        for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
            var value = input[i];
            if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
                //flatten current level of array or arguments object
                if (!shallow) value = flatten(value, shallow, strict);
                var j = 0,
                    len = value.length;
                output.length += len;
                while (j < len) {
                    output[idx++] = value[j++];
                }
            } else if (!strict) {
                output[idx++] = value;
            }
        }
        return output;
    };

    // Flatten out an array, either recursively (by default), or just one level.
    _.flatten = function (array, shallow) {
        return flatten(array, shallow, false);
    };

    // Return a version of the array that does not contain the specified value(s).
    _.without = function (array) {
        return _.difference(array, slice.call(arguments, 1));
    };

    // Produce a duplicate-free version of the array. If the array has already
    // been sorted, you have the option of using a faster algorithm.
    // Aliased as `unique`.
    _.uniq = _.unique = function (array, isSorted, iteratee, context) {
        if (!_.isBoolean(isSorted)) {
            context = iteratee;
            iteratee = isSorted;
            isSorted = false;
        }
        if (iteratee != null) iteratee = cb(iteratee, context);
        var result = [];
        var seen = [];
        for (var i = 0, length = getLength(array); i < length; i++) {
            var value = array[i],
                computed = iteratee ? iteratee(value, i, array) : value;
            if (isSorted) {
                if (!i || seen !== computed) result.push(value);
                seen = computed;
            } else if (iteratee) {
                if (!_.contains(seen, computed)) {
                    seen.push(computed);
                    result.push(value);
                }
            } else if (!_.contains(result, value)) {
                result.push(value);
            }
        }
        return result;
    };

    // Produce an array that contains the union: each distinct element from all of
    // the passed-in arrays.
    _.union = function () {
        return _.uniq(flatten(arguments, true, true));
    };

    // Produce an array that contains every item shared between all the
    // passed-in arrays.
    _.intersection = function (array) {
        var result = [];
        var argsLength = arguments.length;
        for (var i = 0, length = getLength(array); i < length; i++) {
            var item = array[i];
            if (_.contains(result, item)) continue;
            for (var j = 1; j < argsLength; j++) {
                if (!_.contains(arguments[j], item)) break;
            }
            if (j === argsLength) result.push(item);
        }
        return result;
    };

    // Take the difference between one array and a number of other arrays.
    // Only the elements present in just the first array will remain.
    _.difference = function (array) {
        var rest = flatten(arguments, true, true, 1);
        return _.filter(array, function (value) {
            return !_.contains(rest, value);
        });
    };

    // Zip together multiple lists into a single array -- elements that share
    // an index go together.
    _.zip = function () {
        return _.unzip(arguments);
    };

    // Complement of _.zip. Unzip accepts an array of arrays and groups
    // each array's elements on shared indices
    _.unzip = function (array) {
        var length = (array && _.max(array, getLength).length) || 0;
        var result = Array(length);

        for (var index = 0; index < length; index++) {
            result[index] = _.pluck(array, index);
        }
        return result;
    };

    // Converts lists into objects. Pass either a single array of `[key, value]`
    // pairs, or two parallel arrays of the same length -- one of keys, and one of
    // the corresponding values.
    _.object = function (list, values) {
        var result = {};
        for (var i = 0, length = getLength(list); i < length; i++) {
            if (values) {
                result[list[i]] = values[i];
            } else {
                result[list[i][0]] = list[i][1];
            }
        }
        return result;
    };

    // Generator function to create the findIndex and findLastIndex functions
    function createPredicateIndexFinder(dir) {
        return function (array, predicate, context) {
            predicate = cb(predicate, context);
            var length = getLength(array);
            var index = dir > 0 ? 0 : length - 1;
            for (; index >= 0 && index < length; index += dir) {
                if (predicate(array[index], index, array)) return index;
            }
            return -1;
        };
    }

    // Returns the first index on an array-like that passes a predicate test
    _.findIndex = createPredicateIndexFinder(1);
    _.findLastIndex = createPredicateIndexFinder(-1);

    // Use a comparator function to figure out the smallest index at which
    // an object should be inserted so as to maintain order. Uses binary search.
    _.sortedIndex = function (array, obj, iteratee, context) {
        iteratee = cb(iteratee, context, 1);
        var value = iteratee(obj);
        var low = 0,
            high = getLength(array);
        while (low < high) {
            var mid = Math.floor((low + high) / 2);
            if (iteratee(array[mid]) < value) low = mid + 1;
            else high = mid;
        }
        return low;
    };

    // Generator function to create the indexOf and lastIndexOf functions
    function createIndexFinder(dir, predicateFind, sortedIndex) {
        return function (array, item, idx) {
            var i = 0,
                length = getLength(array);
            if (typeof idx == 'number') {
                if (dir > 0) {
                    i = idx >= 0 ? idx : Math.max(idx + length, i);
                } else {
                    length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
                }
            } else if (sortedIndex && idx && length) {
                idx = sortedIndex(array, item);
                return array[idx] === item ? idx : -1;
            }
            if (item !== item) {
                idx = predicateFind(slice.call(array, i, length), _.isNaN);
                return idx >= 0 ? idx + i : -1;
            }
            for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
                if (array[idx] === item) return idx;
            }
            return -1;
        };
    }

    // Return the position of the first occurrence of an item in an array,
    // or -1 if the item is not included in the array.
    // If the array is large and already in sort order, pass `true`
    // for **isSorted** to use binary search.
    _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
    _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

    // Generate an integer Array containing an arithmetic progression. A port of
    // the native Python `range()` function. See
    // [the Python documentation](http://docs.python.org/library/functions.html#range).
    _.range = function (start, stop, step) {
        if (stop == null) {
            stop = start || 0;
            start = 0;
        }
        step = step || 1;

        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var range = Array(length);

        for (var idx = 0; idx < length; idx++, start += step) {
            range[idx] = start;
        }

        return range;
    };

    // Function (ahem) Functions
    // ------------------

    // Determines whether to execute a function as a constructor
    // or a normal function with the provided arguments
    var executeBound = function (sourceFunc, boundFunc, context, callingContext, args) {
        if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
        var self = baseCreate(sourceFunc.prototype);
        var result = sourceFunc.apply(self, args);
        if (_.isObject(result)) return result;
        return self;
    };

    // Create a function bound to a given object (assigning `this`, and arguments,
    // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
    // available.
    _.bind = function (func, context) {
        if (nativeBind && func.bind === nativeBind)
            return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
        var args = slice.call(arguments, 2);
        var bound = function () {
            return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
        };
        return bound;
    };

    // Partially apply a function by creating a version that has had some of its
    // arguments pre-filled, without changing its dynamic `this` context. _ acts
    // as a placeholder, allowing any combination of arguments to be pre-filled.
    _.partial = function (func) {
        var boundArgs = slice.call(arguments, 1);
        var bound = function () {
            var position = 0,
                length = boundArgs.length;
            var args = Array(length);
            for (var i = 0; i < length; i++) {
                args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
            }
            while (position < arguments.length) args.push(arguments[position++]);
            return executeBound(func, bound, this, this, args);
        };
        return bound;
    };

    // Bind a number of an object's methods to that object. Remaining arguments
    // are the method names to be bound. Useful for ensuring that all callbacks
    // defined on an object belong to it.
    _.bindAll = function (obj) {
        var i,
            length = arguments.length,
            key;
        if (length <= 1) throw new Error('bindAll must be passed function names');
        for (i = 1; i < length; i++) {
            key = arguments[i];
            obj[key] = _.bind(obj[key], obj);
        }
        return obj;
    };

    // Memoize an expensive function by storing its results.
    _.memoize = function (func, hasher) {
        var memoize = function (key) {
            var cache = memoize.cache;
            var address = '' + (hasher ? hasher.apply(this, arguments) : key);
            if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
            return cache[address];
        };
        memoize.cache = {};
        return memoize;
    };

    // Delays a function for the given number of milliseconds, and then calls
    // it with the arguments supplied.
    _.delay = function (func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function () {
            return func.apply(null, args);
        }, wait);
    };

    // Defers a function, scheduling it to run after the current call stack has
    // cleared.
    _.defer = _.partial(_.delay, _, 1);

    // Returns a function, that, when invoked, will only be triggered at most once
    // during a given window of time. Normally, the throttled function will run
    // as much as it can, without ever going more than once per `wait` duration;
    // but if you'd like to disable the execution on the leading edge, pass
    // `{leading: false}`. To disable execution on the trailing edge, ditto.
    _.throttle = function (func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) options = {};
        var later = function () {
            previous = options.leading === false ? 0 : _.now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function () {
            var now = _.now();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    _.debounce = function (func, wait, immediate) {
        var timeout, args, context, timestamp, result;

        var later = function () {
            var last = _.now() - timestamp;

            if (last < wait && last >= 0) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                }
            }
        };

        return function () {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) timeout = setTimeout(later, wait);
            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }

            return result;
        };
    };

    // Returns the first function passed as an argument to the second,
    // allowing you to adjust arguments, run code before and after, and
    // conditionally execute the original function.
    _.wrap = function (func, wrapper) {
        return _.partial(wrapper, func);
    };

    // Returns a negated version of the passed-in predicate.
    _.negate = function (predicate) {
        return function () {
            return !predicate.apply(this, arguments);
        };
    };

    // Returns a function that is the composition of a list of functions, each
    // consuming the return value of the function that follows.
    _.compose = function () {
        var args = arguments;
        var start = args.length - 1;
        return function () {
            var i = start;
            var result = args[start].apply(this, arguments);
            while (i--) result = args[i].call(this, result);
            return result;
        };
    };

    // Returns a function that will only be executed on and after the Nth call.
    _.after = function (times, func) {
        return function () {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };

    // Returns a function that will only be executed up to (but not including) the Nth call.
    _.before = function (times, func) {
        var memo;
        return function () {
            if (--times > 0) {
                memo = func.apply(this, arguments);
            }
            if (times <= 1) func = null;
            return memo;
        };
    };

    // Returns a function that will be executed at most one time, no matter how
    // often you call it. Useful for lazy initialization.
    _.once = _.partial(_.before, 2);

    // Object Functions
    // ----------------

    // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
    var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
    var nonEnumerableProps = [
        'valueOf',
        'isPrototypeOf',
        'toString',
        'propertyIsEnumerable',
        'hasOwnProperty',
        'toLocaleString',
    ];

    function collectNonEnumProps(obj, keys) {
        var nonEnumIdx = nonEnumerableProps.length;
        var constructor = obj.constructor;
        var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

        // Constructor is a special case.
        var prop = 'constructor';
        if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

        while (nonEnumIdx--) {
            prop = nonEnumerableProps[nonEnumIdx];
            if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
                keys.push(prop);
            }
        }
    }

    // Retrieve the names of an object's own properties.
    // Delegates to **ECMAScript 5**'s native `Object.keys`
    _.keys = function (obj) {
        if (!_.isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];
        for (var key in obj) if (_.has(obj, key)) keys.push(key);
        // Ahem, IE < 9.
        if (hasEnumBug) collectNonEnumProps(obj, keys);
        return keys;
    };

    // Retrieve all the property names of an object.
    _.allKeys = function (obj) {
        if (!_.isObject(obj)) return [];
        var keys = [];
        for (var key in obj) keys.push(key);
        // Ahem, IE < 9.
        if (hasEnumBug) collectNonEnumProps(obj, keys);
        return keys;
    };

    // Retrieve the values of an object's properties.
    _.values = function (obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var values = Array(length);
        for (var i = 0; i < length; i++) {
            values[i] = obj[keys[i]];
        }
        return values;
    };

    // Returns the results of applying the iteratee to each element of the object
    // In contrast to _.map it returns an object
    _.mapObject = function (obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        var keys = _.keys(obj),
            length = keys.length,
            results = {},
            currentKey;
        for (var index = 0; index < length; index++) {
            currentKey = keys[index];
            results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
        }
        return results;
    };

    // Convert an object into a list of `[key, value]` pairs.
    _.pairs = function (obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var pairs = Array(length);
        for (var i = 0; i < length; i++) {
            pairs[i] = [keys[i], obj[keys[i]]];
        }
        return pairs;
    };

    // Invert the keys and values of an object. The values must be serializable.
    _.invert = function (obj) {
        var result = {};
        var keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
            result[obj[keys[i]]] = keys[i];
        }
        return result;
    };

    // Return a sorted list of the function names available on the object.
    // Aliased as `methods`
    _.functions = _.methods = function (obj) {
        var names = [];
        for (var key in obj) {
            if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    };

    // Extend a given object with all the properties in passed-in object(s).
    _.extend = createAssigner(_.allKeys);

    // Assigns a given object with all the own properties in the passed-in object(s)
    // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
    _.extendOwn = _.assign = createAssigner(_.keys);

    // Returns the first key on an object that passes a predicate test
    _.findKey = function (obj, predicate, context) {
        predicate = cb(predicate, context);
        var keys = _.keys(obj),
            key;
        for (var i = 0, length = keys.length; i < length; i++) {
            key = keys[i];
            if (predicate(obj[key], key, obj)) return key;
        }
    };

    // Return a copy of the object only containing the whitelisted properties.
    _.pick = function (object, oiteratee, context) {
        var result = {},
            obj = object,
            iteratee,
            keys;
        if (obj == null) return result;
        if (_.isFunction(oiteratee)) {
            keys = _.allKeys(obj);
            iteratee = optimizeCb(oiteratee, context);
        } else {
            keys = flatten(arguments, false, false, 1);
            iteratee = function (value, key, obj) {
                return key in obj;
            };
            obj = Object(obj);
        }
        for (var i = 0, length = keys.length; i < length; i++) {
            var key = keys[i];
            var value = obj[key];
            if (iteratee(value, key, obj)) result[key] = value;
        }
        return result;
    };

    // Return a copy of the object without the blacklisted properties.
    _.omit = function (obj, iteratee, context) {
        if (_.isFunction(iteratee)) {
            iteratee = _.negate(iteratee);
        } else {
            var keys = _.map(flatten(arguments, false, false, 1), String);
            iteratee = function (value, key) {
                return !_.contains(keys, key);
            };
        }
        return _.pick(obj, iteratee, context);
    };

    // Fill in a given object with default properties.
    _.defaults = createAssigner(_.allKeys, true);

    // Creates an object that inherits from the given prototype object.
    // If additional properties are provided then they will be added to the
    // created object.
    _.create = function (prototype, props) {
        var result = baseCreate(prototype);
        if (props) _.extendOwn(result, props);
        return result;
    };

    // Create a (shallow-cloned) duplicate of an object.
    _.clone = function (obj) {
        if (!_.isObject(obj)) return obj;
        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
    };

    // Invokes interceptor with the obj, and then returns obj.
    // The primary purpose of this method is to "tap into" a method chain, in
    // order to perform operations on intermediate results within the chain.
    _.tap = function (obj, interceptor) {
        interceptor(obj);
        return obj;
    };

    // Returns whether an object has a given set of `key:value` pairs.
    _.isMatch = function (object, attrs) {
        var keys = _.keys(attrs),
            length = keys.length;
        if (object == null) return !length;
        var obj = Object(object);
        for (var i = 0; i < length; i++) {
            var key = keys[i];
            if (attrs[key] !== obj[key] || !(key in obj)) return false;
        }
        return true;
    };

    // Internal recursive comparison function for `isEqual`.
    var eq = function (a, b, aStack, bStack) {
        // Identical objects are equal. `0 === -0`, but they aren't identical.
        // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
        if (a === b) return a !== 0 || 1 / a === 1 / b;
        // A strict comparison is necessary because `null == undefined`.
        if (a == null || b == null) return a === b;
        // Unwrap any wrapped objects.
        if (a instanceof _) a = a._wrapped;
        if (b instanceof _) b = b._wrapped;
        // Compare `[[Class]]` names.
        var className = toString.call(a);
        if (className !== toString.call(b)) return false;
        switch (className) {
            // Strings, numbers, regular expressions, dates, and booleans are compared by value.
            case '[object RegExp]':
            // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
            case '[object String]':
                // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
                // equivalent to `new String("5")`.
                return '' + a === '' + b;
            case '[object Number]':
                // `NaN`s are equivalent, but non-reflexive.
                // Object(NaN) is equivalent to NaN
                if (+a !== +a) return +b !== +b;
                // An `egal` comparison is performed for other numeric values.
                return +a === 0 ? 1 / +a === 1 / b : +a === +b;
            case '[object Date]':
            case '[object Boolean]':
                // Coerce dates and booleans to numeric primitive values. Dates are compared by their
                // millisecond representations. Note that invalid dates with millisecond representations
                // of `NaN` are not equivalent.
                return +a === +b;
        }

        var areArrays = className === '[object Array]';
        if (!areArrays) {
            if (typeof a != 'object' || typeof b != 'object') return false;

            // Objects with different constructors are not equivalent, but `Object`s or `Array`s
            // from different frames are.
            var aCtor = a.constructor,
                bCtor = b.constructor;
            if (
                aCtor !== bCtor &&
                !(
                    _.isFunction(aCtor) &&
                    aCtor instanceof aCtor &&
                    _.isFunction(bCtor) &&
                    bCtor instanceof bCtor
                ) &&
                'constructor' in a &&
                'constructor' in b
            ) {
                return false;
            }
        }
        // Assume equality for cyclic structures. The algorithm for detecting cyclic
        // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

        // Initializing stack of traversed objects.
        // It's done here since we only need them for objects and arrays comparison.
        aStack = aStack || [];
        bStack = bStack || [];
        var length = aStack.length;
        while (length--) {
            // Linear search. Performance is inversely proportional to the number of
            // unique nested structures.
            if (aStack[length] === a) return bStack[length] === b;
        }

        // Add the first object to the stack of traversed objects.
        aStack.push(a);
        bStack.push(b);

        // Recursively compare objects and arrays.
        if (areArrays) {
            // Compare array lengths to determine if a deep comparison is necessary.
            length = a.length;
            if (length !== b.length) return false;
            // Deep compare the contents, ignoring non-numeric properties.
            while (length--) {
                if (!eq(a[length], b[length], aStack, bStack)) return false;
            }
        } else {
            // Deep compare objects.
            var keys = _.keys(a),
                key;
            length = keys.length;
            // Ensure that both objects contain the same number of properties before comparing deep equality.
            if (_.keys(b).length !== length) return false;
            while (length--) {
                // Deep compare each member
                key = keys[length];
                if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
            }
        }
        // Remove the first object from the stack of traversed objects.
        aStack.pop();
        bStack.pop();
        return true;
    };

    // Perform a deep comparison to check if two objects are equal.
    _.isEqual = function (a, b) {
        return eq(a, b);
    };

    // Is a given array, string, or object empty?
    // An "empty" object has no enumerable own-properties.
    _.isEmpty = function (obj) {
        if (obj == null) return true;
        if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)))
            return obj.length === 0;
        return _.keys(obj).length === 0;
    };

    // Is a given value a DOM element?
    _.isElement = function (obj) {
        return !!(obj && obj.nodeType === 1);
    };

    // Is a given value an array?
    // Delegates to ECMA5's native Array.isArray
    _.isArray =
        nativeIsArray ||
        function (obj) {
            return toString.call(obj) === '[object Array]';
        };

    // Is a given variable an object?
    _.isObject = function (obj) {
        var type = typeof obj;
        return type === 'function' || (type === 'object' && !!obj);
    };

    // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
    _.each(
        ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'],
        function (name) {
            _['is' + name] = function (obj) {
                return toString.call(obj) === '[object ' + name + ']';
            };
        }
    );

    // Define a fallback version of the method in browsers (ahem, IE < 9), where
    // there isn't any inspectable "Arguments" type.
    if (!_.isArguments(arguments)) {
        _.isArguments = function (obj) {
            return _.has(obj, 'callee');
        };
    }

    // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
    // IE 11 (#1621), and in Safari 8 (#1929).
    if (typeof /./ != 'function' && typeof Int8Array != 'object') {
        _.isFunction = function (obj) {
            return typeof obj == 'function' || false;
        };
    }

    // Is a given object a finite number?
    _.isFinite = function (obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
    };

    // Is the given value `NaN`? (NaN is the only number which does not equal itself).
    _.isNaN = function (obj) {
        return _.isNumber(obj) && obj !== +obj;
    };

    // Is a given value a boolean?
    _.isBoolean = function (obj) {
        return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
    };

    // Is a given value equal to null?
    _.isNull = function (obj) {
        return obj === null;
    };

    // Is a given variable undefined?
    _.isUndefined = function (obj) {
        return obj === void 0;
    };

    // Shortcut function for checking if an object has a given property directly
    // on itself (in other words, not on a prototype).
    _.has = function (obj, key) {
        return obj != null && hasOwnProperty.call(obj, key);
    };

    // Utility Functions
    // -----------------

    // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
    // previous owner. Returns a reference to the Underscore object.
    _.noConflict = function () {
        root._ = previousUnderscore;
        return this;
    };

    // Keep the identity function around for default iteratees.
    _.identity = function (value) {
        return value;
    };

    // Predicate-generating functions. Often useful outside of Underscore.
    _.constant = function (value) {
        return function () {
            return value;
        };
    };

    _.noop = function () {};

    _.property = property;

    // Generates a function for a given object that returns a given property.
    _.propertyOf = function (obj) {
        return obj == null
            ? function () {}
            : function (key) {
                  return obj[key];
              };
    };

    // Returns a predicate for checking whether an object has a given set of
    // `key:value` pairs.
    _.matcher = _.matches = function (attrs) {
        attrs = _.extendOwn({}, attrs);
        return function (obj) {
            return _.isMatch(obj, attrs);
        };
    };

    // Run a function **n** times.
    _.times = function (n, iteratee, context) {
        var accum = Array(Math.max(0, n));
        iteratee = optimizeCb(iteratee, context, 1);
        for (var i = 0; i < n; i++) accum[i] = iteratee(i);
        return accum;
    };

    // Return a random integer between min and max (inclusive).
    _.random = function (min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    };

    // A (possibly faster) way to get the current timestamp as an integer.
    _.now =
        Date.now ||
        function () {
            return new Date().getTime();
        };

    // List of HTML entities for escaping.
    var escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;',
    };
    var unescapeMap = _.invert(escapeMap);

    // Functions for escaping and unescaping strings to/from HTML interpolation.
    var createEscaper = function (map) {
        var escaper = function (match) {
            return map[match];
        };
        // Regexes for identifying a key that needs to be escaped
        var source = '(?:' + _.keys(map).join('|') + ')';
        var testRegexp = RegExp(source);
        var replaceRegexp = RegExp(source, 'g');
        return function (string) {
            string = string == null ? '' : '' + string;
            return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
        };
    };
    _.escape = createEscaper(escapeMap);
    _.unescape = createEscaper(unescapeMap);

    // If the value of the named `property` is a function then invoke it with the
    // `object` as context; otherwise, return it.
    _.result = function (object, property, fallback) {
        var value = object == null ? void 0 : object[property];
        if (value === void 0) {
            value = fallback;
        }
        return _.isFunction(value) ? value.call(object) : value;
    };

    // Generate a unique integer id (unique within the entire client session).
    // Useful for temporary DOM ids.
    var idCounter = 0;
    _.uniqueId = function (prefix) {
        var id = ++idCounter + '';
        return prefix ? prefix + id : id;
    };

    // By default, Underscore uses ERB-style template delimiters, change the
    // following template settings to use alternative delimiters.
    _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g,
    };

    // When customizing `templateSettings`, if you don't want to define an
    // interpolation, evaluation or escaping regex, we need one that is
    // guaranteed not to match.
    var noMatch = /(.)^/;

    // Certain characters need to be escaped so that they can be put into a
    // string literal.
    var escapes = {
        "'": "'",
        '\\': '\\',
        '\r': 'r',
        '\n': 'n',
        '\u2028': 'u2028',
        '\u2029': 'u2029',
    };

    var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

    var escapeChar = function (match) {
        return '\\' + escapes[match];
    };

    // JavaScript micro-templating, similar to John Resig's implementation.
    // Underscore templating handles arbitrary delimiters, preserves whitespace,
    // and correctly escapes quotes within interpolated code.
    // NB: `oldSettings` only exists for backwards compatibility.
    _.template = function (text, settings, oldSettings) {
        if (!settings && oldSettings) settings = oldSettings;
        settings = _.defaults({}, settings, _.templateSettings);

        // Combine delimiters into one regular expression via alternation.
        var matcher = RegExp(
            [
                (settings.escape || noMatch).source,
                (settings.interpolate || noMatch).source,
                (settings.evaluate || noMatch).source,
            ].join('|') + '|$',
            'g'
        );

        // Compile the template source, escaping string literals appropriately.
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escaper, escapeChar);
            index = offset + match.length;

            if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
            }

            // Adobe VMs need the match returned to produce the correct offest.
            return match;
        });
        source += "';\n";

        // If a variable is not specified, place data values in local scope.
        if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

        source =
            "var __t,__p='',__j=Array.prototype.join," +
            "print=function(){__p+=__j.call(arguments,'');};\n" +
            source +
            'return __p;\n';

        try {
            var render = new Function(settings.variable || 'obj', '_', source);
        } catch (e) {
            e.source = source;
            throw e;
        }

        var template = function (data) {
            return render.call(this, data, _);
        };

        // Provide the compiled source as a convenience for precompilation.
        var argument = settings.variable || 'obj';
        template.source = 'function(' + argument + '){\n' + source + '}';

        return template;
    };

    // Add a "chain" function. Start chaining a wrapped Underscore object.
    _.chain = function (obj) {
        var instance = _(obj);
        instance._chain = true;
        return instance;
    };

    // OOP
    // ---------------
    // If Underscore is called as a function, it returns a wrapped object that
    // can be used OO-style. This wrapper holds altered versions of all the
    // underscore functions. Wrapped objects may be chained.

    // Helper function to continue chaining intermediate results.
    var result = function (instance, obj) {
        return instance._chain ? _(obj).chain() : obj;
    };

    // Add your own custom functions to the Underscore object.
    _.mixin = function (obj) {
        _.each(_.functions(obj), function (name) {
            var func = (_[name] = obj[name]);
            _.prototype[name] = function () {
                var args = [this._wrapped];
                push.apply(args, arguments);
                return result(this, func.apply(_, args));
            };
        });
    };

    // Add all of the Underscore functions to the wrapper object.
    _.mixin(_);

    // Add all mutator Array functions to the wrapper.
    _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
        var method = ArrayProto[name];
        _.prototype[name] = function () {
            var obj = this._wrapped;
            method.apply(obj, arguments);
            if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
            return result(this, obj);
        };
    });

    // Add all accessor Array functions to the wrapper.
    _.each(['concat', 'join', 'slice'], function (name) {
        var method = ArrayProto[name];
        _.prototype[name] = function () {
            return result(this, method.apply(this._wrapped, arguments));
        };
    });

    // Extracts the result from a wrapped and chained object.
    _.prototype.value = function () {
        return this._wrapped;
    };

    // Provide unwrapping proxy for some methods used in engine operations
    // such as arithmetic and JSON stringification.
    _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

    _.prototype.toString = function () {
        return '' + this._wrapped;
    };

    // AMD registration happens at the end for compatibility with AMD loaders
    // that may not enforce next-turn semantics on modules. Even though general
    // practice for AMD registration is to be anonymous, underscore registers
    // as a named module because, like jQuery, it is a base library that is
    // popular enough to be bundled in a third party lib, but not be part of
    // an AMD load request. Those cases could generate an error when an
    // anonymous define() is called outside of a loader request.
    if (typeof define === 'function' && define.amd) {
        define('underscore', [], function () {
            return _;
        });
    }
}.call(this));

//! moment.js
//! version : 2.15.2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        ? (module.exports = factory())
        : typeof define === 'function' && define.amd
        ? define(factory)
        : (global.moment = factory());
})(this, function () {
    'use strict';

    var hookCallback;

    function utils_hooks__hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        var k;
        for (k in obj) {
            // even if its not own property I'd still call it non-empty
            return false;
        }
        return true;
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [],
            i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function create_utc__createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            meridiem: null,
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function valid__isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid =
                !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid =
                    isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            } else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function valid__createInvalid(flags) {
        var m = create_utc__createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    function isUndefined(input) {
        return input === void 0;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = (utils_hooks__hooks.momentProperties = []);

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            utils_hooks__hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (
                (dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
            ) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (
            utils_hooks__hooks.suppressDeprecationWarnings === false &&
            typeof console !== 'undefined' &&
            console.warn
        ) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (utils_hooks__hooks.deprecationHandler != null) {
                utils_hooks__hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(
                    msg +
                        '\nArguments: ' +
                        Array.prototype.slice.call(args).join('') +
                        '\n' +
                        new Error().stack
                );
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (utils_hooks__hooks.deprecationHandler != null) {
            utils_hooks__hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    utils_hooks__hooks.suppressDeprecationWarnings = false;
    utils_hooks__hooks.deprecationHandler = null;

    function isFunction(input) {
        return (
            input instanceof Function ||
            Object.prototype.toString.call(input) === '[object Function]'
        );
    }

    function locale_set__set(config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _ordinalParseLenient.
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (
                hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])
            ) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i,
                res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L',
    };

    function locale_calendar__calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'DD MM, YYYY',
        LLL: 'DD MM, YYYY h:mm A',
        LLLL: 'DD, MM, YYYY h:mm A',
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
    };

    function relative__relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output)
            ? output(number, withoutSuffix, string, isFuture)
            : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string'
            ? aliases[units] || aliases[units.toLowerCase()]
            : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({ unit: u, priority: priorities[u] });
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                get_set__set(this, unit, value);
                utils_hooks__hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get_set__get(this, unit);
            }
        };
    }

    function get_set__get(mom, unit) {
        return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function get_set__set(mom, unit, value) {
        if (mom.isValid()) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }

    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (
            (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
            absNumber
        );
    }

    var formattingTokens =
        /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '',
                i;
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1 = /\d/; //       0 - 9
    var match2 = /\d\d/; //      00 - 99
    var match3 = /\d{3}/; //     000 - 999
    var match4 = /\d{4}/; //    0000 - 9999
    var match6 = /[+-]?\d{6}/; // -999999 - 999999
    var match1to2 = /\d\d?/; //       0 - 99
    var match3to4 = /\d\d\d\d?/; //     999 - 9999
    var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3 = /\d{1,3}/; //       0 - 999
    var match1to4 = /\d{1,4}/; //       0 - 9999
    var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

    var matchUnsigned = /\d+/; //       0 - inf
    var matchSigned = /[+-]?\d+/; //    -inf - inf

    var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord =
        /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;

    var regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex)
            ? regex
            : function (isStrict, localeData) {
                  return isStrict && strictRegex ? strictRegex : regex;
              };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(
            s
                .replace('\\', '')
                .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
                    return p1 || p2 || p3 || p4;
                })
        );
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i,
            func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (typeof callback === 'number') {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths =
        'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
        );
    function localeMonths(m, format) {
        if (!m) {
            return this._months;
        }
        return isArray(this._months)
            ? this._months[m.month()]
            : this._months[
                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'
              ][m.month()];
    }

    var defaultLocaleMonthsShort =
        'Th??ng 1_Th??ng 2_Th??ng 3_Th??ng 4_Th??ng 5_Th??ng 6_Th??ng 7_Th??ng 8_Th??ng 9_Th??ng 10_Th??ng 11_Th??ng 12'.split(
            '_'
        );
    function localeMonthsShort(m, format) {
        if (!m) {
            return this._monthsShort;
        }
        return isArray(this._monthsShort)
            ? this._monthsShort[m.month()]
            : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function units_month__handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = create_utc__createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return units_month__handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp(
                    '^' + this.months(mom, '').replace('.', '') + '$',
                    'i'
                );
                this._shortMonthsParse[i] = new RegExp(
                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                    'i'
                );
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (typeof value !== 'number') {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            utils_hooks__hooks.updateOffset(this, true);
            return this;
        } else {
            return get_set__get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict
                ? this._monthsStrictRegex
                : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] =
            input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    utils_hooks__hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function createDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));

        //the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear,
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear,
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
        '_'
    );
    function localeWeekdays(m, format) {
        if (!m) {
            return this._weekdays;
        }
        return isArray(this._weekdays)
            ? this._weekdays[m.day()]
            : this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][
                  m.day()
              ];
    }

    var defaultLocaleWeekdaysShort = 'Ch??? nh???t_Th??? 2_Th??? 3_Th??? 4_Th??? 5_Th??? 6_Th??? 7_'.split('_');
    function localeWeekdaysShort(m) {
        return m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin(m) {
        return m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function day_of_week__handleStrictParse(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = create_utc__createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = create_utc__createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdays(mom, '').replace('.', '.?') + '$',
                    'i'
                );
                this._shortWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysShort(mom, '').replace('.', '.?') + '$',
                    'i'
                );
                this._minWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysMin(mom, '').replace('.', '.?') + '$',
                    'i'
                );
            }
            if (!this._weekdaysParse[i]) {
                regex =
                    '^' +
                    this.weekdays(mom, '') +
                    '|^' +
                    this.weekdaysShort(mom, '') +
                    '|^' +
                    this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (
                strict &&
                format === 'ddd' &&
                this._shortWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex;
        }
    }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }

    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        ordinalParse: defaultOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse,
    };

    // internal storage for locale config files
    var locales = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && typeof module !== 'undefined' && module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we
                // want to undo that for lazy loaded locales
                locale_locales__getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function locale_locales__getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = locale_locales__getLocale(key);
            } else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple(
                    'defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                );
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    // treat as if there is no base config
                    deprecateSimple(
                        'parentLocaleUndefined',
                        'specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/'
                    );
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            // backwards compat for now: also set the locale
            locale_locales__getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale,
                parentConfig = baseConfig;
            // MERGE
            if (locales[name] != null) {
                parentConfig = locales[name]._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            locale_locales__getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function locale_locales__getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function locale_locales__listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11
                    ? MONTH
                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                    ? DATE
                    : a[HOUR] < 0 ||
                      a[HOUR] > 24 ||
                      (a[HOUR] === 24 &&
                          (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0))
                    ? HOUR
                    : a[MINUTE] < 0 || a[MINUTE] > 59
                    ? MINUTE
                    : a[SECOND] < 0 || a[SECOND] > 59
                    ? SECOND
                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                    ? MILLISECOND
                    : -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex =
        /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
    var basicIsoRegex =
        /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/],
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/],
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    utils_hooks__hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized ISO format. moment construction falls back to js Date(), ' +
            'which is not reliable across all browsers and versions. Non ISO date formats are ' +
            'discouraged and will be removed in an upcoming major release. Please refer to ' +
            'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(utils_hooks__hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (
            config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0
        ) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = defaults(
                w.gg,
                config._a[YEAR],
                weekOfYear(local__createLocal(), dow, doy).year
            );
            week = defaults(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    utils_hooks__hooks.ISO_8601 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === utils_hooks__hooks.ISO_8601) {
            configFromISO(config);
            return;
        }

        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (
            config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0
        ) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!valid__isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map(
            [i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond],
            function (obj) {
                return obj && parseInt(obj, 10);
            }
        );

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || locale_locales__getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return valid__createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (isDate(input)) {
            config._d = input;
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!valid__isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (input === undefined) {
            config._d = new Date(utils_hooks__hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (typeof input === 'object') {
            configFromObject(config);
        } else if (typeof input === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (typeof locale === 'boolean') {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) || (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function local__createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = local__createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return valid__createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = local__createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return valid__createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return local__createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +new Date();
    };

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds =
            +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = locale_locales__getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher) || [];
        var chunk = matches[matches.length - 1] || [];
        var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff =
                (isMoment(input) || isDate(input)
                    ? input.valueOf()
                    : local__createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            utils_hooks__hooks.updateOffset(res, false);
            return res;
        } else {
            return local__createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    utils_hooks__hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
            } else if (Math.abs(input) < 16) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    add_subtract__addSubtract(
                        this,
                        create__createDuration(input - offset, 'm'),
                        1,
                        false
                    );
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    utils_hooks__hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm) {
            this.utcOffset(this._tzm);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);

            if (tZone === 0) {
                this.utcOffset(0, true);
            } else {
                this.utcOffset(offsetFromString(matchOffset, this._i));
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? local__createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex =
        /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

    function create__createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months,
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign),
            };
        } else if (duration == null) {
            // checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('T???' in duration || '?????n' in duration)) {
            diffRes = momentsDifference(
                local__createLocal(duration.from),
                local__createLocal(duration.to)
            );

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    create__createDuration.fn = Duration.prototype;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = { milliseconds: 0, months: 0 };

        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(
                    name,
                    'moment().' +
                        name +
                        '(period, number) is deprecated. Please use moment().' +
                        name +
                        '(number, period). ' +
                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                );
                tmp = val;
                val = period;
                period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = create__createDuration(val, period);
            add_subtract__addSubtract(this, dur, direction);
            return this;
        };
    }

    function add_subtract__addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (days) {
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
        }
        if (months) {
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            utils_hooks__hooks.updateOffset(mom, days || months);
        }
    }

    var add_subtract__add = createAdder(1, 'add');
    var add_subtract__subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6
            ? 'sameElse'
            : diff < -1
            ? 'lastWeek'
            : diff < 0
            ? 'lastDay'
            : diff < 1
            ? 'sameDay'
            : diff < 2
            ? 'nextDay'
            : diff < 7
            ? 'nextWeek'
            : 'sameElse';
    }

    function moment_calendar__calendar(time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || local__createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = utils_hooks__hooks.calendarFormat(this, sod) || 'sameElse';

        var output =
            formats &&
            (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(
            output || this.localeData().calendar(format, this, local__createLocal(now))
        );
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        inclusivity = inclusivity || '()';
        return (
            (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units))
        );
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return (
                this.clone().startOf(units).valueOf() <= inputMs &&
                inputMs <= this.clone().endOf(units).valueOf()
            );
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that, zoneDelta, delta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        if (units === 'year' || units === 'month' || units === 'quarter') {
            output = monthDiff(this, that);
            if (units === 'quarter') {
                output = output / 3;
            } else if (units === 'year') {
                output = output / 12;
            }
        } else {
            delta = this - that;
            output =
                units === 'second'
                    ? delta / 1e3 // 1000
                    : units === 'minute'
                    ? delta / 6e4 // 1000 * 60
                    : units === 'hour'
                    ? delta / 36e5 // 1000 * 60 * 60
                    : units === 'day'
                    ? (delta - zoneDelta) / 864e5 // 1000 * 60 * 60 * 24, negate dst
                    : units === 'week'
                    ? (delta - zoneDelta) / 6048e5 // 1000 * 60 * 60 * 24 * 7, negate dst
                    : delta;
        }
        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function moment_format__toISOString() {
        var m = this.clone().utc();
        if (0 < m.year() && m.year() <= 9999) {
            if (isFunction(Date.prototype.toISOString)) {
                // native implementation is ~50x faster, use it when we can
                return this.toDate().toISOString();
            } else {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        } else {
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc()
                ? utils_hooks__hooks.defaultFormatUtc
                : utils_hooks__hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || local__createLocal(time).isValid())
        ) {
            return create__createDuration({ to: this, from: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(local__createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || local__createLocal(time).isValid())
        ) {
            return create__createDuration({ from: this, to: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(local__createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = locale_locales__getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    function startOf(units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
            case 'year':
                this.month(0);
            /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
            /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
            case 'date':
                this.hours(0);
            /* falls through */
            case 'hour':
                this.minutes(0);
            /* falls through */
            case 'minute':
                this.seconds(0);
            /* falls through */
            case 'second':
                this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf(units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }

        // 'date' is an alias for 'day', so it should be considered as such.
        if (units === 'date') {
            units = 'day';
        }

        return this.startOf(units)
            .add(1, units === 'isoWeek' ? 'week' : units)
            .subtract(1, 'ms');
    }

    function to_type__valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds(),
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function moment_valid__isValid() {
        return valid__isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
        );
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null
            ? Math.ceil((this.month() + 1) / 3)
            : this.month((input - 1) * 3 + (this.month() % 3));
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIOROITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear =
            Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });

    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var momentPrototype__proto = Moment.prototype;

    momentPrototype__proto.add = add_subtract__add;
    momentPrototype__proto.calendar = moment_calendar__calendar;
    momentPrototype__proto.clone = clone;
    momentPrototype__proto.diff = diff;
    momentPrototype__proto.endOf = endOf;
    momentPrototype__proto.format = format;
    momentPrototype__proto.from = from;
    momentPrototype__proto.fromNow = fromNow;
    momentPrototype__proto.to = to;
    momentPrototype__proto.toNow = toNow;
    momentPrototype__proto.get = stringGet;
    momentPrototype__proto.invalidAt = invalidAt;
    momentPrototype__proto.isAfter = isAfter;
    momentPrototype__proto.isBefore = isBefore;
    momentPrototype__proto.isBetween = isBetween;
    momentPrototype__proto.isSame = isSame;
    momentPrototype__proto.isSameOrAfter = isSameOrAfter;
    momentPrototype__proto.isSameOrBefore = isSameOrBefore;
    momentPrototype__proto.isValid = moment_valid__isValid;
    momentPrototype__proto.lang = lang;
    momentPrototype__proto.locale = locale;
    momentPrototype__proto.localeData = localeData;
    momentPrototype__proto.max = prototypeMax;
    momentPrototype__proto.min = prototypeMin;
    momentPrototype__proto.parsingFlags = parsingFlags;
    momentPrototype__proto.set = stringSet;
    momentPrototype__proto.startOf = startOf;
    momentPrototype__proto.subtract = add_subtract__subtract;
    momentPrototype__proto.toArray = toArray;
    momentPrototype__proto.toObject = toObject;
    momentPrototype__proto.toDate = toDate;
    momentPrototype__proto.toISOString = moment_format__toISOString;
    momentPrototype__proto.toJSON = toJSON;
    momentPrototype__proto.toString = toString;
    momentPrototype__proto.unix = unix;
    momentPrototype__proto.valueOf = to_type__valueOf;
    momentPrototype__proto.creationData = creationData;

    // Year
    momentPrototype__proto.year = getSetYear;
    momentPrototype__proto.isLeapYear = getIsLeapYear;

    // Week Year
    momentPrototype__proto.weekYear = getSetWeekYear;
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

    // Quarter
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

    // Month
    momentPrototype__proto.month = getSetMonth;
    momentPrototype__proto.daysInMonth = getDaysInMonth;

    // Week
    momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek;
    momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks = getSetISOWeek;
    momentPrototype__proto.weeksInYear = getWeeksInYear;
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

    // Day
    momentPrototype__proto.date = getSetDayOfMonth;
    momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek;
    momentPrototype__proto.weekday = getSetLocaleDayOfWeek;
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
    momentPrototype__proto.dayOfYear = getSetDayOfYear;

    // Hour
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

    // Minute
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

    // Second
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

    // Millisecond
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

    // Offset
    momentPrototype__proto.utcOffset = getSetOffset;
    momentPrototype__proto.utc = setOffsetToUTC;
    momentPrototype__proto.local = setOffsetToLocal;
    momentPrototype__proto.parseZone = setOffsetToParsedOffset;
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
    momentPrototype__proto.isDST = isDaylightSavingTime;
    momentPrototype__proto.isLocal = isLocal;
    momentPrototype__proto.isUtcOffset = isUtcOffset;
    momentPrototype__proto.isUtc = isUtc;
    momentPrototype__proto.isUTC = isUtc;

    // Timezone
    momentPrototype__proto.zoneAbbr = getZoneAbbr;
    momentPrototype__proto.zoneName = getZoneName;

    // Deprecations
    momentPrototype__proto.dates = deprecate(
        'dates accessor is deprecated. Use date instead.',
        getSetDayOfMonth
    );
    momentPrototype__proto.months = deprecate(
        'months accessor is deprecated. Use month instead',
        getSetMonth
    );
    momentPrototype__proto.years = deprecate(
        'years accessor is deprecated. Use year instead',
        getSetYear
    );
    momentPrototype__proto.zone = deprecate(
        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
        getSetZone
    );
    momentPrototype__proto.isDSTShifted = deprecate(
        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
        isDaylightSavingTimeShifted
    );

    var momentPrototype = momentPrototype__proto;

    function moment__createUnix(input) {
        return local__createLocal(input * 1000);
    }

    function moment__createInZone() {
        return local__createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var prototype__proto = Locale.prototype;

    prototype__proto.calendar = locale_calendar__calendar;
    prototype__proto.longDateFormat = longDateFormat;
    prototype__proto.invalidDate = invalidDate;
    prototype__proto.ordinal = ordinal;
    prototype__proto.preparse = preParsePostFormat;
    prototype__proto.postformat = preParsePostFormat;
    prototype__proto.relativeTime = relative__relativeTime;
    prototype__proto.pastFuture = pastFuture;
    prototype__proto.set = locale_set__set;

    // Month
    prototype__proto.months = localeMonths;
    prototype__proto.monthsShort = localeMonthsShort;
    prototype__proto.monthsParse = localeMonthsParse;
    prototype__proto.monthsRegex = monthsRegex;
    prototype__proto.monthsShortRegex = monthsShortRegex;

    // Week
    prototype__proto.week = localeWeek;
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

    // Day of Week
    prototype__proto.weekdays = localeWeekdays;
    prototype__proto.weekdaysMin = localeWeekdaysMin;
    prototype__proto.weekdaysShort = localeWeekdaysShort;
    prototype__proto.weekdaysParse = localeWeekdaysParse;

    prototype__proto.weekdaysRegex = weekdaysRegex;
    prototype__proto.weekdaysShortRegex = weekdaysShortRegex;
    prototype__proto.weekdaysMinRegex = weekdaysMinRegex;

    // Hours
    prototype__proto.isPM = localeIsPM;
    prototype__proto.meridiem = localeMeridiem;

    function lists__get(format, index, field, setter) {
        var locale = locale_locales__getLocale();
        var utc = create_utc__createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (typeof format === 'number') {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return lists__get(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = lists__get(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = locale_locales__getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return lists__get(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = lists__get(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function lists__listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function lists__listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function lists__listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function lists__listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function lists__listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    locale_locales__getSetGlobalLocale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output =
                    toInt((number % 100) / 10) === 1
                        ? 'th'
                        : b === 1
                        ? 'st'
                        : b === 2
                        ? 'nd'
                        : b === 3
                        ? 'rd'
                        : 'th';
            return number + output;
        },
    });

    // Side effect imports
    utils_hooks__hooks.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        locale_locales__getSetGlobalLocale
    );
    utils_hooks__hooks.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        locale_locales__getLocale
    );

    var mathAbs = Math.abs;

    function duration_abs__abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function duration_add_subtract__addSubtract(duration, input, value, direction) {
        var other = create__createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function duration_add_subtract__add(input, value) {
        return duration_add_subtract__addSubtract(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function duration_add_subtract__subtract(input, value) {
        return duration_add_subtract__addSubtract(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds;
        var days = this._days;
        var months = this._months;
        var data = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (
            !(
                (milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0)
            )
        ) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return (days * 4800) / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return (months * 146097) / 4800;
    }

    function as(units) {
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week':
                    return days / 7 + milliseconds / 6048e5;
                case 'day':
                    return days + milliseconds / 864e5;
                case 'hour':
                    return days * 24 + milliseconds / 36e5;
                case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function duration_as__valueOf() {
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds = makeAs('s');
    var asMinutes = makeAs('m');
    var asHours = makeAs('h');
    var asDays = makeAs('d');
    var asWeeks = makeAs('w');
    var asMonths = makeAs('M');
    var asYears = makeAs('y');

    function duration_get__get(units) {
        units = normalizeUnits(units);
        return this[units + 's']();
    }

    function makeGetter(name) {
        return function () {
            return this._data[name];
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds = makeGetter('seconds');
    var minutes = makeGetter('minutes');
    var hours = makeGetter('hours');
    var days = makeGetter('days');
    var months = makeGetter('months');
    var years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        s: 45, // seconds to minute
        m: 45, // minutes to hour
        h: 22, // hours to day
        d: 26, // days to month
        M: 11, // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function duration_humanize__relativeTime(posNegDuration, withoutSuffix, locale) {
        var duration = create__createDuration(posNegDuration).abs();
        var seconds = round(duration.as('s'));
        var minutes = round(duration.as('m'));
        var hours = round(duration.as('h'));
        var days = round(duration.as('d'));
        var months = round(duration.as('M'));
        var years = round(duration.as('y'));

        var a = (seconds < thresholds.s && ['s', gi??y]) ||
            (minutes <= 1 && ['m']) ||
            (minutes < thresholds.m && ['mm', ph??t]) ||
            (hours <= 1 && ['h']) ||
            (hours < thresholds.h && ['hh', gi???]) ||
            (days <= 1 && ['d']) ||
            (days < thresholds.d && ['dd', ng??y]) ||
            (months <= 1 && ['M']) ||
            (months < thresholds.M && ['MM', th??ng]) ||
            (years <= 1 && ['y']) || ['yy', th??ng];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function duration_humanize__getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function duration_humanize__getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        return true;
    }

    function humanize(withSuffix) {
        var locale = this.localeData();
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var iso_string__abs = Math.abs;

    function iso_string__toISOString() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var seconds = iso_string__abs(this._milliseconds) / 1000;
        var days = iso_string__abs(this._days);
        var months = iso_string__abs(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds;
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        return (
            (total < 0 ? '-' : '') +
            'P' +
            (Y ? Y + 'Y' : '') +
            (M ? M + 'M' : '') +
            (D ? D + 'D' : '') +
            (h || m || s ? 'T' : '') +
            (h ? h + 'H' : '') +
            (m ? m + 'M' : '') +
            (s ? s + 'S' : '')
        );
    }

    var duration_prototype__proto = Duration.prototype;

    duration_prototype__proto.abs = duration_abs__abs;
    duration_prototype__proto.add = duration_add_subtract__add;
    duration_prototype__proto.subtract = duration_add_subtract__subtract;
    duration_prototype__proto.as = as;
    duration_prototype__proto.asMilliseconds = asMilliseconds;
    duration_prototype__proto.asSeconds = asSeconds;
    duration_prototype__proto.asMinutes = asMinutes;
    duration_prototype__proto.asHours = asHours;
    duration_prototype__proto.asDays = asDays;
    duration_prototype__proto.asWeeks = asWeeks;
    duration_prototype__proto.asMonths = asMonths;
    duration_prototype__proto.asYears = asYears;
    duration_prototype__proto.valueOf = duration_as__valueOf;
    duration_prototype__proto._bubble = bubble;
    duration_prototype__proto.get = duration_get__get;
    duration_prototype__proto.milliseconds = milliseconds;
    duration_prototype__proto.seconds = seconds;
    duration_prototype__proto.minutes = minutes;
    duration_prototype__proto.hours = hours;
    duration_prototype__proto.days = days;
    duration_prototype__proto.weeks = weeks;
    duration_prototype__proto.months = months;
    duration_prototype__proto.years = years;
    duration_prototype__proto.humanize = humanize;
    duration_prototype__proto.toISOString = iso_string__toISOString;
    duration_prototype__proto.toString = iso_string__toISOString;
    duration_prototype__proto.toJSON = iso_string__toISOString;
    duration_prototype__proto.locale = locale;
    duration_prototype__proto.localeData = localeData;

    // Deprecations
    duration_prototype__proto.toIsoString = deprecate(
        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
        iso_string__toISOString
    );
    duration_prototype__proto.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports

    utils_hooks__hooks.version = '2.15.2';

    setHookCallback(local__createLocal);

    utils_hooks__hooks.fn = momentPrototype;
    utils_hooks__hooks.min = min;
    utils_hooks__hooks.max = max;
    utils_hooks__hooks.now = now;
    utils_hooks__hooks.utc = create_utc__createUTC;
    utils_hooks__hooks.unix = moment__createUnix;
    utils_hooks__hooks.months = lists__listMonths;
    utils_hooks__hooks.isDate = isDate;
    utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale;
    utils_hooks__hooks.invalid = valid__createInvalid;
    utils_hooks__hooks.duration = create__createDuration;
    utils_hooks__hooks.isMoment = isMoment;
    utils_hooks__hooks.weekdays = lists__listWeekdays;
    utils_hooks__hooks.parseZone = moment__createInZone;
    utils_hooks__hooks.localeData = locale_locales__getLocale;
    utils_hooks__hooks.isDuration = isDuration;
    utils_hooks__hooks.monthsShort = lists__listMonthsShort;
    utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin;
    utils_hooks__hooks.defineLocale = defineLocale;
    utils_hooks__hooks.updateLocale = updateLocale;
    utils_hooks__hooks.locales = locale_locales__listLocales;
    utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort;
    utils_hooks__hooks.normalizeUnits = normalizeUnits;
    utils_hooks__hooks.relativeTimeRounding = duration_humanize__getSetRelativeTimeRounding;
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
    utils_hooks__hooks.calendarFormat = getCalendarFormat;
    utils_hooks__hooks.prototype = momentPrototype;

    var _moment = utils_hooks__hooks;

    return _moment;
});

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ('undefined' == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
    'use strict';
    var b = a.fn.jquery.split(' ')[0].split('.');
    if ((b[0] < 2 && b[1] < 9) || (1 == b[0] && 9 == b[1] && b[2] < 1))
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
})(jQuery),
    +(function (a) {
        'use strict';
        function b() {
            var a = document.createElement('bootstrap'),
                b = {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd otransitionend',
                    transition: 'transitionend',
                };
            for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
            return !1;
        }
        (a.fn.emulateTransitionEnd = function (b) {
            var c = !1,
                d = this;
            a(this).one('bsTransitionEnd', function () {
                c = !0;
            });
            var e = function () {
                c || a(d).trigger(a.support.transition.end);
            };
            return setTimeout(e, b), this;
        }),
            a(function () {
                (a.support.transition = b()),
                    a.support.transition &&
                        (a.event.special.bsTransitionEnd = {
                            bindType: a.support.transition.end,
                            delegateType: a.support.transition.end,
                            handle: function (b) {
                                return a(b.target).is(this)
                                    ? b.handleObj.handler.apply(this, arguments)
                                    : void 0;
                            },
                        });
            });
    })(jQuery),
    +(function (a) {
        'use strict';
        function b(b) {
            return this.each(function () {
                var c = a(this),
                    e = c.data('bs.alert');
                e || c.data('bs.alert', (e = new d(this))), 'string' == typeof b && e[b].call(c);
            });
        }
        var c = '[data-dismiss="alert"]',
            d = function (b) {
                a(b).on('click', c, this.close);
            };
        (d.VERSION = '3.3.5'),
            (d.TRANSITION_DURATION = 150),
            (d.prototype.close = function (b) {
                function c() {
                    g.detach().trigger('closed.bs.alert').remove();
                }
                var e = a(this),
                    f = e.attr('data-target');
                f || ((f = e.attr('href')), (f = f && f.replace(/.*(?=#[^\s]*$)/, '')));
                var g = a(f);
                b && b.preventDefault(),
                    g.length || (g = e.closest('.alert')),
                    g.trigger((b = a.Event('close.bs.alert'))),
                    b.isDefaultPrevented() ||
                        (g.removeClass('in'),
                        a.support.transition && g.hasClass('fade')
                            ? g
                                  .one('bsTransitionEnd', c)
                                  .emulateTransitionEnd(d.TRANSITION_DURATION)
                            : c());
            });
        var e = a.fn.alert;
        (a.fn.alert = b),
            (a.fn.alert.Constructor = d),
            (a.fn.alert.noConflict = function () {
                return (a.fn.alert = e), this;
            }),
            a(document).on('click.bs.alert.data-api', c, d.prototype.close);
    })(jQuery),
    +(function (a) {
        'use strict';
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data('bs.button'),
                    f = 'object' == typeof b && b;
                e || d.data('bs.button', (e = new c(this, f))),
                    'toggle' == b ? e.toggle() : b && e.setState(b);
            });
        }
        var c = function (b, d) {
            (this.$element = a(b)),
                (this.options = a.extend({}, c.DEFAULTS, d)),
                (this.isLoading = !1);
        };
        (c.VERSION = '3.3.5'),
            (c.DEFAULTS = { loadingText: 'loading...' }),
            (c.prototype.setState = function (b) {
                var c = 'disabled',
                    d = this.$element,
                    e = d.is('input') ? 'val' : 'html',
                    f = d.data();
                (b += 'Text'),
                    null == f.resetText && d.data('resetText', d[e]()),
                    setTimeout(
                        a.proxy(function () {
                            d[e](null == f[b] ? this.options[b] : f[b]),
                                'loadingText' == b
                                    ? ((this.isLoading = !0), d.addClass(c).attr(c, c))
                                    : this.isLoading &&
                                      ((this.isLoading = !1), d.removeClass(c).removeAttr(c));
                        }, this),
                        0
                    );
            }),
            (c.prototype.toggle = function () {
                var a = !0,
                    b = this.$element.closest('[data-toggle="buttons"]');
                if (b.length) {
                    var c = this.$element.find('input');
                    'radio' == c.prop('type')
                        ? (c.prop('checked') && (a = !1),
                          b.find('.active').removeClass('active'),
                          this.$element.addClass('active'))
                        : 'checkbox' == c.prop('type') &&
                          (c.prop('checked') !== this.$element.hasClass('active') && (a = !1),
                          this.$element.toggleClass('active')),
                        c.prop('checked', this.$element.hasClass('active')),
                        a && c.trigger('change');
                } else
                    this.$element.attr('aria-pressed', !this.$element.hasClass('active')),
                        this.$element.toggleClass('active');
            });
        var d = a.fn.button;
        (a.fn.button = b),
            (a.fn.button.Constructor = c),
            (a.fn.button.noConflict = function () {
                return (a.fn.button = d), this;
            }),
            a(document)
                .on('click.bs.button.data-api', '[data-toggle^="button"]', function (c) {
                    var d = a(c.target);
                    d.hasClass('btn') || (d = d.closest('.btn')),
                        b.call(d, 'toggle'),
                        a(c.target).is('input[type="radio"]') ||
                            a(c.target).is('input[type="checkbox"]') ||
                            c.preventDefault();
                })
                .on(
                    'focus.bs.button.data-api blur.bs.button.data-api',
                    '[data-toggle^="button"]',
                    function (b) {
                        a(b.target)
                            .closest('.btn')
                            .toggleClass('focus', /^focus(in)?$/.test(b.type));
                    }
                );
    })(jQuery),
    +(function (a) {
        'use strict';
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data('bs.carousel'),
                    f = a.extend({}, c.DEFAULTS, d.data(), 'object' == typeof b && b),
                    g = 'string' == typeof b ? b : f.slide;
                e || d.data('bs.carousel', (e = new c(this, f))),
                    'number' == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
            });
        }
        var c = function (b, c) {
            (this.$element = a(b)),
                (this.$indicators = this.$element.find('.carousel-indicators')),
                (this.options = c),
                (this.paused = null),
                (this.sliding = null),
                (this.interval = null),
                (this.$active = null),
                (this.$items = null),
                this.options.keyboard &&
                    this.$element.on('keydown.bs.carousel', a.proxy(this.keydown, this)),
                'hover' == this.options.pause &&
                    !('ontouchstart' in document.documentElement) &&
                    this.$element
                        .on('mouseenter.bs.carousel', a.proxy(this.pause, this))
                        .on('mouseleave.bs.carousel', a.proxy(this.cycle, this));
        };
        (c.VERSION = '3.3.5'),
            (c.TRANSITION_DURATION = 600),
            (c.DEFAULTS = { interval: 5e3, pause: 'hover', wrap: !0, keyboard: !0 }),
            (c.prototype.keydown = function (a) {
                if (!/input|textarea/i.test(a.target.tagName)) {
                    switch (a.which) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                        default:
                            return;
                    }
                    a.preventDefault();
                }
            }),
            (c.prototype.cycle = function (b) {
                return (
                    b || (this.paused = !1),
                    this.interval && clearInterval(this.interval),
                    this.options.interval &&
                        !this.paused &&
                        (this.interval = setInterval(
                            a.proxy(this.next, this),
                            this.options.interval
                        )),
                    this
                );
            }),
            (c.prototype.getItemIndex = function (a) {
                return (
                    (this.$items = a.parent().children('.item')),
                    this.$items.index(a || this.$active)
                );
            }),
            (c.prototype.getItemForDirection = function (a, b) {
                var c = this.getItemIndex(b),
                    d = ('prev' == a && 0 === c) || ('next' == a && c == this.$items.length - 1);
                if (d && !this.options.wrap) return b;
                var e = 'prev' == a ? -1 : 1,
                    f = (c + e) % this.$items.length;
                return this.$items.eq(f);
            }),
            (c.prototype.to = function (a) {
                var b = this,
                    c = this.getItemIndex((this.$active = this.$element.find('.item.active')));
                return a > this.$items.length - 1 || 0 > a
                    ? void 0
                    : this.sliding
                    ? this.$element.one('slid.bs.carousel', function () {
                          b.to(a);
                      })
                    : c == a
                    ? this.pause().cycle()
                    : this.slide(a > c ? 'next' : 'prev', this.$items.eq(a));
            }),
            (c.prototype.pause = function (b) {
                return (
                    b || (this.paused = !0),
                    this.$element.find('.next, .prev').length &&
                        a.support.transition &&
                        (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
                    (this.interval = clearInterval(this.interval)),
                    this
                );
            }),
            (c.prototype.next = function () {
                return this.sliding ? void 0 : this.slide('next');
            }),
            (c.prototype.prev = function () {
                return this.sliding ? void 0 : this.slide('prev');
            }),
            (c.prototype.slide = function (b, d) {
                var e = this.$element.find('.item.active'),
                    f = d || this.getItemForDirection(b, e),
                    g = this.interval,
                    h = 'next' == b ? 'left' : 'right',
                    i = this;
                if (f.hasClass('active')) return (this.sliding = !1);
                var j = f[0],
                    k = a.Event('slide.bs.carousel', { relatedTarget: j, direction: h });
                if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
                    if (((this.sliding = !0), g && this.pause(), this.$indicators.length)) {
                        this.$indicators.find('.active').removeClass('active');
                        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                        l && l.addClass('active');
                    }
                    var m = a.Event('slid.bs.carousel', { relatedTarget: j, direction: h });
                    return (
                        a.support.transition && this.$element.hasClass('slide')
                            ? (f.addClass(b),
                              f[0].offsetWidth,
                              e.addClass(h),
                              f.addClass(h),
                              e
                                  .one('bsTransitionEnd', function () {
                                      f.removeClass([b, h].join(' ')).addClass('active'),
                                          e.removeClass(['active', h].join(' ')),
                                          (i.sliding = !1),
                                          setTimeout(function () {
                                              i.$element.trigger(m);
                                          }, 0);
                                  })
                                  .emulateTransitionEnd(c.TRANSITION_DURATION))
                            : (e.removeClass('active'),
                              f.addClass('active'),
                              (this.sliding = !1),
                              this.$element.trigger(m)),
                        g && this.cycle(),
                        this
                    );
                }
            });
        var d = a.fn.carousel;
        (a.fn.carousel = b),
            (a.fn.carousel.Constructor = c),
            (a.fn.carousel.noConflict = function () {
                return (a.fn.carousel = d), this;
            });
        var e = function (c) {
            var d,
                e = a(this),
                f = a(
                    e.attr('data-target') ||
                        ((d = e.attr('href')) && d.replace(/.*(?=#[^\s]+$)/, ''))
                );
            if (f.hasClass('carousel')) {
                var g = a.extend({}, f.data(), e.data()),
                    h = e.attr('data-slide-to');
                h && (g.interval = !1),
                    b.call(f, g),
                    h && f.data('bs.carousel').to(h),
                    c.preventDefault();
            }
        };
        a(document)
            .on('click.bs.carousel.data-api', '[data-slide]', e)
            .on('click.bs.carousel.data-api', '[data-slide-to]', e),
            a(window).on('load', function () {
                a('[data-ride="carousel"]').each(function () {
                    var c = a(this);
                    b.call(c, c.data());
                });
            });
    })(jQuery),
    +(function (a) {
        'use strict';
        function b(b) {
            var c,
                d =
                    b.attr('data-target') ||
                    ((c = b.attr('href')) && c.replace(/.*(?=#[^\s]+$)/, ''));
            return a(d);
        }
        function c(b) {
            return this.each(function () {
                var c = a(this),
                    e = c.data('bs.collapse'),
                    f = a.extend({}, d.DEFAULTS, c.data(), 'object' == typeof b && b);
                !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
                    e || c.data('bs.collapse', (e = new d(this, f))),
                    'string' == typeof b && e[b]();
            });
        }
        var d = function (b, c) {
            (this.$element = a(b)),
                (this.options = a.extend({}, d.DEFAULTS, c)),
                (this.$trigger = a(
                    '[data-toggle="collapse"][href="#' +
                        b.id +
                        '"],[data-toggle="collapse"][data-target="#' +
                        b.id +
                        '"]'
                )),
                (this.transitioning = null),
                this.options.parent
                    ? (this.$parent = this.getParent())
                    : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                this.options.toggle && this.toggle();
        };
        (d.VERSION = '3.3.5'),
            (d.TRANSITION_DURATION = 350),
            (d.DEFAULTS = { toggle: !0 }),
            (d.prototype.dimension = function () {
                var a = this.$element.hasClass('width');
                return a ? 'width' : 'height';
            }),
            (d.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass('in')) {
                    var b,
                        e =
                            this.$parent &&
                            this.$parent.children('.panel').children('.in, .collapsing');
                    if (!(e && e.length && ((b = e.data('bs.collapse')), b && b.transitioning))) {
                        var f = a.Event('show.bs.collapse');
                        if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
                            e && e.length && (c.call(e, 'hide'), b || e.data('bs.collapse', null));
                            var g = this.dimension();
                            this.$element
                                .removeClass('collapse')
                                .addClass('collapsing')
                                [g](0)
                                .attr('aria-expanded', !0),
                                this.$trigger.removeClass('collapsed').attr('aria-expanded', !0),
                                (this.transitioning = 1);
                            var h = function () {
                                this.$element
                                    .removeClass('collapsing')
                                    .addClass('collapse in')
                                    [g](''),
                                    (this.transitioning = 0),
                                    this.$element.trigger('shown.bs.collapse');
                            };
                            if (!a.support.transition) return h.call(this);
                            var i = a.camelCase(['scroll', g].join('-'));
                            this.$element
                                .one('bsTransitionEnd', a.proxy(h, this))
                                .emulateTransitionEnd(d.TRANSITION_DURATION)
                                [g](this.$element[0][i]);
                        }
                    }
                }
            }),
            (d.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass('in')) {
                    var b = a.Event('hide.bs.collapse');
                    if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
                        var c = this.dimension();
                        this.$element[c](this.$element[c]())[0].offsetHeight,
                            this.$element
                                .addClass('collapsing')
                                .removeClass('collapse in')
                                .attr('aria-expanded', !1),
                            this.$trigger.addClass('collapsed').attr('aria-expanded', !1),
                            (this.transitioning = 1);
                        var e = function () {
                            (this.transitioning = 0),
                                this.$element
                                    .removeClass('collapsing')
                                    .addClass('collapse')
                                    .trigger('hidden.bs.collapse');
                        };
                        return a.support.transition
                            ? void this.$element[c](0)
                                  .one('bsTransitionEnd', a.proxy(e, this))
                                  .emulateTransitionEnd(d.TRANSITION_DURATION)
                            : e.call(this);
                    }
                }
            }),
            (d.prototype.toggle = function () {
                this[this.$element.hasClass('in') ? 'hide' : 'show']();
            }),
            (d.prototype.getParent = function () {
                return a(this.options.parent)
                    .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
                    .each(
                        a.proxy(function (c, d) {
                            var e = a(d);
                            this.addAriaAndCollapsedClass(b(e), e);
                        }, this)
                    )
                    .end();
            }),
            (d.prototype.addAriaAndCollapsedClass = function (a, b) {
                var c = a.hasClass('in');
                a.attr('aria-expanded', c), b.toggleClass('collapsed', !c).attr('aria-expanded', c);
            });
        var e = a.fn.collapse;
        (a.fn.collapse = c),
            (a.fn.collapse.Constructor = d),
            (a.fn.collapse.noConflict = function () {
                return (a.fn.collapse = e), this;
            }),
            a(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (d) {
                var e = a(this);
                e.attr('data-target') || d.preventDefault();
                var f = b(e),
                    g = f.data('bs.collapse'),
                    h = g ? 'toggle' : e.data();
                c.call(f, h);
            });
    })(jQuery),
    +(function (a) {
        'use strict';
        function b(b) {
            var c = b.attr('data-target');
            c ||
                ((c = b.attr('href')),
                (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, '')));
            var d = c && a(c);
            return d && d.length ? d : b.parent();
        }
        function c(c) {
            (c && 3 === c.which) ||
                (a(e).remove(),
                a(f).each(function () {
                    var d = a(this),
                        e = b(d),
                        f = { relatedTarget: this };
                    e.hasClass('open') &&
                        ((c &&
                            'click' == c.type &&
                            /input|textarea/i.test(c.target.tagName) &&
                            a.contains(e[0], c.target)) ||
                            (e.trigger((c = a.Event('hide.bs.dropdown', f))),
                            c.isDefaultPrevented() ||
                                (d.attr('aria-expanded', 'false'),
                                e.removeClass('open').trigger('hidden.bs.dropdown', f))));
                }));
        }
        function d(b) {
            return this.each(function () {
                var c = a(this),
                    d = c.data('bs.dropdown');
                d || c.data('bs.dropdown', (d = new g(this))), 'string' == typeof b && d[b].call(c);
            });
        }
        var e = '.dropdown-backdrop',
            f = '[data-toggle="dropdown"]',
            g = function (b) {
                a(b).on('click.bs.dropdown', this.toggle);
            };
        (g.VERSION = '3.3.5'),
            (g.prototype.toggle = function (d) {
                var e = a(this);
                if (!e.is('.disabled, :disabled')) {
                    var f = b(e),
                        g = f.hasClass('open');
                    if ((c(), !g)) {
                        'ontouchstart' in document.documentElement &&
                            !f.closest('.navbar-nav').length &&
                            a(document.createElement('div'))
                                .addClass('dropdown-backdrop')
                                .insertAfter(a(this))
                                .on('click', c);
                        var h = { relatedTarget: this };
                        if (
                            (f.trigger((d = a.Event('show.bs.dropdown', h))),
                            d.isDefaultPrevented())
                        )
                            return;
                        e.trigger('focus').attr('aria-expanded', 'true'),
                            f.toggleClass('open').trigger('shown.bs.dropdown', h);
                    }
                    return !1;
                }
            }),
            (g.prototype.keydown = function (c) {
                if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                    var d = a(this);
                    if ((c.preventDefault(), c.stopPropagation(), !d.is('.disabled, :disabled'))) {
                        var e = b(d),
                            g = e.hasClass('open');
                        if ((!g && 27 != c.which) || (g && 27 == c.which))
                            return 27 == c.which && e.find(f).trigger('focus'), d.trigger('click');
                        var h = ' li:not(.disabled):visible a',
                            i = e.find('.dropdown-menu' + h);
                        if (i.length) {
                            var j = i.index(c.target);
                            38 == c.which && j > 0 && j--,
                                40 == c.which && j < i.length - 1 && j++,
                                ~j || (j = 0),
                                i.eq(j).trigger('focus');
                        }
                    }
                }
            });
        var h = a.fn.dropdown;
        (a.fn.dropdown = d),
            (a.fn.dropdown.Constructor = g),
            (a.fn.dropdown.noConflict = function () {
                return (a.fn.dropdown = h), this;
            }),
            a(document)
                .on('click.bs.dropdown.data-api', c)
                .on('click.bs.dropdown.data-api', '.dropdown form', function (a) {
                    a.stopPropagation();
                })
                .on('click.bs.dropdown.data-api', f, g.prototype.toggle)
                .on('keydown.bs.dropdown.data-api', f, g.prototype.keydown)
                .on('keydown.bs.dropdown.data-api', '.dropdown-menu', g.prototype.keydown);
    })(jQuery),
    +(function (a) {
        'use strict';
        function b(b, d) {
            return this.each(function () {
                var e = a(this),
                    f = e.data('bs.modal'),
                    g = a.extend({}, c.DEFAULTS, e.data(), 'object' == typeof b && b);
                f || e.data('bs.modal', (f = new c(this, g))),
                    'string' == typeof b ? f[b](d) : g.show && f.show(d);
            });
        }
        var c = function (b, c) {
            (this.options = c),
                (this.$body = a(document.body)),
                (this.$element = a(b)),
                (this.$dialog = this.$element.find('.modal-dialog')),
                (this.$backdrop = null),
                (this.isShown = null),
                (this.originalBodyPad = null),
                (this.scrollbarWidth = 0),
                (this.ignoreBackdropClick = !1),
                this.options.remote &&
                    this.$element.find('.modal-content').load(
                        this.options.remote,
                        a.proxy(function () {
                            this.$element.trigger('loaded.bs.modal');
                        }, this)
                    );
        };
        (c.VERSION = '3.3.5'),
            (c.TRANSITION_DURATION = 300),
            (c.BACKDROP_TRANSITION_DURATION = 150),
            (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
            (c.prototype.toggle = function (a) {
                return this.isShown ? this.hide() : this.show(a);
            }),
            (c.prototype.show = function (b) {
                var d = this,
                    e = a.Event('show.bs.modal', { relatedTarget: b });
                this.$element.trigger(e),
                    this.isShown ||
                        e.isDefaultPrevented() ||
                        ((this.isShown = !0),
                        this.checkScrollbar(),
                        this.setScrollbar(),
                        this.$body.addClass('modal-open'),
                        this.escape(),
                        this.resize(),
                        this.$element.on(
                            'click.dismiss.bs.modal',
                            '[data-dismiss="modal"]',
                            a.proxy(this.hide, this)
                        ),
                        this.$dialog.on('mousedown.dismiss.bs.modal', function () {
                            d.$element.one('mouseup.dismiss.bs.modal', function (b) {
                                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
                            });
                        }),
                        this.backdrop(function () {
                            var e = a.support.transition && d.$element.hasClass('fade');
                            d.$element.parent().length || d.$element.appendTo(d.$body),
                                d.$element.show().scrollTop(0),
                                d.adjustDialog(),
                                e && d.$element[0].offsetWidth,
                                d.$element.addClass('in'),
                                d.enforceFocus();
                            var f = a.Event('shown.bs.modal', { relatedTarget: b });
                            e
                                ? d.$dialog
                                      .one('bsTransitionEnd', function () {
                                          d.$element.trigger('focus').trigger(f);
                                      })
                                      .emulateTransitionEnd(c.TRANSITION_DURATION)
                                : d.$element.trigger('focus').trigger(f);
                        }));
            }),
            (c.prototype.hide = function (b) {
                b && b.preventDefault(),
                    (b = a.Event('hide.bs.modal')),
                    this.$element.trigger(b),
                    this.isShown &&
                        !b.isDefaultPrevented() &&
                        ((this.isShown = !1),
                        this.escape(),
                        this.resize(),
                        a(document).off('focusin.bs.modal'),
                        this.$element
                            .removeClass('in')
                            .off('click.dismiss.bs.modal')
                            .off('mouseup.dismiss.bs.modal'),
                        this.$dialog.off('mousedown.dismiss.bs.modal'),
                        a.support.transition && this.$element.hasClass('fade')
                            ? this.$element
                                  .one('bsTransitionEnd', a.proxy(this.hideModal, this))
                                  .emulateTransitionEnd(c.TRANSITION_DURATION)
                            : this.hideModal());
            }),
            (c.prototype.enforceFocus = function () {
                a(document)
                    .off('focusin.bs.modal')
                    .on(
                        'focusin.bs.modal',
                        a.proxy(function (a) {
                            this.$element[0] === a.target ||
                                this.$element.has(a.target).length ||
                                this.$element.trigger('focus');
                        }, this)
                    );
            }),
            (c.prototype.escape = function () {
                this.isShown && this.options.keyboard
                    ? this.$element.on(
                          'keydown.dismiss.bs.modal',
                          a.proxy(function (a) {
                              27 == a.which && this.hide();
                          }, this)
                      )
                    : this.isShown || this.$element.off('keydown.dismiss.bs.modal');
            }),
            (c.prototype.resize = function () {
                this.isShown
                    ? a(window).on('resize.bs.modal', a.proxy(this.handleUpdate, this))
                    : a(window).off('resize.bs.modal');
            }),
            (c.prototype.hideModal = function () {
                var a = this;
                this.$element.hide(),
                    this.backdrop(function () {
                        a.$body.removeClass('modal-open'),
                            a.resetAdjustments(),
                            a.resetScrollbar(),
                            a.$element.trigger('hidden.bs.modal');
                    });
            }),
            (c.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
            }),
            (c.prototype.backdrop = function (b) {
                var d = this,
                    e = this.$element.hasClass('fade') ? 'fade' : '';
                if (this.isShown && this.options.backdrop) {
                    var f = a.support.transition && e;
                    if (
                        ((this.$backdrop = a(document.createElement('div'))
                            .addClass('modal-backdrop ' + e)
                            .appendTo(this.$body)),
                        this.$element.on(
                            'click.dismiss.bs.modal',
                            a.proxy(function (a) {
                                return this.ignoreBackdropClick
                                    ? void (this.ignoreBackdropClick = !1)
                                    : void (
                                          a.target === a.currentTarget &&
                                          ('static' == this.options.backdrop
                                              ? this.$element[0].focus()
                                              : this.hide())
                                      );
                            }, this)
                        ),
                        f && this.$backdrop[0].offsetWidth,
                        this.$backdrop.addClass('in'),
                        !b)
                    )
                        return;
                    f
                        ? this.$backdrop
                              .one('bsTransitionEnd', b)
                              .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
                        : b();
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass('in');
                    var g = function () {
                        d.removeBackdrop(), b && b();
                    };
                    a.support.transition && this.$element.hasClass('fade')
                        ? this.$backdrop
                              .one('bsTransitionEnd', g)
                              .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
                        : g();
                } else b && b();
            }),
            (c.prototype.handleUpdate = function () {
                this.adjustDialog();
            }),
            (c.prototype.adjustDialog = function () {
                var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({
                    paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : '',
                    paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : '',
                });
            }),
            (c.prototype.resetAdjustments = function () {
                this.$element.css({ paddingLeft: '', paddingRight: '' });
            }),
            (c.prototype.checkScrollbar = function () {
                var a = window.innerWidth;
                if (!a) {
                    var b = document.documentElement.getBoundingClientRect();
                    a = b.right - Math.abs(b.left);
                }
                (this.bodyIsOverflowing = document.body.clientWidth < a),
                    (this.scrollbarWidth = this.measureScrollbar());
            }),
            (c.prototype.setScrollbar = function () {
                var a = parseInt(this.$body.css('padding-right') || 0, 10);
                (this.originalBodyPad = document.body.style.paddingRight || ''),
                    this.bodyIsOverflowing &&
                        this.$body.css('padding-right', a + this.scrollbarWidth);
            }),
            (c.prototype.resetScrollbar = function () {
                this.$body.css('padding-right', this.originalBodyPad);
            }),
            (c.prototype.measureScrollbar = function () {
                var a = document.createElement('div');
                (a.className = 'modal-scrollbar-measure'), this.$body.append(a);
                var b = a.offsetWidth - a.clientWidth;
                return this.$body[0].removeChild(a), b;
            });
        var d = a.fn.modal;
        (a.fn.modal = b),
            (a.fn.modal.Constructor = c),
            (a.fn.modal.noConflict = function () {
                return (a.fn.modal = d), this;
            }),
            a(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (c) {
                var d = a(this),
                    e = d.attr('href'),
                    f = a(d.attr('data-target') || (e && e.replace(/.*(?=#[^\s]+$)/, ''))),
                    g = f.data('bs.modal')
                        ? 'toggle'
                        : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
                d.is('a') && c.preventDefault(),
                    f.one('show.bs.modal', function (a) {
                        a.isDefaultPrevented() ||
                            f.one('hidden.bs.modal', function () {
                                d.is(':visible') && d.trigger('focus');
                            });
                    }),
                    b.call(f, g, this);
            });
    })(jQuery),
    +(function (a) {
        'use strict';
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data('bs.tooltip'),
                    f = 'object' == typeof b && b;
                (e || !/destroy|hide/.test(b)) &&
                    (e || d.data('bs.tooltip', (e = new c(this, f))),
                    'string' == typeof b && e[b]());
            });
        }
        var c = function (a, b) {
            (this.type = null),
                (this.options = null),
                (this.enabled = null),
                (this.timeout = null),
                (this.hoverState = null),
                (this.$element = null),
                (this.inState = null),
                this.init('tooltip', a, b);
        };
        (c.VERSION = '3.3.5'),
            (c.TRANSITION_DURATION = 150),
            (c.DEFAULTS = {
                animation: !0,
                placement: 'top',
                selector: !1,
                template:
                    '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: 'hover focus',
                title: '',
                delay: 0,
                html: !1,
                container: !1,
                viewport: { selector: 'body', padding: 0 },
            }),
            (c.prototype.init = function (b, c, d) {
                if (
                    ((this.enabled = !0),
                    (this.type = b),
                    (this.$element = a(c)),
                    (this.options = this.getOptions(d)),
                    (this.$viewport =
                        this.options.viewport &&
                        a(
                            a.isFunction(this.options.viewport)
                                ? this.options.viewport.call(this, this.$element)
                                : this.options.viewport.selector || this.options.viewport
                        )),
                    (this.inState = { click: !1, hover: !1, focus: !1 }),
                    this.$element[0] instanceof document.constructor && !this.options.selector)
                )
                    throw new Error(
                        '`selector` option must be specified when initializing ' +
                            this.type +
                            ' on the window.document object!'
                    );
                for (var e = this.options.trigger.split(' '), f = e.length; f--; ) {
                    var g = e[f];
                    if ('click' == g)
                        this.$element.on(
                            'click.' + this.type,
                            this.options.selector,
                            a.proxy(this.toggle, this)
                        );
                    else if ('manual' != g) {
                        var h = 'hover' == g ? 'mouseenter' : 'focusin',
                            i = 'hover' == g ? 'mouseleave' : 'focusout';
                        this.$element.on(
                            h + '.' + this.type,
                            this.options.selector,
                            a.proxy(this.enter, this)
                        ),
                            this.$element.on(
                                i + '.' + this.type,
                                this.options.selector,
                                a.proxy(this.leave, this)
                            );
                    }
                }
                this.options.selector
                    ? (this._options = a.extend({}, this.options, {
                          trigger: 'manual',
                          selector: '',
                      }))
                    : this.fixTitle();
            }),
            (c.prototype.getDefaults = function () {
                return c.DEFAULTS;
            }),
            (c.prototype.getOptions = function (b) {
                return (
                    (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
                    b.delay &&
                        'number' == typeof b.delay &&
                        (b.delay = { show: b.delay, hide: b.delay }),
                    b
                );
            }),
            (c.prototype.getDelegateOptions = function () {
                var b = {},
                    c = this.getDefaults();
                return (
                    this._options &&
                        a.each(this._options, function (a, d) {
                            c[a] != d && (b[a] = d);
                        }),
                    b
                );
            }),
            (c.prototype.enter = function (b) {
                var c =
                    b instanceof this.constructor ? b : a(b.currentTarget).data('bs.' + this.type);
                return (
                    c ||
                        ((c = new this.constructor(b.currentTarget, this.getDelegateOptions())),
                        a(b.currentTarget).data('bs.' + this.type, c)),
                    b instanceof a.Event &&
                        (c.inState['focusin' == b.type ? 'focus' : 'hover'] = !0),
                    c.tip().hasClass('in') || 'in' == c.hoverState
                        ? void (c.hoverState = 'in')
                        : (clearTimeout(c.timeout),
                          (c.hoverState = 'in'),
                          c.options.delay && c.options.delay.show
                              ? void (c.timeout = setTimeout(function () {
                                    'in' == c.hoverState && c.show();
                                }, c.options.delay.show))
                              : c.show())
                );
            }),
            (c.prototype.isInStateTrue = function () {
                for (var a in this.inState) if (this.inState[a]) return !0;
                return !1;
            }),
            (c.prototype.leave = function (b) {
                var c =
                    b instanceof this.constructor ? b : a(b.currentTarget).data('bs.' + this.type);
                return (
                    c ||
                        ((c = new this.constructor(b.currentTarget, this.getDelegateOptions())),
                        a(b.currentTarget).data('bs.' + this.type, c)),
                    b instanceof a.Event &&
                        (c.inState['focusout' == b.type ? 'focus' : 'hover'] = !1),
                    c.isInStateTrue()
                        ? void 0
                        : (clearTimeout(c.timeout),
                          (c.hoverState = 'out'),
                          c.options.delay && c.options.delay.hide
                              ? void (c.timeout = setTimeout(function () {
                                    'out' == c.hoverState && c.hide();
                                }, c.options.delay.hide))
                              : c.hide())
                );
            }),
            (c.prototype.show = function () {
                var b = a.Event('show.bs.' + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(b);
                    var d = a.contains(
                        this.$element[0].ownerDocument.documentElement,
                        this.$element[0]
                    );
                    if (b.isDefaultPrevented() || !d) return;
                    var e = this,
                        f = this.tip(),
                        g = this.getUID(this.type);
                    this.setContent(),
                        f.attr('id', g),
                        this.$element.attr('aria-describedby', g),
                        this.options.animation && f.addClass('fade');
                    var h =
                            'function' == typeof this.options.placement
                                ? this.options.placement.call(this, f[0], this.$element[0])
                                : this.options.placement,
                        i = /\s?auto?\s?/i,
                        j = i.test(h);
                    j && (h = h.replace(i, '') || 'top'),
                        f
                            .detach()
                            .css({ top: 0, left: 0, display: 'block' })
                            .addClass(h)
                            .data('bs.' + this.type, this),
                        this.options.container
                            ? f.appendTo(this.options.container)
                            : f.insertAfter(this.$element),
                        this.$element.trigger('inserted.bs.' + this.type);
                    var k = this.getPosition(),
                        l = f[0].offsetWidth,
                        m = f[0].offsetHeight;
                    if (j) {
                        var n = h,
                            o = this.getPosition(this.$viewport);
                        (h =
                            'bottom' == h && k.bottom + m > o.bottom
                                ? 'top'
                                : 'top' == h && k.top - m < o.top
                                ? 'bottom'
                                : 'right' == h && k.right + l > o.width
                                ? 'left'
                                : 'left' == h && k.left - l < o.left
                                ? 'right'
                                : h),
                            f.removeClass(n).addClass(h);
                    }
                    var p = this.getCalculatedOffset(h, k, l, m);
                    this.applyPlacement(p, h);
                    var q = function () {
                        var a = e.hoverState;
                        e.$element.trigger('shown.bs.' + e.type),
                            (e.hoverState = null),
                            'out' == a && e.leave(e);
                    };
                    a.support.transition && this.$tip.hasClass('fade')
                        ? f.one('bsTransitionEnd', q).emulateTransitionEnd(c.TRANSITION_DURATION)
                        : q();
                }
            }),
            (c.prototype.applyPlacement = function (b, c) {
                var d = this.tip(),
                    e = d[0].offsetWidth,
                    f = d[0].offsetHeight,
                    g = parseInt(d.css('margin-top'), 10),
                    h = parseInt(d.css('margin-left'), 10);
                isNaN(g) && (g = 0),
                    isNaN(h) && (h = 0),
                    (b.top += g),
                    (b.left += h),
                    a.offset.setOffset(
                        d[0],
                        a.extend(
                            {
                                using: function (a) {
                                    d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                                },
                            },
                            b
                        ),
                        0
                    ),
                    d.addClass('in');
                var i = d[0].offsetWidth,
                    j = d[0].offsetHeight;
                'top' == c && j != f && (b.top = b.top + f - j);
                var k = this.getViewportAdjustedDelta(c, b, i, j);
                k.left ? (b.left += k.left) : (b.top += k.top);
                var l = /top|bottom/.test(c),
                    m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
                    n = l ? 'offsetWidth' : 'offsetHeight';
                d.offset(b), this.replaceArrow(m, d[0][n], l);
            }),
            (c.prototype.replaceArrow = function (a, b, c) {
                this.arrow()
                    .css(c ? 'left' : 'top', 50 * (1 - a / b) + '%')
                    .css(c ? 'top' : 'left', '');
            }),
            (c.prototype.setContent = function () {
                var a = this.tip(),
                    b = this.getTitle();
                a.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](b),
                    a.removeClass('fade in top bottom left right');
            }),
            (c.prototype.hide = function (b) {
                function d() {
                    'in' != e.hoverState && f.detach(),
                        e.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + e.type),
                        b && b();
                }
                var e = this,
                    f = a(this.$tip),
                    g = a.Event('hide.bs.' + this.type);
                return (
                    this.$element.trigger(g),
                    g.isDefaultPrevented()
                        ? void 0
                        : (f.removeClass('in'),
                          a.support.transition && f.hasClass('fade')
                              ? f
                                    .one('bsTransitionEnd', d)
                                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                              : d(),
                          (this.hoverState = null),
                          this)
                );
            }),
            (c.prototype.fixTitle = function () {
                var a = this.$element;
                (a.attr('title') || 'string' != typeof a.attr('data-original-title')) &&
                    a.attr('data-original-title', a.attr('title') || '').attr('title', '');
            }),
            (c.prototype.hasContent = function () {
                return this.getTitle();
            }),
            (c.prototype.getPosition = function (b) {
                b = b || this.$element;
                var c = b[0],
                    d = 'BODY' == c.tagName,
                    e = c.getBoundingClientRect();
                null == e.width &&
                    (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));
                var f = d ? { top: 0, left: 0 } : b.offset(),
                    g = {
                        scroll: d
                            ? document.documentElement.scrollTop || document.body.scrollTop
                            : b.scrollTop(),
                    },
                    h = d ? { width: a(window).width(), height: a(window).height() } : null;
                return a.extend({}, e, g, h, f);
            }),
            (c.prototype.getCalculatedOffset = function (a, b, c, d) {
                return 'bottom' == a
                    ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
                    : 'top' == a
                    ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
                    : 'left' == a
                    ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
                    : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
            }),
            (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
                var e = { top: 0, left: 0 };
                if (!this.$viewport) return e;
                var f = (this.options.viewport && this.options.viewport.padding) || 0,
                    g = this.getPosition(this.$viewport);
                if (/right|left/.test(a)) {
                    var h = b.top - f - g.scroll,
                        i = b.top + f - g.scroll + d;
                    h < g.top
                        ? (e.top = g.top - h)
                        : i > g.top + g.height && (e.top = g.top + g.height - i);
                } else {
                    var j = b.left - f,
                        k = b.left + f + c;
                    j < g.left
                        ? (e.left = g.left - j)
                        : k > g.right && (e.left = g.left + g.width - k);
                }
                return e;
            }),
            (c.prototype.getTitle = function () {
                var a,
                    b = this.$element,
                    c = this.options;
                return (a =
                    b.attr('data-original-title') ||
                    ('function' == typeof c.title ? c.title.call(b[0]) : c.title));
            }),
            (c.prototype.getUID = function (a) {
                do a += ~~(1e6 * Math.random());
                while (document.getElementById(a));
                return a;
            }),
            (c.prototype.tip = function () {
                if (!this.$tip && ((this.$tip = a(this.options.template)), 1 != this.$tip.length))
                    throw new Error(
                        this.type +
                            ' `template` option must consist of exactly 1 top-level element!'
                    );
                return this.$tip;
            }),
            (c.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'));
            }),
            (c.prototype.enable = function () {
                this.enabled = !0;
            }),
            (c.prototype.disable = function () {
                this.enabled = !1;
            }),
            (c.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled;
            }),
            (c.prototype.toggle = function (b) {
                var c = this;
                b &&
                    ((c = a(b.currentTarget).data('bs.' + this.type)),
                    c ||
                        ((c = new this.constructor(b.currentTarget, this.getDelegateOptions())),
                        a(b.currentTarget).data('bs.' + this.type, c))),
                    b
                        ? ((c.inState.click = !c.inState.click),
                          c.isInStateTrue() ? c.enter(c) : c.leave(c))
                        : c.tip().hasClass('in')
                        ? c.leave(c)
                        : c.enter(c);
            }),
            (c.prototype.destroy = function () {
                var a = this;
                clearTimeout(this.timeout),
                    this.hide(function () {
                        a.$element.off('.' + a.type).removeData('bs.' + a.type),
                            a.$tip && a.$tip.detach(),
                            (a.$tip = null),
                            (a.$arrow = null),
                            (a.$viewport = null);
                    });
            });
        var d = a.fn.tooltip;
        (a.fn.tooltip = b),
            (a.fn.tooltip.Constructor = c),
            (a.fn.tooltip.noConflict = function () {
                return (a.fn.tooltip = d), this;
            });
    })(jQuery),
    +(function (a) {
        'use strict';
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data('bs.popover'),
                    f = 'object' == typeof b && b;
                (e || !/destroy|hide/.test(b)) &&
                    (e || d.data('bs.popover', (e = new c(this, f))),
                    'string' == typeof b && e[b]());
            });
        }
        var c = function (a, b) {
            this.init('popover', a, b);
        };
        if (!a.fn.tooltip) throw new Error('Popover requires tooltip.js');
        (c.VERSION = '3.3.5'),
            (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
                placement: 'right',
                trigger: 'click',
                content: '',
                template:
                    '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
            })),
            (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
            (c.prototype.constructor = c),
            (c.prototype.getDefaults = function () {
                return c.DEFAULTS;
            }),
            (c.prototype.setContent = function () {
                var a = this.tip(),
                    b = this.getTitle(),
                    c = this.getContent();
                a.find('.popover-title')[this.options.html ? 'html' : 'text'](b),
                    a
                        .find('.popover-content')
                        .children()
                        .detach()
                        .end()
                        [this.options.html ? ('string' == typeof c ? 'html' : 'append') : 'text'](
                            c
                        ),
                    a.removeClass('fade top bottom left right in'),
                    a.find('.popover-title').html() || a.find('.popover-title').hide();
            }),
            (c.prototype.hasContent = function () {
                return this.getTitle() || this.getContent();
            }),
            (c.prototype.getContent = function () {
                var a = this.$element,
                    b = this.options;
                return (
                    a.attr('data-content') ||
                    ('function' == typeof b.content ? b.content.call(a[0]) : b.content)
                );
            }),
            (c.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find('.arrow'));
            });
        var d = a.fn.popover;
        (a.fn.popover = b),
            (a.fn.popover.Constructor = c),
            (a.fn.popover.noConflict = function () {
                return (a.fn.popover = d), this;
            });
    })(jQuery),
    +(function (a) {
        'use strict';
        function b(c, d) {
            (this.$body = a(document.body)),
                (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
                (this.options = a.extend({}, b.DEFAULTS, d)),
                (this.selector = (this.options.target || '') + ' .nav li > a'),
                (this.offsets = []),
                (this.targets = []),
                (this.activeTarget = null),
                (this.scrollHeight = 0),
                this.$scrollElement.on('scroll.bs.scrollspy', a.proxy(this.process, this)),
                this.refresh(),
                this.process();
        }
        function c(c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data('bs.scrollspy'),
                    f = 'object' == typeof c && c;
                e || d.data('bs.scrollspy', (e = new b(this, f))), 'string' == typeof c && e[c]();
            });
        }
        (b.VERSION = '3.3.5'),
            (b.DEFAULTS = { offset: 10 }),
            (b.prototype.getScrollHeight = function () {
                return (
                    this.$scrollElement[0].scrollHeight ||
                    Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
                );
            }),
            (b.prototype.refresh = function () {
                var b = this,
                    c = 'offset',
                    d = 0;
                (this.offsets = []),
                    (this.targets = []),
                    (this.scrollHeight = this.getScrollHeight()),
                    a.isWindow(this.$scrollElement[0]) ||
                        ((c = 'position'), (d = this.$scrollElement.scrollTop())),
                    this.$body
                        .find(this.selector)
                        .map(function () {
                            var b = a(this),
                                e = b.data('target') || b.attr('href'),
                                f = /^#./.test(e) && a(e);
                            return (
                                (f && f.length && f.is(':visible') && [[f[c]().top + d, e]]) || null
                            );
                        })
                        .sort(function (a, b) {
                            return a[0] - b[0];
                        })
                        .each(function () {
                            b.offsets.push(this[0]), b.targets.push(this[1]);
                        });
            }),
            (b.prototype.process = function () {
                var a,
                    b = this.$scrollElement.scrollTop() + this.options.offset,
                    c = this.getScrollHeight(),
                    d = this.options.offset + c - this.$scrollElement.height(),
                    e = this.offsets,
                    f = this.targets,
                    g = this.activeTarget;
                if ((this.scrollHeight != c && this.refresh(), b >= d))
                    return g != (a = f[f.length - 1]) && this.activate(a);
                if (g && b < e[0]) return (this.activeTarget = null), this.clear();
                for (a = e.length; a--; )
                    g != f[a] &&
                        b >= e[a] &&
                        (void 0 === e[a + 1] || b < e[a + 1]) &&
                        this.activate(f[a]);
            }),
            (b.prototype.activate = function (b) {
                (this.activeTarget = b), this.clear();
                var c =
                        this.selector +
                        '[data-target="' +
                        b +
                        '"],' +
                        this.selector +
                        '[href="' +
                        b +
                        '"]',
                    d = a(c).parents('li').addClass('active');
                d.parent('.dropdown-menu').length &&
                    (d = d.closest('li.dropdown').addClass('active')),
                    d.trigger('activate.bs.scrollspy');
            }),
            (b.prototype.clear = function () {
                a(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
            });
        var d = a.fn.scrollspy;
        (a.fn.scrollspy = c),
            (a.fn.scrollspy.Constructor = b),
            (a.fn.scrollspy.noConflict = function () {
                return (a.fn.scrollspy = d), this;
            }),
            a(window).on('load.bs.scrollspy.data-api', function () {
                a('[data-spy="scroll"]').each(function () {
                    var b = a(this);
                    c.call(b, b.data());
                });
            });
    })(jQuery),
    +(function (a) {
        'use strict';
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data('bs.tab');
                e || d.data('bs.tab', (e = new c(this))), 'string' == typeof b && e[b]();
            });
        }
        var c = function (b) {
            this.element = a(b);
        };
        (c.VERSION = '3.3.5'),
            (c.TRANSITION_DURATION = 150),
            (c.prototype.show = function () {
                var b = this.element,
                    c = b.closest('ul:not(.dropdown-menu)'),
                    d = b.data('target');
                if (
                    (d || ((d = b.attr('href')), (d = d && d.replace(/.*(?=#[^\s]*$)/, ''))),
                    !b.parent('li').hasClass('active'))
                ) {
                    var e = c.find('.active:last a'),
                        f = a.Event('hide.bs.tab', { relatedTarget: b[0] }),
                        g = a.Event('show.bs.tab', { relatedTarget: e[0] });
                    if (
                        (e.trigger(f),
                        b.trigger(g),
                        !g.isDefaultPrevented() && !f.isDefaultPrevented())
                    ) {
                        var h = a(d);
                        this.activate(b.closest('li'), c),
                            this.activate(h, h.parent(), function () {
                                e.trigger({ type: 'hidden.bs.tab', relatedTarget: b[0] }),
                                    b.trigger({ type: 'shown.bs.tab', relatedTarget: e[0] });
                            });
                    }
                }
            }),
            (c.prototype.activate = function (b, d, e) {
                function f() {
                    g
                        .removeClass('active')
                        .find('> .dropdown-menu > .active')
                        .removeClass('active')
                        .end()
                        .find('[data-toggle="tab"]')
                        .attr('aria-expanded', !1),
                        b.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', !0),
                        h ? (b[0].offsetWidth, b.addClass('in')) : b.removeClass('fade'),
                        b.parent('.dropdown-menu').length &&
                            b
                                .closest('li.dropdown')
                                .addClass('active')
                                .end()
                                .find('[data-toggle="tab"]')
                                .attr('aria-expanded', !0),
                        e && e();
                }
                var g = d.find('> .active'),
                    h =
                        e &&
                        a.support.transition &&
                        ((g.length && g.hasClass('fade')) || !!d.find('> .fade').length);
                g.length && h
                    ? g.one('bsTransitionEnd', f).emulateTransitionEnd(c.TRANSITION_DURATION)
                    : f(),
                    g.removeClass('in');
            });
        var d = a.fn.tab;
        (a.fn.tab = b),
            (a.fn.tab.Constructor = c),
            (a.fn.tab.noConflict = function () {
                return (a.fn.tab = d), this;
            });
        var e = function (c) {
            c.preventDefault(), b.call(a(this), 'show');
        };
        a(document)
            .on('click.bs.tab.data-api', '[data-toggle="tab"]', e)
            .on('click.bs.tab.data-api', '[data-toggle="pill"]', e);
    })(jQuery),
    +(function (a) {
        'use strict';
        function b(b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data('bs.affix'),
                    f = 'object' == typeof b && b;
                e || d.data('bs.affix', (e = new c(this, f))), 'string' == typeof b && e[b]();
            });
        }
        var c = function (b, d) {
            (this.options = a.extend({}, c.DEFAULTS, d)),
                (this.$target = a(this.options.target)
                    .on('scroll.bs.affix.data-api', a.proxy(this.checkPosition, this))
                    .on('click.bs.affix.data-api', a.proxy(this.checkPositionWithEventLoop, this))),
                (this.$element = a(b)),
                (this.affixed = null),
                (this.unpin = null),
                (this.pinnedOffset = null),
                this.checkPosition();
        };
        (c.VERSION = '3.3.5'),
            (c.RESET = 'affix affix-top affix-bottom'),
            (c.DEFAULTS = { offset: 0, target: window }),
            (c.prototype.getState = function (a, b, c, d) {
                var e = this.$target.scrollTop(),
                    f = this.$element.offset(),
                    g = this.$target.height();
                if (null != c && 'top' == this.affixed) return c > e ? 'top' : !1;
                if ('bottom' == this.affixed)
                    return null != c
                        ? e + this.unpin <= f.top
                            ? !1
                            : 'bottom'
                        : a - d >= e + g
                        ? !1
                        : 'bottom';
                var h = null == this.affixed,
                    i = h ? e : f.top,
                    j = h ? g : b;
                return null != c && c >= e ? 'top' : null != d && i + j >= a - d ? 'bottom' : !1;
            }),
            (c.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset) return this.pinnedOffset;
                this.$element.removeClass(c.RESET).addClass('affix');
                var a = this.$target.scrollTop(),
                    b = this.$element.offset();
                return (this.pinnedOffset = b.top - a);
            }),
            (c.prototype.checkPositionWithEventLoop = function () {
                setTimeout(a.proxy(this.checkPosition, this), 1);
            }),
            (c.prototype.checkPosition = function () {
                if (this.$element.is(':visible')) {
                    var b = this.$element.height(),
                        d = this.options.offset,
                        e = d.top,
                        f = d.bottom,
                        g = Math.max(a(document).height(), a(document.body).height());
                    'object' != typeof d && (f = e = d),
                        'function' == typeof e && (e = d.top(this.$element)),
                        'function' == typeof f && (f = d.bottom(this.$element));
                    var h = this.getState(g, b, e, f);
                    if (this.affixed != h) {
                        null != this.unpin && this.$element.css('top', '');
                        var i = 'affix' + (h ? '-' + h : ''),
                            j = a.Event(i + '.bs.affix');
                        if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
                        (this.affixed = h),
                            (this.unpin = 'bottom' == h ? this.getPinnedOffset() : null),
                            this.$element
                                .removeClass(c.RESET)
                                .addClass(i)
                                .trigger(i.replace('affix', 'affixed') + '.bs.affix');
                    }
                    'bottom' == h && this.$element.offset({ top: g - b - f });
                }
            });
        var d = a.fn.affix;
        (a.fn.affix = b),
            (a.fn.affix.Constructor = c),
            (a.fn.affix.noConflict = function () {
                return (a.fn.affix = d), this;
            }),
            a(window).on('load', function () {
                a('[data-spy="affix"]').each(function () {
                    var c = a(this),
                        d = c.data();
                    (d.offset = d.offset || {}),
                        null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
                        null != d.offsetTop && (d.offset.top = d.offsetTop),
                        b.call(c, d);
                });
            });
    })(jQuery);

// Generated by CoffeeScript 1.7.1
(function () {
    var Site, site;

    Site = function () {
        return {
            exerciseValues: {
                sedentary: 1.2,
                lightly: 1.375,
                moderately: 1.55,
                very: 1.725,
                extremely: 1.9,
            },
            loseSpeedValues: {
                easy: 0.1,
                recommended: 0.2,
                aggressive: 0.3,
                reckless: 0.4,
            },
            gainSpeedValues: {
                cautious: 0.05,
                normal: 0.1,
                aggressive: 0.15,
            },
            caloriesPerLb: 3500,
            goalMinMale: 1500,
            goalMinFemale: 1200,
            validUnits: ['imperial', 'metric'],
            validGenders: ['male', 'female'],
            validGoals: ['lose', 'maintain', 'gain'],
            init: function () {
                this.$calculator = $('#calculator .panel');
                this.$results = $('#results > .panel');
                this.storeHash();
                this.units = _.contains(this.validUnits, localStorage.getItem('mytdee-units'))
                    ? localStorage.getItem('mytdee-units')
                    : 'imperial';
                this.gender = _.contains(this.validGenders, localStorage.getItem('mytdee-gender'))
                    ? localStorage.getItem('mytdee-gender')
                    : 'male';
                this.goal = _.contains(this.validGoals, localStorage.getItem('mytdee-goal'))
                    ? localStorage.getItem('mytdee-goal')
                    : 'maintain';
                this.lose_speed = _.contains(
                    _.keys(this.loseSpeedValues),
                    localStorage.getItem('mytdee-lose_speed')
                )
                    ? localStorage.getItem('mytdee-lose_speed')
                    : 'recommended';
                this.gain_speed = _.contains(
                    _.keys(this.gainSpeedValues),
                    localStorage.getItem('mytdee-gain_speed')
                )
                    ? localStorage.getItem('mytdee-gain_speed')
                    : 'cautious';
                this.exercise = _.contains(
                    _.keys(this.exerciseValues),
                    localStorage.getItem('mytdee-exercise')
                )
                    ? localStorage.getItem('mytdee-exercise')
                    : 'sedentary';
                this.yr = localStorage.getItem('mytdee-yr') || '';
                this.ft = localStorage.getItem('mytdee-ft') || '';
                this['in'] = localStorage.getItem('mytdee-in') || '';
                this.cm = localStorage.getItem('mytdee-cm') || '';
                this.kg = localStorage.getItem('mytdee-kg') || '';
                this.lbs = localStorage.getItem('mytdee-lbs') || '';
                this.goal_kg = localStorage.getItem('mytdee-goal_kg') || '';
                this.goal_lbs = localStorage.getItem('mytdee-goal_lbs') || '';
                this.bfp = localStorage.getItem('mytdee-bfp') || '';
                this.formula = localStorage.getItem('mytdee-formula') || '';
                this.radiosAreActivated = false;
                this.setUnits();
                this.setVars();
                this.activateBtnGroupRadios();
                this.setDropdowns();
                this.panelHeightSet = false;
                this.setResultsHeight();
                this.onSubmit();
                this.onReset();
                this.prepareGoalTooltips();
                this.initTooltips();
                this.initPopovers();
                this.initNavToResults();
                return setTimeout(
                    (function (_this) {
                        return function () {
                            _this.radiosAreActivated = true;
                            if (location.hash.slice(1)) {
                                return $('#calculator form').submit();
                            } else if (!_this.isMobile()) {
                                return $('#calculator input[name=yr]').select();
                            }
                        };
                    })(this),
                    0
                );
            },
            storeHash: function () {
                var hash, keyValuePairs;
                hash = location.hash.slice(1);
                keyValuePairs = _.compact(hash.split('&'));
                if (_.size(keyValuePairs)) {
                    return _.each(keyValuePairs, function (str) {
                        var arr, key, val;
                        arr = str.split('=');
                        key = arr[0];
                        val = arr[1];
                        return localStorage.setItem('mytdee-' + key, val);
                    });
                }
            },
            activateBtnGroupRadios: function () {
                return $('.btn-group input').each(
                    (function (_this) {
                        return function (i, el) {
                            var $btn, $btns, $input;
                            $input = $(el);
                            $btn = $input.parents('.btn').first();
                            $btns = $input.parents('.btn-group').find('.btn');
                            return $input.on('change', function (e) {
                                $btns.removeClass('active');
                                if ($input.prop('checked')) {
                                    if (_this.isMobile()) {
                                        if (_this.radiosAreActivated) {
                                            $btn.tooltip('show');
                                        }
                                        setTimeout(function () {
                                            return $btn.tooltip('hide');
                                        }, 2000);
                                    }
                                    $btn.addClass('active');
                                    if ($input.attr('name') === 'goal') {
                                        if ($input.attr('id') === 'lose') {
                                            $('#goal_weight').removeClass('hide');
                                            $('#lose_speed').removeClass('hide');
                                        } else {
                                            $('#goal_weight').addClass('hide');
                                            $('#lose_speed').addClass('hide');
                                        }
                                        if ($input.attr('id') === 'maintain') {
                                            $('#goal_weight input').prop('required', null);
                                        } else {
                                            $('#goal_weight input:visible').prop('required', true);
                                        }
                                        if ($input.attr('id') === 'gain') {
                                            return $('#gain_speed').removeClass('hide');
                                        } else {
                                            return $('#gain_speed').addClass('hide');
                                        }
                                    }
                                }
                            });
                        };
                    })(this)
                );
            },
            setResultsHeight: function () {
                var setIt;
                setIt = (function (_this) {
                    return function () {
                        var ch, h, rh;
                        _this.$results.filter(':visible').height('auto');
                        _this.$calculator.height('auto');
                        ch = _this.$calculator.get(0).scrollHeight;
                        rh = _this.$results.filter(':visible').get(0).scrollHeight;
                        h = Math.max(ch, rh);
                        _this.$results.height(h);
                        _this.$calculator.height(h);
                        return $('.btn-group').each(function () {
                            var $btnGroup, $tooltips, isSkinny, method, tooltipPlacement, w;
                            $btnGroup = $(this);
                            $tooltips = $btnGroup.find('[data-toggle=tooltip]');
                            if (!$btnGroup.find('[data-toggle=dropdown]').size()) {
                                w = $btnGroup.find('.btn').size() * 100;
                                isSkinny = $btnGroup.parent().width() < w;
                                method = isSkinny ? 'addClass' : 'removeClass';
                                $btnGroup[method]('btn-group-vertical');
                                tooltipPlacement = isSkinny ? 'right' : 'top';
                                return $tooltips.each(function () {
                                    var $tooltip;
                                    $tooltip = $(this);
                                    if ($tooltip.data('bs.tooltip')) {
                                        return ($tooltip.data('bs.tooltip').options.placement =
                                            tooltipPlacement);
                                    }
                                });
                            }
                        });
                    };
                })(this);
                setIt();
                if (!this.panelHeightSet) {
                    $(window).on('resize', _.throttle(setIt, 10));
                    return (this.panelHeightSet = true);
                }
            },
            setUnits: function () {
                var $inputs, setIt;
                $inputs = $('input[name=units]');
                setIt = (function (_this) {
                    return function (isImperial) {
                        if (isImperial) {
                            $('[data-unit=metric]')
                                .addClass('hide')
                                .find('input')
                                .prop('required', null);
                            $('[data-unit=imperial]')
                                .removeClass('hide')
                                .find('input')
                                .each(function () {
                                    var $input;
                                    $input = $(this);
                                    if ($input.is(':visible')) {
                                        return $input.prop('required', true);
                                    }
                                });
                            return $('#imperial').click();
                        } else {
                            $('[data-unit=metric]')
                                .removeClass('hide')
                                .find('input')
                                .each(function () {
                                    var $input;
                                    $input = $(this);
                                    if ($input.is(':visible')) {
                                        return $input.prop('required', true);
                                    }
                                });
                            $('[data-unit=imperial]')
                                .addClass('hide')
                                .find('input')
                                .prop('required', null);
                            return $('#metric').click();
                        }
                    };
                })(this);
                setIt(this.units === 'imperial');
                return $inputs.each(function () {
                    var $input;
                    $input = $(this);
                    return $input.on('change', function () {
                        var isImperial;
                        if ($input.prop('checked')) {
                            isImperial = $input.val() === 'imperial';
                            localStorage.setItem('mytdee-units', $input.val());
                            return setIt(isImperial);
                        }
                    });
                });
            },
            setVars: function () {
                var $bfp,
                    $cm,
                    $ft,
                    $gain_speed,
                    $gender,
                    $goal,
                    $goal_kg,
                    $goal_lbs,
                    $in,
                    $inputs,
                    $kg,
                    $lbs,
                    $lose_speed,
                    $yr;
                $yr = $('input[name=yr]');
                $gender = $('input[name=gender]');
                $goal = $('input[name=goal]');
                $lose_speed = $('input[name=lose_speed]');
                $gain_speed = $('input[name=gain_speed]');
                $ft = $('input[name=ft]');
                $in = $('input[name=in]');
                $cm = $('input[name=cm]');
                $kg = $('input[name=kg]');
                $lbs = $('input[name=lbs]');
                $goal_kg = $('input[name=goal_kg]');
                $goal_lbs = $('input[name=goal_lbs]');
                $bfp = $('input[name=bfp]');
                $inputs = $('#calculator input').on(
                    'change',
                    (function (_this) {
                        return function () {
                            return _this.toggleResults(false);
                        };
                    })(this)
                );
                $yr.val(this.yr);
                $yr.on('change', function () {
                    return localStorage.setItem('mytdee-yr', $yr.val());
                });
                setTimeout(
                    (function (_this) {
                        return function () {
                            return $gender
                                .filter('#' + _this.gender)
                                .prop('checked', true)
                                .trigger('change');
                        };
                    })(this),
                    0
                );
                $gender.on('change', function () {
                    return localStorage.setItem(
                        'mytdee-gender',
                        $gender.filter(':checked').attr('id')
                    );
                });
                setTimeout(
                    (function (_this) {
                        return function () {
                            return $goal
                                .filter('#' + _this.goal)
                                .prop('checked', true)
                                .trigger('change');
                        };
                    })(this),
                    0
                );
                $goal.on('change', function () {
                    return localStorage.setItem('mytdee-goal', $goal.filter(':checked').attr('id'));
                });
                setTimeout(
                    (function (_this) {
                        return function () {
                            return $lose_speed
                                .filter('[value="' + _this.lose_speed + '"]')
                                .prop('checked', true)
                                .trigger('change');
                        };
                    })(this),
                    0
                );
                $lose_speed.on('change', function () {
                    return localStorage.setItem(
                        'mytdee-lose_speed',
                        $lose_speed.filter(':checked').attr('id')
                    );
                });
                setTimeout(
                    (function (_this) {
                        return function () {
                            return $gain_speed
                                .filter('[value="' + _this.gain_speed + '"]')
                                .prop('checked', true)
                                .trigger('change');
                        };
                    })(this),
                    0
                );
                $gain_speed.on('change', function () {
                    return localStorage.setItem(
                        'mytdee-gain_speed',
                        $gain_speed.filter(':checked').attr('id')
                    );
                });
                $cm.val(this.cm);
                $cm.on('change', function () {
                    var cm, ft, inches, totalInches;
                    localStorage.setItem('mytdee-cm', $cm.val());
                    cm = parseFloat($cm.val(), 10);
                    totalInches = Math.round((cm / 2.54) * 10) / 10;
                    ft = Math.floor(totalInches / 12);
                    inches = Math.floor((totalInches % 12) * 10) / 10;
                    $ft.val(ft);
                    $in.val(inches);
                    localStorage.setItem('mytdee-ft', $ft.val());
                    return localStorage.setItem('mytdee-in', $in.val());
                });
                $kg.val(this.kg);
                $kg.on('change', function () {
                    var lbs;
                    localStorage.setItem('mytdee-kg', $kg.val());
                    lbs = Math.round((parseFloat($kg.val(), 10) / 0.453592) * 10) / 10;
                    $lbs.val(lbs);
                    return localStorage.setItem('mytdee-lbs', $lbs.val());
                });
                $goal_kg.val(this.goal_kg);
                $goal_kg.on('change', function () {
                    var goal_lbs;
                    localStorage.setItem('mytdee-goal_kg', $goal_kg.val());
                    goal_lbs = Math.round((parseFloat($goal_kg.val(), 10) / 0.453592) * 10) / 10;
                    $goal_lbs.val(goal_lbs);
                    return localStorage.setItem('mytdee-goal_lbs', $goal_lbs.val());
                });
                $bfp.val(this.bfp);
                $bfp.on('change', function () {
                    return localStorage.setItem('mytdee-bfp', $bfp.val());
                });
                $lbs.val(this.lbs);
                $lbs.on(
                    'change',
                    (function (_this) {
                        return function () {
                            var kg;
                            localStorage.setItem('mytdee-lbs', $lbs.val());
                            kg = Math.round(parseFloat($lbs.val(), 10) * 0.453592 * 10) / 10;
                            $kg.val(kg);
                            return localStorage.setItem('mytdee-kg', $kg.val());
                        };
                    })(this)
                );
                $goal_lbs.val(this.goal_lbs);
                $goal_lbs.on(
                    'change',
                    (function (_this) {
                        return function () {
                            var goal_kg;
                            localStorage.setItem('mytdee-goal_lbs', $goal_lbs.val());
                            goal_kg =
                                Math.round(parseFloat($goal_lbs.val(), 10) * 0.453592 * 10) / 10;
                            $goal_kg.val(goal_kg);
                            return localStorage.setItem('mytdee-goal_kg', $goal_kg.val());
                        };
                    })(this)
                );
                $ft.val(this.ft);
                $ft.on(
                    'change',
                    (function (_this) {
                        return function () {
                            var cm, inches;
                            localStorage.setItem('mytdee-ft', $ft.val());
                            inches = parseFloat($ft.val(), 10) * 12 + parseFloat($in.val(), 10);
                            cm = Math.round(inches * 2.54 * 10) / 10;
                            $cm.val(cm);
                            return localStorage.setItem('mytdee-cm', $cm.val());
                        };
                    })(this)
                );
                $in.val(this['in']);
                $in.on(
                    'change',
                    (function (_this) {
                        return function () {
                            var cm, inches;
                            localStorage.setItem('mytdee-in', $in.val());
                            inches = parseFloat($ft.val(), 10) * 12 + parseFloat($in.val(), 10);
                            cm = Math.round(inches * 2.54 * 10) / 10;
                            $cm.val(cm);
                            return localStorage.setItem('mytdee-cm', $cm.val());
                        };
                    })(this)
                );
                $cm.trigger('change');
                $kg.trigger('change');
                return $goal_kg.trigger('change');
            },
            setDropdowns: function () {
                var $dropdowns, $exerciseLink, $formulaLink, that;
                that = this;
                $dropdowns = $('.form-group .dropdown-menu');
                $dropdowns.each(function () {
                    var $dropdown, $input, $links;
                    $dropdown = $(this);
                    $links = $dropdown.find('a');
                    $input = $dropdown.siblings().filter('input.hide');
                    return $links.each(function () {
                        var $link, $target, localKey, target;
                        $link = $(this);
                        target = $link.attr('href');
                        $target = $(target);
                        localKey = target.split('_')[0].substr(1);
                        return $link.on('click', function (e) {
                            var dataVal, val;
                            e.preventDefault();
                            that.toggleResults(false);
                            val = $link.find('b').text();
                            $target.html(val);
                            dataVal = $link.attr('data-value');
                            $target.attr('data-value', dataVal);
                            that[localKey] = dataVal;
                            localStorage.setItem('mytdee-' + localKey, dataVal);
                            $link.parents('ul').first().find('li').removeClass('active');
                            $link.parent().addClass('active');
                            if (that.formula === 'bfp') {
                                $('#body_fat')
                                    .removeClass('hide')
                                    .find('input')
                                    .prop('required', true);
                                $('#bfp_popover').removeClass('hide');
                                return $('#standard_popover').addClass('hide');
                            } else {
                                $('#body_fat')
                                    .addClass('hide')
                                    .find('input')
                                    .prop('required', null);
                                $('#bfp_popover').addClass('hide');
                                return $('#standard_popover').removeClass('hide');
                            }
                        });
                    });
                });
                $formulaLink = $('a[data-value="' + this.formula + '"]');
                $exerciseLink = $('a[data-value="' + this.exercise + '"]');
                if (this.formula && $formulaLink.size()) {
                    $formulaLink.click();
                } else {
                    $('#formula .dropdown-menu a').first().click();
                }
                if (this.exercise && $exerciseLink.size()) {
                    return $exerciseLink.click();
                } else {
                    return $('#exercise .dropdown-menu a').first().click();
                }
            },
            encode: function (str) {
                return Base64.encode(str);
            },
            decode: function (str) {
                return Base64.decode(str);
            },
            onSubmit: function () {
                var that;
                that = this;
                return $('#calculator form').on('submit', function (e) {
                    var $msgs,
                        $visibleGoalWeight,
                        bmr,
                        bodyFatPercent,
                        caloriesToGoal,
                        cm,
                        daysLabel,
                        daysMinusWeeksToGoal,
                        daysToGoal,
                        errors,
                        exerciseLevel,
                        gain_speed,
                        gender,
                        goalDate,
                        goalDateWeeksLabel,
                        goalLabel,
                        goalMin,
                        goalVal,
                        goalWeightLabel,
                        goal_lbs,
                        isStandard,
                        kg,
                        lbs,
                        lbsDiff,
                        leanMass,
                        lose_speed,
                        tdee,
                        tdeeDiff,
                        vals,
                        warningClassMethod,
                        weeksLabel,
                        weeksToGoal,
                        yr;
                    e.preventDefault();
                    isStandard = that.formula === 'standard';
                    exerciseLevel = that.exerciseValues[that.exercise];
                    vals = {};
                    $('#calculator input[required]').each(function () {
                        var $input, $label, name, valKey;
                        $input = $(this);
                        $label = $input.parents('.form-group').first().find('.control-label');
                        name = $input.siblings('.input-group-addon').text();
                        valKey = $label.text() + ' (' + name + ')';
                        return (vals[valKey] = $input.val());
                    });
                    errors = [];
                    _.each(vals, function (val, key) {
                        if (!val) {
                            return errors.push('Please fill a value for <b>' + key + '</b>');
                        }
                    });
                    if (_.size(errors)) {
                        $msgs = $('#messages');
                        $msgs.html('');
                        _.each(errors, function (msg) {
                            var $msg;
                            $msg = $('<div>').addClass('alert alert-danger').html(msg);
                            return $msgs.append($msg);
                        });
                        return $('html, body').animate({
                            scrollTop: $msgs.offset().top - 20 + 'px',
                        });
                    } else {
                        gender = $('input[name=gender]:checked').val();
                        yr = parseFloat($('input[name=yr]').val(), 10);
                        cm = parseFloat($('input[name=cm]').val(), 10);
                        kg = parseFloat($('input[name=kg]').val(), 10);
                        lbs = parseFloat($('input[name=lbs]').val(), 10);
                        goal_lbs = parseFloat($('input[name=goal_lbs]').val(), 10);
                        if (gender === 'male') {
                            bmr = 66 + 13.7 * kg + 5 * cm + -6.8 * yr;
                        } else {
                            bmr = 655 + 9.6 * kg + 1.8 * cm + -4.7 * yr;
                        }
                        if (isStandard) {
                            tdee = bmr * exerciseLevel;
                        } else {
                            bodyFatPercent = parseFloat($('input[name=bfp]').val(), 10) / 100;
                            leanMass = kg - kg * bodyFatPercent;
                            tdee = (21.6 * leanMass + 370) * exerciseLevel;
                        }
                        $('#tdee_val').html(Math.round(tdee));
                        $('#bmr_val').html(Math.round(bmr));
                        that.goal = $('input[name=goal]:checked').val();
                        goalVal = tdee;
                        goalMin = gender === 'male' ? that.goalMinMale : that.goalMinFemale;
                        if (that.goal === 'maintain' || that.goal === 'gain') {
                            $('#results_bmr').removeClass('hide');
                            $('#results_goal_date').addClass('hide');
                        } else {
                            $('#results_bmr').addClass('hide');
                            $('#results_goal_date').removeClass('hide');
                        }
                        if (that.goal === 'lose') {
                            lose_speed = $('input[name=lose_speed]:checked').val();
                            goalVal = tdee * (1 - that.loseSpeedValues[lose_speed]);
                            goalVal = Math.max(goalVal, goalMin);
                            $visibleGoalWeight = $('#goal_weight input:visible');
                            goalWeightLabel =
                                $visibleGoalWeight.val() +
                                ' ' +
                                $visibleGoalWeight.siblings('.input-group-addon').text();
                            $('#results_goal_date').find('strong').html(goalWeightLabel);
                            lbsDiff = lbs - goal_lbs;
                            tdeeDiff = tdee - goalVal;
                            caloriesToGoal = lbsDiff * that.caloriesPerLb;
                            daysToGoal = Math.ceil(caloriesToGoal / tdeeDiff);
                            goalDate = moment().add(daysToGoal, 'days');
                            $('#goal_date').html(goalDate.format('ddd, D MMM, YYYY'));
                            weeksToGoal = Math.floor(daysToGoal / 7);
                            weeksLabel = weeksToGoal === 1 ? ' tu???n ' : ' tu???n ';
                            daysMinusWeeksToGoal = daysToGoal % 7;
                            daysLabel = daysMinusWeeksToGoal;
                            daysLabel += daysMinusWeeksToGoal === 1 ? ' ng??y ' : ' ng??y ';
                            if (daysMinusWeeksToGoal === 0) {
                                daysLabel = '';
                            }
                            goalDateWeeksLabel = '' + weeksToGoal + weeksLabel + daysLabel + '';
                            $('#goal_date_weeks').html(goalDateWeeksLabel);
                        } else if (that.goal === 'gain') {
                            gain_speed = $('input[name=gain_speed]:checked').val();
                            goalVal = tdee * (1 + that.gainSpeedValues[gain_speed]);
                        }
                        goalVal = Math.max(goalVal, goalMin);
                        localStorage.setItem('goal', 2666);
                        $('#goal_val').html(Math.round(goalVal));
                        warningClassMethod = goalVal === goalMin ? 'removeClass' : 'addClass';
                        $('#results_goal .caption i')[warningClassMethod]('hide');
                        goalLabel = $('input[name=goal]:checked').parent().text();
                        $('#results_goal').find('strong').html(goalLabel);
                        that.toggleResults();
                        that.scrollToResults();
                        return that.setHash($(this).serializeArray());
                    }
                });
            },
            excludedInputs: ['goal_lbs', 'lbs', 'ft', 'in'],
            setHash: function (data) {
                var excludedInputs, queryString;
                data.push({
                    name: 'formula',
                    value: this.formula,
                });
                data.push({
                    name: 'units',
                    value: this.units,
                });
                data.push({
                    name: 'exercise',
                    value: this.exercise,
                });
                excludedInputs = _.clone(this.excludedInputs);
                if (this.goal === 'lose') {
                    excludedInputs.push('gain_speed');
                } else {
                    excludedInputs.push('lose_speed');
                    excludedInputs.push('goal_kg');
                    if (this.goal === 'maintain') {
                        excludedInputs.push('gain_speed');
                    }
                }
                data = _.map(data, function (obj) {
                    if (!_.contains(excludedInputs, obj.name)) {
                        return obj.name + '=' + obj.value;
                    }
                });
                queryString = _.compact(data).join('&');
                return (window.location.hash = queryString);
            },
            onReset: function () {
                return $('#calculator form').on(
                    'reset',
                    (function (_this) {
                        return function () {
                            return _this.toggleResults(false);
                        };
                    })(this)
                );
            },
            toggleResults: function (showResults) {
                if (showResults == null) {
                    showResults = true;
                }
                if (showResults) {
                    $('#results_panel').removeClass('hide');
                    $('#no_results_panel').addClass('hide');
                } else {
                    $('#results_panel').addClass('hide');
                    $('#no_results_panel').removeClass('hide');
                }
                return setTimeout(_.bind(this.setResultsHeight, this), 0);
            },
            scrollToResults: function (toResults) {
                if (toResults == null) {
                    toResults = true;
                }
                if (toResults) {
                    return $('html, body').animate({
                        scrollTop: $('#results').offset().top - 20 + 'px',
                    });
                } else {
                    return $('html, body').animate({
                        scrollTop: $('#calculator').offset().top - 20 + 'px',
                    });
                }
            },
            prepareGoalTooltips: function () {
                var $labels;
                $labels = $('#lose_speed label, #gain_speed label');
                return $labels.each(
                    (function (_this) {
                        return function (i, el) {
                            var $input, $label, arrayKey, isLosing, tooltip, val;
                            $label = $(el);
                            $input = $label.children().first();
                            isLosing = $input.attr('name') === 'lose_speed';
                            arrayKey = isLosing ? 'loseSpeedValues' : 'gainSpeedValues';
                            val = _this[arrayKey][$label.text().toLowerCase()];
                            tooltip = 'TDEE';
                            tooltip += isLosing ? ' -' : ' +';
                            tooltip += val * 100 + '%';
                            $label.attr('data-toggle', 'tooltip');
                            return $label.attr('data-original-title', tooltip);
                        };
                    })(this)
                );
            },
            initTooltips: function () {
                if (this.isMobile()) {
                    return $('.btn-group [data-toggle=tooltip]').tooltip({
                        container: 'body',
                        trigger: 'manual',
                    });
                } else {
                    if (this.isIE()) {
                        return $('.btn-group [data-toggle=tooltip]').tooltip({
                            container: 'body',
                        });
                    } else {
                        return $('[data-toggle=tooltip]').tooltip({
                            container: 'body',
                        });
                    }
                }
            },
            initPopovers: function () {
                return $('[data-toggle=popover]')
                    .popover({
                        html: true,
                        container: '#calculator',
                    })
                    .on('click', function (e) {
                        return e.preventDefault();
                    });
            },
            initNavToResults: function () {
                return $('a[href=#results], a[href=#calculator]').each(
                    (function (_this) {
                        return function (i, el) {
                            var $link;
                            $link = $(el);
                            return $link.on('click', function (e) {
                                e.preventDefault();
                                _this.scrollToResults($link.attr('href').indexOf('results') !== -1);
                                return false;
                            });
                        };
                    })(this)
                );
            },
            _isHighDensity: function () {
                return (
                    (window.matchMedia &&
                        (window.matchMedia(
                            'only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)'
                        ).matches ||
                            window.matchMedia(
                                'only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)'
                            ).matches)) ||
                    (window.devicePixelRatio && window.devicePixelRatio > 1.3)
                );
            },
            _isRetina: function () {
                return (
                    ((window.matchMedia &&
                        (window.matchMedia(
                            'only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)'
                        ).matches ||
                            window.matchMedia(
                                'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)'
                            ).matches)) ||
                        (window.devicePixelRatio && window.devicePixelRatio > 2)) &&
                    /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
                );
            },
            _checkMobile: {
                webOS: function () {
                    return /webOS/i.test(navigator.userAgent);
                },
                Android: function () {
                    return /Android/i.test(navigator.userAgent);
                },
                BlackBerry: function () {
                    return /BlackBerry/i.test(navigator.userAgent);
                },
                iOS: function () {
                    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
                },
                Opera: function () {
                    return /Opera Mini/i.test(navigator.userAgent);
                },
                Windows: function () {
                    return /IEMobile/i.test(navigator.userAgent);
                },
            },
            isMobile: function () {
                var isMobile;
                isMobile = false;
                _.each(this._checkMobile, function (func, key) {
                    if (func() === true) {
                        return (isMobile = key);
                    }
                });
                return isMobile;
            },
            isIE: function () {
                var edge, msie, rv, trident, ua;
                ua = window.navigator.userAgent;
                msie = ua.indexOf('MSIE ');
                if (msie > 0) {
                    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
                }
                trident = ua.indexOf('Trident/');
                if (trident > 0) {
                    rv = ua.indexOf('rv:');
                    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
                }
                edge = ua.indexOf('Edge/');
                if (edge > 0) {
                    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
                }
                return false;
            },
        };
    };

    site = new Site();

    site.init();
}.call(this));
