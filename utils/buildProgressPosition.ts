export default function buildProgressPosition(fraction: number) {
  if (fraction <= 0.5) {
    return {
      top: `${fraction * 100}%`
    }
  }

  return {
    bottom: `${(1 - fraction) * 100}%`
  }
}
