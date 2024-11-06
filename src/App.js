import './App.css'; // استيراد ملفات CSS للتنسيق
import Likeimg from './component/Likeimg/Likeimg';
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد ملفات CSS الخاصة بـ Bootstrap

function App() {
  return (
    <div className="App">
      <Likeimg />
    </div>
  );
}

export default App; // تصدير المكون App للاستخدام في ملفات أخرى
