import './styles/main.css';
import {MagnifyingGlassPlus} from "phosphor-react";
import logoImg from './src/assets/logo-nlw-esports.png';


function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-white text-6xl font-black'> Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6'>
        <a href="" className='relative rounded-lg'>
          <img src="/game-1.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
      </div>
      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encotrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
            </button>
        </div>
      </div>

    </div>
  )
}

// interface ButtonProps{
//   title: string;
// }
// function Button(props: ButtonProps){
//   return(
//   <button>
//     {props.title}
//   </button>
// )}

// function App() {
//   return (
//     <div>
//       <Button title="Send 1" />
//       <Button title="Send 2" />
//       <Button title="Send 3" />
//     </div>

//   )
// }

export default App
