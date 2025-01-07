import ColorBlock from "./components/ColorBlock";
import ActionButton from "./components/ActionButton";
import ImageWithCaption from "./components/ImageWithCaption";

function App() {

  return (
    /*<div className="App">
      <ColorBlock colors = {colors}/>
    </div>*/

    <div>
      <ColorBlock color="red" /> {/* ריבוע אדום */}
      <ColorBlock color="blue" /> {/* ריבוע כחול */}
      <ColorBlock /> {/* ריבוע אפור */}
      <div>
        <ActionButton label="Click me" onAction={() => alert("Button clicked!")} />
      </div>
      <div>
        <ImageWithCaption src="https://scx2.b-cdn.net/gfx/news/2017/1-ice.jpg" caption="Ice" />
      </div>
    </div>

  );
}

export default App;
