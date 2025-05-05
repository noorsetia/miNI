const root = document.getElementById("root");

    // 🎯 Title
    const heading = document.createElement("h1");
    heading.innerText = "📝 Mini Blog";
    heading.className = "text-center mb-4 text-primary";

    // 📄 Blog Form Section
    const formContainer = document.createElement("div");
    formContainer.className = "blog-form card p-4 shadow";

    const titleInput = document.createElement("input");
    titleInput.className = "form-control mb-3";
    titleInput.placeholder = "Enter blog title";
    titleInput.style.fontSize = "2rem";

    const contentInput = document.createElement("textarea");
    contentInput.className = "form-control mb-3";
    contentInput.placeholder = "Write your blog here...";
    contentInput.rows = 4;
    contentInput.style.fontSize = "2rem";

    const postBtn = document.createElement("button");
    postBtn.className = "btn btn-primary";
    postBtn.innerText = "Post Blog";
    postBtn.style.fontSize = "1.5rem";

    const blogsContainer = document.createElement("div");
    blogsContainer.className = "blogs-container";

    postBtn.addEventListener("click", () => {
      const title = titleInput.value.trim();
      const content = contentInput.value.trim();

      if (!title || !content) {
        alert("Both title and content are required!");
        return;
      }

      const card = document.createElement("div");
      card.className = "card shadow";

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const blogTitle = document.createElement("h5");
      blogTitle.className = "card-title";
      blogTitle.innerText = title;

      const blogText = document.createElement("p");
      blogText.className = "card-text";
      blogText.innerText = content;

      const btnGroup = document.createElement("div");
      btnGroup.className = "mt-3 d-flex gap-2";

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-sm btn-outline-danger";
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", () => {
        blogsContainer.removeChild(card);
      });

      const editBtn = document.createElement("button");
      editBtn.className = "btn btn-sm btn-outline-secondary";
      editBtn.innerText = "Edit";
      editBtn.addEventListener("click", () => {
        const newTitle = prompt("Edit Title:", blogTitle.innerText);
        const newContent = prompt("Edit Content:", blogText.innerText);
        if (newTitle && newContent) {
          blogTitle.innerText = newTitle.trim();
          blogText.innerText = newContent.trim();
        }
      });

      btnGroup.appendChild(editBtn);
      btnGroup.appendChild(deleteBtn);

      cardBody.appendChild(blogTitle);
      cardBody.appendChild(blogText);
      cardBody.appendChild(btnGroup);
      card.appendChild(cardBody);
      blogsContainer.appendChild(card);

      titleInput.value = "";
      contentInput.value = "";
    });

    formContainer.appendChild(titleInput);
    formContainer.appendChild(contentInput);
    formContainer.appendChild(postBtn);
    root.appendChild(heading);
    root.appendChild(formContainer);
    root.appendChild(blogsContainer);