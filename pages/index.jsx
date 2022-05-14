import styles from '../styles/Home.module.css';

export default function Home() {
  const fetchData = async () => {
    const response = await fetch('api/hello', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token_xxx',
        // Authorization: 'Bearer token_xxy',
      },
    });
    if (!response.ok) return;
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className={styles.container}>
      <button onClick={fetchData}>fetch!!</button>
    </div>
  );
}
