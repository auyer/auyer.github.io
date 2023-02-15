import {
  S as dt,
  i as ht,
  s as mt,
  a as _t,
  e as B,
  c as gt,
  b as X,
  g as ge,
  t as K,
  d as we,
  f as G,
  h as J,
  j as wt,
  o as Te,
  k as yt,
  l as bt,
  m as vt,
  n as Ie,
  p as $,
  q as Et,
  r as kt,
  u as St,
  v as Le,
  w as Q,
  x,
  y as De,
  z as ee,
  A as te,
  B as me
} from './chunks/index-0daa1a08.js'
import {
  S as it,
  a as lt,
  I as F,
  g as Qe,
  f as xe,
  b as Ae,
  c as _e,
  s as H,
  i as et,
  d as ie,
  e as Z,
  P as tt,
  h as Rt,
  j as It,
  k as Lt
} from './chunks/singletons-d58f7749.js'
import { _ as M } from './chunks/preload-helper-41c905a7.js'
function At(a, e) {
  return a === '/' || e === 'ignore'
    ? a
    : e === 'never'
    ? a.endsWith('/')
      ? a.slice(0, -1)
      : a
    : e === 'always' && !a.endsWith('/')
    ? a + '/'
    : a
}
function Ot(a) {
  return a.split('%25').map(decodeURI).join('%25')
}
function Pt(a) {
  for (const e in a) a[e] = decodeURIComponent(a[e])
  return a
}
const Ut = ['href', 'pathname', 'search', 'searchParams', 'toString', 'toJSON']
function Nt(a, e) {
  const n = new URL(a)
  for (const s of Ut) {
    let i = n[s]
    Object.defineProperty(n, s, {
      get() {
        return e(), i
      },
      enumerable: !0,
      configurable: !0
    })
  }
  return Tt(n), n
}
function Tt(a) {
  Object.defineProperty(a, 'hash', {
    get() {
      throw new Error(
        'Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead'
      )
    }
  })
}
const jt = '/__data.json'
function Dt(a) {
  return a.replace(/\/$/, '') + jt
}
function ct(a) {
  try {
    return JSON.parse(sessionStorage[a])
  } catch {}
}
function nt(a, e) {
  const n = JSON.stringify(e)
  try {
    sessionStorage[a] = n
  } catch {}
}
function Vt(...a) {
  let e = 5381
  for (const n of a)
    if (typeof n == 'string') {
      let s = n.length
      for (; s; ) e = (e * 33) ^ n.charCodeAt(--s)
    } else if (ArrayBuffer.isView(n)) {
      const s = new Uint8Array(n.buffer, n.byteOffset, n.byteLength)
      let i = s.length
      for (; i; ) e = (e * 33) ^ s[--i]
    } else throw new TypeError('value must be a string or TypedArray')
  return (e >>> 0).toString(36)
}
const ye = window.fetch
window.fetch = (a, e) => (
  (a instanceof Request ? a.method : (e == null ? void 0 : e.method) || 'GET') !== 'GET' &&
    le.delete(Ve(a)),
  ye(a, e)
)
const le = new Map()
function Ct(a, e) {
  const n = Ve(a, e),
    s = document.querySelector(n)
  if (s != null && s.textContent) {
    const { body: i, ...u } = JSON.parse(s.textContent),
      t = s.getAttribute('data-ttl')
    return (
      t && le.set(n, { body: i, init: u, ttl: 1e3 * Number(t) }),
      Promise.resolve(new Response(i, u))
    )
  }
  return ye(a, e)
}
function qt(a, e, n) {
  if (le.size > 0) {
    const s = Ve(a, n),
      i = le.get(s)
    if (i) {
      if (
        performance.now() < i.ttl &&
        ['default', 'force-cache', 'only-if-cached', void 0].includes(n == null ? void 0 : n.cache)
      )
        return new Response(i.body, i.init)
      le.delete(s)
    }
  }
  return ye(e, n)
}
function Ve(a, e) {
  let s = `script[data-sveltekit-fetched][data-url=${JSON.stringify(
    a instanceof Request ? a.url : a
  )}]`
  if ((e != null && e.headers) || (e != null && e.body)) {
    const i = []
    e.headers && i.push([...new Headers(e.headers)].join(',')),
      e.body && (typeof e.body == 'string' || ArrayBuffer.isView(e.body)) && i.push(e.body),
      (s += `[data-hash="${Vt(...i)}"]`)
  }
  return s
}
const Ft = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/
function $t(a) {
  const e = []
  return {
    pattern:
      a === '/'
        ? /^\/$/
        : new RegExp(
            `^${Mt(a)
              .map((s) => {
                const i = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s)
                if (i)
                  return (
                    e.push({ name: i[1], matcher: i[2], optional: !1, rest: !0, chained: !0 }),
                    '(?:/(.*))?'
                  )
                const u = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s)
                if (u)
                  return (
                    e.push({ name: u[1], matcher: u[2], optional: !0, rest: !1, chained: !0 }),
                    '(?:/([^/]+))?'
                  )
                if (!s) return
                const t = s.split(/\[(.+?)\](?!\])/)
                return (
                  '/' +
                  t
                    .map((m, _) => {
                      if (_ % 2) {
                        if (m.startsWith('x+'))
                          return Oe(String.fromCharCode(parseInt(m.slice(2), 16)))
                        if (m.startsWith('u+'))
                          return Oe(
                            String.fromCharCode(
                              ...m
                                .slice(2)
                                .split('-')
                                .map((O) => parseInt(O, 16))
                            )
                          )
                        const g = Ft.exec(m)
                        if (!g)
                          throw new Error(
                            `Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`
                          )
                        const [, A, P, I, V] = g
                        return (
                          e.push({
                            name: I,
                            matcher: V,
                            optional: !!A,
                            rest: !!P,
                            chained: P ? _ === 1 && t[0] === '' : !1
                          }),
                          P ? '(.*?)' : A ? '([^/]*)?' : '([^/]+?)'
                        )
                      }
                      return Oe(m)
                    })
                    .join('')
                )
              })
              .join('')}/?$`
          ),
    params: e
  }
}
function Ht(a) {
  return !/^\([^)]+\)$/.test(a)
}
function Mt(a) {
  return a.slice(1).split('/').filter(Ht)
}
function Bt(a, e, n) {
  const s = {},
    i = a.slice(1)
  let u = 0
  for (let t = 0; t < e.length; t += 1) {
    const f = e[t],
      m = i[t - u]
    if (f.chained && f.rest && u) {
      ;(s[f.name] = i
        .slice(t - u, t + 1)
        .filter((_) => _)
        .join('/')),
        (u = 0)
      continue
    }
    if (m === void 0) {
      f.rest && (s[f.name] = '')
      continue
    }
    if (!f.matcher || n[f.matcher](m)) {
      s[f.name] = m
      continue
    }
    if (f.optional && f.chained) {
      u++
      continue
    }
    return
  }
  if (!u) return s
}
function Oe(a) {
  return a
    .normalize()
    .replace(/[[\]]/g, '\\$&')
    .replace(/%/g, '%25')
    .replace(/\//g, '%2[Ff]')
    .replace(/\?/g, '%3[Ff]')
    .replace(/#/g, '%23')
    .replace(/[.*+?^${}()|\\]/g, '\\$&')
}
function Kt(a, e, n, s) {
  const i = new Set(e)
  return Object.entries(n).map(([f, [m, _, g]]) => {
    const { pattern: A, params: P } = $t(f),
      I = {
        id: f,
        exec: (V) => {
          const O = A.exec(V)
          if (O) return Bt(O, P, s)
        },
        errors: [1, ...(g || [])].map((V) => a[V]),
        layouts: [0, ...(_ || [])].map(t),
        leaf: u(m)
      }
    return (I.errors.length = I.layouts.length = Math.max(I.errors.length, I.layouts.length)), I
  })
  function u(f) {
    const m = f < 0
    return m && (f = ~f), [m, a[f]]
  }
  function t(f) {
    return f === void 0 ? f : [i.has(f), a[f]]
  }
}
function Gt(a) {
  let e, n, s
  var i = a[1][0]
  function u(t) {
    return { props: { data: t[3], form: t[2] } }
  }
  return (
    i && ((e = Q(i, u(a))), a[12](e)),
    {
      c() {
        e && x(e.$$.fragment), (n = B())
      },
      l(t) {
        e && De(e.$$.fragment, t), (n = B())
      },
      m(t, f) {
        e && ee(e, t, f), X(t, n, f), (s = !0)
      },
      p(t, f) {
        const m = {}
        if ((f & 8 && (m.data = t[3]), f & 4 && (m.form = t[2]), i !== (i = t[1][0]))) {
          if (e) {
            ge()
            const _ = e
            K(_.$$.fragment, 1, 0, () => {
              te(_, 1)
            }),
              we()
          }
          i
            ? ((e = Q(i, u(t))),
              t[12](e),
              x(e.$$.fragment),
              G(e.$$.fragment, 1),
              ee(e, n.parentNode, n))
            : (e = null)
        } else i && e.$set(m)
      },
      i(t) {
        s || (e && G(e.$$.fragment, t), (s = !0))
      },
      o(t) {
        e && K(e.$$.fragment, t), (s = !1)
      },
      d(t) {
        a[12](null), t && J(n), e && te(e, t)
      }
    }
  )
}
function Jt(a) {
  let e, n, s
  var i = a[1][0]
  function u(t) {
    return { props: { data: t[3], $$slots: { default: [zt] }, $$scope: { ctx: t } } }
  }
  return (
    i && ((e = Q(i, u(a))), a[11](e)),
    {
      c() {
        e && x(e.$$.fragment), (n = B())
      },
      l(t) {
        e && De(e.$$.fragment, t), (n = B())
      },
      m(t, f) {
        e && ee(e, t, f), X(t, n, f), (s = !0)
      },
      p(t, f) {
        const m = {}
        if (
          (f & 8 && (m.data = t[3]),
          f & 8215 && (m.$$scope = { dirty: f, ctx: t }),
          i !== (i = t[1][0]))
        ) {
          if (e) {
            ge()
            const _ = e
            K(_.$$.fragment, 1, 0, () => {
              te(_, 1)
            }),
              we()
          }
          i
            ? ((e = Q(i, u(t))),
              t[11](e),
              x(e.$$.fragment),
              G(e.$$.fragment, 1),
              ee(e, n.parentNode, n))
            : (e = null)
        } else i && e.$set(m)
      },
      i(t) {
        s || (e && G(e.$$.fragment, t), (s = !0))
      },
      o(t) {
        e && K(e.$$.fragment, t), (s = !1)
      },
      d(t) {
        a[11](null), t && J(n), e && te(e, t)
      }
    }
  )
}
function zt(a) {
  let e, n, s
  var i = a[1][1]
  function u(t) {
    return { props: { data: t[4], form: t[2] } }
  }
  return (
    i && ((e = Q(i, u(a))), a[10](e)),
    {
      c() {
        e && x(e.$$.fragment), (n = B())
      },
      l(t) {
        e && De(e.$$.fragment, t), (n = B())
      },
      m(t, f) {
        e && ee(e, t, f), X(t, n, f), (s = !0)
      },
      p(t, f) {
        const m = {}
        if ((f & 16 && (m.data = t[4]), f & 4 && (m.form = t[2]), i !== (i = t[1][1]))) {
          if (e) {
            ge()
            const _ = e
            K(_.$$.fragment, 1, 0, () => {
              te(_, 1)
            }),
              we()
          }
          i
            ? ((e = Q(i, u(t))),
              t[10](e),
              x(e.$$.fragment),
              G(e.$$.fragment, 1),
              ee(e, n.parentNode, n))
            : (e = null)
        } else i && e.$set(m)
      },
      i(t) {
        s || (e && G(e.$$.fragment, t), (s = !0))
      },
      o(t) {
        e && K(e.$$.fragment, t), (s = !1)
      },
      d(t) {
        a[10](null), t && J(n), e && te(e, t)
      }
    }
  )
}
function at(a) {
  let e,
    n = a[6] && rt(a)
  return {
    c() {
      ;(e = yt('div')), n && n.c(), this.h()
    },
    l(s) {
      e = bt(s, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 })
      var i = vt(e)
      n && n.l(i), i.forEach(J), this.h()
    },
    h() {
      Ie(e, 'id', 'svelte-announcer'),
        Ie(e, 'aria-live', 'assertive'),
        Ie(e, 'aria-atomic', 'true'),
        $(e, 'position', 'absolute'),
        $(e, 'left', '0'),
        $(e, 'top', '0'),
        $(e, 'clip', 'rect(0 0 0 0)'),
        $(e, 'clip-path', 'inset(50%)'),
        $(e, 'overflow', 'hidden'),
        $(e, 'white-space', 'nowrap'),
        $(e, 'width', '1px'),
        $(e, 'height', '1px')
    },
    m(s, i) {
      X(s, e, i), n && n.m(e, null)
    },
    p(s, i) {
      s[6] ? (n ? n.p(s, i) : ((n = rt(s)), n.c(), n.m(e, null))) : n && (n.d(1), (n = null))
    },
    d(s) {
      s && J(e), n && n.d()
    }
  }
}
function rt(a) {
  let e
  return {
    c() {
      e = Et(a[7])
    },
    l(n) {
      e = kt(n, a[7])
    },
    m(n, s) {
      X(n, e, s)
    },
    p(n, s) {
      s & 128 && St(e, n[7])
    },
    d(n) {
      n && J(e)
    }
  }
}
function Yt(a) {
  let e, n, s, i, u
  const t = [Jt, Gt],
    f = []
  function m(g, A) {
    return g[1][1] ? 0 : 1
  }
  ;(e = m(a)), (n = f[e] = t[e](a))
  let _ = a[5] && at(a)
  return {
    c() {
      n.c(), (s = _t()), _ && _.c(), (i = B())
    },
    l(g) {
      n.l(g), (s = gt(g)), _ && _.l(g), (i = B())
    },
    m(g, A) {
      f[e].m(g, A), X(g, s, A), _ && _.m(g, A), X(g, i, A), (u = !0)
    },
    p(g, [A]) {
      let P = e
      ;(e = m(g)),
        e === P
          ? f[e].p(g, A)
          : (ge(),
            K(f[P], 1, 1, () => {
              f[P] = null
            }),
            we(),
            (n = f[e]),
            n ? n.p(g, A) : ((n = f[e] = t[e](g)), n.c()),
            G(n, 1),
            n.m(s.parentNode, s)),
        g[5]
          ? _
            ? _.p(g, A)
            : ((_ = at(g)), _.c(), _.m(i.parentNode, i))
          : _ && (_.d(1), (_ = null))
    },
    i(g) {
      u || (G(n), (u = !0))
    },
    o(g) {
      K(n), (u = !1)
    },
    d(g) {
      f[e].d(g), g && J(s), _ && _.d(g), g && J(i)
    }
  }
}
function Wt(a, e, n) {
  let { stores: s } = e,
    { page: i } = e,
    { constructors: u } = e,
    { components: t = [] } = e,
    { form: f } = e,
    { data_0: m = null } = e,
    { data_1: _ = null } = e
  wt(s.page.notify)
  let g = !1,
    A = !1,
    P = null
  Te(() => {
    const k = s.page.subscribe(() => {
      g && (n(6, (A = !0)), n(7, (P = document.title || 'untitled page')))
    })
    return n(5, (g = !0)), k
  })
  function I(k) {
    Le[k ? 'unshift' : 'push'](() => {
      ;(t[1] = k), n(0, t)
    })
  }
  function V(k) {
    Le[k ? 'unshift' : 'push'](() => {
      ;(t[0] = k), n(0, t)
    })
  }
  function O(k) {
    Le[k ? 'unshift' : 'push'](() => {
      ;(t[0] = k), n(0, t)
    })
  }
  return (
    (a.$$set = (k) => {
      'stores' in k && n(8, (s = k.stores)),
        'page' in k && n(9, (i = k.page)),
        'constructors' in k && n(1, (u = k.constructors)),
        'components' in k && n(0, (t = k.components)),
        'form' in k && n(2, (f = k.form)),
        'data_0' in k && n(3, (m = k.data_0)),
        'data_1' in k && n(4, (_ = k.data_1))
    }),
    (a.$$.update = () => {
      a.$$.dirty & 768 && s.page.set(i)
    }),
    [t, u, f, m, _, g, A, P, s, i, I, V, O]
  )
}
class Xt extends dt {
  constructor(e) {
    super(),
      ht(this, e, Wt, Yt, mt, {
        stores: 8,
        page: 9,
        constructors: 1,
        components: 0,
        form: 2,
        data_0: 3,
        data_1: 4
      })
  }
}
const Zt = {},
  be = [
    () =>
      M(
        () => import('./chunks/0-ab74b15a.js'),
        [
          './chunks/0-ab74b15a.js',
          './chunks/_layout-da46b06b.js',
          './components/pages/_layout.svelte-68c92546.js',
          './chunks/index-0daa1a08.js',
          './assets/_layout-55b2e92d.css'
        ],
        import.meta.url
      ),
    () =>
      M(
        () => import('./chunks/1-2070bb1a.js'),
        [
          './chunks/1-2070bb1a.js',
          './components/error.svelte-e4d967a2.js',
          './chunks/index-0daa1a08.js',
          './chunks/singletons-d58f7749.js'
        ],
        import.meta.url
      ),
    () =>
      M(
        () => import('./chunks/2-0cfa269c.js'),
        [
          './chunks/2-0cfa269c.js',
          './components/pages/_page.svelte-9f8468ff.js',
          './chunks/index-0daa1a08.js',
          './chunks/PostsList-6c79e541.js',
          './chunks/PostDate-20ade620.js',
          './assets/PostsList-988031de.css',
          './chunks/SocialLinks-1a8fffbb.js',
          './chunks/info-523b83f0.js',
          './assets/_page-800db38c.css'
        ],
        import.meta.url
      ),
    () =>
      M(
        () => import('./chunks/3-0bc60ee1.js'),
        [
          './chunks/3-0bc60ee1.js',
          './components/pages/about/_page.svelte-82b6232b.js',
          './chunks/index-0daa1a08.js',
          './chunks/info-523b83f0.js',
          './assets/_page-c37f9fac.css'
        ],
        import.meta.url
      ),
    () =>
      M(
        () => import('./chunks/4-c1294c0f.js'),
        [
          './chunks/4-c1294c0f.js',
          './components/pages/admin/_page.svelte-59743238.js',
          './chunks/index-0daa1a08.js',
          './chunks/info-523b83f0.js'
        ],
        import.meta.url
      ),
    () =>
      M(
        () => import('./chunks/5-6c693642.js'),
        [
          './chunks/5-6c693642.js',
          './components/pages/admin.php/_page.svelte-59743238.js',
          './chunks/index-0daa1a08.js',
          './chunks/info-523b83f0.js'
        ],
        import.meta.url
      ),
    () =>
      M(
        () => import('./chunks/6-10d4c7ae.js'),
        [
          './chunks/6-10d4c7ae.js',
          './chunks/_page-d05ff059.js',
          './chunks/preload-helper-41c905a7.js',
          './components/pages/post/_slug_/_page.svelte-457618df.js',
          './chunks/index-0daa1a08.js',
          './chunks/info-523b83f0.js',
          './chunks/PostDate-20ade620.js',
          './chunks/ArrowLeftIcon-0d013bae.js',
          './chunks/SocialLinks-1a8fffbb.js',
          './chunks/singletons-d58f7749.js',
          './assets/_page-3805f4c7.css'
        ],
        import.meta.url
      ),
    () =>
      M(
        () => import('./chunks/7-c07bd0ad.js'),
        [
          './chunks/7-c07bd0ad.js',
          './components/pages/posts/__page__/_page.svelte-e65baf7b.js',
          './chunks/index-0daa1a08.js',
          './chunks/info-523b83f0.js',
          './chunks/ArrowLeftIcon-0d013bae.js',
          './chunks/PostsList-6c79e541.js',
          './chunks/PostDate-20ade620.js',
          './assets/PostsList-988031de.css',
          './assets/_page-49288d19.css'
        ],
        import.meta.url
      )
  ],
  ft = [],
  Qt = {
    '/': [-3],
    '/about': [3],
    '/admin.php': [5],
    '/admin': [4],
    '/posts/[[page]]': [-8],
    '/post/[slug]': [-7]
  },
  xt = {
    handleError: ({ error: a }) => {
      console.error(a)
    }
  }
let ce = class {
    constructor(e, n) {
      ;(this.status = e),
        typeof n == 'string'
          ? (this.body = { message: n })
          : n
          ? (this.body = n)
          : (this.body = { message: `Error: ${e}` })
    }
    toString() {
      return JSON.stringify(this.body)
    }
  },
  ot = class {
    constructor(e, n) {
      ;(this.status = e), (this.location = n)
    }
  }
async function en(a) {
  var e
  for (const n in a)
    if (typeof ((e = a[n]) == null ? void 0 : e.then) == 'function')
      return Object.fromEntries(
        await Promise.all(Object.entries(a).map(async ([s, i]) => [s, await i]))
      )
  return a
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0')
const tn = -1,
  nn = -2,
  an = -3,
  rn = -4,
  on = -5,
  sn = -6
function ln(a, e) {
  if (typeof a == 'number') return i(a, !0)
  if (!Array.isArray(a) || a.length === 0) throw new Error('Invalid input')
  const n = a,
    s = Array(n.length)
  function i(u, t = !1) {
    if (u === tn) return
    if (u === an) return NaN
    if (u === rn) return 1 / 0
    if (u === on) return -1 / 0
    if (u === sn) return -0
    if (t) throw new Error('Invalid input')
    if (u in s) return s[u]
    const f = n[u]
    if (!f || typeof f != 'object') s[u] = f
    else if (Array.isArray(f))
      if (typeof f[0] == 'string') {
        const m = f[0],
          _ = e == null ? void 0 : e[m]
        if (_) return (s[u] = _(i(f[1])))
        switch (m) {
          case 'Date':
            s[u] = new Date(f[1])
            break
          case 'Set':
            const g = new Set()
            s[u] = g
            for (let I = 1; I < f.length; I += 1) g.add(i(f[I]))
            break
          case 'Map':
            const A = new Map()
            s[u] = A
            for (let I = 1; I < f.length; I += 2) A.set(i(f[I]), i(f[I + 1]))
            break
          case 'RegExp':
            s[u] = new RegExp(f[1], f[2])
            break
          case 'Object':
            s[u] = Object(f[1])
            break
          case 'BigInt':
            s[u] = BigInt(f[1])
            break
          case 'null':
            const P = Object.create(null)
            s[u] = P
            for (let I = 1; I < f.length; I += 2) P[f[I]] = i(f[I + 1])
            break
          default:
            throw new Error(`Unknown type ${m}`)
        }
      } else {
        const m = new Array(f.length)
        s[u] = m
        for (let _ = 0; _ < f.length; _ += 1) {
          const g = f[_]
          g !== nn && (m[_] = i(g))
        }
      }
    else {
      const m = {}
      s[u] = m
      for (const _ in f) {
        const g = f[_]
        m[_] = i(g)
      }
    }
    return s[u]
  }
  return i(0)
}
function cn(a) {
  return a.filter((e) => e != null)
}
const Pe = Kt(be, ft, Qt, Zt),
  ut = be[0],
  je = be[1]
ut()
je()
const W = ct(it) ?? {},
  oe = ct(lt) ?? {}
function Ue(a) {
  W[a] = ie()
}
function fn({ target: a }) {
  var We
  const e = document.documentElement,
    n = [],
    s = []
  let i = null
  const u = { before_navigate: [], after_navigate: [] }
  let t = { branch: [], error: null, url: null },
    f = !1,
    m = !1,
    _ = !0,
    g = !1,
    A = !1,
    P = !1,
    I = !1,
    V,
    O = (We = history.state) == null ? void 0 : We[F]
  O || ((O = Date.now()), history.replaceState({ ...history.state, [F]: O }, '', location.href))
  const k = W[O]
  k && ((history.scrollRestoration = 'manual'), scrollTo(k.x, k.y))
  let z, Ce, fe
  async function qe() {
    ;(fe = fe || Promise.resolve()), await fe, (fe = null)
    const o = new URL(location.href),
      r = ae(o, !0)
    ;(i = null), await Me(r, o, [])
  }
  function Fe(o) {
    s.some((r) => (r == null ? void 0 : r.snapshot)) &&
      (oe[o] = s.map((r) => {
        var c
        return (c = r == null ? void 0 : r.snapshot) == null ? void 0 : c.capture()
      }))
  }
  function $e(o) {
    var r
    ;(r = oe[o]) == null ||
      r.forEach((c, l) => {
        var d, p
        ;(p = (d = s[l]) == null ? void 0 : d.snapshot) == null || p.restore(c)
      })
  }
  async function ve(
    o,
    {
      noScroll: r = !1,
      replaceState: c = !1,
      keepFocus: l = !1,
      state: d = {},
      invalidateAll: p = !1
    },
    w,
    h
  ) {
    return (
      typeof o == 'string' && (o = new URL(o, Qe(document))),
      he({
        url: o,
        scroll: r ? ie() : null,
        keepfocus: l,
        redirect_chain: w,
        details: { state: d, replaceState: c },
        nav_token: h,
        accepted: () => {
          p && (I = !0)
        },
        blocked: () => {},
        type: 'goto'
      })
    )
  }
  async function He(o) {
    return (
      (i = {
        id: o.id,
        promise: Ge(o).then((r) => (r.type === 'loaded' && r.state.error && (i = null), r))
      }),
      i.promise
    )
  }
  async function ue(...o) {
    const c = Pe.filter((l) => o.some((d) => l.exec(d))).map((l) =>
      Promise.all([...l.layouts, l.leaf].map((d) => (d == null ? void 0 : d[1]())))
    )
    await Promise.all(c)
  }
  async function Me(o, r, c, l, d, p = {}, w) {
    var b, y, L
    Ce = p
    let h = o && (await Ge(o))
    if (
      (h ||
        (h = await Ye(
          r,
          { id: null },
          await se(new Error(`Not found: ${r.pathname}`), {
            url: r,
            params: {},
            route: { id: null }
          }),
          404
        )),
      (r = (o == null ? void 0 : o.url) || r),
      Ce !== p)
    )
      return !1
    if (h.type === 'redirect')
      if (c.length > 10 || c.includes(r.pathname))
        h = await pe({
          status: 500,
          error: await se(new Error('Redirect loop'), { url: r, params: {}, route: { id: null } }),
          url: r,
          route: { id: null }
        })
      else return ve(new URL(h.location, r).href, {}, [...c, r.pathname], p), !1
    else
      ((b = h.props.page) == null ? void 0 : b.status) >= 400 &&
        (await H.updated.check()) &&
        (await re(r))
    if (
      ((n.length = 0),
      (I = !1),
      (g = !0),
      l && (Ue(l), Fe(l)),
      (y = h.props.page) != null &&
        y.url &&
        h.props.page.url.pathname !== r.pathname &&
        (r.pathname = (L = h.props.page) == null ? void 0 : L.url.pathname),
      d && d.details)
    ) {
      const { details: S } = d,
        D = S.replaceState ? 0 : 1
      if (
        ((S.state[F] = O += D),
        history[S.replaceState ? 'replaceState' : 'pushState'](S.state, '', r),
        !S.replaceState)
      ) {
        let R = O + 1
        for (; oe[R] || W[R]; ) delete oe[R], delete W[R], (R += 1)
      }
    }
    if (
      ((i = null),
      m ? ((t = h.state), h.props.page && (h.props.page.url = r), V.$set(h.props)) : Be(h),
      d)
    ) {
      const { scroll: S, keepfocus: D } = d,
        { activeElement: R } = document
      await me()
      const v = document.activeElement !== R && document.activeElement !== document.body
      if ((!D && !v && (await Ne()), _)) {
        const U = r.hash && document.getElementById(decodeURIComponent(r.hash.slice(1)))
        S ? scrollTo(S.x, S.y) : U ? U.scrollIntoView() : scrollTo(0, 0)
      }
    } else await me()
    ;(_ = !0), h.props.page && (z = h.props.page), w && w(), (g = !1)
  }
  function Be(o) {
    var l
    t = o.state
    const r = document.querySelector('style[data-sveltekit]')
    r && r.remove(),
      (z = o.props.page),
      (V = new Xt({ target: a, props: { ...o.props, stores: H, components: s }, hydrate: !0 })),
      $e(O)
    const c = {
      from: null,
      to: {
        params: t.params,
        route: { id: ((l = t.route) == null ? void 0 : l.id) ?? null },
        url: new URL(location.href)
      },
      willUnload: !1,
      type: 'enter'
    }
    u.after_navigate.forEach((d) => d(c)), (m = !0)
  }
  async function ne({ url: o, params: r, branch: c, status: l, error: d, route: p, form: w }) {
    let h = 'never'
    for (const R of c) (R == null ? void 0 : R.slash) !== void 0 && (h = R.slash)
    ;(o.pathname = At(o.pathname, h)), (o.search = o.search)
    const b = {
      type: 'loaded',
      state: { url: o, params: r, branch: c, error: d, route: p },
      props: { constructors: cn(c).map((R) => R.node.component) }
    }
    w !== void 0 && (b.props.form = w)
    let y = {},
      L = !z,
      S = 0
    for (let R = 0; R < Math.max(c.length, t.branch.length); R += 1) {
      const v = c[R],
        U = t.branch[R]
      ;(v == null ? void 0 : v.data) !== (U == null ? void 0 : U.data) && (L = !0),
        v && ((y = { ...y, ...v.data }), L && (b.props[`data_${S}`] = y), (S += 1))
    }
    return (
      (!t.url || o.href !== t.url.href || t.error !== d || (w !== void 0 && w !== z.form) || L) &&
        (b.props.page = {
          error: d,
          params: r,
          route: { id: (p == null ? void 0 : p.id) ?? null },
          status: l,
          url: new URL(o),
          form: w ?? null,
          data: L ? y : z.data
        }),
      b
    )
  }
  async function Ee({ loader: o, parent: r, url: c, params: l, route: d, server_data_node: p }) {
    var y, L, S
    let w = null
    const h = { dependencies: new Set(), params: new Set(), parent: !1, route: !1, url: !1 },
      b = await o()
    if ((y = b.universal) != null && y.load) {
      let D = function (...v) {
        for (const U of v) {
          const { href: C } = new URL(U, c)
          h.dependencies.add(C)
        }
      }
      const R = {
        route: {
          get id() {
            return (h.route = !0), d.id
          }
        },
        params: new Proxy(l, { get: (v, U) => (h.params.add(U), v[U]) }),
        data: (p == null ? void 0 : p.data) ?? null,
        url: Nt(c, () => {
          h.url = !0
        }),
        async fetch(v, U) {
          let C
          v instanceof Request
            ? ((C = v.url),
              (U = {
                body: v.method === 'GET' || v.method === 'HEAD' ? void 0 : await v.blob(),
                cache: v.cache,
                credentials: v.credentials,
                headers: v.headers,
                integrity: v.integrity,
                keepalive: v.keepalive,
                method: v.method,
                mode: v.mode,
                redirect: v.redirect,
                referrer: v.referrer,
                referrerPolicy: v.referrerPolicy,
                signal: v.signal,
                ...U
              }))
            : (C = v)
          const q = new URL(C, c)
          return (
            D(q.href),
            q.origin === c.origin && (C = q.href.slice(c.origin.length)),
            m ? qt(C, q.href, U) : Ct(C, U)
          )
        },
        setHeaders: () => {},
        depends: D,
        parent() {
          return (h.parent = !0), r()
        }
      }
      ;(w = (await b.universal.load.call(null, R)) ?? null), (w = w ? await en(w) : null)
    }
    return {
      node: b,
      loader: o,
      server: p,
      universal: (L = b.universal) != null && L.load ? { type: 'data', data: w, uses: h } : null,
      data: w ?? (p == null ? void 0 : p.data) ?? null,
      slash:
        ((S = b.universal) == null ? void 0 : S.trailingSlash) ?? (p == null ? void 0 : p.slash)
    }
  }
  function Ke(o, r, c, l, d) {
    if (I) return !0
    if (!l) return !1
    if ((l.parent && o) || (l.route && r) || (l.url && c)) return !0
    for (const p of l.params) if (d[p] !== t.params[p]) return !0
    for (const p of l.dependencies) if (n.some((w) => w(new URL(p)))) return !0
    return !1
  }
  function ke(o, r) {
    return (o == null ? void 0 : o.type) === 'data'
      ? {
          type: 'data',
          data: o.data,
          uses: {
            dependencies: new Set(o.uses.dependencies ?? []),
            params: new Set(o.uses.params ?? []),
            parent: !!o.uses.parent,
            route: !!o.uses.route,
            url: !!o.uses.url
          },
          slash: o.slash
        }
      : (o == null ? void 0 : o.type) === 'skip'
      ? r ?? null
      : null
  }
  async function Ge({ id: o, invalidating: r, url: c, params: l, route: d }) {
    if ((i == null ? void 0 : i.id) === o) return i.promise
    const { errors: p, layouts: w, leaf: h } = d,
      b = [...w, h]
    p.forEach((E) => (E == null ? void 0 : E().catch(() => {}))),
      b.forEach((E) => (E == null ? void 0 : E[1]().catch(() => {})))
    let y = null
    const L = t.url ? o !== t.url.pathname + t.url.search : !1,
      S = t.route ? d.id !== t.route.id : !1
    let D = !1
    const R = b.map((E, j) => {
      var Y
      const N = t.branch[j],
        T =
          !!(E != null && E[0]) &&
          ((N == null ? void 0 : N.loader) !== E[1] ||
            Ke(D, S, L, (Y = N.server) == null ? void 0 : Y.uses, l))
      return T && (D = !0), T
    })
    if (R.some(Boolean)) {
      try {
        y = await st(c, R)
      } catch (E) {
        return pe({
          status: E instanceof ce ? E.status : 500,
          error: await se(E, { url: c, params: l, route: { id: d.id } }),
          url: c,
          route: d
        })
      }
      if (y.type === 'redirect') return y
    }
    const v = y == null ? void 0 : y.nodes
    let U = !1
    const C = b.map(async (E, j) => {
      var Se
      if (!E) return
      const N = t.branch[j],
        T = v == null ? void 0 : v[j]
      if (
        (!T || T.type === 'skip') &&
        E[1] === (N == null ? void 0 : N.loader) &&
        !Ke(U, S, L, (Se = N.universal) == null ? void 0 : Se.uses, l)
      )
        return N
      if (((U = !0), (T == null ? void 0 : T.type) === 'error')) throw T
      return Ee({
        loader: E[1],
        url: c,
        params: l,
        route: d,
        parent: async () => {
          var Ze
          const Xe = {}
          for (let Re = 0; Re < j; Re += 1)
            Object.assign(Xe, (Ze = await C[Re]) == null ? void 0 : Ze.data)
          return Xe
        },
        server_data_node: ke(
          T === void 0 && E[0] ? { type: 'skip' } : T ?? null,
          E[0] ? (N == null ? void 0 : N.server) : void 0
        )
      })
    })
    for (const E of C) E.catch(() => {})
    const q = []
    for (let E = 0; E < b.length; E += 1)
      if (b[E])
        try {
          q.push(await C[E])
        } catch (j) {
          if (j instanceof ot) return { type: 'redirect', location: j.location }
          let N = 500,
            T
          if (v != null && v.includes(j)) (N = j.status ?? N), (T = j.error)
          else if (j instanceof ce) (N = j.status), (T = j.body)
          else {
            if (await H.updated.check()) return await re(c)
            T = await se(j, { params: l, url: c, route: { id: d.id } })
          }
          const Y = await Je(E, q, p)
          return Y
            ? await ne({
                url: c,
                params: l,
                branch: q.slice(0, Y.idx).concat(Y.node),
                status: N,
                error: T,
                route: d
              })
            : await Ye(c, { id: d.id }, T, N)
        }
      else q.push(void 0)
    return await ne({
      url: c,
      params: l,
      branch: q,
      status: 200,
      error: null,
      route: d,
      form: r ? void 0 : null
    })
  }
  async function Je(o, r, c) {
    for (; o--; )
      if (c[o]) {
        let l = o
        for (; !r[l]; ) l -= 1
        try {
          return {
            idx: l + 1,
            node: { node: await c[o](), loader: c[o], data: {}, server: null, universal: null }
          }
        } catch {
          continue
        }
      }
  }
  async function pe({ status: o, error: r, url: c, route: l }) {
    const d = {}
    let p = null
    if (ft[0] === 0)
      try {
        const y = await st(c, [!0])
        if (y.type !== 'data' || (y.nodes[0] && y.nodes[0].type !== 'data')) throw 0
        p = y.nodes[0] ?? null
      } catch {
        ;(c.origin !== location.origin || c.pathname !== location.pathname || f) && (await re(c))
      }
    const h = await Ee({
        loader: ut,
        url: c,
        params: d,
        route: l,
        parent: () => Promise.resolve({}),
        server_data_node: ke(p)
      }),
      b = { node: await je(), loader: je, universal: null, server: null, data: null }
    return await ne({ url: c, params: d, branch: [h, b], status: o, error: r, route: null })
  }
  function ae(o, r) {
    if (et(o, Z)) return
    const c = de(o)
    for (const l of Pe) {
      const d = l.exec(c)
      if (d) return { id: o.pathname + o.search, invalidating: r, route: l, params: Pt(d), url: o }
    }
  }
  function de(o) {
    return Ot(o.pathname.slice(Z.length) || '/')
  }
  function ze({ url: o, type: r, intent: c, delta: l }) {
    var h, b
    let d = !1
    const p = {
      from: {
        params: t.params,
        route: { id: ((h = t.route) == null ? void 0 : h.id) ?? null },
        url: t.url
      },
      to: {
        params: (c == null ? void 0 : c.params) ?? null,
        route: { id: ((b = c == null ? void 0 : c.route) == null ? void 0 : b.id) ?? null },
        url: o
      },
      willUnload: !c,
      type: r
    }
    l !== void 0 && (p.delta = l)
    const w = {
      ...p,
      cancel: () => {
        d = !0
      }
    }
    return A || u.before_navigate.forEach((y) => y(w)), d ? null : p
  }
  async function he({
    url: o,
    scroll: r,
    keepfocus: c,
    redirect_chain: l,
    details: d,
    type: p,
    delta: w,
    nav_token: h,
    accepted: b,
    blocked: y
  }) {
    const L = ae(o, !1),
      S = ze({ url: o, type: p, delta: w, intent: L })
    if (!S) {
      y()
      return
    }
    const D = O
    b(),
      (A = !0),
      m && H.navigating.set(S),
      await Me(L, o, l, D, { scroll: r, keepfocus: c, details: d }, h, () => {
        ;(A = !1), u.after_navigate.forEach((R) => R(S)), H.navigating.set(null)
      })
  }
  async function Ye(o, r, c, l) {
    return o.origin === location.origin && o.pathname === location.pathname && !f
      ? await pe({ status: l, error: c, url: o, route: r })
      : await re(o)
  }
  function re(o) {
    return (location.href = o.href), new Promise(() => {})
  }
  function pt() {
    let o
    e.addEventListener('mousemove', (p) => {
      const w = p.target
      clearTimeout(o),
        (o = setTimeout(() => {
          l(w, 2)
        }, 20))
    })
    function r(p) {
      l(p.composedPath()[0], 1)
    }
    e.addEventListener('mousedown', r), e.addEventListener('touchstart', r, { passive: !0 })
    const c = new IntersectionObserver(
      (p) => {
        for (const w of p)
          w.isIntersecting && (ue(de(new URL(w.target.href))), c.unobserve(w.target))
      },
      { threshold: 0 }
    )
    function l(p, w) {
      const h = xe(p, e)
      if (!h) return
      const { url: b, external: y } = Ae(h, Z)
      if (y) return
      const L = _e(h)
      if (!L.reload)
        if (w <= L.preload_data) {
          const S = ae(b, !1)
          S && He(S)
        } else w <= L.preload_code && ue(de(b))
    }
    function d() {
      c.disconnect()
      for (const p of e.querySelectorAll('a')) {
        const { url: w, external: h } = Ae(p, Z)
        if (h) continue
        const b = _e(p)
        b.reload ||
          (b.preload_code === tt.viewport && c.observe(p), b.preload_code === tt.eager && ue(de(w)))
      }
    }
    u.after_navigate.push(d), d()
  }
  return {
    after_navigate: (o) => {
      Te(
        () => (
          u.after_navigate.push(o),
          () => {
            const r = u.after_navigate.indexOf(o)
            u.after_navigate.splice(r, 1)
          }
        )
      )
    },
    before_navigate: (o) => {
      Te(
        () => (
          u.before_navigate.push(o),
          () => {
            const r = u.before_navigate.indexOf(o)
            u.before_navigate.splice(r, 1)
          }
        )
      )
    },
    disable_scroll_handling: () => {
      ;(g || !m) && (_ = !1)
    },
    goto: (o, r = {}) => ve(o, r, []),
    invalidate: (o) => {
      if (typeof o == 'function') n.push(o)
      else {
        const { href: r } = new URL(o, location.href)
        n.push((c) => c.href === r)
      }
      return qe()
    },
    invalidateAll: () => ((I = !0), qe()),
    preload_data: async (o) => {
      const r = new URL(o, Qe(document)),
        c = ae(r, !1)
      if (!c) throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`)
      await He(c)
    },
    preload_code: ue,
    apply_action: async (o) => {
      if (o.type === 'error') {
        const r = new URL(location.href),
          { branch: c, route: l } = t
        if (!l) return
        const d = await Je(t.branch.length, c, l.errors)
        if (d) {
          const p = await ne({
            url: r,
            params: t.params,
            branch: c.slice(0, d.idx).concat(d.node),
            status: o.status ?? 500,
            error: o.error,
            route: l
          })
          ;(t = p.state), V.$set(p.props), me().then(Ne)
        }
      } else if (o.type === 'redirect') ve(o.location, { invalidateAll: !0 }, [])
      else {
        const r = { form: o.data, page: { ...z, form: o.data, status: o.status } }
        V.$set(r), o.type === 'success' && me().then(Ne)
      }
    },
    _start_router: () => {
      var o
      ;(history.scrollRestoration = 'manual'),
        addEventListener('beforeunload', (r) => {
          var l
          let c = !1
          if (!A) {
            const d = {
              from: {
                params: t.params,
                route: { id: ((l = t.route) == null ? void 0 : l.id) ?? null },
                url: t.url
              },
              to: null,
              willUnload: !0,
              type: 'leave',
              cancel: () => (c = !0)
            }
            u.before_navigate.forEach((p) => p(d))
          }
          c ? (r.preventDefault(), (r.returnValue = '')) : (history.scrollRestoration = 'auto')
        }),
        addEventListener('visibilitychange', () => {
          document.visibilityState === 'hidden' && (Ue(O), nt(it, W), Fe(O), nt(lt, oe))
        }),
        ((o = navigator.connection) != null && o.saveData) || pt(),
        e.addEventListener('click', (r) => {
          if (
            r.button ||
            r.which !== 1 ||
            r.metaKey ||
            r.ctrlKey ||
            r.shiftKey ||
            r.altKey ||
            r.defaultPrevented
          )
            return
          const c = xe(r.composedPath()[0], e)
          if (!c) return
          const { url: l, external: d, target: p } = Ae(c, Z)
          if (!l) return
          if (p === '_parent' || p === '_top') {
            if (window.parent !== window) return
          } else if (p && p !== '_self') return
          const w = _e(c)
          if (
            !(c instanceof SVGAElement) &&
            l.protocol !== location.protocol &&
            !(l.protocol === 'https:' || l.protocol === 'http:')
          )
            return
          if (d || w.reload) {
            ze({ url: l, type: 'link' }) || r.preventDefault(), (A = !0)
            return
          }
          const [b, y] = l.href.split('#')
          if (y !== void 0 && b === location.href.split('#')[0]) {
            ;(P = !0), Ue(O), (t.url = l), H.page.set({ ...z, url: l }), H.page.notify()
            return
          }
          he({
            url: l,
            scroll: w.noscroll ? ie() : null,
            keepfocus: !1,
            redirect_chain: [],
            details: { state: {}, replaceState: l.href === location.href },
            accepted: () => r.preventDefault(),
            blocked: () => r.preventDefault(),
            type: 'link'
          })
        }),
        e.addEventListener('submit', (r) => {
          if (r.defaultPrevented) return
          const c = HTMLFormElement.prototype.cloneNode.call(r.target),
            l = r.submitter
          if (((l == null ? void 0 : l.formMethod) || c.method) !== 'get') return
          const p = new URL(
            ((l == null ? void 0 : l.hasAttribute('formaction')) &&
              (l == null ? void 0 : l.formAction)) ||
              c.action
          )
          if (et(p, Z)) return
          const w = r.target,
            { noscroll: h, reload: b } = _e(w)
          if (b) return
          r.preventDefault(), r.stopPropagation()
          const y = new FormData(w),
            L = l == null ? void 0 : l.getAttribute('name')
          L && y.append(L, (l == null ? void 0 : l.getAttribute('value')) ?? ''),
            (p.search = new URLSearchParams(y).toString()),
            he({
              url: p,
              scroll: h ? ie() : null,
              keepfocus: !1,
              redirect_chain: [],
              details: { state: {}, replaceState: !1 },
              nav_token: {},
              accepted: () => {},
              blocked: () => {},
              type: 'form'
            })
        }),
        addEventListener('popstate', async (r) => {
          var c
          if ((c = r.state) != null && c[F]) {
            if (r.state[F] === O) return
            const l = W[r.state[F]]
            if (t.url.href.split('#')[0] === location.href.split('#')[0]) {
              ;(W[O] = ie()), (O = r.state[F]), scrollTo(l.x, l.y)
              return
            }
            const d = r.state[F] - O
            let p = !1
            await he({
              url: new URL(location.href),
              scroll: l,
              keepfocus: !1,
              redirect_chain: [],
              details: null,
              accepted: () => {
                O = r.state[F]
              },
              blocked: () => {
                history.go(-d), (p = !0)
              },
              type: 'popstate',
              delta: d
            }),
              p || $e(O)
          }
        }),
        addEventListener('hashchange', () => {
          P && ((P = !1), history.replaceState({ ...history.state, [F]: ++O }, '', location.href))
        })
      for (const r of document.querySelectorAll('link')) r.rel === 'icon' && (r.href = r.href)
      addEventListener('pageshow', (r) => {
        r.persisted && H.navigating.set(null)
      })
    },
    _hydrate: async ({
      status: o = 200,
      error: r,
      node_ids: c,
      params: l,
      route: d,
      data: p,
      form: w
    }) => {
      f = !0
      const h = new URL(location.href)
      ;({ params: l = {}, route: d = { id: null } } = ae(h, !1) || {})
      let b
      try {
        const y = c.map(async (L, S) => {
          const D = p[S]
          return Ee({
            loader: be[L],
            url: h,
            params: l,
            route: d,
            parent: async () => {
              const R = {}
              for (let v = 0; v < S; v += 1) Object.assign(R, (await y[v]).data)
              return R
            },
            server_data_node: ke(D)
          })
        })
        b = await ne({
          url: h,
          params: l,
          branch: await Promise.all(y),
          status: o,
          error: r,
          form: w,
          route: Pe.find(({ id: L }) => L === d.id) ?? null
        })
      } catch (y) {
        if (y instanceof ot) {
          await re(new URL(y.location, location.href))
          return
        }
        b = await pe({
          status: y instanceof ce ? y.status : 500,
          error: await se(y, { url: h, params: l, route: d }),
          url: h,
          route: d
        })
      }
      Be(b)
    }
  }
}
async function st(a, e) {
  var u
  const n = new URL(a)
  ;(n.pathname = Dt(a.pathname)),
    n.searchParams.append('x-sveltekit-invalidated', e.map((t) => (t ? '1' : '')).join('_'))
  const s = await ye(n.href),
    i = await s.json()
  if (!s.ok) throw new ce(s.status, i)
  return (
    (u = i.nodes) == null ||
      u.forEach((t) => {
        ;(t == null ? void 0 : t.type) === 'data' &&
          ((t.data = ln(t.data)),
          (t.uses = {
            dependencies: new Set(t.uses.dependencies ?? []),
            params: new Set(t.uses.params ?? []),
            parent: !!t.uses.parent,
            route: !!t.uses.route,
            url: !!t.uses.url
          }))
      }),
    i
  )
}
function se(a, e) {
  return a instanceof ce
    ? a.body
    : xt.handleError({ error: a, event: e }) ?? {
        message: e.route.id != null ? 'Internal Error' : 'Not Found'
      }
}
function Ne() {
  const a = document.querySelector('[autofocus]')
  if (a) a.focus()
  else {
    const e = document.body,
      n = e.getAttribute('tabindex')
    return (
      (e.tabIndex = -1),
      e.focus({ preventScroll: !0 }),
      n !== null ? e.setAttribute('tabindex', n) : e.removeAttribute('tabindex'),
      new Promise((s) => {
        setTimeout(() => {
          var i
          s((i = getSelection()) == null ? void 0 : i.removeAllRanges())
        })
      })
    )
  }
}
async function _n({ assets: a, env: e, hydrate: n, target: s, version: i }) {
  It(a), Lt(i)
  const u = fn({ target: s })
  Rt({ client: u }),
    n ? await u._hydrate(n) : u.goto(location.href, { replaceState: !0 }),
    u._start_router()
}
export { _n as start }
