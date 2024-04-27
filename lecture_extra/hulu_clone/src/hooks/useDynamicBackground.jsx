import { useEffect, useState } from 'react'

const useDynamicBackground = (imageUrl) => {
  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundImage: '',
    backgroundSize: '',
    backgroundPosition: '',
    backgroundRepeat: '',
    height: '',
  })

  useEffect(
    () => {
      const updateBackground = () => {
        const screenWidth = window.innerWidth
        let backgroundHeight
        // ako slucajno se namali pod 600 daj flag.
        // switch
        // case screen >= 1200:
        // ['product', ...dropdwonarry]
        // break;
        // if(screenWidth >= 1200 ) {togash dodajmi backgroudn 1}
        // if(screenWidth >= 1300 ) {togash dodajmi backgroudn 2}
        // if(screenWidth >= 1400 ) {togash dodajmi backgroudn 3}
        // if(screenWidth >= 1500 ) {togash dodajmi backgroudn 3}

        if (screenWidth <= 600) {
          backgroundHeight = '100vh'
        } else {
          const backgroundHeightVh = Math.max(
            70,
            Math.min(90, (screenWidth * 0.8) / window.innerHeight) * 100
          )
          backgroundHeight = `${backgroundHeightVh}vh`
        }

        setBackgroundStyle({
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: screenWidth <= 600 ? 'object-contain' : 'cover',
          backgroundPosition: 'center, center',
          backgroundRepeat: 'no-repeat',
          height: backgroundHeight,
        })
      }
      window.addEventListener('resize', updateBackground)
      updateBackground() // inicijalizacija na pocetok.

      return () => {
        window.removeEventListener('resize', updateBackground)
      }
    },
    [imageUrl] // [] --> dependecy array
  )

  return backgroundStyle
}

export default useDynamicBackground
