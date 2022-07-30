import { TextInput, CheckBox } from '@/components';

function App(): JSX.Element {
  return (
    <>
      <div style={{ width: '90%', margin: '100px auto' }}>
        <TextInput placeholder="digite aqui" />
      </div>
      <div style={{ width: '90%', margin: '100px auto' }}>
        <CheckBox />
      </div>
    </>
  );
}

export default App;
