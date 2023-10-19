const handleCreatePost = () => {
  const data = {
    title,
    content,
    // Inclua aqui a imagem de capa, se necessário
  };

  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((newPost) => {
      // Redirecione o usuário para a página de detalhes da nova postagem
      router.push(`/posts/${newPost.id}`);
    })
    .catch((error) => {
      console.error("Erro ao criar a postagem:", error);
    });
};
