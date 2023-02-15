import {
  S as et,
  i as tt,
  s as Fe,
  x,
  y as le,
  z as K,
  L as He,
  f as j,
  t as H,
  A as O,
  o as st,
  Z as rt,
  N as ot,
  O as lt,
  P as it,
  Q as ct,
  k as m,
  l as p,
  m as v,
  h as d,
  n,
  b as ue,
  U as dt,
  q as Ve,
  a as I,
  r as Ce,
  c as T,
  Y as We,
  H as i,
  u as at,
  w as xe,
  T as ut,
  K as ft,
  d as mt,
  D as pt,
  W as Ke,
  X as Oe,
  I as ht,
  M as _t,
  g as gt
} from '../../../../chunks/index-0daa1a08.js'
import { n as ve, w as nt, b as Qe, a as vt } from '../../../../chunks/info-523b83f0.js'
import { C as $t, P as bt } from '../../../../chunks/PostDate-20ade620.js'
import { A as wt } from '../../../../chunks/ArrowLeftIcon-0d013bae.js'
import { S as kt } from '../../../../chunks/SocialLinks-1a8fffbb.js'
import { l as q } from '../../../../chunks/singletons-d58f7749.js'
const { window: Et } = rt
function Xe(r, e, o) {
  const l = r.slice()
  return (l[9] = e[o]), l
}
const yt = (r) => ({}),
  Ze = (r) => ({ slot: 'description' })
function Je(r) {
  let e,
    o,
    l = r[9].value + '',
    t,
    a,
    s,
    h
  return {
    c() {
      ;(e = m('li')), (o = m('a')), (t = Ve(l)), (s = I()), this.h()
    },
    l(f) {
      e = p(f, 'LI', { class: !0, style: !0 })
      var c = v(e)
      o = p(c, 'A', { href: !0 })
      var b = v(o)
      ;(t = Ce(b, l)), b.forEach(d), (s = T(c)), c.forEach(d), this.h()
    },
    h() {
      n(o, 'href', (a = `#${r[9].id}`)),
        n(
          e,
          'class',
          'pl-2 transition-colors border-teal-500 heading text-zinc-500 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100 svelte-t48kcq'
        ),
        n(e, 'style', (h = `--depth: ${Math.max(0, r[9].depth - 1)}`)),
        We(e, 'active', r[1] === r[9])
    },
    m(f, c) {
      ue(f, e, c), i(e, o), i(o, t), i(e, s)
    },
    p(f, c) {
      c & 1 && l !== (l = f[9].value + '') && at(t, l),
        c & 1 && a !== (a = `#${f[9].id}`) && n(o, 'href', a),
        c & 1 && h !== (h = `--depth: ${Math.max(0, f[9].depth - 1)}`) && n(e, 'style', h),
        c & 3 && We(e, 'active', f[1] === f[9])
    },
    d(f) {
      f && d(e)
    }
  }
}
function zt(r) {
  let e,
    o = r[0],
    l = []
  for (let t = 0; t < o.length; t += 1) l[t] = Je(Xe(r, o, t))
  return {
    c() {
      e = m('ul')
      for (let t = 0; t < l.length; t += 1) l[t].c()
      this.h()
    },
    l(t) {
      e = p(t, 'UL', { class: !0 })
      var a = v(e)
      for (let s = 0; s < l.length; s += 1) l[s].l(a)
      a.forEach(d), this.h()
    },
    h() {
      n(e, 'class', 'flex flex-col gap-2')
    },
    m(t, a) {
      ue(t, e, a)
      for (let s = 0; s < l.length; s += 1) l[s].m(e, null)
    },
    p(t, a) {
      if (a & 3) {
        o = t[0]
        let s
        for (s = 0; s < o.length; s += 1) {
          const h = Xe(t, o, s)
          l[s] ? l[s].p(h, a) : ((l[s] = Je(h)), l[s].c(), l[s].m(e, null))
        }
        for (; s < l.length; s += 1) l[s].d(1)
        l.length = o.length
      }
    },
    d(t) {
      t && d(e), dt(l, t)
    }
  }
}
function At(r) {
  let e
  const o = r[4].default,
    l = ot(o, r, r[5], Ze),
    t = l || zt(r)
  return {
    c() {
      t && t.c()
    },
    l(a) {
      t && t.l(a)
    },
    m(a, s) {
      t && t.m(a, s), (e = !0)
    },
    p(a, s) {
      l
        ? l.p && (!e || s & 32) && lt(l, o, a, a[5], e ? ct(o, a[5], s, yt) : it(a[5]), Ze)
        : t && t.p && (!e || s & 3) && t.p(a, e ? s : -1)
    },
    i(a) {
      e || (j(t, a), (e = !0))
    },
    o(a) {
      H(t, a), (e = !1)
    },
    d(a) {
      t && t.d(a)
    }
  }
}
function It(r) {
  let e, o, l, t
  return (
    (e = new $t({ props: { $$slots: { description: [At] }, $$scope: { ctx: r } } })),
    {
      c() {
        x(e.$$.fragment)
      },
      l(a) {
        le(e.$$.fragment, a)
      },
      m(a, s) {
        K(e, a, s), (o = !0), l || ((t = He(Et, 'scroll', r[2])), (l = !0))
      },
      p(a, [s]) {
        const h = {}
        s & 35 && (h.$$scope = { dirty: s, ctx: a }), e.$set(h)
      },
      i(a) {
        o || (j(e.$$.fragment, a), (o = !0))
      },
      o(a) {
        H(e.$$.fragment, a), (o = !1)
      },
      d(a) {
        O(e, a), (l = !1), t()
      }
    }
  )
}
function Tt(r, e, o) {
  let { $$slots: l = {}, $$scope: t } = e,
    { post: a } = e,
    s = [],
    h = a.headings
  st(() => {
    b(), M()
  })
  let f = h[0],
    c
  function b() {
    o(0, (h = a.headings)), (s = h.map((w) => document.getElementById(w.id)))
  }
  function M() {
    c = window.scrollY
    const w = s.findIndex((y) => y.offsetTop + y.clientHeight > c) - 1
    o(1, (f = h[w]))
    const V = document.body.scrollHeight,
      C = (c + window.innerHeight) / V
    f || (C > 0.5 ? o(1, (f = h[h.length - 1])) : o(1, (f = h[0])))
  }
  return (
    (r.$$set = (w) => {
      'post' in w && o(3, (a = w.post)), '$$scope' in w && o(5, (t = w.$$scope))
    }),
    [h, f, M, a, l, t]
  )
}
class Mt extends et {
  constructor(e) {
    super(), tt(this, e, Tt, It, Fe, { post: 3 })
  }
}
q.disable_scroll_handling
q.goto
q.invalidate
q.invalidateAll
q.preload_data
q.preload_code
q.before_navigate
const Dt = q.after_navigate
function De(r) {
  let e, o, l, t, a, s
  o = new wt({
    props: {
      class:
        'w-4 h-4 transition stroke-zinc-500 group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400'
    }
  })
  let h = [
      {
        class:
          'items-center justify-center hidden w-10 h-10 mb-8 transition bg-white rounded-full shadow-md -top-1 -left-16 lg:flex group shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:focus-visible:ring-2 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20'
      },
      { href: (l = r[1] ? void 0 : '/posts') },
      { 'aria-label': 'Go back to posts' }
    ],
    f = {}
  for (let c = 0; c < h.length; c += 1) f = pt(f, h[c])
  return {
    c() {
      ;(e = m(r[1] ? 'button' : 'a')), x(o.$$.fragment), this.h()
    },
    l(c) {
      e = p(c, ((r[1] ? 'button' : 'a') || 'null').toUpperCase(), {
        class: !0,
        href: !0,
        'aria-label': !0
      })
      var b = v(e)
      le(o.$$.fragment, b), b.forEach(d), this.h()
    },
    h() {
      ;/-/.test(r[1] ? 'button' : 'a') ? Ke(e, f) : Oe(e, f)
    },
    m(c, b) {
      ue(c, e, b),
        K(o, e, null),
        (t = !0),
        a || ((s = [He(e, 'click', r[4]), He(e, 'keydown', r[4])]), (a = !0))
    },
    p(c, b) {
      ;(f = ht(h, [
        {
          class:
            'items-center justify-center hidden w-10 h-10 mb-8 transition bg-white rounded-full shadow-md -top-1 -left-16 lg:flex group shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:focus-visible:ring-2 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20'
        },
        (!t || (b & 2 && l !== (l = c[1] ? void 0 : '/posts'))) && { href: l },
        { 'aria-label': 'Go back to posts' }
      ])),
        /-/.test(c[1] ? 'button' : 'a') ? Ke(e, f) : Oe(e, f)
    },
    i(c) {
      t || (j(o.$$.fragment, c), (t = !0))
    },
    o(c) {
      H(o.$$.fragment, c), (t = !1)
    },
    d(c) {
      c && d(e), O(o), (a = !1), _t(s)
    }
  }
}
function Ht(r) {
  let e,
    o,
    l,
    t,
    a,
    s,
    h,
    f,
    c,
    b,
    M,
    w,
    V,
    C,
    y,
    fe,
    G,
    me,
    Q,
    pe,
    k,
    X,
    F,
    $e = r[1] ? 'button' : 'a',
    be,
    z,
    R,
    L,
    Z,
    ie = r[0].post.title + '',
    he,
    we,
    P,
    ke,
    U,
    g,
    Ee,
    ye,
    ze,
    J,
    A,
    ee,
    B,
    Ae,
    te,
    Y,
    N,
    Le,
    Ie,
    ae,
    Te,
    Me,
    ne,
    W,
    S,
    E
  document.title = e = r[0].post.title + ' - ' + ve
  let $ = (r[1] ? 'button' : 'a') && De(r)
  P = new bt({
    props: { class: 'text-sm sm:text-base', post: r[0].post, decorate: !0, collapsed: !0 }
  })
  var se = r[0].component
  function Pe(u) {
    return {}
  }
  return (
    se && (g = xe(se, Pe())),
    (B = new kt({})),
    (S = new Mt({ props: { post: r[0].post } })),
    {
      c() {
        ;(o = m('meta')),
          (t = m('meta')),
          (a = m('meta')),
          (s = m('meta')),
          (h = m('meta')),
          (c = m('meta')),
          (M = m('meta')),
          (w = m('meta')),
          (V = m('meta')),
          (C = m('meta')),
          (y = m('meta')),
          (G = m('meta')),
          (Q = m('meta')),
          (pe = I()),
          (k = m('div')),
          (X = m('div')),
          (F = m('div')),
          $ && $.c(),
          (be = I()),
          (z = m('div')),
          (R = m('article')),
          (L = m('header')),
          (Z = m('h1')),
          (he = Ve(ie)),
          (we = I()),
          x(P.$$.fragment),
          (ke = I()),
          (U = m('div')),
          g && x(g.$$.fragment),
          (Ee = I()),
          (ye = m('hr')),
          (ze = I()),
          (J = m('div')),
          (A = m('div')),
          (ee = m('div')),
          x(B.$$.fragment),
          (Ae = I()),
          (te = m('div')),
          (Y = m('a')),
          (N = m('img')),
          (Ie = I()),
          (ae = m('p')),
          (Te = Ve(Qe)),
          (Me = I()),
          (ne = m('div')),
          (W = m('aside')),
          x(S.$$.fragment),
          this.h()
      },
      l(u) {
        const _ = ut('svelte-7wmra1', document.head)
        ;(o = p(_, 'META', { name: !0, content: !0 })),
          (t = p(_, 'META', { name: !0, content: !0 })),
          (a = p(_, 'META', { property: !0, content: !0 })),
          (s = p(_, 'META', { property: !0, content: !0 })),
          (h = p(_, 'META', { property: !0, content: !0 })),
          (c = p(_, 'META', { property: !0, content: !0 })),
          (M = p(_, 'META', { property: !0, content: !0 })),
          (w = p(_, 'META', { name: !0, content: !0 })),
          (V = p(_, 'META', { property: !0, content: !0 })),
          (C = p(_, 'META', { property: !0, content: !0 })),
          (y = p(_, 'META', { name: !0, content: !0 })),
          (G = p(_, 'META', { name: !0, content: !0 })),
          (Q = p(_, 'META', { name: !0, content: !0 })),
          _.forEach(d),
          (pe = T(u)),
          (k = p(u, 'DIV', { class: !0 }))
        var D = v(k)
        X = p(D, 'DIV', { class: !0 })
        var ce = v(X)
        F = p(ce, 'DIV', { class: !0 })
        var de = v(F)
        $ && $.l(de), de.forEach(d), ce.forEach(d), (be = T(D)), (z = p(D, 'DIV', { class: !0 }))
        var re = v(z)
        R = p(re, 'ARTICLE', {})
        var _e = v(R)
        L = p(_e, 'HEADER', { class: !0 })
        var ge = v(L)
        Z = p(ge, 'H1', { class: !0 })
        var Se = v(Z)
        ;(he = Ce(Se, ie)),
          Se.forEach(d),
          (we = T(ge)),
          le(P.$$.fragment, ge),
          ge.forEach(d),
          (ke = T(_e)),
          (U = p(_e, 'DIV', { class: !0 }))
        var je = v(U)
        g && le(g.$$.fragment, je),
          je.forEach(d),
          _e.forEach(d),
          (Ee = T(re)),
          (ye = p(re, 'HR', {})),
          (ze = T(re)),
          (J = p(re, 'DIV', { class: !0 }))
        var qe = v(J)
        A = p(qe, 'DIV', { class: !0 })
        var oe = v(A)
        ee = p(oe, 'DIV', { class: !0 })
        var Ge = v(ee)
        le(B.$$.fragment, Ge), Ge.forEach(d), (Ae = T(oe)), (te = p(oe, 'DIV', { class: !0 }))
        var Re = v(te)
        Y = p(Re, 'A', { href: !0, class: !0 })
        var Ue = v(Y)
        ;(N = p(Ue, 'IMG', { src: !0, alt: !0, class: !0 })),
          Ue.forEach(d),
          Re.forEach(d),
          (Ie = T(oe)),
          (ae = p(oe, 'P', { class: !0 }))
        var Be = v(ae)
        ;(Te = Ce(Be, Qe)),
          Be.forEach(d),
          oe.forEach(d),
          qe.forEach(d),
          re.forEach(d),
          (Me = T(D)),
          (ne = p(D, 'DIV', { class: !0 }))
        var Ye = v(ne)
        W = p(Ye, 'ASIDE', { class: !0, 'aria-label': !0 })
        var Ne = v(W)
        le(S.$$.fragment, Ne), Ne.forEach(d), Ye.forEach(d), D.forEach(d), this.h()
      },
      h() {
        n(o, 'name', 'description'),
          n(o, 'content', (l = r[0].post.preview.text)),
          n(t, 'name', 'author'),
          n(t, 'content', ve),
          n(a, 'property', 'og:url'),
          n(a, 'content', r[3]),
          n(s, 'property', 'og:type'),
          n(s, 'content', 'website'),
          n(h, 'property', 'og:title'),
          n(h, 'content', (f = r[0].post.title)),
          n(c, 'property', 'og:description'),
          n(c, 'content', (b = r[0].post.preview.text)),
          n(M, 'property', 'og:image'),
          n(M, 'content', r[2]),
          n(w, 'name', 'twitter:card'),
          n(w, 'content', 'summary_large_image'),
          n(V, 'property', 'twitter:domain'),
          n(V, 'content', nt),
          n(C, 'property', 'twitter:url'),
          n(C, 'content', r[3]),
          n(y, 'name', 'twitter:title'),
          n(y, 'content', (fe = r[0].post.title)),
          n(G, 'name', 'twitter:description'),
          n(G, 'content', (me = r[0].post.preview.text)),
          n(Q, 'name', 'twitter:image'),
          n(Q, 'content', r[2]),
          n(F, 'class', 'sticky top-0 w-full flex justify-end pt-11 pr-8'),
          n(X, 'class', 'hidden lg:block pt-8'),
          n(
            Z,
            'class',
            'mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'
          ),
          n(L, 'class', 'flex flex-col'),
          n(U, 'class', 'prose dark:prose-invert '),
          n(ee, 'class', 'flex justify-center order-1 col-span-2 gap-6 md:order-2'),
          ft(N.src, (Le = vt)) || n(N, 'src', Le),
          n(N, 'alt', ve),
          n(
            N,
            'class',
            'w-24 h-24 mx-auto rounded-full md:w-28 md:h-28 ring-2 ring-zinc-200 dark:ring-zinc-700'
          ),
          n(Y, 'href', '/'),
          n(Y, 'class', 'inline-block rounded-full'),
          n(te, 'class', 'flex justify-center order-2 md:order-1 md:col-span-2'),
          n(ae, 'class', 'order-3 text-base text-zinc-600 dark:text-zinc-400'),
          n(A, 'class', 'grid gap-8'),
          n(J, 'class', 'py-8'),
          n(z, 'class', 'w-full mx-auto overflow-x-hidden'),
          n(W, 'class', 'sticky hidden w-48 ml-8 xl:block top-8'),
          n(W, 'aria-label', 'Table of Contents'),
          n(ne, 'class', 'hidden xl:block pt-10'),
          n(k, 'class', 'root max-w-2xl mx-auto lg:max-w-none svelte-1eui11k')
      },
      m(u, _) {
        i(document.head, o),
          i(document.head, t),
          i(document.head, a),
          i(document.head, s),
          i(document.head, h),
          i(document.head, c),
          i(document.head, M),
          i(document.head, w),
          i(document.head, V),
          i(document.head, C),
          i(document.head, y),
          i(document.head, G),
          i(document.head, Q),
          ue(u, pe, _),
          ue(u, k, _),
          i(k, X),
          i(X, F),
          $ && $.m(F, null),
          i(k, be),
          i(k, z),
          i(z, R),
          i(R, L),
          i(L, Z),
          i(Z, he),
          i(L, we),
          K(P, L, null),
          i(R, ke),
          i(R, U),
          g && K(g, U, null),
          i(z, Ee),
          i(z, ye),
          i(z, ze),
          i(z, J),
          i(J, A),
          i(A, ee),
          K(B, ee, null),
          i(A, Ae),
          i(A, te),
          i(te, Y),
          i(Y, N),
          i(A, Ie),
          i(A, ae),
          i(ae, Te),
          i(k, Me),
          i(k, ne),
          i(ne, W),
          K(S, W, null),
          (E = !0)
      },
      p(u, [_]) {
        ;(!E || _ & 1) && e !== (e = u[0].post.title + ' - ' + ve) && (document.title = e),
          (!E || (_ & 1 && l !== (l = u[0].post.preview.text))) && n(o, 'content', l),
          (!E || (_ & 1 && f !== (f = u[0].post.title))) && n(h, 'content', f),
          (!E || (_ & 1 && b !== (b = u[0].post.preview.text))) && n(c, 'content', b),
          (!E || (_ & 1 && fe !== (fe = u[0].post.title))) && n(y, 'content', fe),
          (!E || (_ & 1 && me !== (me = u[0].post.preview.text))) && n(G, 'content', me),
          u[1],
          $e
            ? Fe($e, u[1] ? 'button' : 'a')
              ? ($.d(1), ($ = De(u)), $.c(), $.m(F, null))
              : $.p(u, _)
            : (($ = De(u)), $.c(), $.m(F, null)),
          ($e = u[1] ? 'button' : 'a'),
          (!E || _ & 1) && ie !== (ie = u[0].post.title + '') && at(he, ie)
        const D = {}
        if ((_ & 1 && (D.post = u[0].post), P.$set(D), se !== (se = u[0].component))) {
          if (g) {
            gt()
            const de = g
            H(de.$$.fragment, 1, 0, () => {
              O(de, 1)
            }),
              mt()
          }
          se
            ? ((g = xe(se, Pe())), x(g.$$.fragment), j(g.$$.fragment, 1), K(g, U, null))
            : (g = null)
        }
        const ce = {}
        _ & 1 && (ce.post = u[0].post), S.$set(ce)
      },
      i(u) {
        E ||
          (j(P.$$.fragment, u),
          g && j(g.$$.fragment, u),
          j(B.$$.fragment, u),
          j(S.$$.fragment, u),
          (E = !0))
      },
      o(u) {
        H($),
          H(P.$$.fragment, u),
          g && H(g.$$.fragment, u),
          H(B.$$.fragment, u),
          H(S.$$.fragment, u),
          (E = !1)
      },
      d(u) {
        d(o),
          d(t),
          d(a),
          d(s),
          d(h),
          d(c),
          d(M),
          d(w),
          d(V),
          d(C),
          d(y),
          d(G),
          d(Q),
          u && d(pe),
          u && d(k),
          $ && $.d(u),
          O(P),
          g && O(g),
          O(B),
          O(S)
      }
    }
  )
}
function Vt(r, e, o) {
  let { data: l } = e
  const t = `https://og-image.vercel.app/**${encodeURIComponent(
      l.post.title
    )}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`,
    a = `${nt}/${l.post.slug}`
  let s = !1
  Dt(({ from: f }) => {
    f && f.url.pathname.startsWith('/posts') && o(1, (s = !0))
  })
  function h() {
    s && history.back()
  }
  return (
    (r.$$set = (f) => {
      'data' in f && o(0, (l = f.data))
    }),
    [l, s, t, a, h]
  )
}
class qt extends et {
  constructor(e) {
    super(), tt(this, e, Vt, Ht, Fe, { data: 0 })
  }
}
export { qt as default }
