import { TextInput, CheckBox, DeleteButton, CreateButton } from '@/components';

function App(): JSX.Element {
  return (
    <>
      <div style={{ width: '90%', margin: '100px auto' }}>
        <TextInput placeholder="digite aqui" />
      </div>
      <div style={{ width: '90%', margin: '100px auto' }}>
        <CheckBox />
      </div>
      <div style={{ width: '90%', margin: '100px auto' }}>
        <DeleteButton disabled />
      </div>
      <div style={{ width: '90%', margin: '100px auto' }}>
        <CreateButton />
      </div>
    </>
  );
}

export default App;
