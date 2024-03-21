import logo from './logo.svg';
// import './App.css';
import './tailwind.css';

function App() {
  return (
    <div className="App">
      <main class="p-8 m-4">
          <div class="w-32 h-32 pl-8 pr-4 py-8 m-4 rounded-xl border"></div>
          <div class="w-12 text-red-500 text-center bg-green-200">text</div>
          <div class="h-4"></div>
          <button class="text-white bg-sky-500 hover:bg-sky-700 rounded-full px-4 ">Save changes</button>
          <div class="h-4"></div>
          <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-red-600 px-4 rounded-full px-4">Button</button>
          <div class=" flex justify-center">
            <button class="bg-orange-200 sm:bg-lime-400 md:bg-green-300 lg:bg-sky-400 px-8">Button</button>
            <button class="bg-orange-200 sm:bg-lime-400 md:bg-green-300 lg:bg-sky-400 px-8">Button</button>
          </div>
      </main>
    </div>
    
  );
}

export default App;
