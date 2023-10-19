import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/posts"); // Use uma URL relativa
        if (!response.ok) {
          throw new Error(
            `Erro na solicitação: ${response.status} - ${response.statusText}`
          );
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const filterResults = (text) => {
    if (text) {
      const data = posts.filter((post) => post.title.includes(text));
      setFilteredPosts(data);
    } else {
      setFilteredPosts([]); // Limpar resultados de filtro
    }
  };

  return (
    <main>
      <input
        placeholder="Pesquise aqui"
        onChange={(e) => filterResults(e.target.value)}
      />
      {(filteredPosts.length > 0 ? filteredPosts : posts).map((post) => (
        <div key={post.id}>
          <img src={post.coverImage} alt="Imagem do post" />
          <h1>{post.title}</h1>
          <p>{post.date}</p>
        </div>
      ))}
    </main>
  );
}
