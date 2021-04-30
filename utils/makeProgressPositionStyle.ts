export default function buildProgressPosition(fraction: number) {
  if (fraction <= 0.5) {
    return {
      display: 'block',
      top: `${fraction * 100}%`,
    }
  }

  return {
    display: 'block',
    bottom: `${(1 - fraction) * 100}%`
  }
}
