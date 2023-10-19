import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Adicionei esta linha para obter o router

export default function PostDetail() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Obtém o ID da postagem a partir da URL usando useRouter
    const { query } = useRouter();
    const postId = query.id;

    // Faça uma solicitação para a API falsa para obter os detalhes da postagem com base no ID
    fetch(`http://localhost:3000/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) =>
        console.error("Erro ao buscar detalhes da postagem:", error)
      );
  }, []);

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>Data de Publicação: {post.date}</p>
          <img src={post.coverImage} alt="Imagem do post" />
          <p>{post.content}</p>
          <Link href="/">Voltar para a página inicial</Link>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
