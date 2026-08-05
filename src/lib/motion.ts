export const scrollMotion = {
  value: 0,
  total: 0,
}

export function initScrollSync() {
  const update = () => {
    const doc = document.documentElement
    const max = doc.scrollHeight - window.innerHeight
    scrollMotion.total = max
    scrollMotion.value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
  }
  update()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
}
