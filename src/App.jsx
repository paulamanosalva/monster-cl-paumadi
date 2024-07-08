import Carousel from './components/Carousel';
import Home from './components/Home';
import original from './assets/images/original.webp'
import zeroSugar from './assets/images/zero-sugar.webp'
import paradise from './assets/images/paradise.webp'
import mango from './assets/images/mango.webp'
import watermelon from './assets/images/watermelon.webp'
import gold from './assets/images/gold.webp'
import ripper from './assets/images/ripper.webp'
import ultra from './assets/images/ultra.webp'
import tires from './assets/images/tires.jpg'

const items = [
  {
    image: original,
    title: 'ORIGINAL',
    description: 'Monster Energy Original es un golpe energético que te da todo el poder que necesitas mientras te brinda una suave experiencia.',
    background: 'bg-black'
  },
  {
    image: zeroSugar,
    title: 'ZERO SUGAR',
    description: 'Monster Energy Zero Sugar es un golpe energético sin azúcar que te da todo el poder que necesitas mientras te brinda una experiencia suave.',
    background: 'bg-cyan-500'
  },
  {
    image: ultra,
    title: 'ULTRA',
    description: 'MonsteMonster Energy Ultra es una bebida energética sin azúcar ni calorías, de un liviano sabor cítrico con todo el power de la mezcla Monster Energy.',
    background: 'bg-gray-700'
  },
  {
    image: paradise,
    title: 'ULTRA PARADISE',
    description: 'Monster Energy Zero Sugar es un golpe energético sin azúcar que te da todo el poder que necesitas mientras te brinda una experiencia suave.',
    background: 'bg-green-700'
  },
  {
    image: watermelon,
    title: 'ULTRA WATERMELON',
    description: 'Monster Energy Original es un golpe energético que te da todo el poder que necesitas mientras te brinda una suave experiencia.',
    background: 'bg-rose-400'
  },
  {
    image: gold,
    title: 'ULTRA GOLD',
    description: 'Monster Energy Zero Sugar es un golpe energético sin azúcar que te da todo el poder que necesitas mientras te brinda una experiencia suave.',
    background: 'bg-amber-500'
  },
  {
    image: mango,
    title: 'MANGO LOCO',
    description: 'Monster Energy Zero Sugar es un golpe energético sin azúcar que te da todo el poder que necesitas mientras te brinda una experiencia suave.',
    background: 'bg-sky-400'
  },
  {
    image: ripper,
    title: 'JUICE RIPPER',
    description: 'Monster Energy Zero Sugar es un golpe energético sin azúcar que te da todo el poder que necesitas mientras te brinda una experiencia suave.',
    background: 'bg-yellow-600'
  },
];

const App = () => {
  return (
    <div>
      <Home/>
      <div id="carouselSection" className='min-h-screen flex items-center bg-cover' style={{ backgroundImage: `url(${tires})` }}>
        <Carousel items={items} />
      </div>
    </div>
  );
};

export default App;