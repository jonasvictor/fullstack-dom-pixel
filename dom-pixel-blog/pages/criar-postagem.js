import { useState } from "react";
import { useRouter } from "next/router"; // Certifique-se de importar o useRouter

export default function CriarPostagem() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    coverImage: "",
  });

  const router = useRouter(); // Inicialize o router

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Faça uma solicitação para a API falsa para armazenar a nova postagem
    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      if (response.ok) {
        const newData = await response.json();
        // Certifique-se de que a API retorna o ID da nova postagem na resposta
        if (newData.id) {
          alert("Postagem criada com sucesso!");
          // Redirecione o usuário para a página de detalhes da nova postagem
          router.push(`/detalhes/${newData.id}`); // Use o router para redirecionar
        } else {
          alert(
            "Erro ao criar a postagem: ID da postagem ausente na resposta da API"
          );
        }
      } else {
        throw new Error("Erro ao criar a postagem");
      }
    } catch (error) {
      console.error("Erro ao criar a postagem:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Conteúdo:</label>
        <textarea
          id="content"
          name="content"
          value={post.content}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="coverImage">URL da Imagem de Capa:</label>
        <input
          type="url"
          id="coverImage"
          name="coverImage"
          value={post.coverImage}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Criar Postagem</button>
    </form>
  );
}
