import logo from './logo.svg';
import ImagePreview from './ImagePreview';
import './App.css';

function App() {
  return (
    <div className="App">
      <ImagePreview
        images={[
          '/images/turbos-1.jpg',
          '/images/turbos-2.jpg',
          '/images/turbos-3.jpg',
          '/images/turbos-4.jpg'
        ]}
      />
    </div>
  );
}

export default App;
