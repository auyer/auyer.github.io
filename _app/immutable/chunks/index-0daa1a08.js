function w() {}
function W(t, e) {
  for (const n in e) t[n] = e[n]
  return t
}
function M(t) {
  return t()
}
function C() {
  return Object.create(null)
}
function y(t) {
  t.forEach(M)
}
function L(t) {
  return typeof t == 'function'
}
function ut(t, e) {
  return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function'
}
let x
function ft(t, e) {
  return x || (x = document.createElement('a')), (x.href = e), t === x.href
}
function G(t) {
  return Object.keys(t).length === 0
}
function I(t, ...e) {
  if (t == null) return w
  const n = t.subscribe(...e)
  return n.unsubscribe ? () => n.unsubscribe() : n
}
function at(t, e, n) {
  t.$$.on_destroy.push(I(e, n))
}
function _t(t, e, n, i) {
  if (t) {
    const r = P(t, e, n, i)
    return t[0](r)
  }
}
function P(t, e, n, i) {
  return t[1] && i ? W(n.ctx.slice(), t[1](i(e))) : n.ctx
}
function dt(t, e, n, i) {
  if (t[2] && i) {
    const r = t[2](i(n))
    if (e.dirty === void 0) return r
    if (typeof r == 'object') {
      const u = [],
        s = Math.max(e.dirty.length, r.length)
      for (let o = 0; o < s; o += 1) u[o] = e.dirty[o] | r[o]
      return u
    }
    return e.dirty | r
  }
  return e.dirty
}
function ht(t, e, n, i, r, u) {
  if (r) {
    const s = P(e, n, i, u)
    t.p(s, r)
  }
}
function mt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32
    for (let i = 0; i < n; i++) e[i] = -1
    return e
  }
  return -1
}
function pt(t) {
  const e = {}
  for (const n in t) n[0] !== '$' && (e[n] = t[n])
  return e
}
function yt(t) {
  const e = {}
  for (const n in t) e[n] = !0
  return e
}
let E = !1
function J() {
  E = !0
}
function K() {
  E = !1
}
function Q(t, e, n, i) {
  for (; t < e; ) {
    const r = t + ((e - t) >> 1)
    n(r) <= i ? (t = r + 1) : (e = r)
  }
  return t
}
function U(t) {
  if (t.hydrate_init) return
  t.hydrate_init = !0
  let e = t.childNodes
  if (t.nodeName === 'HEAD') {
    const c = []
    for (let l = 0; l < e.length; l++) {
      const a = e[l]
      a.claim_order !== void 0 && c.push(a)
    }
    e = c
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length)
  n[0] = -1
  let r = 0
  for (let c = 0; c < e.length; c++) {
    const l = e[c].claim_order,
      a = (r > 0 && e[n[r]].claim_order <= l ? r + 1 : Q(1, r, (g) => e[n[g]].claim_order, l)) - 1
    i[c] = n[a] + 1
    const f = a + 1
    ;(n[f] = c), (r = Math.max(f, r))
  }
  const u = [],
    s = []
  let o = e.length - 1
  for (let c = n[r] + 1; c != 0; c = i[c - 1]) {
    for (u.push(e[c - 1]); o >= c; o--) s.push(e[o])
    o--
  }
  for (; o >= 0; o--) s.push(e[o])
  u.reverse(), s.sort((c, l) => c.claim_order - l.claim_order)
  for (let c = 0, l = 0; c < s.length; c++) {
    for (; l < u.length && s[c].claim_order >= u[l].claim_order; ) l++
    const a = l < u.length ? u[l] : null
    t.insertBefore(s[c], a)
  }
}
function V(t, e) {
  if (E) {
    for (
      U(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling)
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e)
}
function gt(t, e, n) {
  E && !n ? V(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null)
}
function X(t) {
  t.parentNode && t.parentNode.removeChild(t)
}
function xt(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}
function Y(t) {
  return document.createElement(t)
}
function Z(t) {
  return document.createElementNS('http://www.w3.org/2000/svg', t)
}
function k(t) {
  return document.createTextNode(t)
}
function bt() {
  return k(' ')
}
function $t() {
  return k('')
}
function wt(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i)
}
function S(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function Et(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__)
  for (const i in e)
    e[i] == null
      ? t.removeAttribute(i)
      : i === 'style'
      ? (t.style.cssText = e[i])
      : i === '__value'
      ? (t.value = t[i] = e[i])
      : n[i] && n[i].set
      ? (t[i] = e[i])
      : S(t, i, e[i])
}
function vt(t, e) {
  for (const n in e) S(t, n, e[n])
}
function Nt(t, e) {
  Object.keys(e).forEach((n) => {
    tt(t, n, e[n])
  })
}
function tt(t, e, n) {
  e in t ? (t[e] = typeof t[e] == 'boolean' && n === '' ? !0 : n) : S(t, e, n)
}
function et(t) {
  return Array.from(t.childNodes)
}
function nt(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 })
}
function q(t, e, n, i, r = !1) {
  nt(t)
  const u = (() => {
    for (let s = t.claim_info.last_index; s < t.length; s++) {
      const o = t[s]
      if (e(o)) {
        const c = n(o)
        return c === void 0 ? t.splice(s, 1) : (t[s] = c), r || (t.claim_info.last_index = s), o
      }
    }
    for (let s = t.claim_info.last_index - 1; s >= 0; s--) {
      const o = t[s]
      if (e(o)) {
        const c = n(o)
        return (
          c === void 0 ? t.splice(s, 1) : (t[s] = c),
          r ? c === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = s),
          o
        )
      }
    }
    return i()
  })()
  return (u.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), u
}
function B(t, e, n, i) {
  return q(
    t,
    (r) => r.nodeName === e,
    (r) => {
      const u = []
      for (let s = 0; s < r.attributes.length; s++) {
        const o = r.attributes[s]
        n[o.name] || u.push(o.name)
      }
      u.forEach((s) => r.removeAttribute(s))
    },
    () => i(e)
  )
}
function At(t, e, n) {
  return B(t, e, n, Y)
}
function kt(t, e, n) {
  return B(t, e, n, Z)
}
function it(t, e) {
  return q(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = '' + e
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length)
      } else n.data = i
    },
    () => k(e),
    !0
  )
}
function St(t) {
  return it(t, ' ')
}
function Tt(t, e) {
  ;(e = '' + e), t.wholeText !== e && (t.data = e)
}
function jt(t, e, n, i) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? 'important' : '')
}
function Ct(t, e, n) {
  t.classList[n ? 'add' : 'remove'](e)
}
function Ot(t, e) {
  const n = []
  let i = 0
  for (const r of e.childNodes)
    if (r.nodeType === 8) {
      const u = r.textContent.trim()
      u === `HEAD_${t}_END`
        ? ((i -= 1), n.push(r))
        : u === `HEAD_${t}_START` && ((i += 1), n.push(r))
    } else i > 0 && n.push(r)
  return n
}
function Dt(t, e) {
  return new t(e)
}
let p
function m(t) {
  p = t
}
function H() {
  if (!p) throw new Error('Function called outside component initialization')
  return p
}
function Mt(t) {
  H().$$.on_mount.push(t)
}
function Lt(t) {
  H().$$.after_update.push(t)
}
const h = [],
  O = [],
  b = [],
  D = [],
  z = Promise.resolve()
let N = !1
function F() {
  N || ((N = !0), z.then(R))
}
function Pt() {
  return F(), z
}
function A(t) {
  b.push(t)
}
const v = new Set()
let d = 0
function R() {
  if (d !== 0) return
  const t = p
  do {
    try {
      for (; d < h.length; ) {
        const e = h[d]
        d++, m(e), rt(e.$$)
      }
    } catch (e) {
      throw ((h.length = 0), (d = 0), e)
    }
    for (m(null), h.length = 0, d = 0; O.length; ) O.pop()()
    for (let e = 0; e < b.length; e += 1) {
      const n = b[e]
      v.has(n) || (v.add(n), n())
    }
    b.length = 0
  } while (h.length)
  for (; D.length; ) D.pop()()
  ;(N = !1), v.clear(), m(t)
}
function rt(t) {
  if (t.fragment !== null) {
    t.update(), y(t.before_update)
    const e = t.dirty
    ;(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(A)
  }
}
const $ = new Set()
let _
function qt() {
  _ = { r: 0, c: [], p: _ }
}
function Bt() {
  _.r || y(_.c), (_ = _.p)
}
function ct(t, e) {
  t && t.i && ($.delete(t), t.i(e))
}
function Ht(t, e, n, i) {
  if (t && t.o) {
    if ($.has(t)) return
    $.add(t),
      _.c.push(() => {
        $.delete(t), i && (n && t.d(1), i())
      }),
      t.o(e)
  } else i && i()
}
const zt = typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : global
function Ft(t, e) {
  const n = {},
    i = {},
    r = { $$scope: 1 }
  let u = t.length
  for (; u--; ) {
    const s = t[u],
      o = e[u]
    if (o) {
      for (const c in s) c in o || (i[c] = 1)
      for (const c in o) r[c] || ((n[c] = o[c]), (r[c] = 1))
      t[u] = o
    } else for (const c in s) r[c] = 1
  }
  for (const s in i) s in n || (n[s] = void 0)
  return n
}
function Rt(t) {
  t && t.c()
}
function Wt(t, e) {
  t && t.l(e)
}
function st(t, e, n, i) {
  const { fragment: r, after_update: u } = t.$$
  r && r.m(e, n),
    i ||
      A(() => {
        const s = t.$$.on_mount.map(M).filter(L)
        t.$$.on_destroy ? t.$$.on_destroy.push(...s) : y(s), (t.$$.on_mount = [])
      }),
    u.forEach(A)
}
function ot(t, e) {
  const n = t.$$
  n.fragment !== null &&
    (y(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []))
}
function lt(t, e) {
  t.$$.dirty[0] === -1 && (h.push(t), F(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
}
function Gt(t, e, n, i, r, u, s, o = [-1]) {
  const c = p
  m(t)
  const l = (t.$$ = {
    fragment: null,
    ctx: [],
    props: u,
    update: w,
    not_equal: r,
    bound: C(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: C(),
    dirty: o,
    skip_bound: !1,
    root: e.target || c.$$.root
  })
  s && s(l.root)
  let a = !1
  if (
    ((l.ctx = n
      ? n(t, e.props || {}, (f, g, ...T) => {
          const j = T.length ? T[0] : g
          return (
            l.ctx &&
              r(l.ctx[f], (l.ctx[f] = j)) &&
              (!l.skip_bound && l.bound[f] && l.bound[f](j), a && lt(t, f)),
            g
          )
        })
      : []),
    l.update(),
    (a = !0),
    y(l.before_update),
    (l.fragment = i ? i(l.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      J()
      const f = et(e.target)
      l.fragment && l.fragment.l(f), f.forEach(X)
    } else l.fragment && l.fragment.c()
    e.intro && ct(t.$$.fragment), st(t, e.target, e.anchor, e.customElement), K(), R()
  }
  m(c)
}
class It {
  $destroy() {
    ot(this, 1), (this.$destroy = w)
  }
  $on(e, n) {
    if (!L(n)) return w
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
    return (
      i.push(n),
      () => {
        const r = i.indexOf(n)
        r !== -1 && i.splice(r, 1)
      }
    )
  }
  $set(e) {
    this.$$set && !G(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
  }
}
export {
  ot as A,
  Pt as B,
  w as C,
  W as D,
  Z as E,
  kt as F,
  vt as G,
  V as H,
  Ft as I,
  pt as J,
  ft as K,
  wt as L,
  y as M,
  _t as N,
  ht as O,
  mt as P,
  dt as Q,
  at as R,
  It as S,
  Ot as T,
  xt as U,
  yt as V,
  Nt as W,
  Et as X,
  Ct as Y,
  zt as Z,
  bt as a,
  gt as b,
  St as c,
  Bt as d,
  $t as e,
  ct as f,
  qt as g,
  X as h,
  Gt as i,
  Lt as j,
  Y as k,
  At as l,
  et as m,
  S as n,
  Mt as o,
  jt as p,
  k as q,
  it as r,
  ut as s,
  Ht as t,
  Tt as u,
  O as v,
  Dt as w,
  Rt as x,
  Wt as y,
  st as z
}
