import {
  S as Z,
  i as ee,
  s as te,
  a as D,
  k as g,
  q as N,
  x as F,
  T as se,
  h as f,
  c as C,
  l as $,
  m as k,
  r as j,
  y as T,
  n as u,
  b as V,
  H as h,
  z as B,
  t as y,
  d as U,
  f as P,
  A as G,
  g as W,
  C as S
} from '../../../../chunks/index-0daa1a08.js'
import { n as X } from '../../../../chunks/info-523b83f0.js'
import { A as ae } from '../../../../chunks/ArrowLeftIcon-0d013bae.js'
import { P as re, A as le } from '../../../../chunks/PostsList-6c79e541.js'
function oe(c) {
  let e
  return {
    c() {
      e = g('div')
    },
    l(a) {
      ;(e = $(a, 'DIV', {})), k(e).forEach(f)
    },
    m(a, s) {
      V(a, e, s)
    },
    p: S,
    i: S,
    o: S,
    d(a) {
      a && f(e)
    }
  }
}
function ne(c) {
  let e, a, s, o, r
  return (
    (a = new ae({ props: { class: 'w-4 h-4' } })),
    {
      c() {
        ;(e = g('a')),
          F(a.$$.fragment),
          (s = N(`
        Previous`)),
          this.h()
      },
      l(t) {
        e = $(t, 'A', { href: !0, 'data-sveltekit-prefetch': !0, class: !0 })
        var i = k(e)
        T(a.$$.fragment, i),
          (s = j(
            i,
            `
        Previous`
          )),
          i.forEach(f),
          this.h()
      },
      h() {
        u(e, 'href', (o = `/posts/${c[0].page - 1}`)),
          u(e, 'data-sveltekit-prefetch', ''),
          u(e, 'class', 'svelte-9puhmz')
      },
      m(t, i) {
        V(t, e, i), B(a, e, null), h(e, s), (r = !0)
      },
      p(t, i) {
        ;(!r || (i & 1 && o !== (o = `/posts/${t[0].page - 1}`))) && u(e, 'href', o)
      },
      i(t) {
        r || (P(a.$$.fragment, t), (r = !0))
      },
      o(t) {
        y(a.$$.fragment, t), (r = !1)
      },
      d(t) {
        t && f(e), G(a)
      }
    }
  )
}
function Y(c) {
  let e, a, s, o, r
  return (
    (s = new le({ props: { class: 'w-4 h-4' } })),
    {
      c() {
        ;(e = g('a')),
          (a = N(`Next
        `)),
          F(s.$$.fragment),
          this.h()
      },
      l(t) {
        e = $(t, 'A', { href: !0, 'data-sveltekit-prefetch': !0, class: !0 })
        var i = k(e)
        ;(a = j(
          i,
          `Next
        `
        )),
          T(s.$$.fragment, i),
          i.forEach(f),
          this.h()
      },
      h() {
        u(e, 'href', (o = `/posts/${c[0].page + 1}`)),
          u(e, 'data-sveltekit-prefetch', ''),
          u(e, 'class', 'svelte-9puhmz')
      },
      m(t, i) {
        V(t, e, i), h(e, a), B(s, e, null), (r = !0)
      },
      p(t, i) {
        ;(!r || (i & 1 && o !== (o = `/posts/${t[0].page + 1}`))) && u(e, 'href', o)
      },
      i(t) {
        r || (P(s.$$.fragment, t), (r = !0))
      },
      o(t) {
        y(s.$$.fragment, t), (r = !1)
      },
      d(t) {
        t && f(e), G(s)
      }
    }
  )
}
function ie(c) {
  let e, a, s, o, r, t, i, x, q, L, A, b, R, d, p, m, z, I
  ;(document.title = e = X + ' | Posts'), (b = new re({ props: { posts: c[0].posts } }))
  const J = [ne, oe],
    w = []
  function K(l, _) {
    return l[2] ? 1 : 0
  }
  ;(p = K(c)), (m = w[p] = J[p](c))
  let n = c[1] && Y(c)
  return {
    c() {
      ;(a = D()),
        (s = g('div')),
        (o = g('header')),
        (r = g('h1')),
        (t = N('Check my posts:')),
        (i = D()),
        (x = g('p')),
        (q = N('I should write more.')),
        (L = D()),
        (A = g('div')),
        F(b.$$.fragment),
        (R = D()),
        (d = g('div')),
        m.c(),
        (z = D()),
        n && n.c(),
        this.h()
    },
    l(l) {
      se('svelte-1j9di4b', document.head).forEach(f), (a = C(l)), (s = $(l, 'DIV', { class: !0 }))
      var v = k(s)
      o = $(v, 'HEADER', { class: !0 })
      var E = k(o)
      r = $(E, 'H1', { class: !0 })
      var M = k(r)
      ;(t = j(M, 'Check my posts:')), M.forEach(f), (i = C(E)), (x = $(E, 'P', { class: !0 }))
      var O = k(x)
      ;(q = j(O, 'I should write more.')),
        O.forEach(f),
        E.forEach(f),
        (L = C(v)),
        (A = $(v, 'DIV', { class: !0 }))
      var Q = k(A)
      T(b.$$.fragment, Q), Q.forEach(f), (R = C(v)), (d = $(v, 'DIV', { class: !0 }))
      var H = k(d)
      m.l(H), (z = C(H)), n && n.l(H), H.forEach(f), v.forEach(f), this.h()
    },
    h() {
      u(r, 'class', 'text-4xl font-bold tracking-tight sm:text-5xl'),
        u(x, 'class', 'mt-6'),
        u(o, 'class', 'pt-4'),
        u(A, 'class', 'mt-16 sm:mt-20'),
        u(d, 'class', 'flex items-center justify-between pt-16 pb-8'),
        u(s, 'class', 'flex flex-col flex-grow')
    },
    m(l, _) {
      V(l, a, _),
        V(l, s, _),
        h(s, o),
        h(o, r),
        h(r, t),
        h(o, i),
        h(o, x),
        h(x, q),
        h(s, L),
        h(s, A),
        B(b, A, null),
        h(s, R),
        h(s, d),
        w[p].m(d, null),
        h(d, z),
        n && n.m(d, null),
        (I = !0)
    },
    p(l, [_]) {
      ;(!I || _ & 0) && e !== (e = X + ' | Posts') && (document.title = e)
      const v = {}
      _ & 1 && (v.posts = l[0].posts), b.$set(v)
      let E = p
      ;(p = K(l)),
        p === E
          ? w[p].p(l, _)
          : (W(),
            y(w[E], 1, 1, () => {
              w[E] = null
            }),
            U(),
            (m = w[p]),
            m ? m.p(l, _) : ((m = w[p] = J[p](l)), m.c()),
            P(m, 1),
            m.m(d, z)),
        l[1]
          ? n
            ? (n.p(l, _), _ & 2 && P(n, 1))
            : ((n = Y(l)), n.c(), P(n, 1), n.m(d, null))
          : n &&
            (W(),
            y(n, 1, 1, () => {
              n = null
            }),
            U())
    },
    i(l) {
      I || (P(b.$$.fragment, l), P(m), P(n), (I = !0))
    },
    o(l) {
      y(b.$$.fragment, l), y(m), y(n), (I = !1)
    },
    d(l) {
      l && f(a), l && f(s), G(b), w[p].d(), n && n.d()
    }
  }
}
function ce(c, e, a) {
  let s,
    o,
    { data: r } = e
  return (
    (c.$$set = (t) => {
      'data' in t && a(0, (r = t.data))
    }),
    (c.$$.update = () => {
      var t
      c.$$.dirty & 1 && a(2, (s = r.page === 1)),
        c.$$.dirty & 1 &&
          a(1, (o = (t = r.posts[r.posts.length - 1]) == null ? void 0 : t.previous))
    }),
    [r, o, s]
  )
}
class me extends Z {
  constructor(e) {
    super(), ee(this, e, ce, ie, te, { data: 0 })
  }
}
export { me as default }
