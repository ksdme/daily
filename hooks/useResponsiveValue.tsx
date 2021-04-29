import isClient from '../utils/isClient'

type Dimension = (
  'sm' |
  'md' |
  'lg' |
  'xl'
)

type Config<T> = {
  [key in Dimension]: T
}

export default function useResponsiveValue<T>(config: Config<T>, defaultValue: Dimension = 'sm'): T {
  const resolve = (dimension: Dimension) => {
    switch (dimension) {
      case 'xl': {
        if (config.xl) {
          return config.xl
        }
      }

      case 'lg': {
        if (config.lg) {
          return config.lg
        }
      }

      case 'md': {
        if (config.md) {
          return config.md
        }
      }

      case 'sm': {
        if (config.sm) {
          return config.sm
        }
      }

      default: {
        return (
          config.sm ||
          config.md ||
          config.lg ||
          config.xl ||
          null
        )
      }
    }
  }

  if (!isClient()) {
    return resolve(defaultValue)
  }

  const {
    innerWidth,
  } = window

  if (innerWidth >= 1280) {
    return resolve('xl')
  }

  if (innerWidth >= 1024) {
    return resolve('lg')
  }

  if (innerWidth >= 768) {
    return resolve('md')
  }

  if (innerWidth >= 640) {
    return resolve('sm')
  }

  return resolve(defaultValue)
}
