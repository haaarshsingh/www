import { FC } from 'react'
import { motion } from 'framer-motion'
import { Fade, WordsContainer } from '@anims/index'

const Words: FC = () => {
  const cursors = [
    'wait',
    'move',
    'help',
    'not-allowed',
    'crosshair',
    'vertical-text',
    'grab',
    'all-scroll',
    'nsew-resize',
  ]

  const words = [
    'Capricious',
    'Onomatopoeia',
    'Luminescence',
    'Cognizant',
    'Elixir',
    'Oblivion',
    'Vertex',
    'Jubilee',
    'Kerfuffle',
    'Jamboree',
    'Parabola',
    'Quibble',
    'Typhoon',
    'Yahoo',
    'Xylophone',
    'Wonky',
    'Vivacious',
    'Sobriquet',
    'Phantonym',
    'Pusillanimous',
    'Mnemonic',
    'Kibosh',
    'Epiphany',
    'Folderol',
    'Gazebo',
    'Igloo',
    'Juggernaut',
    'Lagoon',
    'Pogo',
    'Calliope',
    'Aloof',
    'Befuddled',
    'Colossus',
    'Ebullient',
    'Lugubrious',
    'Mayhem',
    'Ricochet',
    'Skirmish',
    'Milquetoast',
    'Tintinnabulation',
    'Umlaut',
    'whatchamacallit',
    'Misanthrope',
    'Vamoose',
    'Zatfig',
    'Wuthering',
    'Superfluous',
    'Ruckus',
    'Pulchritudinous',
    'Nomenclature',
    'Mellifluous',
    'Jerk',
    'Huzzah',
    'Bubonic',
    'Azure',
    'Grandiloquent',
    'Highfalutin',
    'Jacuzzi',
    'Infinitesimal',
    'Feast',
    'Ignoramus',
    'Haberdashery',
    'Fortuitous',
    'Gambit',
    'Hazard',
    'Enigma',
    'Halcyon',
    'Flotsam',
    'Eavesdrop',
    'Idiosyncrasies',
    'Fizz',
    'Hickory',
    'Incognito',
    'Jaw',
    'Loofah',
    'Monsoon',
    'Papyrus',
    'Impromptu',
    'Jersey',
    'Loco',
    'Pollen',
    'Sketch',
    'Booze',
    'Twinkle',
    'Phosphorous',
    'Toad',
    'Zephyr',
    'Heirloom',
    'Glitch',
    'Flesh',
    'Lexicographer',
    'Magnificent',
    'Pastry',
    'Menagerie',
    'Peccadillo',
    'Miscellaneous',
    'Squash',
    'Widget',
    'Manifesto',
    'Jargogle',
  ]

  return (
    <motion.div
      className='flex flex-col items-center'
      variants={WordsContainer}
      initial='hidden'
      animate='visible'
    >
      {words.map((word, index) => (
        <motion.h1
          variants={Fade}
          className='!text-3xl w-full h-fit my-5 text-center hover:!text-transparent !bg-clip-text !from-gradient-100 !to-gradient-200 hover:!bg-gradient-to-r'
          style={{
            cursor: cursors[Math.floor(Math.random() * cursors.length)],
          }}
          key={index}
        >
          {word}
        </motion.h1>
      ))}
    </motion.div>
  )
}

export default Words
